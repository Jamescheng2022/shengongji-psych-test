export const characters = [
  {
    name: "沈令仪",
    role: "贵妃",
    description: "她不是单纯的权力象征，而是深宫秩序本身。她偶尔温和，偶尔沉默，每一次看见你，都像一次测量。",
  },
  {
    name: "周姑姑",
    role: "掌事姑姑",
    description: "她管规矩，也管人心。她的责备不一定是恶意，但每一句话都可能决定你在宫里的位置。",
  },
  {
    name: "阿檀",
    role: "同屋宫女",
    description: "她与你一起入宫，柔软、敏感，也不总是可靠。她让你看见关系里最难处理的牵连。",
  },
  {
    name: "宁枝",
    role: "受宠姐姐",
    description: "她懂得如何被看见，也懂得如何让别人替她承担风险。她的温柔从不只是温柔。",
  },
];

export const chapterIntros = [
  {
    chapter: 1,
    title: "初入宫门",
    intro: "宫门第一次在你身后合上。你还没有敌人，也还没有靠山。所有人都在看你如何安放自己。",
  },
  {
    chapter: 2,
    title: "珠帘暗涌",
    intro: "深宫里没有纯粹的善意。每一块糕、每一句同行、每一次站队，都可能是一根递来的线。",
  },
  {
    chapter: 3,
    title: "锦帐风波",
    intro: "当你开始被看见，也会开始被夺走。羞辱、试探、错账和旧友变脸，都是局的一部分。",
  },
  {
    chapter: 4,
    title: "长夜藏锋",
    intro: "最难熬的不是责罚，而是被慢慢冷下去。长夜里，你要决定还要不要相信人。",
  },
  {
    chapter: 5,
    title: "凤印将落",
    intro: "机会终于来到你面前。可深宫从不白给任何东西。你想得到什么，就要回答愿意失去什么。",
  },
];

export function getChapterIntro(chapter: number) {
  return chapterIntros.find((item) => item.chapter === chapter) ?? chapterIntros[0];
}

export function buildEvidence(tags: string[]) {
  if (tags.includes("边界") || tags.includes("自我") || tags.includes("底线")) {
    return "这个选择显示你在压力中仍会优先确认自己的底线，不愿为了短期安全把自我完全交出去。";
  }
  if (tags.includes("关系") || tags.includes("共情") || tags.includes("情义")) {
    return "这个选择显示你会把关系线索和他人处境纳入判断，你不是只看输赢，也会在意牵连与情义。";
  }
  if (tags.includes("冒险") || tags.includes("机会") || tags.includes("破局")) {
    return "这个选择显示你在关键时刻愿意承受不确定性，用行动换取局面改变。";
  }
  if (tags.includes("防御") || tags.includes("藏锋") || tags.includes("忍耐")) {
    return "这个选择显示你习惯先隐藏真实反应，把情绪留到更安全、更有把握的时候处理。";
  }
  if (tags.includes("权力") || tags.includes("掌控") || tags.includes("上升")) {
    return "这个选择显示你并不回避权力问题，你更愿意主动影响局面，而不是等待别人安排。";
  }
  return "这个选择显示你会在压力中寻找一个既能保全自己、又不立刻失控的处理方式。";
}

export function buildMiniBiography(resultName: string) {
  return `若把这三十幕写成一段小传，你不是被命运推着走的人。你在宫门、珠帘、锦帐与长夜之间一步步学会辨认自己。最后落在命册上的名字，是${resultName}。`;
}

export function buildRealLifeMirror(primaryName: string) {
  return `放回现实中，你最常被触发的不是宫斗本身，而是${primaryName}相关的处境：被评价、被拉扯、被要求让步，或者被迫在安全与自我之间做选择。`;
}
