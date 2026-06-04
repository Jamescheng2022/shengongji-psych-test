import { dimensions, DIMENSION_IDS, emptyScores, getDimensionName } from "./dimensions";
import { resultTypes } from "./results";
import type { Answer, ComputedResult, ResultType, Scores } from "./types";

function cloneScores(): Scores {
  return { ...emptyScores };
}

function addWeights(scores: Scores, answer: Answer) {
  for (const id of DIMENSION_IDS) scores[id] += answer.weights[id];
}

function rankScores(scores: Scores) {
  return DIMENSION_IDS.map((id) => ({ id, score: scores[id], name: getDimensionName(id) })).sort((a, b) => b.score - a.score);
}

function normalized(raw: Scores, answers: Answer[]): Scores {
  const min = cloneScores();
  const max = cloneScores();
  for (const id of DIMENSION_IDS) {
    min[id] = 0;
    max[id] = 0;
  }
  for (const answer of answers) {
    for (const id of DIMENSION_IDS) {
      const value = answer.weights[id];
      if (value > 0) max[id] += value;
      if (value < 0) min[id] += value;
    }
  }
  const out = cloneScores();
  for (const id of DIMENSION_IDS) {
    const span = max[id] - min[id];
    out[id] = span ? Math.round(((raw[id] - min[id]) / span) * 100) : 50;
  }
  return out;
}

function mean(scores: Scores) {
  return DIMENSION_IDS.reduce((sum, id) => sum + scores[id], 0) / DIMENSION_IDS.length;
}

function getResult(id: string) {
  return resultTypes.find((item) => item.id === id) ?? null;
}

function anchoredResult(scores: Scores) {
  const ranked = rankScores(scores);
  const top1 = ranked[0]?.id;
  const top2 = ranked[1]?.id;
  const top3 = ranked[2]?.id;
  const low = ranked[ranked.length - 1]?.id;
  const hasTop = (id: string) => top1 === id || top2 === id || top3 === id;

  if (scores.power >= 70 && scores.agency >= 62) {
    if (scores.caution >= 66 && scores.affiliation <= 52) return getResult("cold-palace-reviewer");
    if (scores.boundary >= 72 && scores.affiliation <= 55) return getResult("phoenix-seal");
    if (scores.affiliation >= 62) return getResult("gold-hairpin-breaker");
    return getResult("brocade-controller");
  }

  if (scores.affiliation >= 74 && scores.emotionality >= 62 && scores.power <= 52) {
    return getResult("long-night-empath");
  }

  if (scores.caution >= 74 && scores.boundary >= 68 && scores.power <= 48) {
    if (scores.affiliation <= 46 && scores.emotionality <= 44) return getResult("winter-lamp");
    return getResult("hidden-fragrance");
  }

  if (scores.boundary >= 76 && scores.agency >= 58 && scores.affiliation <= 58) {
    return getResult("phoenix-seal");
  }

  if (scores.agency >= 76 && scores.boundary >= 62 && scores.emotionality <= 54) {
    return getResult("brocade-controller");
  }

  if (scores.affiliation >= 72 && scores.boundary >= 66 && hasTop("caution") && scores.power >= 36 && scores.power <= 66) {
    return getResult("jade-step-tester");
  }

  if (top1 === "caution" && top2 === "boundary" && low === "power") {
    return getResult("winter-lamp");
  }

  return null;
}

function shapeGap(user: Scores, target: ResultType) {
  const userMean = mean(user);
  const targetMean = mean(target.profile);
  const userRank = rankScores(user);
  const targetRank = rankScores(target.profile);
  const userTop = new Set(userRank.slice(0, 2).map((item) => item.id));
  const targetTop = new Set(targetRank.slice(0, 2).map((item) => item.id));
  const userLow = userRank[userRank.length - 1]?.id;
  const targetLow = targetRank[targetRank.length - 1]?.id;

  let value = 0;
  for (const id of DIMENSION_IDS) {
    const weight = userTop.has(id) || targetTop.has(id) ? 1.65 : 1;
    const a = user[id] - userMean;
    const b = target.profile[id] - targetMean;
    value += (a - b) * (a - b) * weight;
  }

  for (const id of userTop) {
    if (!targetTop.has(id)) value += 1400;
  }
  if (userLow && targetLow && userLow !== targetLow) value += 650;

  if (target.id === "jade-step-tester") {
    const strongLinglongShape = userTop.has("affiliation") && userTop.has("boundary") && user.caution >= 55 && user.power >= 36 && user.power <= 66;
    if (!strongLinglongShape) value += 1800;
  }

  return value;
}

function pickKeyChoices(answers: Answer[]) {
  return answers
    .map((answer) => ({ answer, intensity: DIMENSION_IDS.reduce((sum, id) => sum + Math.abs(answer.weights[id]), 0) }))
    .sort((a, b) => b.intensity - a.intensity)
    .slice(0, 3)
    .map((item) => item.answer);
}

export function computeResult(answers: Answer[]): ComputedResult {
  const raw = cloneScores();
  for (const answer of answers) addWeights(raw, answer);
  const scores = normalized(raw, answers);
  const rankedDimensions = rankScores(scores);
  const anchored = anchoredResult(scores);
  const result = anchored ?? resultTypes.map((type) => ({ type, value: shapeGap(scores, type) })).sort((a, b) => a.value - b.value)[0]?.type ?? resultTypes[0];
  return { scores, rankedDimensions, result, answers, keyChoices: pickKeyChoices(answers) };
}

export { dimensions, resultTypes };
