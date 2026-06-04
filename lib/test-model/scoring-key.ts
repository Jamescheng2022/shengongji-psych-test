import { questions } from "./questions";
import { DIMENSION_IDS, emptyScores } from "./dimensions";
import type { Answer, Choice, DimensionId, Scores, Weights } from "./types";

export type ScoringKeyItem = {
  questionId: string;
  choiceId: string;
  weights: Weights;
  tags: string[];
};

export type ScaleBounds = {
  min: Scores;
  max: Scores;
};

function cloneScores(): Scores {
  return { ...emptyScores };
}

export function scoringKeyId(questionId: string, choiceId: string) {
  return `${questionId}.${choiceId}`;
}

export const scoringKey: Record<string, ScoringKeyItem> = questions.reduce<Record<string, ScoringKeyItem>>((acc, question) => {
  for (const choice of question.choices) {
    acc[scoringKeyId(question.id, choice.id)] = {
      questionId: question.id,
      choiceId: choice.id,
      weights: choice.weights,
      tags: choice.tags,
    };
  }
  return acc;
}, {});

export const scaleBounds: ScaleBounds = questions.reduce<ScaleBounds>(
  (bounds, question) => {
    for (const id of DIMENSION_IDS) {
      const values = question.choices.map((choice: Choice) => choice.weights[id]);
      bounds.min[id] += Math.min(...values);
      bounds.max[id] += Math.max(...values);
    }
    return bounds;
  },
  { min: cloneScores(), max: cloneScores() }
);

export function getChoiceWeights(questionId: string, choiceId: string): Weights {
  const item = scoringKey[scoringKeyId(questionId, choiceId)];
  if (!item) return cloneScores();
  return item.weights;
}

export function scoreAnswers(answers: Answer[]): Scores {
  const raw = cloneScores();
  for (const answer of answers) {
    const weights = getChoiceWeights(answer.questionId, answer.choiceId);
    for (const id of DIMENSION_IDS) raw[id] += weights[id];
  }
  return raw;
}

export function normalizeRawScores(raw: Scores): Scores {
  const normalized = cloneScores();
  for (const id of DIMENSION_IDS) {
    const min = scaleBounds.min[id];
    const max = scaleBounds.max[id];
    const span = max - min;
    normalized[id] = span === 0 ? 50 : Math.round(((raw[id] - min) / span) * 100);
  }
  return normalized;
}

export function getDimensionBand(value: number) {
  if (value >= 70) return "高";
  if (value >= 45) return "中";
  return "低";
}

export function dominantDimensions(scores: Scores, count = 2): DimensionId[] {
  return DIMENSION_IDS.map((id) => ({ id, score: scores[id] }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((item) => item.id);
}
