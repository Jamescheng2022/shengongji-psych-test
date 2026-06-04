import type { Dimension, DimensionId, Scores } from "./types";

export const DIMENSION_IDS: DimensionId[] = ["agency", "caution", "affiliation", "boundary", "emotionality", "power"];

export const dimensions: Dimension[] = [
  {
    id: "agency",
    name: "掌局",
    shortName: "局",
    description: "面对不确定局面时，你是否倾向主动影响走向、争取资源、承担后果。",
  },
  {
    id: "caution",
    name: "藏锋",
    shortName: "藏",
    description: "受压、受伤或信息不足时，你是否倾向谨慎观察、保存实力、等待时机。",
  },
  {
    id: "affiliation",
    name: "人心",
    shortName: "人",
    description: "你对关系、情义、连接和他人感受的重视程度。",
  },
  {
    id: "boundary",
    name: "分寸",
    shortName: "寸",
    description: "你能否守住自己的底线，不被期待、情义和权力吞没。",
  },
  {
    id: "emotionality",
    name: "心潮",
    shortName: "潮",
    description: "你在评价、压力、关系变化中的敏感度和情绪波动倾向。",
  },
  {
    id: "power",
    name: "权欲",
    shortName: "权",
    description: "你对地位、影响力、资源交换和策略性掌控的动机强弱。",
  },
];

export const emptyScores: Scores = {
  agency: 0,
  caution: 0,
  affiliation: 0,
  boundary: 0,
  emotionality: 0,
  power: 0,
};

export function getDimensionName(id: DimensionId) {
  return dimensions.find((dimension) => dimension.id === id)?.name ?? id;
}
