import { dimensions, DIMENSION_IDS, emptyScores, getDimensionName } from "./dimensions";
import { resultTypes } from "./results";
import type { Answer, ComputedResult, Scores } from "./types";

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

function shapeGap(user: Scores, target: Scores) {
  const userMean = mean(user);
  const targetMean = mean(target);
  const userRank = rankScores(user);
  const targetRank = rankScores(target.profile);
  const userTop = new Set(userRank.slice(0, 2).map((item) => item.id));
  const targetTop = new Set(targetRank.slice(0, 2).map((item) => item.id));
  const userLow = userRank[userRank.length - 1]?.id;
  const targetLow = targetRank[targetRank.length - 1]?.id;

  let value = 0;
  for (const id of DIMENSION_IDS) {
    const weight = userTop.has(id) || targetTop.has(id) ? 1.55 : 1;
    const a = user[id] - userMean;
    const b = target.profile[id] - targetMean;
    value += (a - b) * (a - b) * weight;
  }

  for (const id of userTop) {
    if (!targetTop.has(id)) value += 900;
  }
  if (userLow && targetLow && userLow !== targetLow) value += 420;

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
  const result = resultTypes.map((type) => ({ type, value: shapeGap(scores, type) })).sort((a, b) => a.value - b.value)[0]?.type ?? resultTypes[0];
  return { scores, rankedDimensions, result, answers, keyChoices: pickKeyChoices(answers) };
}

export { dimensions, resultTypes };
