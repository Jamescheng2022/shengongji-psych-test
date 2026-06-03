import { dimensions, DIMENSION_IDS, emptyScores, getDimensionName } from "./dimensions";
import { resultTypes } from "./results";
import type { Answer, ComputedResult, DimensionId, ResultType, Scores } from "./types";

function cloneScores(): Scores {
  return { ...emptyScores };
}

function addWeights(scores: Scores, answer: Answer) {
  for (const id of DIMENSION_IDS) {
    scores[id] += answer.weights[id];
  }
}

function getTagCounts(answers: Answer[]) {
  const counts = new Map<string, number>();
  for (const answer of answers) {
    for (const tag of answer.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return counts;
}

function rankScores(scores: Scores) {
  return DIMENSION_IDS.map((id) => ({ id, score: scores[id], name: getDimensionName(id) })).sort(
    (a, b) => b.score - a.score
  );
}

function scoreResultType(resultType: ResultType, ranked: { id: DimensionId; score: number }[], scores: Scores, tagCounts: Map<string, number>) {
  const primary = ranked[0]?.id;
  const secondary = ranked[1]?.id;
  const lowest = ranked[ranked.length - 1]?.id;
  let points = 0;

  if (resultType.rule.primary === primary) points += 9;
  if (resultType.rule.secondary && resultType.rule.secondary === secondary) points += 5;
  if (resultType.rule.low && resultType.rule.low === lowest) points += 4;

  if (resultType.rule.primary) points += Math.max(0, scores[resultType.rule.primary]) * 0.2;
  if (resultType.rule.secondary) points += Math.max(0, scores[resultType.rule.secondary]) * 0.1;

  for (const tag of resultType.rule.tags ?? []) {
    points += (tagCounts.get(tag) ?? 0) * 1.3;
  }

  return points;
}

function pickKeyChoices(answers: Answer[]) {
  const weighted = answers
    .map((answer) => ({
      answer,
      intensity: DIMENSION_IDS.reduce((sum, id) => sum + Math.abs(answer.weights[id]), 0) + answer.tags.length * 0.3,
    }))
    .sort((a, b) => b.intensity - a.intensity)
    .slice(0, 3)
    .map((item) => item.answer);

  return weighted;
}

export function computeResult(answers: Answer[]): ComputedResult {
  const scores = cloneScores();
  for (const answer of answers) addWeights(scores, answer);

  const rankedDimensions = rankScores(scores);
  const tagCounts = getTagCounts(answers);

  const result = resultTypes
    .map((type) => ({ type, score: scoreResultType(type, rankedDimensions, scores, tagCounts) }))
    .sort((a, b) => b.score - a.score)[0]?.type ?? resultTypes[0];

  return {
    scores,
    rankedDimensions,
    result,
    answers,
    keyChoices: pickKeyChoices(answers),
  };
}

export { dimensions, resultTypes };
