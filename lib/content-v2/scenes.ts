import type { V2Scene } from "./types";

const s = (strategy = 0, emotion = 0, survival = 0, ambition = 0, social = 0) => ({ strategy, emotion, survival, ambition, social });

export const v2Scenes: V2Scene[] = [
  {
    id: "Q1",
    order: 1,
    title: "暮入宫门",
    sceneShort: "马车停稳，朱红门槛前无人告诉你下一步该做什么。门内的人看着你，像在等你先暴露自己。你的第一步，就是你的第一句话。",
    sceneFull: "马车停稳时，帘外只剩一道朱红门槛。没有人告诉你下一步该做什么，也没有人回头看你一眼。门内的目光不是在看人，是在记人。谁先抬脚，谁先低头，谁进门前已经在想怎么出去。你忽然意识到，你的第一步，就是你的第一句话。",
    psychologicalMechanism: "陌生环境中的威胁评估模式与不确定容忍度。",
    realityMetaphor: "第一次入职、第一次见婆家、第一次进入陌生圈层。规则不明，但所有人都在看你。",
    options: [
      { id: "Q1_A", text: "垂手低头，跟在最后一人身后迈过门槛", userAction: "缩小自己，先降低存在感。", psychology: "安全优先，在规则未明前不做会被记住的动作。", scoreDelta: s(0, 1, 2, 0, 0), tags: ["谨慎求稳", "以退为进"], storyMemory: "她初入宫门时选择低头随人而行，把锋芒藏在无人注意处。" },
      { id: "Q1_B", text: "微微顿步，先记下谁在看谁", userAction: "用目光绘制权力地图。", psychology: "进入环境时先收集信息，用观察抵消不确定。", scoreDelta: s(2, 0, 0, 1, 0), tags: ["暗中布局", "谨慎求稳"], storyMemory: "她在门槛前停了一息，先把每一道目光记在心里。" },
      { id: "Q1_C", text: "整理袖口，从容迈过门槛", userAction: "用镇定建立存在感。", psychology: "以气场作为防御，让别人知道你并不慌。", scoreDelta: s(0, 1, 0, 2, 0), tags: ["外柔内刚", "被看见"], storyMemory: "她整理袖口，不疾不徐地迈过门槛。" },
      { id: "Q1_D", text: "借放下包袱，回身看清同来的人", userAction: "先看同类，再看权威。", psychology: "关系扫描，先判断对手和潜在盟友。", scoreDelta: s(1, 0, 0, 0, 2), tags: ["关系扫描", "借势"], storyMemory: "她没有急着看高处，而是先记住了身边人的脸。" }
    ]
  },
  {
    id: "Q2",
    order: 2,
    title: "一盏茶的重量",
    sceneShort: "有人端来新茶，说是给几位姐姐尝尝。窗边有人轻声提醒：这茶不是白喝的。屋里安静了半息。接了，是人情；不接，是态度。",
    sceneFull: "一盏新茶被推到你面前。端茶的人笑得温柔，提醒的人声音不高不低。屋里安静了半息，所有人都像没在看你，却都等着你伸手。你忽然明白，宫里许多东西不是礼物，而是开价。",
    psychologicalMechanism: "信任模式与关系风险评估。",
    realityMetaphor: "同事突然示好、亲戚递来人情、朋友拉你进圈子。好意背后也许有价格。",
    options: [
      { id: "Q2_A", text: "接过茶，但只轻轻放在手边", userAction: "接受关系入口，但不立刻交付。", psychology: "保持礼貌，同时保留判断空间。", scoreDelta: s(1, 0, 1, 0, 2), tags: ["礼貌防御", "关系"], storyMemory: "她接过茶，却没有立刻喝下。" },
      { id: "Q2_B", text: "笑着谢过，说今日胃寒不便饮茶", userAction: "温和拒绝，不正面撕破。", psychology: "用体面方式维护边界。", scoreDelta: s(1, 1, 2, 0, 0), tags: ["软拒绝", "边界"], storyMemory: "她用一句胃寒，把那盏茶挡在唇边之外。" },
      { id: "Q2_C", text: "当众喝一口，让递茶的人安心", userAction: "用接受换取快速靠近。", psychology: "愿意以小风险换取关系速度。", scoreDelta: s(0, 2, 0, 1, 2), tags: ["靠近", "人情"], storyMemory: "她当众喝了一口茶，把这份关系接了下来。" },
      { id: "Q2_D", text: "先看提醒你的人，再看递茶的人", userAction: "不急着表态，先判断两边关系。", psychology: "对关系网络敏感，先读局再行动。", scoreDelta: s(2, 0, 1, 0, 1), tags: ["看局", "试探"], storyMemory: "她没有看茶，先看了说话的人和递茶的人。" }
    ]
  },
  {
    id: "Q3",
    order: 3,
    title: "玉簪",
    sceneShort: "一支玉簪从你铺边被翻出来。有人说昨夜明明见你碰过妆匣。清白就在眼前，可你也知道，一旦开始自证，就会被拖进别人的局里。",
    sceneFull: "玉簪从你铺边被翻出时，屋里像突然冷了一截。有人说昨夜见你碰过妆匣，也有人沉默着等你急。清白近在眼前，却也像一根线。你若急着拉它，就可能把更深处的东西一并拉出来。",
    psychologicalMechanism: "不公处境中的自证冲动与防御模式。",
    realityMetaphor: "被误解、被甩锅、被迫解释清白的时刻。",
    options: [
      { id: "Q3_A", text: "立刻翻出自己的包袱自证", userAction: "用透明换清白。", psychology: "尊严受损时倾向直接证明自己。", scoreDelta: s(0, 2, -1, 2, 0), tags: ["自证", "尊严"], storyMemory: "她第一反应是打开包袱，让所有人看清楚。" },
      { id: "Q3_B", text: "问清是谁第一个说你碰过妆匣", userAction: "追问指控源头。", psychology: "不急着自证，而是找出发起者。", scoreDelta: s(2, 0, 0, 1, 0), tags: ["追源", "反击"], storyMemory: "她没有碰包袱，只问第一句话是谁说的。" },
      { id: "Q3_C", text: "把话题转向妆匣钥匙在谁手里", userAction: "转移战场。", psychology: "用结构问题压过情绪指控。", scoreDelta: s(2, 0, 1, 0, 1), tags: ["转局", "证据"], storyMemory: "她问的不是玉簪，而是钥匙。" },
      { id: "Q3_D", text: "先认下保管疏忽，把更重要的秘密藏住", userAction: "牺牲小清白，保住大安全。", psychology: "能忍受短期不公，优先保护核心风险。", scoreDelta: s(1, 1, 3, -1, 0), tags: ["忍耐", "保全"], storyMemory: "她认下了疏忽，却把真正不能见光的东西藏得更深。" }
    ]
  }
];
