import { DIMENSION_IDS, emptyScores } from "./dimensions";
import { questions } from "./questions";
import { resultTypes } from "./results";
import type { Answer, Choice, ResultType } from "./types";

export type ArchetypeScores = Record<string, number>;
export type RankedArchetype = { id: string; name: string; score: number; result: ResultType };

const TAG_AFFINITY: Record<string, Record<string, number>> = {
  稳定: { "winter-lamp": 2, "hidden-fragrance": 1.5, "brocade-controller": 1 },
  稳态: { "winter-lamp": 2, "hidden-fragrance": 1.5 },
  自持: { "winter-lamp": 2, "brocade-controller": 1.5, "hidden-fragrance": 1 },
  边界: { "phoenix-seal": 2.5, "palace-wall-keeper": 2.5, "hidden-fragrance": 1.5, "brocade-controller": 1 },
  强边界: { "phoenix-seal": 3, "palace-wall-keeper": 2.5, "crimson-stair-courage": 1.5 },
  拒绝: { "palace-wall-keeper": 3, "phoenix-seal": 2, "winter-lamp": 1 },
  分寸: { "jade-step-tester": 2.5, "palace-wall-keeper": 2, "hidden-fragrance": 1.5 },
  自我: { "phoenix-seal": 2.5, "crimson-stair-courage": 2, "palace-wall-keeper": 1.5 },
  责任: { "palace-wall-keeper": 2, "brocade-controller": 1.5, "jade-step-tester": 1 },
  表达: { "phoenix-seal": 2, "crimson-stair-courage": 2, "brocade-controller": 1 },
  直接: { "brocade-controller": 2, "phoenix-seal": 2, "crimson-stair-courage": 1.5 },
  正面: { "crimson-stair-courage": 3, "phoenix-seal": 2, "gold-hairpin-breaker": 1.5 },
  反击: { "crimson-stair-courage": 3, "gold-hairpin-breaker": 2, "cold-palace-reviewer": 1 },
  孤勇: { "crimson-stair-courage": 3, "phoenix-seal": 2, "long-night-empath": 1 },
  破局: { "gold-hairpin-breaker": 3, "crimson-stair-courage": 2, "brocade-controller": 1.5 },
  显露: { "phoenix-seal": 2, "gold-hairpin-breaker": 2, "brocade-controller": 1.5 },
  锋芒: { "phoenix-seal": 2, "gold-hairpin-breaker": 1.5, "crimson-stair-courage": 1.5 },
  掌局: { "brocade-controller": 3, "cold-palace-reviewer": 2, "gold-hairpin-breaker": 1.5 },
  控局: { "brocade-controller": 3, "cold-palace-reviewer": 2, "gold-hairpin-breaker": 1.5 },
  负责: { "brocade-controller": 2, "palace-wall-keeper": 1.5 },
  进取: { "brocade-controller": 2.5, "phoenix-seal": 2, "gold-hairpin-breaker": 1.5 },
  权力: { "gold-hairpin-breaker": 3, "cold-palace-reviewer": 2.5, "phoenix-seal": 2, "brocade-controller": 1.5 },
  权力型: { "gold-hairpin-breaker": 3, "cold-palace-reviewer": 2.5 },
  借势: { "gold-hairpin-breaker": 3, "jade-step-tester": 1.5, "brocade-controller": 1 },
  交换: { "gold-hairpin-breaker": 3, "jade-step-tester": 2, "curtain-reader": 1.5 },
  筹码: { "cold-palace-reviewer": 2.5, "gold-hairpin-breaker": 2.5 },
  押注: { "phoenix-seal": 2.5, "gold-hairpin-breaker": 2.5, "brocade-controller": 1.5 },
  凤印: { "phoenix-seal": 3, "brocade-controller": 2, "cold-palace-reviewer": 1.5 },
  上升: { "phoenix-seal": 2.5, "gold-hairpin-breaker": 2, "brocade-controller": 1.5 },
  靠山: { "gold-hairpin-breaker": 2.5, "phoenix-seal": 1.5 },
  现实: { "gold-hairpin-breaker": 2, "brocade-controller": 1.5 },
  藏锋: { "hidden-fragrance": 3, "cold-palace-reviewer": 2.5, "winter-lamp": 2 },
  观察: { "curtain-reader": 2.5, "jade-step-tester": 2, "winter-lamp": 1.5, "cold-palace-reviewer": 1.5 },
  谨慎: { "hidden-fragrance": 2.5, "winter-lamp": 2, "cold-palace-reviewer": 1.5 },
  避险: { "hidden-fragrance": 2.5, "winter-lamp": 2 },
  自保: { "winter-lamp": 2.5, "hidden-fragrance": 2, "palace-wall-keeper": 1.5 },
  复盘: { "cold-palace-reviewer": 3, "winter-lamp": 2, "brocade-controller": 1.5 },
  留证: { "cold-palace-reviewer": 2.5, "winter-lamp": 2, "palace-wall-keeper": 1.5 },
  隐藏: { "hidden-fragrance": 2.5, "curtain-reader": 2, "cold-palace-reviewer": 1.5 },
  避锋: { "hidden-fragrance": 3, "winter-lamp": 1.5 },
  低调: { "hidden-fragrance": 2.5, "winter-lamp": 2 },
  清醒: { "winter-lamp": 3, "mirror-lake-hidden-edge": 2, "palace-wall-keeper": 1.5 },
  旁观: { "winter-lamp": 3, "mirror-lake-hidden-edge": 2 },
  退路: { "winter-lamp": 2.5, "hidden-fragrance": 2, "brocade-controller": 1 },
  自守: { "winter-lamp": 2.5, "palace-wall-keeper": 2, "hidden-fragrance": 1.5 },
  恢复: { "winter-lamp": 2.5, "hidden-fragrance": 1.5 },
  共情: { "long-night-empath": 3, "curtain-reader": 1.5, "jade-step-tester": 1.5 },
  情义: { "long-night-empath": 3, "jade-step-tester": 1.5 },
  暗助: { "long-night-empath": 2.5, "hidden-fragrance": 1.5 },
  信任: { "long-night-empath": 2.5, "jade-step-tester": 1.5 },
  牵挂: { "long-night-empath": 3, "jade-step-tester": 1.5 },
  价值: { "long-night-empath": 2.5, "crimson-stair-courage": 1.5 },
  求助: { "long-night-empath": 2.5, "jade-step-tester": 1.5 },
  陪伴: { "long-night-empath": 2.5, "palace-wall-keeper": 1.5 },
  牺牲: { "long-night-empath": 2.5, "long-night-empath-risk": 0 },
  讨好: { "long-night-empath": 1.5, "curtain-reader": 1 },
  关系: { "jade-step-tester": 2.5, "curtain-reader": 2, "long-night-empath": 1.5 },
  周旋: { "jade-step-tester": 3, "curtain-reader": 2, "gold-hairpin-breaker": 1.5 },
  互惠: { "jade-step-tester": 2.5, "curtain-reader": 2 },
  试探: { "curtain-reader": 3, "jade-step-tester": 2, "hidden-fragrance": 1.5 },
  读人: { "curtain-reader": 3, "jade-step-tester": 2, "gold-hairpin-breaker": 1.5 },
  安抚: { "jade-step-tester": 2.5, "long-night-empath": 2 },
  联盟: { "jade-step-tester": 2.5, "curtain-reader": 2, "gold-hairpin-breaker": 1.5 },
  合作: { "jade-step-tester": 2, "brocade-controller": 1.5, "palace-wall-keeper": 1.5 },
  靠近: { "curtain-reader": 2, "jade-step-tester": 1.5, "long-night-empath": 1.5 },
  求证: { "curtain-reader": 2.5, "jade-step-tester": 1.5, "cold-palace-reviewer": 1.5 },
  询问: { "curtain-reader": 2, "long-night-empath": 1.5 },
  缓和: { "jade-step-tester": 2, "long-night-empath": 1.5 },
  分散: { "curtain-reader": 2, "jade-step-tester": 1.5 },
  软拒绝: { "hidden-fragrance": 2, "palace-wall-keeper": 2, "jade-step-tester": 1 },
  有限帮助: { "palace-wall-keeper": 2.5, "long-night-empath": 1.5, "jade-step-tester": 1.5 },
  留余地: { "jade-step-tester": 2.5, "hidden-fragrance": 1.5 },
  承担: { "crimson-stair-courage": 2, "palace-wall-keeper": 2, "brocade-controller": 1 },
  证明: { "phoenix-seal": 2, "brocade-controller": 1.5 },
  冒险: { "gold-hairpin-breaker": 2.5, "crimson-stair-courage": 2 },
  行动: { "crimson-stair-courage": 2, "brocade-controller": 1.5, "long-night-empath": 1 },
  伪装: { "curtain-reader": 2.5, "cold-palace-reviewer": 1.5, "gold-hairpin-breaker": 1.5 },
  修复: { "winter-lamp": 1.5, "cold-palace-reviewer": 1.5 },
  压抑: { "hidden-fragrance": 1.5, "winter-lamp": 1 },
};

