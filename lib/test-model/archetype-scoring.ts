import { DIMENSION_IDS } from "./dimensions";
import { questions } from "./questions";
import { resultTypes } from "./results";
import type { Answer, Choice, ResultType } from "./types";

export type ArchetypeScores = Record<string, number>;
export type RankedArchetype = { id: string; name: string; score: number; result: ResultType };

const TAG_AFFINITY: Record<string, Record<string, number>> = {
  稳定: { "winter-lamp": 2.4, "hidden-fragrance": 1.8, "brocade-controller": 1.1 },
  稳态: { "winter-lamp": 2.3, "hidden-fragrance": 1.7 },
  自持: { "winter-lamp": 2.2, "brocade-controller": 1.4, "hidden-fragrance": 1.2 },
  边界: { "phoenix-seal": 2.6, "hidden-fragrance": 1.8, "winter-lamp": 1.2, "brocade-controller": 1.1 },
  强边界: { "phoenix-seal": 3.0, "brocade-controller": 1.2, "winter-lamp": 1.1 },
  拒绝: { "phoenix-seal": 2.6, "winter-lamp": 1.7, "hidden-fragrance": 1.2 },
  分寸: { "jade-step-tester": 2.8, "hidden-fragrance": 1.8, "brocade-controller": 1.2 },
  自我: { "phoenix-seal": 2.6, "brocade-controller": 1.5, "gold-hairpin-breaker": 1.1 },
  责任: { "brocade-controller": 2.4, "jade-step-tester": 1.5, "phoenix-seal": 1.1 },
  表达: { "phoenix-seal": 2.2, "brocade-controller": 1.7, "long-night-empath": 1.1 },
  直接: { "brocade-controller": 2.2, "phoenix-seal": 2.0, "gold-hairpin-breaker": 1.1 },
  正面: { "phoenix-seal": 2.6, "brocade-controller": 1.8, "gold-hairpin-breaker": 1.2 },
  反击: { "gold-hairpin-breaker": 2.4, "phoenix-seal": 2.0, "cold-palace-reviewer": 1.4 },
  孤勇: { "phoenix-seal": 2.8, "long-night-empath": 1.3, "brocade-controller": 1.1 },
  破局: { "gold-hairpin-breaker": 3.0, "brocade-controller": 1.7, "phoenix-seal": 1.3 },
  显露: { "phoenix-seal": 2.1, "gold-hairpin-breaker": 1.7, "brocade-controller": 1.4 },
  锋芒: { "phoenix-seal": 2.2, "gold-hairpin-breaker": 1.8, "cold-palace-reviewer": 1.1 },
  掌局: { "brocade-controller": 3.0, "cold-palace-reviewer": 2.0, "gold-hairpin-breaker": 1.5 },
  控局: { "brocade-controller": 3.0, "cold-palace-reviewer": 2.0, "gold-hairpin-breaker": 1.5 },
  负责: { "brocade-controller": 2.3, "jade-step-tester": 1.2 },
  进取: { "brocade-controller": 2.5, "phoenix-seal": 2.0, "gold-hairpin-breaker": 1.5 },
  权力: { "gold-hairpin-breaker": 2.8, "cold-palace-reviewer": 2.3, "phoenix-seal": 2.0, "brocade-controller": 1.5 },
  权力型: { "gold-hairpin-breaker": 2.8, "cold-palace-reviewer": 2.3, "phoenix-seal": 1.5 },
  借势: { "gold-hairpin-breaker": 3.0, "jade-step-tester": 1.5, "brocade-controller": 1.1 },
  交换: { "gold-hairpin-breaker": 2.8, "jade-step-tester": 2.0, "brocade-controller": 1.1 },
  筹码: { "cold-palace-reviewer": 2.5, "gold-hairpin-breaker": 2.5 },
  押注: { "phoenix-seal": 2.4, "gold-hairpin-breaker": 2.3, "brocade-controller": 1.4 },
  凤印: { "phoenix-seal": 3.0, "brocade-controller": 2.0, "cold-palace-reviewer": 1.4 },
  上升: { "phoenix-seal": 2.5, "gold-hairpin-breaker": 2.0, "brocade-controller": 1.5 },
  靠山: { "gold-hairpin-breaker": 2.4, "phoenix-seal": 1.5, "jade-step-tester": 1.1 },
  现实: { "gold-hairpin-breaker": 2.0, "brocade-controller": 1.5, "cold-palace-reviewer": 1.1 },
  藏锋: { "hidden-fragrance": 3.0, "cold-palace-reviewer": 2.5, "winter-lamp": 1.8 },
  观察: { "jade-step-tester": 2.4, "winter-lamp": 2.0, "cold-palace-reviewer": 1.7, "hidden-fragrance": 1.2 },
  谨慎: { "hidden-fragrance": 2.6, "winter-lamp": 2.1, "cold-palace-reviewer": 1.5 },
  避险: { "hidden-fragrance": 2.7, "winter-lamp": 2.1 },
  自保: { "winter-lamp": 2.6, "hidden-fragrance": 2.0, "jade-step-tester": 1.2 },
  复盘: { "cold-palace-reviewer": 3.0, "winter-lamp": 2.0, "brocade-controller": 1.5 },
  留证: { "cold-palace-reviewer": 2.7, "winter-lamp": 2.0, "hidden-fragrance": 1.1 },
  隐藏: { "hidden-fragrance": 2.6, "cold-palace-reviewer": 1.8, "winter-lamp": 1.2 },
  避锋: { "hidden-fragrance": 3.0, "winter-lamp": 1.5 },
  低调: { "hidden-fragrance": 2.5, "winter-lamp": 2.0 },
  清醒: { "winter-lamp": 3.0, "hidden-fragrance": 1.5, "cold-palace-reviewer": 1.2 },
  旁观: { "winter-lamp": 3.0, "hidden-fragrance": 1.2 },
  退路: { "winter-lamp": 2.5, "hidden-fragrance": 2.0, "brocade-controller": 1.0 },
  自守: { "winter-lamp": 2.5, "hidden-fragrance": 1.7, "phoenix-seal": 1.1 },
  恢复: { "winter-lamp": 2.4, "hidden-fragrance": 1.5 },
  共情: { "long-night-empath": 3.0, "jade-step-tester": 1.7, "hidden-fragrance": 1.0 },
  情义: { "long-night-empath": 3.0, "jade-step-tester": 1.5 },
  暗助: { "long-night-empath": 2.5, "hidden-fragrance": 1.5, "jade-step-tester": 1.0 },
  信任: { "long-night-empath": 2.5, "jade-step-tester": 1.5 },
  牵挂: { "long-night-empath": 3.0, "jade-step-tester": 1.5 },
  价值: { "long-night-empath": 2.3, "phoenix-seal": 1.4 },
  求助: { "long-night-empath": 2.4, "jade-step-tester": 1.7 },
  陪伴: { "long-night-empath": 2.5, "hidden-fragrance": 1.2 },
  牺牲: { "long-night-empath": 2.6, "hidden-fragrance": 1.0 },
  讨好: { "long-night-empath": 1.7, "jade-step-tester": 1.2 },
  关系: { "jade-step-tester": 2.5, "long-night-empath": 1.7, "gold-hairpin-breaker": 1.1 },
  周旋: { "jade-step-tester": 3.0, "gold-hairpin-breaker": 1.8, "brocade-controller": 1.0 },
  互惠: { "jade-step-tester": 2.7, "gold-hairpin-breaker": 1.4 },
  试探: { "jade-step-tester": 2.6, "hidden-fragrance": 1.6, "cold-palace-reviewer": 1.3 },
  读人: { "jade-step-tester": 2.5, "gold-hairpin-breaker": 1.8, "cold-palace-reviewer": 1.2 },
  安抚: { "jade-step-tester": 2.5, "long-night-empath": 2.0 },
  联盟: { "jade-step-tester": 2.5, "gold-hairpin-breaker": 1.8, "brocade-controller": 1.3 },
  合作: { "jade-step-tester": 2.2, "brocade-controller": 1.6, "hidden-fragrance": 1.0 },
  靠近: { "jade-step-tester": 1.8, "long-night-empath": 1.6, "hidden-fragrance": 1.0 },
  求证: { "jade-step-tester": 2.3, "cold-palace-reviewer": 1.6, "winter-lamp": 1.2 },
  询问: { "jade-step-tester": 1.8, "long-night-empath": 1.6 },
  缓和: { "jade-step-tester": 2.2, "long-night-empath": 1.6, "hidden-fragrance": 1.1 },
  分散: { "jade-step-tester": 2.0, "hidden-fragrance": 1.2 },
  软拒绝: { "hidden-fragrance": 2.2, "jade-step-tester": 1.8, "winter-lamp": 1.2 },
  有限帮助: { "long-night-empath": 1.8, "jade-step-tester": 1.7, "winter-lamp": 1.2 },
  留余地: { "jade-step-tester": 2.5, "hidden-fragrance": 1.6 },
  承担: { "brocade-controller": 1.8, "phoenix-seal": 1.8, "long-night-empath": 1.2 },
  证明: { "phoenix-seal": 2.2, "brocade-controller": 1.6 },
  冒险: { "gold-hairpin-breaker": 2.5, "phoenix-seal": 1.8, "brocade-controller": 1.0 },
  行动: { "brocade-controller": 1.8, "phoenix-seal": 1.7, "long-night-empath": 1.0 },
  伪装: { "cold-palace-reviewer": 2.0, "gold-hairpin-breaker": 1.8, "hidden-fragrance": 1.2 },
  修复: { "winter-lamp": 1.7, "cold-palace-reviewer": 1.5, "long-night-empath": 1.0 },
  压抑: { "hidden-fragrance": 1.8, "winter-lamp": 1.2 },
};

