import type { Dimension, DimensionId, Scores } from "./types";

export const DIMENSION_IDS: DimensionId[] = ["agency", "defense", "relation", "risk", "boundary"];

export const dimensions: Dimension[] = [
  {
    id: "agency",
    name: "权力感",
    shortName: "权",
    description: "你在不平等关系里是否愿意主动影响局面、争取资源、承担后果。",
  },
  {
    id: "defense",
    name: "情绪防御",
    shortName: "防",
    description: "你受伤、被误解、被羞辱时，如何隐藏、消化或转化自己的情绪。",
  },
  {
    id: "relation",
    name: "关系策略",
    shortName: "人",
    description: "你如何判断他人、建立联盟、处理试探、竞争与背叛。",
  },
  {
    id: "risk",
    name: "风险偏好",
    shortName: "险",
    description: "你面对机会和不确定时，是押注、拖延、借力还是保全。",
  },
  {
    id: "boundary",
    name: "自我边界",
    shortName: "界",
    description: "你能否守住底线，不被他人期待、情义和权力吞没。",
  },
];

export const emptyScores: Scores = {
  agency: 0,
  defense: 0,
  relation: 0,
  risk: 0,
  boundary: 0,
};

export function getDimensionName(id: DimensionId) {
  return dimensions.find((dimension) => dimension.id === id)?.name ?? id;
}