const DIRECTIONAL_ARCHETYPES: Record<string, { high: string[]; low: string[] }> = {
  agency: { high: ["brocade-controller", "phoenix-seal", "cold-palace-reviewer", "gold-hairpin-breaker"], low: ["winter-lamp", "hidden-fragrance", "long-night-empath"] },
  caution: { high: ["hidden-fragrance", "winter-lamp", "cold-palace-reviewer", "curtain-reader"], low: ["crimson-stair-courage", "gold-hairpin-breaker", "phoenix-seal"] },
  affiliation: { high: ["long-night-empath", "jade-step-tester", "curtain-reader", "gold-hairpin-breaker"], low: ["phoenix-seal", "cold-palace-reviewer", "winter-lamp"] },
  boundary: { high: ["phoenix-seal", "palace-wall-keeper", "winter-lamp", "hidden-fragrance", "brocade-controller"], low: ["long-night-empath", "gold-hairpin-breaker"] },
  emotionality: { high: ["long-night-empath", "crimson-stair-courage", "jade-step-tester"], low: ["winter-lamp", "cold-palace-reviewer", "brocade-controller"] },
  power: { high: ["gold-hairpin-breaker", "cold-palace-reviewer", "phoenix-seal", "brocade-controller"], low: ["winter-lamp", "hidden-fragrance", "long-night-empath", "palace-wall-keeper"] },
};

