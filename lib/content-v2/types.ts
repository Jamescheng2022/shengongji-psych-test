import type { V2DimensionId, V2Scores } from "./dimensions";

export type V2Option = {
  id: string;
  text: string;
  userAction: string;
  psychology: string;
  scoreDelta: V2Scores;
  tags: string[];
  storyMemory: string;
};

export type V2Scene = {
  id: string;
  order: number;
  title: string;
  sceneShort: string;
  sceneFull: string;
  psychologicalMechanism: string;
  realityMetaphor: string;
  options: V2Option[];
};

export type V2FateType = {
  id: string;
  name: string;
  verdict: string;
  primary: V2DimensionId;
  secondary: V2DimensionId;
  summary: string;
  corePsychology: string;
  surfaceStyle: string;
  hiddenFear: string;
  survivalStyle: string;
  emotionalWeakness: string;
  powerPath: string;
  relationshipPattern: string;
  modernMirror: string;
  shareQuote: string;
  posterQuote: string;
};

export type V2Answer = {
  sceneId: string;
  optionId: string;
  optionText: string;
  storyMemory: string;
  psychology: string;
  scoreDelta: V2Scores;
  tags: string[];
};

export type V2ComputedResult = {
  scores: V2Scores;
  topDimensions: { id: V2DimensionId; score: number; label: string }[];
  fate: V2FateType;
  answers: V2Answer[];
};
