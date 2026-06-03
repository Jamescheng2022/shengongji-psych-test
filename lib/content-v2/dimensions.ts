export type V2DimensionId = "strategy" | "emotion" | "survival" | "ambition" | "social";

export type V2Scores = Record<V2DimensionId, number>;

export const v2DimensionIds: V2DimensionId[] = ["strategy", "emotion", "survival", "ambition", "social"];

export const v2Dimensions = [
  {
    id: "strategy",
    name: "权谋",
    plainName: "看局能力",
    description: "看局、读人、收集信息、延迟判断。不是不出手，而是看清楚再出手。",
    high: "习惯行动前收集信息，能察觉隐藏意图，善于让信息流向自己。",
    low: "更倾向直接反应，相信明面规则，不太揣摩他人动机。",
  },
  {
    id: "emotion",
    name: "情感",
    plainName: "真实感与良知",
    description: "尊严、良知、共情、情绪真实。衡量你是否愿意为心里的那杆秤付出代价。",
    high: "共情力强，厌恶不公，在乎做正确的事。",
    low: "压力下优先实际利益，不容易被内疚束缚。",
  },
  {
    id: "survival",
    name: "生存",
    plainName: "保全与等待",
    description: "忍耐、避险、保全自己、等待时机。衡量你在高压环境中的安全策略。",
    high: "能忍短期不公换长期安全，对风险高度敏感。",
    low: "不愿委屈自己，宁愿直面冲突。",
  },
  {
    id: "ambition",
    name: "野心",
    plainName: "上升与改变",
    description: "出头、反击、改变位置、被记住。衡量你是否愿意为了更好的位置承担风险。",
    high: "不满足现状，愿意主动让自己被看见。",
    low: "对权力欲望较低，更愿意维持稳定。",
  },
  {
    id: "social",
    name: "人心",
    plainName: "关系与借力",
    description: "结盟、借势、人情债、关系判断。衡量你是否善于在关系中找到支点。",
    high: "擅长建立关系网络，懂借力，不会让自己孤立无援。",
    low: "倾向独立解决问题，不太依赖关系网络。",
  },
] as const;

export const emptyV2Scores: V2Scores = {
  strategy: 0,
  emotion: 0,
  survival: 0,
  ambition: 0,
  social: 0,
};
