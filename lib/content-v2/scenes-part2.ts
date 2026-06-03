import type { V2Scene } from "./types";

const s = (strategy = 0, emotion = 0, survival = 0, ambition = 0, social = 0) => ({ strategy, emotion, survival, ambition, social });

export const v2ScenesPart2: V2Scene[] = [
  {
    id: "Q4",
    order: 4,
    title: "偏殿的茶",
    sceneShort: "偏殿里，掌权者忽然赐你一盏茶。茶不贵，贵的是众人都看见了。你知道这不是赏赐那么简单——被看见，也会成为靶子。",
    sceneFull: "偏殿里很静。那盏茶被递到你面前时，所有人的目光都轻轻移了一下。茶并不稀奇，稀奇的是谁给的、在什么时候给的、让多少人看见了。你忽然明白，宫里最危险的东西有时不是责罚，而是偏爱。",
    psychologicalMechanism: "资源处置模式与被优待焦虑。",
    realityMetaphor: "突然被领导赏识、被长辈偏爱、被某个圈层单独拉近。机会出现，也会带来风险。",
    options: [
      { id: "Q4_A", text: "安静收下，不告诉任何人", userAction: "低调消化特殊待遇。", psychology: "你知道被优待会制造靶心，因此选择降低可见度。", scoreDelta: s(1, 0, 2, 0, 0), tags: ["低调", "保全"], storyMemory: "她收下那盏茶，却没有让它成为第二天的谈资。" },
      { id: "Q4_B", text: "把茶端出去，与同屋几人分了", userAction: "把独享资源变成共享资源。", psychology: "你用分享拆掉靶心，也顺手攒下一点人情。", scoreDelta: s(0, 1, 0, 0, 3), tags: ["人心", "共享"], storyMemory: "她把茶分给了众人，把一份偏爱拆成许多份人情。" },
      { id: "Q4_C", text: "收下茶，也收下这个信号", userAction: "承认自己可以被使用。", psychology: "你愿意把机会转化成位置，即使知道代价随之而来。", scoreDelta: s(1, 0, 0, 3, 1), tags: ["上升", "投诚"], storyMemory: "她没有推辞那盏茶，因为她知道那不是茶，是一扇门。" },
      { id: "Q4_D", text: "谢过后，只在私下回一份小礼", userAction: "建立私密通道。", psychology: "你不想公开站队，但愿意保留一条可用的暗线。", scoreDelta: s(2, 0, 1, 0, 1), tags: ["暗线", "看局"], storyMemory: "她没有让所有人知道自己懂了，只在暗处回了一份小礼。" }
    ]
  },
  {
    id: "Q5",
    order: 5,
    title: "你推开的门",
    sceneShort: "你信过的人把门从里面推上了。她没有害你到绝路，只是在关键时刻选择了自保。你站在门外，忽然不知道该恨她，还是该理解她。",
    sceneFull: "那扇门合上的声音很轻，却像落在你心口。她不是没有看见你，也不是不知道你需要她。她只是怕，怕自己也被拖下去。背叛有时并不狰狞，它只是一个人先把自己救走了。",
    psychologicalMechanism: "依恋创伤反应与信任重建模式。",
    realityMetaphor: "朋友、同事、伴侣或家人在关键时刻没有站在你这边。不是大恶，却足够疼。",
    options: [
      { id: "Q5_A", text: "当面问她：你怕的时候，为什么推了我", userAction: "把伤口摆到桌面上。", psychology: "你需要关系中的真实解释，不愿让伤害被含糊带过。", scoreDelta: s(0, 3, -1, 1, 0), tags: ["真实", "直面"], storyMemory: "她没有装作无事，而是问出了那句最疼的话。" },
      { id: "Q5_B", text: "不再追问，只在心里划掉她的名字", userAction: "静默切割。", psychology: "你用撤回信任保护自己，不再给第二次伤害机会。", scoreDelta: s(1, 1, 2, 0, -1), tags: ["切割", "防御"], storyMemory: "她没有责问，只在心里把那个人的名字划掉。" },
      { id: "Q5_C", text: "绕开她，开始替自己另找路", userAction: "把背叛转化为独立。", psychology: "你不急着处理关系，先处理自己的出路。", scoreDelta: s(1, 0, 1, 2, 0), tags: ["独立", "转向"], storyMemory: "她没有再敲那扇门，而是去找另一条路。" },
      { id: "Q5_D", text: "记住她也害怕，但不再把后背交给她", userAction: "理解但降级。", psychology: "你能理解对方处境，但会重新调整信任边界。", scoreDelta: s(2, 2, 1, 0, 0), tags: ["理解", "边界"], storyMemory: "她理解了那个人的怕，也收回了自己的后背。" }
    ]
  },
  {
    id: "Q6",
    order: 6,
    title: "你知道的事",
    sceneShort: "你偶然知道了对手最不能被人知道的秘密。只要说出去，她会倒下；只要不说，这个秘密就会一直悬在你手里。",
    sceneFull: "秘密落到你手里时，并没有想象中痛快。它太轻了，轻得像一张纸；又太重了，重得能压断一个人的路。你忽然发现，真正的考验不是你能不能反击，而是当你终于有能力伤人时，你想成为什么样的人。",
    psychologicalMechanism: "道德边界、黑暗冲动与权力使用的第一道考验。",
    realityMetaphor: "你掌握了某人的把柄、聊天记录、错误或秘密。你可以赢，但会改变自己。",
    options: [
      { id: "Q6_A", text: "保留秘密，但不主动使用", userAction: "让未知成为威慑。", psychology: "你不急着伤人，知道有些牌不打出去更有用。", scoreDelta: s(3, 0, 1, 0, 0), tags: ["威慑", "看局"], storyMemory: "她把那个秘密留在手里，让它不说话地存在。" },
      { id: "Q6_B", text: "只让她知道你已经知道", userAction: "亮剑但不刺。", psychology: "你用边界警告对方，同时避免真正越线。", scoreDelta: s(2, 1, 0, 1, 0), tags: ["警告", "边界"], storyMemory: "她没有把秘密说出去，只让对方知道她已经看见。" },
      { id: "Q6_C", text: "把秘密递给能让她倒下的人", userAction: "借别人的手完成反击。", psychology: "你愿意使用权力工具，哪怕自己不亲自出面。", scoreDelta: s(2, -1, 0, 3, 0), tags: ["借刀", "反击"], storyMemory: "她没有亲自开口，只把秘密送到了该听见的人那里。" },
      { id: "Q6_D", text: "把证据烧掉，不让自己变成那种人", userAction: "销毁武器。", psychology: "你把自我一致性放在胜负之前。", scoreDelta: s(-1, 3, 1, 0, 0), tags: ["良知", "自我一致"], storyMemory: "她烧掉了那张纸，因为她不想靠这个赢。" }
    ]
  },
  {
    id: "Q7",
    order: 7,
    title: "风往哪边吹",
    sceneShort: "风暴将至，三股力量都在等你靠近。最强的未必最稳，最亲近的未必赢，最沉默的也许站得最久。你必须选一边，或者让别人以为你选了。",
    sceneFull: "宫里的风从来不是突然起的。它先吹动帘角，再吹偏烛火，最后吹到每个人的袖口。三股力量都在等你靠近。你知道没有中立，所谓不选，也是一种会被记下来的选择。",
    psychologicalMechanism: "权力取向、依赖模式与判断力考验。",
    realityMetaphor: "公司站队、家庭阵营、朋友圈分裂。每一边都说自己才是正确的。",
    options: [
      { id: "Q7_A", text: "靠向最强的一边，先保住自己", userAction: "选择最大靠山。", psychology: "你优先考虑安全和资源集中。", scoreDelta: s(0, -1, 2, 2, 1), tags: ["安全", "靠山"], storyMemory: "她站到了最强的那边，因为先活下来才有以后。" },
      { id: "Q7_B", text: "靠向最像自己的一边", userAction: "选择价值相近的人。", psychology: "你需要认同感，不愿只按利益站队。", scoreDelta: s(0, 3, 0, 1, 1), tags: ["认同", "情感"], storyMemory: "她选择了那个最像自己的人，哪怕那不是最安全的选择。" },
      { id: "Q7_C", text: "靠向站得最久的人", userAction: "选择长期稳定。", psychology: "你重视耐力和结构位置，不被短期声势迷惑。", scoreDelta: s(3, 0, 2, 0, 0), tags: ["长期", "判断"], storyMemory: "她没有选最亮的人，而是选了站得最久的人。" },
      { id: "Q7_D", text: "请最资深的人替你指一条路", userAction: "把选择外包给权威。", psychology: "你用谦卑换背书，把风险的一部分转移出去。", scoreDelta: s(1, 0, 0, 0, 2), tags: ["借势", "权威"], storyMemory: "她没有说自己选谁，只让更有分量的人替她指了路。" }
    ]
  },
  {
    id: "Q8",
    order: 8,
    title: "堂前的目光",
    sceneShort: "众人面前，你被一句话轻轻压低。那话不重，却足够让所有人看见你被放在了哪里。你知道，对方要的不是你认错，是你失态。",
    sceneFull: "那句话落下来时，堂前没有人笑，可你知道他们都听见了。羞辱最厉害的地方，不是它多难听，而是它让你在所有人的目光里失去位置。对方要的也许不是你认错，而是你把痛写在脸上。",
    psychologicalMechanism: "尊严维护策略与公开羞耻应对。",
    realityMetaphor: "会议上被点名、家庭聚会被讽刺、公共场合被轻轻贬低。",
    options: [
      { id: "Q8_A", text: "像没听见一样继续手里的事", userAction: "不给对方反应。", psychology: "你拒绝让自己的失态成为对方的战利品。", scoreDelta: s(1, 0, 3, 0, -1), tags: ["忍耐", "不失态"], storyMemory: "她像没听见一样继续手里的事，没有给出那滴眼泪。" },
      { id: "Q8_B", text: "低头应下，把话接得干净", userAction: "用服从结束羞辱。", psychology: "你优先止损，避免冲突继续扩大。", scoreDelta: s(0, 0, 2, 0, 1), tags: ["止损", "求稳"], storyMemory: "她低头接下那句话，让羞辱到此为止。" },
      { id: "Q8_C", text: "端起杯子走向更高处，把场面翻过去", userAction: "翻转权力现场。", psychology: "你愿意冒险夺回叙事权。", scoreDelta: s(1, 1, -1, 3, 1), tags: ["翻场", "冒险"], storyMemory: "她端着杯子走向更高处，把所有人的目光重新带走。" },
      { id: "Q8_D", text: "记下今天在场的人，等散场后处理", userAction: "把羞辱转入私下战场。", psychology: "你不在当场争输赢，更重视后续控制。", scoreDelta: s(3, 0, 1, 0, 0), tags: ["延迟反击", "记账"], storyMemory: "她没有当场回嘴，只记住了堂前每一张脸。" }
    ]
  }
];
