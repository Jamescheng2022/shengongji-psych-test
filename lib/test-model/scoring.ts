import { dimensions, DIMENSION_IDS, getDimensionName } from "./dimensions";
import { resultTypes } from "./results";
import { normalizeRawScores, scoreAnswers } from "./scoring-key";
import { rankArchetypes, scoreArchetypeAnswers } from "./archetype-scoring";
import type { Answer, ComputedResult, Scores } from "./types";

function rankScores(scores: Scores) {
  return DIMENSION_IDS.map((id) => ({ id, score: scores[id], name: getDimensionName(id) })).sort((a, b) => b.score - a.score);
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
  const archetypeScores = scoreArchetypeAnswers(answers);
  const rankedArchetypes = rankArchetypes(archetypeScores);
  const result = rankedArchetypes[0]?.result ?? resultTypes[0];

  return {
    scores,
    rankedDimensions,
    result,
    answers,
    keyChoices: pickKeyChoices(answers),
  };
}

export { dimensions, resultTypes };
