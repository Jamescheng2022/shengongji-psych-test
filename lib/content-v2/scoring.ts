import { emptyV2Scores, v2DimensionIds, v2Dimensions, type V2DimensionId, type V2Scores } from "./dimensions";
import { v2FateTypes } from "./fates";
import type { V2Answer, V2ComputedResult, V2FateType } from "./types";

function cloneScores(): V2Scores {
  return { ...emptyV2Scores };
}

function addScores(base: V2Scores, delta: V2Scores) {
  for (const id of v2DimensionIds) {
    base[id] += delta[id];
  }
}

export function rankV2Scores(scores: V2Scores) {
  return v2DimensionIds
    .map((id) => ({
      id,
      score: scores[id],
      label: v2Dimensions.find((dimension) => dimension.id === id)?.name ?? id,
    }))
    .sort((a, b) => b.score - a.score);
}

function getTagCounts(answers: V2Answer[]) {
  const map = new Map<string, number>();
  for (const answer of answers) {
    for (const tag of answer.tags) {
      map.set(tag, (map.get(tag) ?? 0) + 1);
    }
  }
  return map;
}

function fateScore(fate: V2FateType, top: V2DimensionId, second: V2DimensionId, scores: V2Scores, tagCounts: Map<string, number>) {
  let points = 0;
  if (fate.primary === top) points += 10;
  if (fate.secondary === second) points += 6;
  points += Math.max(0, scores[fate.primary]) * 0.25;
  points += Math.max(0, scores[fate.secondary]) * 0.15;
  if (tagCounts.has(fate.name)) points += (tagCounts.get(fate.name) ?? 0) * 1.5;
  return points;
}

export function computeV2Result(answers: V2Answer[]): V2ComputedResult {
  const scores = cloneScores();
  for (const answer of answers) addScores(scores, answer.scoreDelta);
  const topDimensions = rankV2Scores(scores);
  const tagCounts = getTagCounts(answers);
  const top = topDimensions[0]?.id ?? "strategy";
  const second = topDimensions[1]?.id ?? "emotion";

  const fate = v2FateTypes
    .map((item) => ({ item, score: fateScore(item, top, second, scores, tagCounts) }))
    .sort((a, b) => b.score - a.score)[0]?.item ?? v2FateTypes[0];

  return { scores, topDimensions, fate, answers };
}
