import { dimensions, DIMENSION_IDS, getDimensionName } from "./dimensions";
import { resultTypes } from "./results";
import { normalizeRawScores, scoreAnswers } from "./scoring-key";
import type { Answer, ComputedResult, ResultType, Scores } from "./types";

function rankScores(scores: Scores) {
  return DIMENSION_IDS.map((id) => ({ id, score: scores[id], name: getDimensionName(id) })).sort((a, b) => b.score - a.score);
}

function profileGap(user: Scores, target: ResultType) {
  let value = 0;
  for (const id of DIMENSION_IDS) {
    const delta = user[id] - target.profile[id];
    value += delta * delta;
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
  const rawScores = scoreAnswers(answers);
  const scores = normalizeRawScores(rawScores);
  const rankedDimensions = rankScores(scores);
  const result = resultTypes
    .map((type) => ({ type, gap: profileGap(scores, type) }))
    .sort((a, b) => a.gap - b.gap)[0]?.type ?? resultTypes[0];

  return {
    scores,
    rankedDimensions,
    result,
    answers,
    keyChoices: pickKeyChoices(answers),
  };
}

export { dimensions, resultTypes };
