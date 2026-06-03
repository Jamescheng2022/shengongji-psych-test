export type DimensionId = "agency" | "defense" | "relation" | "risk" | "boundary";

export type Weights = Record<DimensionId, number>;

export type Dimension = {
  id: DimensionId;
  name: string;
  shortName: string;
  description: string;
};

export type Choice = {
  id: string;
  text: string;
  evidence?: string;
  weights: Weights;
  tags: string[];
};

export type Question = {
  id: string;
  chapter: number;
  order: number;
  title: string;
  scene: string;
  pressurePoint: string;
  choices: Choice[];
};

export type Answer = {
  questionId: string;
  choiceId: string;
  choiceText: string;
  evidence?: string;
  weights: Weights;
  tags: string[];
};

export type Scores = Weights;

export type ResultType = {
  id: string;
  name: string;
  verdict: string;
  archetype: string;
  psychProfile: string;
  realLifeMirror?: string;
  miniBiography?: string;
  relationshipPattern: string;
  stressResponse: string;
  hiddenRisk: string;
  growthAdvice: string;
  shareQuote: string;
  rule: {
    primary: DimensionId;
    secondary?: DimensionId;
    low?: DimensionId;
    tags?: string[];
  };
};

export type ComputedResult = {
  scores: Scores;
  rankedDimensions: { id: DimensionId; score: number; name: string }[];
  result: ResultType;
  answers: Answer[];
  keyChoices: Answer[];
};