const DIRECTIONAL_ARCHETYPES: Record<string, { high: string[]; low: string[] }> = {
  agency: { high: ["brocade-controller", "phoenix-seal", "cold-palace-reviewer", "gold-hairpin-breaker"], low: ["winter-lamp", "hidden-fragrance", "long-night-empath"] },
  caution: { high: ["hidden-fragrance", "winter-lamp", "cold-palace-reviewer", "jade-step-tester"], low: ["gold-hairpin-breaker", "phoenix-seal", "brocade-controller"] },
  affiliation: { high: ["long-night-empath", "jade-step-tester", "gold-hairpin-breaker"], low: ["phoenix-seal", "cold-palace-reviewer", "winter-lamp"] },
  boundary: { high: ["phoenix-seal", "winter-lamp", "hidden-fragrance", "brocade-controller"], low: ["long-night-empath", "gold-hairpin-breaker"] },
  emotionality: { high: ["long-night-empath", "phoenix-seal", "jade-step-tester"], low: ["winter-lamp", "cold-palace-reviewer", "brocade-controller"] },
  power: { high: ["gold-hairpin-breaker", "cold-palace-reviewer", "phoenix-seal", "brocade-controller"], low: ["winter-lamp", "hidden-fragrance", "long-night-empath"] },
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
      for (const archetypeId of DIRECTIONAL_ARCHETYPES[id].high) add(scores, archetypeId, value * 0.5);
    }
    if (value < 0) {
      for (const archetypeId of DIRECTIONAL_ARCHETYPES[id].low) add(scores, archetypeId, Math.abs(value) * 0.34);
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
