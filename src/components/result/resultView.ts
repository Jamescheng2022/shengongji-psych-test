import type { DimensionId } from "@/lib/test-model/types";

export const dimensionView: Record<DimensionId, { label: string; short: string; desc: string }> = {
  agency: {
    label: "掌局",
    short: "局",
    desc: "主动影响局势",
  },
  caution: {
    label: "藏锋",
    short: "藏",
    desc: "观察与留后路",
  },
  affiliation: {
    label: "人心",
    short: "心",
    desc: "情义与连结",
  },
  boundary: {
    label: "分寸",
    short: "寸",
    desc: "边界与自持",
  },
  emotionality: {
    label: "心潮",
    short: "潮",
    desc: "敏感与情绪波动",
  },
  power: {
    label: "权势",
    short: "权",
    desc: "资源与影响力",
  },
};

export function scorePercent(score: number) {
  return Math.max(0, Math.min(100, Math.round(score)));
}

export function dimensionLabel(id: DimensionId) {
  return dimensionView[id]?.label ?? id;
}
