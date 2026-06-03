import type { V2Scene } from "./types";

const s = (strategy = 0, emotion = 0, survival = 0, ambition = 0, social = 0) => ({ strategy, emotion, survival, ambition, social });

export const v2ScenesPart3: V2Scene[] = [
  {
    id: "Q9",
    order: 9,
    title: "替你跪的人",
    sceneShort: "有人替你受了罚。不是你要她这么做，可你知道，如果没有你，她本可以不用跪在那儿。她看见你时还笑了一下，像是在说没关系。",
    sceneFull: "廊下的石板很冷。她跪在那里，衣角被风吹得很轻。不是你让她替你受罚，可你知道这件事和你脱不开关系。最重的不是她跪着，而是她看见你时还笑了一下，像在说没关系。那一刻，你忽然不知道欠一个人要怎么还。",
    psychologicalMechanism: "内疚处理、责任边界与自我牺牲倾向。",
    realityMetaphor: "有人为你承担后果、替你说话、帮你挡了一次风险。你感激，也因此感到亏欠。",
    options: [
      { id: "Q9_A", text: "走过去，陪她一起跪完", userAction: "共担代价。", psychology: "你用共同承受回应内疚，不愿让对方独自承担。", scoreDelta: s(0, 3, -1, 1, 1), tags: ["共担", "情义"], storyMemory: "她走过去，陪那个人一起跪完了剩下的时辰。" },
      { id: "Q9_B", text: "记下这笔人情，日后一定还", userAction: "把亏欠变成长期承诺。", psychology: "你不急着情绪表达，而是用未来偿还恢复平衡。", scoreDelta: s(1, 1, 1, 0, 2), tags: ["人情", "偿还"], storyMemory: "她没有当场哭，只把这笔人情记进了心里。" },
      { id: "Q9_C", text: "当天夜里想办法替她减轻责罚", userAction: "把内疚变成行动。", psychology: "你需要立刻做点什么，才能承受自己被帮助的事实。", scoreDelta: s(1, 2, 0, 1, 1), tags: ["行动", "补偿"], storyMemory: "她在夜里想办法，让那个人少受了一点罚。" },
      { id: "Q9_D", text: "从此疏远她，不再让她被你牵连", userAction: "用后退表达保护。", psychology: "你把保护理解为远离，避免别人再次因你受伤。", scoreDelta: s(0, 1, 2, 0, -1), tags: ["退避", "边界防御"], storyMemory: "她开始疏远那个人，因为她不想再让人替自己跪一次。" }
    ]
  },
  {
    id: "Q10",
    order: 10,
    title: "你说了算",
    sceneShort: "终于有一天，轮到你决定别人的处境。那个新来的宫女站在阶下，像当年的你。你一句话，就能让她轻松一点，也能让她明白规矩。",
    sceneFull: "权力真正落到你手里时，并没有想象中沉。它像一盏热茶，被人小心端来。阶下站着一个新来的宫女，手指绞着衣角，像极了当年的你。你忽然发现，你可以让她少吃一点苦，也可以让她先学会这宫里最冷的规矩。",
    psychologicalMechanism: "权力态度、统治风格、报复与宽恕。",
    realityMetaphor: "你终于升职、掌握资源、能决定新人或弱者的处境时，你会怎样使用曾经没有的权力。",
    options: [
      { id: "Q10_A", text: "帮她，但也教她下次自己站稳", userAction: "赋能式帮助。", psychology: "你愿意保护弱者，但不让对方永远依赖你。", scoreDelta: s(1, 2, 0, 1, 2), tags: ["赋能", "善意"], storyMemory: "她帮了那个新人，也教她下次怎么自己站稳。" },
      { id: "Q10_B", text: "帮她一次，让她记住这份人情", userAction: "投资关系。", psychology: "你清醒地把帮助变成未来可用的关系。", scoreDelta: s(2, 0, 0, 1, 3), tags: ["投资", "人心"], storyMemory: "她帮了那个人，也让那个人记住了这份恩。" },
      { id: "Q10_C", text: "暗中帮她，不让她知道是谁", userAction: "保留纯粹善意。", psychology: "你想保护对方，也不想让帮助变成债。", scoreDelta: s(0, 3, 1, 0, 0), tags: ["匿名善意", "良知"], storyMemory: "她在暗处帮了那个人，没有留下名字。" },
      { id: "Q10_D", text: "暂时不帮，先看她能不能自己过关", userAction: "延迟援手。", psychology: "你相信太早介入会制造依赖，也会暴露自己。", scoreDelta: s(2, 0, 2, 0, 0), tags: ["克制", "观察"], storyMemory: "她没有立刻出手，只在旁边看那个人能不能自己过关。" }
    ]
  },
  {
    id: "Q11",
    order: 11,
    title: "镜中人",
    sceneShort: "一个新秀女被轻轻碾了一句。你想起刚入宫的自己。可经过管事姑姑身边时，你竟微微点了点头。廊下水缸里，你看见自己的倒影。",
    sceneFull: "今天发生了一件很小的事。一个新秀女打翻茶盘，管事姑姑说了一句不轻不重的话。你想起刚入宫时，自己也曾被这样压低过。可你经过管事姑姑身边时，竟微微点了点头。等你回头，在廊下水缸里看见自己的倒影。那一刻你忽然不确定，自己是不是已经变成了当初讨厌的那种人。",
    psychologicalMechanism: "自我一致性危机与道德自我认知。",
    realityMetaphor: "当你终于拥有经验和位置，发现自己也开始使用曾经讨厌的规则。",
    options: [
      { id: "Q11_A", text: "走过去扶起新秀女", userAction: "立即修正自己。", psychology: "你无法忍受自己成为伤害链条的一环。", scoreDelta: s(0, 3, -1, 1, 1), tags: ["修正", "良知"], storyMemory: "她走过去扶起那个新人，像是在扶起从前的自己。" },
      { id: "Q11_B", text: "没有回头，但心里记住这一下", userAction: "承认变化但不立刻行动。", psychology: "你需要时间处理自我不一致带来的不安。", scoreDelta: s(2, 1, 1, 0, 0), tags: ["自省", "克制"], storyMemory: "她没有立刻回头，只记住了水缸里那个陌生的自己。" },
      { id: "Q11_C", text: "告诉自己，宫里本来就是这样", userAction: "合理化变化。", psychology: "你用环境规则缓解内疚，接受自己适应后的样子。", scoreDelta: s(1, -1, 2, 1, 0), tags: ["合理化", "生存"], storyMemory: "她告诉自己，宫里本来就是这样。" },
      { id: "Q11_D", text: "夜里把今日之事写下来，提醒自己别忘", userAction: "保存自我证据。", psychology: "你害怕被环境改变，所以用记录守住自我连续性。", scoreDelta: s(1, 2, 1, 0, 0), tags: ["记录", "自我一致"], storyMemory: "她在夜里写下那件小事，怕自己有一天忘了。" }
    ]
  },
  {
    id: "Q12",
    order: 12,
    title: "最后一道门",
    sceneShort: "尘埃落定前，你面前有几条路。每一条都对，也都有代价。你知道这一次没有人能替你选，因为这不只是去哪里，而是你要成为什么样的人。",
    sceneFull: "最后一道门开着。门后不是奖赏，也不是刑罚，而是几条都说得通的路。你可以往上走，可以退回安静处，可以留下来保护别人，也可以离开所有人的棋盘。你忽然明白，真正的选择不是走向哪里，而是承认自己终于成了哪一种人。",
    psychologicalMechanism: "核心价值排序与终极追求。",
    realityMetaphor: "重要人生节点：升职、分手、离职、结婚、创业、离开一个旧圈子。没有绝对正确，只有你愿意承担的后果。",
    options: [
      { id: "Q12_A", text: "往更高处走，哪怕从此更冷", userAction: "选择上升。", psychology: "你相信站得更高才能真正拥有选择权。", scoreDelta: s(1, 0, 0, 3, 1), tags: ["上升", "凤仪天成"], storyMemory: "最后，她还是往更高处走去，哪怕那里更冷。" },
      { id: "Q12_B", text: "退到安静处，守住剩下的自己", userAction: "选择自守。", psychology: "你把内在完整放在外部胜利之前。", scoreDelta: s(0, 2, 3, -1, 0), tags: ["自守", "冷宫谋后"], storyMemory: "最后，她退到安静处，守住了剩下的自己。" },
      { id: "Q12_C", text: "留下来，替后来的人挡一挡风", userAction: "选择责任。", psychology: "你把自己的经历转化成对后来者的保护。", scoreDelta: s(0, 3, 0, 1, 3), tags: ["责任", "暗香棋子"], storyMemory: "最后，她留下来，替后来的人挡了一点风。" },
      { id: "Q12_D", text: "离开棋盘，不再证明给任何人看", userAction: "选择退出。", psychology: "你不再把自我价值交给外部规则裁定。", scoreDelta: s(2, 2, 1, 0, -1), tags: ["退出", "烟雨贵人"], storyMemory: "最后，她离开那张棋盘，不再证明给任何人看。" }
    ]
  }
];
