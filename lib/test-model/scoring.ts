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

function getChoiceCounts(answers: Answer[]) {
  const counts = new Map<string, number>();
  for (const answer of answers) {
    counts.set(answer.choiceId, (counts.get(answer.choiceId) ?? 0) + 1);
  }
  return counts;
}

function rankScores(scores: Scores) {
  return DIMENSION_IDS.map((id) => ({ id, score: scores[id], name: getDimensionName(id) })).sort(
    (a, b) => b.score - a.score
  );
}

function hasTag(tagCounts: Map<string, number>, tags: string[]) {
  return tags.some((tag) => (tagCounts.get(tag) ?? 0) > 0);
}

function pickByPattern(
  ranked: { id: DimensionId; score: number }[],
  scores: Scores,
  tagCounts: Map<string, number>,
  choiceCounts: Map<string, number>
) {
  const primary = ranked[0]?.id;
  const secondary = ranked[1]?.id;
  const lowest = ranked[ranked.length - 1]?.id;
  const agency = scores.agency;
  const defense = scores.defense;
  const relation = scores.relation;
  const risk = scores.risk;
  const boundary = scores.boundary;
  const totalChoices = Array.from(choiceCounts.values()).reduce((sum, count) => sum + count, 0) || 1;
  const dRatio = (choiceCounts.get("d") ?? 0) / totalChoices;

  const byId = (id: string) => resultTypes.find((item) => item.id === id);

  if (risk === ranked[0]?.score && risk >= agency + 4 && hasTag(tagCounts, ["破局", "冒险", "机会", "正面"])) {
    return byId("gold-hairpin-breaker");
  }

  if (boundary === ranked[0]?.score && risk >= relation && hasTag(tagCounts, ["底线", "正面", "自我", "强边界"])) {
    return byId("crimson-stair-courage");
  }

  if (boundary === ranked[0]?.score && defense >= relation && hasTag(tagCounts, ["边界", "自守", "拒绝", "软拒绝"])) {
    return byId("palace-wall-keeper");
  }

  if (relation === ranked[0]?.score && defense >= boundary && hasTag(tagCounts, ["观察", "试探", "关系", "隐藏"])) {
    return byId("curtain-reader");
  }

  if (relation === ranked[0]?.score && boundary <= lowest && hasTag(tagCounts, ["共情", "情义", "牺牲", "暗助"])) {
    return byId("long-night-empath");
  }

  if (defense === ranked[0]?.score && boundary >= relation && hasTag(tagCounts, ["复盘", "防御", "藏锋", "忍耐", "调查"])) {
    return byId("cold-palace-reviewer");
  }

  if (defense === ranked[0]?.score && risk <= lowest && hasTag(tagCounts, ["避锋", "谨慎", "稳定", "自保"])) {
    return byId("hidden-fragrance");
  }

  if (agency === ranked[0]?.score && risk >= relation && dRatio >= 0.28) {
    return byId("phoenix-seal");
  }

  if (agency === ranked[0]?.score && relation >= risk) {
    return byId("brocade-controller");
  }

  if (primary === "boundary" && secondary === "relation") return byId("mirror-lake-hidden-edge");
  if (primary === "relation" && secondary === "risk") return byId("jade-step-tester");
  if (primary === "defense" && secondary === "boundary") return byId("winter-lamp");

  return null;
}

function scoreResultType(
  resultType: ResultType,
  ranked: { id: DimensionId; score: number }[],
  scores: Scores,
  tagCounts: Map<string, number>
) {
  const primary = ranked[0]?.id;
  const secondary = ranked[1]?.id;
  const lowest = ranked[ranked.length - 1]?.id;
  let points = 0;

  if (resultType.rule.primary === primary) points += 12;
  if (resultType.rule.secondary && resultType.rule.secondary === secondary) points += 5;
  if (resultType.rule.low && resultType.rule.low === lowest) points += 4;

  for (const tag of resultType.rule.tags ?? []) {
    points += (tagCounts.get(tag) ?? 0) * 2;
  }

  points += Math.max(0, scores[resultType.rule.primary]) * 0.05;
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
  const choiceCounts = getChoiceCounts(answers);

  const patterned = pickByPattern(rankedDimensions, scores, tagCounts, choiceCounts);
  const result = patterned ?? resultTypes
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