function emptyArchetypeScores(): ArchetypeScores {
  return Object.fromEntries(resultTypes.map((result) => [result.id, 0]));
}

function add(scores: ArchetypeScores, id: string, value: number) {
  if (id in scores) scores[id] += value;
}

export function archetypeScoreForChoice(choice: Choice): ArchetypeScores {
  const scores = emptyArchetypeScores();

  for (const tag of choice.tags) {
    const affinity = TAG_AFFINITY[tag];
    if (!affinity) continue;
    for (const [id, value] of Object.entries(affinity)) add(scores, id, value);
  }

  for (const id of DIMENSION_IDS) {
    const value = choice.weights[id];
    if (value > 0) {
      for (const archetypeId of DIRECTIONAL_ARCHETYPES[id].high) add(scores, archetypeId, value * 0.55);
    }
    if (value < 0) {
      for (const archetypeId of DIRECTIONAL_ARCHETYPES[id].low) add(scores, archetypeId, Math.abs(value) * 0.38);
    }
  }

  return scores;
}

function findQuestion(questionId: string) {
  return questions.find((question) => question.id === questionId);
}

function findChoice(questionId: string, choiceId: string) {
  const question = findQuestion(questionId);
  return question?.choices.find((choice) => choice.id === choiceId) ?? null;
}

function centeredArchetypeScore(questionId: string, choice: Choice): ArchetypeScores {
  const question = findQuestion(questionId);
  const raw = archetypeScoreForChoice(choice);
  if (!question) return raw;

  const means = emptyArchetypeScores();
  for (const option of question.choices) {
    const optionScores = archetypeScoreForChoice(option);
    for (const id of Object.keys(means)) means[id] += optionScores[id] / question.choices.length;
  }

  const centered = emptyArchetypeScores();
  for (const id of Object.keys(raw)) centered[id] = raw[id] - means[id];
  return centered;
}

export function scoreArchetypeAnswers(answers: Answer[]): ArchetypeScores {
  const scores = emptyArchetypeScores();
  for (const answer of answers) {
    const choice = findChoice(answer.questionId, answer.choiceId);
    if (!choice) continue;
    const choiceScores = centeredArchetypeScore(answer.questionId, choice);
    for (const id of Object.keys(scores)) scores[id] += choiceScores[id];
  }
  return scores;
}

export function rankArchetypes(scores: ArchetypeScores): RankedArchetype[] {
  return resultTypes
    .map((result) => ({ id: result.id, name: result.name, score: scores[result.id] ?? 0, result }))
    .sort((a, b) => b.score - a.score);
}
