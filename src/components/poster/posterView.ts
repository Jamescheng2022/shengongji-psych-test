import type { DimensionId } from "@/lib/test-model/types";

export const posterDimensionView: Record<DimensionId, { label: string; short: string; desc: string }> = {
  agency: {
    label: "掌局",
    short: "局",
    desc: "主动掌控局势",
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
    desc: "敏感与情绪感应",
  },
  power: {
    label: "权欲",
    short: "权",
    desc: "资源与影响力",
  },
};

export const posterTendencyCopy: Record<DimensionId, string> = {
  agency: "掌局有方，是你的胆识，也是你的锋芒。",
  caution: "藏锋有术，是你的谨慎，也是你的退路。",
  affiliation: "识人有心，是你的温度，也是你的靠山。",
  boundary: "进退有度，是你的智慧，也是你的铠甲。",
  emotionality: "心潮有光，是你的敏锐，也是你的真意。",
  power: "权衡有势，是你的野心，也是你的手腕。",
};
