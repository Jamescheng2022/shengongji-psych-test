import type { Dimension, DimensionId, Scores } from "./types";

export const DIMENSION_IDS: DimensionId[] = ["agency", "defense", "relation", "risk", "boundary"];

export const dimensions: Dimension[] = [
  {
    id: "agency",
    name: "掌局",
    shortName: "局",
    description: "你面对关系和局势时，是否愿意主动影响走向、争取资源、承担后果。",
  },
  {
    id: "defense",
    name: "藏锋",
    shortName: "藏",
    description: "你受伤、被误解或被逼迫时，如何收住情绪、保存自己、等待时机。",
  },
  {
    id: "relation",
    name: "人心",
    shortName: "人",
    description: "你如何判断他人、建立连接、处理试探、竞争与信任。",
  },
  {
    id: "risk",
    name: "破局",
    shortName: "破",
    description: "你面对机会和不确定时，是押注、拖延、借力还是保全。",
  },
  {
    id: "boundary",
    name: "分寸",
    shortName: "寸",
    description: "你能否守住自己的底线，不被他人的期待、情义和权力吞没。",
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
