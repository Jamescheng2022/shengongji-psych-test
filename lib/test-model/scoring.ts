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

function gap(a: Scores, b: Scores) {
  let total = 0;
  for (const id of DIMENSION_IDS) {
    const d = a[id] - b[id];
    total += d * d;
  }
  return total;
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
  const result = resultTypes.map((type) => ({ type, value: gap(scores, type.profile) })).sort((a, b) => a.value - b.value)[0]?.type ?? resultTypes[0];
  return { scores, rankedDimensions, result, answers, keyChoices: pickKeyChoices(answers) };
}

export { dimensions, resultTypes };
