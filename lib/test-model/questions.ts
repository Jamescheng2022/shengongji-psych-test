import type { Question, Weights } from "./types";

const w = (agency: number, caution: number, affiliation: number, boundary: number, emotionality: number, power: number): Weights => ({
  agency,
  caution,
  affiliation,
  boundary,
  emotionality,
  power,
});

export const chapterTitles = ["初入宫门", "珠帘暗涌", "锦帐风波", "长夜藏锋", "凤印将落"];

export const questions: Question[] = [
  {
    id: "q01",
    chapter: 1,
    order: 1,
    title: "第一眼",
    scene: "新入宫的清晨，掌事姑姑让众人各自报出擅长之事。有人抢着献艺，有人低头装怯。她的目光停在你身上，殿里忽然安静下来。",
    pressurePoint: "陌生秩序中的自我呈现",
    hiddenConstruct: "主动性、边界与社会呈现",
    choices: [
      { id: "a", text: "只说一项最稳的本事，不多解释", weights: w(1, 2, 0, 3, -1, 0), tags: ["稳态", "边界"] },
      { id: "b", text: "微笑补一句，愿替姑姑分忧", weights: w(2, 0, 3, 0, 1, 1), tags: ["靠近", "关系"] },
      { id: "c", text: "先看别人反应，再用最不起眼的话收尾", weights: w(0, 3, 2, 1, 1, 0), tags: ["观察", "藏锋"] },
      { id: "d", text: "故意露出一点锋芒，让人记住你", weights: w(3, -1, 0, 0, 1, 3), tags: ["显露", "权力"] }
    ]
  },
  {
    id: "q02",
    chapter: 1,
    order: 2,
    title: "错位的寝铺",
    scene: "夜里分铺位，你的位置被人悄悄换到最潮冷的角落。负责登记的小宫女说是名册如此，旁边几个人假装没听见。",
    pressurePoint: "低位处境中的边界维护",
    hiddenConstruct: "边界、自保与冲突方式",
    choices: [
      { id: "a", text: "当面请她重查名册，不争吵也不退", weights: w(2, 1, 0, 3, 0, 1), tags: ["边界", "直接"] },
      { id: "b", text: "先住下，夜里找出是谁动了手脚", weights: w(1, 3, 1, 1, 1, 1), tags: ["调查", "忍耐"] },
      { id: "c", text: "和旁人换一件小物，借人情换位置", weights: w(1, 0, 3, -1, 1, 1), tags: ["交换", "关系"] },
      { id: "d", text: "直接搬回原位，让她们先来拦你", weights: w(3, -1, -1, 3, 2, 2), tags: ["强边界", "对抗"] }
    ]
  },
  {
    id: "q03",
    chapter: 1,
    order: 3,
    title: "第一盏茶",
    scene: "贵妃殿里缺人奉茶，姑姑临时点了你。茶盏很烫，大宫女却故意催你快些，像是等你失手。",
    pressurePoint: "被注视时的压力反应",
    hiddenConstruct: "压力敏感、讨好与自我保护",
    choices: [
      { id: "a", text: "放慢半步，稳稳奉上，不接催促", weights: w(1, 2, 0, 2, -1, 0), tags: ["稳定", "自持"] },
      { id: "b", text: "顺着催促加快，宁可烫到自己", weights: w(0, 1, 2, -2, 3, -1), tags: ["讨好", "牺牲"] },
      { id: "c", text: "轻声说茶烫，请娘娘稍候片刻", weights: w(2, 0, 1, 3, 0, 0), tags: ["表达", "边界"] },
      { id: "d", text: "借转身避开她的视线，换个角度上前", weights: w(1, 3, 1, 1, 1, 0), tags: ["避锋", "应变"] }
    ]
  },
  {
    id: "q04",
    chapter: 1,
    order: 4,
    title: "被借走的簪子",
    scene: "同屋宫女要借你唯一像样的簪子，说只是戴一刻钟。你看见她袖口露出贵妃殿的绣线，知道这不是普通借物。",
    pressurePoint: "资源与信任的第一次测试",
    hiddenConstruct: "信任、边界与策略交换",
    choices: [
      { id: "a", text: "借给她，但记清她去见了谁", weights: w(1, 2, 3, 0, 1, 1), tags: ["试探", "关系"] },
      { id: "b", text: "笑着说簪脚松了，改借一支旧的", weights: w(1, 3, 1, 2, 0, 0), tags: ["软拒绝", "藏锋"] },
      { id: "c", text: "直接不借，东西少更不能乱给", weights: w(1, 1, -1, 3, 0, 0), tags: ["拒绝", "边界"] },
      { id: "d", text: "借出去，顺势请她替你带句话", weights: w(2, 0, 3, -1, 1, 3), tags: ["交换", "借势"] }
    ]
  },
  {
    id: "q05",
    chapter: 1,
    order: 5,
    title: "一句夸奖",
    scene: "掌事姑姑当众夸你手脚利落。夸奖刚落，旁边的人就安静了几分。你知道这句话会让你被看见，也会让你被记恨。",
    pressurePoint: "被认可后的自我调节",
    hiddenConstruct: "地位暴露、关系缓冲与安全感",
    choices: [
      { id: "a", text: "立刻把功劳分给同屋几人", weights: w(0, 1, 3, -1, 2, -1), tags: ["缓和", "关系"] },
      { id: "b", text: "只谢一句，不解释也不推让", weights: w(2, 1, 0, 2, -1, 1), tags: ["承接", "稳定"] },
      { id: "c", text: "之后做事更低调，避开风头", weights: w(0, 3, 1, 1, 1, -1), tags: ["藏锋", "避险"] },
      { id: "d", text: "趁热再多做一件能被看见的事", weights: w(3, -1, 0, 0, 1, 3), tags: ["进取", "权力"] }
    ]
  },
  {
    id: "q06",
    chapter: 1,
    order: 6,
    title: "宫门落钥",
    scene: "落钥前，你发现一名小宫女被罚跪在廊下。她曾白日里帮你说过一句话。你若出面，可能一起被牵连；若不出面，没人会知道。",
    pressurePoint: "情义与自保的初次冲突",
    hiddenConstruct: "共情、边界与风险承担",
    choices: [
      { id: "a", text: "悄悄送热水，不让人知道是你", weights: w(0, 2, 3, 1, 2, -1), tags: ["暗助", "共情"] },
      { id: "b", text: "去找能说得上话的人求情", weights: w(2, 0, 3, 0, 2, 1), tags: ["借力", "关系"] },
      { id: "c", text: "记下这事，先不把自己拖进去", weights: w(0, 3, 0, 2, 0, 0), tags: ["自保", "藏锋"] },
      { id: "d", text: "当场陪她跪下，让责罚变得难看", weights: w(3, -1, 2, 1, 3, 0), tags: ["孤勇", "正面"] }
    ]
  },
  {
    id: "q07",
    chapter: 2,
    order: 7,
    title: "一碟桂花糕",
    scene: "有位受宠的姐姐把桂花糕推到你面前，说新来的人总要有人照应。她笑得温柔，可她身边的人都在看你的手。",
    pressurePoint: "善意背后的动机判断",
    hiddenConstruct: "关系需求、警觉与互惠策略",
    choices: [
      { id: "a", text: "收下糕点，也回赠一件不贵重的小物", weights: w(1, 1, 3, 1, 1, 1), tags: ["互惠", "关系"] },
      { id: "b", text: "谢过但不吃，等看清她的来意", weights: w(0, 3, 1, 2, 1, 0), tags: ["试探", "观察"] },
      { id: "c", text: "当众吃一块，表示自己不怕欠情", weights: w(2, -1, 2, -1, 2, 2), tags: ["冒险", "靠近"] },
      { id: "d", text: "转送给同屋，让这份人情散开", weights: w(0, 2, 3, 0, 0, 0), tags: ["分散", "人心"] }
    ]
  },
  {
    id: "q08",
    chapter: 2,
    order: 8,
    title: "帘后的名字",
    scene: "你无意听见两个人在帘后提到你的名字。她们没有说坏话，只说你看起来不简单。脚步声越来越近，你可以选择是否现身。",
    pressurePoint: "被评价时的反应控制",
    hiddenConstruct: "评价敏感、社交监控与直接性",
    choices: [
      { id: "a", text: "装作刚到，平静打招呼", weights: w(1, 2, 2, 1, 0, 0), tags: ["镇定", "关系"] },
      { id: "b", text: "退回去，暂时不让她们知道你听见", weights: w(0, 3, 1, 1, 2, 0), tags: ["隐藏", "观察"] },
      { id: "c", text: "直接掀帘，笑问哪里不简单", weights: w(3, -1, 1, 1, 2, 2), tags: ["正面", "锋芒"] },
      { id: "d", text: "隔日故意露出一点笨拙，降低戒心", weights: w(1, 3, 2, 0, 1, 2), tags: ["伪装", "策略"] }
    ]
  },
  {
    id: "q09",
    chapter: 2,
    order: 9,
    title: "站在哪边",
    scene: "两位掌事暗中不和。今日分活时，双方都给了你一个看似轻松的位置。你知道无论选哪边，都会被另一边记住。",
    pressurePoint: "阵营压力中的选择策略",
    hiddenConstruct: "权力距离、边界与结盟倾向",
    choices: [
      { id: "a", text: "选更合规的一边，把理由说成规矩", weights: w(1, 2, 0, 3, 0, 0), tags: ["规矩", "边界"] },
      { id: "b", text: "选能保护弱者的一边，即使吃亏", weights: w(1, 0, 3, 0, 3, -1), tags: ["共情", "情义"] },
      { id: "c", text: "暂时接下中间活，给两边都留余地", weights: w(1, 3, 2, 1, 1, 1), tags: ["周旋", "藏锋"] },
      { id: "d", text: "选更有前途的一边，早些押注", weights: w(3, -1, 0, -1, 1, 3), tags: ["押注", "权力"] }
    ]
  },
  {
    id: "q10",
    chapter: 2,
    order: 10,
    title: "不该听见的话",
    scene: "夜里你听见上头人提到一件错账。若你装作不知，能免去麻烦；若你提醒，可能被卷入更深的事。",
    pressurePoint: "信息风险与责任边界",
    hiddenConstruct: "责任感、风险评估和控制动机",
    choices: [
      { id: "a", text: "只把事实记清，不急着递出去", weights: w(0, 3, 0, 2, 0, 0), tags: ["留证", "谨慎"] },
      { id: "b", text: "找可信的人旁敲侧击提醒", weights: w(1, 2, 3, 0, 1, 1), tags: ["借力", "关系"] },
      { id: "c", text: "直接提醒负责的人，免得事情变大", weights: w(2, 0, 1, 2, 1, 0), tags: ["负责", "直接"] },
      { id: "d", text: "把这条消息留作日后的筹码", weights: w(2, 2, -1, 0, 0, 3), tags: ["筹码", "权力"] }
    ]
  },
  {
    id: "q11",
    chapter: 2,
    order: 11,
    title: "替人受过",
    scene: "同屋的人打翻了药盏，却哭着求你先替她认下，说她若再犯就会被赶出去。你知道这事不大，但会留在名册上。",
    pressurePoint: "共情与自我边界",
    hiddenConstruct: "讨好、责任归属和拒绝能力",
    choices: [
      { id: "a", text: "不替她认，但陪她一起去说明", weights: w(1, 1, 2, 3, 1, 0), tags: ["陪伴", "边界"] },
      { id: "b", text: "先替她认下，之后再慢慢说清", weights: w(0, 1, 3, -2, 3, -1), tags: ["牺牲", "共情"] },
      { id: "c", text: "让她自己去，你只提供一句证言", weights: w(1, 1, 0, 3, -1, 0), tags: ["分寸", "责任"] },
      { id: "d", text: "借此让她欠你一个大人情", weights: w(2, 0, 2, 0, 1, 3), tags: ["交换", "权力"] }
    ]
  },
  {
    id: "q12",
    chapter: 2,
    order: 12,
    title: "突来的宠信",
    scene: "贵妃忽然让你近前伺候，还赏了一只香囊。殿里所有人都看见了。你知道这份宠信也可能是试探。",
    pressurePoint: "资源获得后的风险管理",
    hiddenConstruct: "地位动机、风险与人际缓冲",
    choices: [
      { id: "a", text: "收下但不张扬，照旧做事", weights: w(1, 3, 0, 2, 0, 1), tags: ["低调", "藏锋"] },
      { id: "b", text: "主动谢恩，并请示以后如何分内外事", weights: w(3, 0, 1, 2, 0, 2), tags: ["掌局", "规则"] },
      { id: "c", text: "回去先安抚同屋，免得生隙", weights: w(0, 1, 3, 0, 2, 0), tags: ["安抚", "关系"] },
      { id: "d", text: "借香囊让别人知道你已有靠山", weights: w(3, -1, 0, -1, 1, 3), tags: ["靠山", "权力"] }
    ]
  },
  {
    id: "q13",
    chapter: 3,
    order: 13,
    title: "锦帐里的空位",
    scene: "宴前座次忽然少了一个位置。原本留给你的地方被新受宠的人占了。她笑着向你举杯，仿佛只是无心。",
    pressurePoint: "地位受损时的即时反应",
    hiddenConstruct: "自尊、控制感和冲突调节",
    choices: [
      { id: "a", text: "另寻合适位置入座，先观察局势", weights: w(0, 3, 1, 2, 0, 0), tags: ["观察", "藏锋"] },
      { id: "b", text: "微笑回应，等宴后找座次负责人", weights: w(1, 2, 2, 2, 0, 1), tags: ["周旋", "分寸"] },
      { id: "c", text: "当场请人核对座次，不让这事含混", weights: w(3, 0, 0, 3, 1, 1), tags: ["正面", "边界"] },
      { id: "d", text: "顺势坐到更显眼处，让尴尬变成机会", weights: w(3, -1, 0, 0, 1, 3), tags: ["破局", "显露"] }
    ]
  },
  {
    id: "q14",
    chapter: 3,
    order: 14,
    title: "半句闲话",
    scene: "有人传你靠讨好上位。你知道传话的人是谁，也知道现在反驳只会让话传得更远。",
    pressurePoint: "名誉受损后的调节方式",
    hiddenConstruct: "情绪反应、证据意识和社交策略",
    choices: [
      { id: "a", text: "不急着辩解，先让事实自己露出来", weights: w(0, 3, 0, 2, -1, 0), tags: ["复盘", "藏锋"] },
      { id: "b", text: "找最关键的人解释，不向所有人证明", weights: w(1, 1, 2, 2, 1, 0), tags: ["解释", "分寸"] },
      { id: "c", text: "主动关心传话人，看看她真正怕什么", weights: w(1, 2, 3, 0, 1, 2), tags: ["读人", "关系"] },
      { id: "d", text: "制造一个更大的风向，把闲话压过去", weights: w(3, 0, 0, -1, 1, 3), tags: ["控局", "权力"] }
    ]
  },
  {
    id: "q15",
    chapter: 3,
    order: 15,
    title: "一封错送的信",
    scene: "一封本不该到你手里的信被送错。里面牵涉一位高位娘娘的隐秘安排。你若退回，可能被灭口；若留下，就握住了火。",
    pressurePoint: "危险信息的处理",
    hiddenConstruct: "风险承担、权力动机与安全边界",
    choices: [
      { id: "a", text: "原封不动退回，并让第三人在场", weights: w(1, 2, 0, 3, 1, 0), tags: ["边界", "留证"] },
      { id: "b", text: "抄下关键处，再找机会归还", weights: w(2, 3, 0, 1, 1, 3), tags: ["筹码", "藏锋"] },
      { id: "c", text: "找可信盟友一起判断", weights: w(1, 1, 3, 1, 2, 0), tags: ["联盟", "关系"] },
      { id: "d", text: "顺着信里的线索主动查下去", weights: w(3, -1, 0, -1, 2, 3), tags: ["破局", "冒险"] }
    ]
  },
  {
    id: "q16",
    chapter: 3,
    order: 16,
    title: "被送来的礼",
    scene: "一位平日与你并不亲近的人送来贵重礼物，说只是谢你从前一句提醒。礼太重，退回会伤面子，收下又像欠债。",
    pressurePoint: "馈赠中的隐性债务",
    hiddenConstruct: "互惠压力、边界和权力交换",
    choices: [
      { id: "a", text: "收一半，回一半，让人情不过界", weights: w(1, 1, 2, 3, 0, 0), tags: ["分寸", "互惠"] },
      { id: "b", text: "全部退回，理由说得温和但明确", weights: w(1, 2, 0, 3, 0, -1), tags: ["拒绝", "边界"] },
      { id: "c", text: "先收下，观察她接下来求什么", weights: w(1, 3, 2, 0, 1, 2), tags: ["试探", "观察"] },
      { id: "d", text: "收下并主动给她一个小机会", weights: w(2, 0, 3, -1, 1, 3), tags: ["交换", "借势"] }
    ]
  },
  {
    id: "q17",
    chapter: 3,
    order: 17,
    title: "贵妃的沉默",
    scene: "你办成了一件难事，贵妃却没有赏你，只淡淡看了你一眼。旁人都在猜她是不是不满。你也不知道自己哪里做错。",
    pressurePoint: "不确定反馈下的自我解释",
    hiddenConstruct: "评价焦虑、掌控感和情绪调节",
    choices: [
      { id: "a", text: "复盘每个细节，确认是否有纰漏", weights: w(0, 3, 0, 1, 1, 0), tags: ["复盘", "谨慎"] },
      { id: "b", text: "照常做事，不把一个眼神当结论", weights: w(1, 1, 0, 2, -2, 0), tags: ["稳定", "自持"] },
      { id: "c", text: "找熟悉她的人旁敲侧击", weights: w(1, 1, 3, 0, 2, 1), tags: ["求证", "关系"] },
      { id: "d", text: "再做一件更漂亮的事证明自己", weights: w(3, -1, 0, 0, 2, 2), tags: ["证明", "进取"] }
    ]
  },
  {
    id: "q18",
    chapter: 3,
    order: 18,
    title: "旧友的新位",
    scene: "旧日照顾过你的人忽然得势。她暗示你站到她身边，从此不用再看别人脸色。可你知道她对敌人从不手软。",
    pressurePoint: "亲近关系中的阵营邀请",
    hiddenConstruct: "依附、权力诱惑和价值边界",
    choices: [
      { id: "a", text: "谢她好意，但不立刻表态", weights: w(0, 3, 2, 2, 1, 0), tags: ["留余地", "谨慎"] },
      { id: "b", text: "站过去，至少她曾真心帮过你", weights: w(1, 0, 3, -1, 3, 1), tags: ["情义", "依附"] },
      { id: "c", text: "只合作具体事务，不把自己交出去", weights: w(2, 1, 1, 3, 0, 1), tags: ["边界", "合作"] },
      { id: "d", text: "主动替她处理一件棘手事，换取位置", weights: w(3, 0, 1, -1, 1, 3), tags: ["权力", "交换"] }
    ]
  },
  {
    id: "q19",
    chapter: 4,
    order: 19,
    title: "长夜问罪",
    scene: "深夜有人被带走审问。她与你只说过几句话，却在临走前看向你，像是希望你记得某个细节。",
    pressurePoint: "恐惧情境下的行动选择",
    hiddenConstruct: "共情、勇气与安全策略",
    choices: [
      { id: "a", text: "把她看你的细节记下，天亮再查", weights: w(0, 3, 1, 2, 1, 0), tags: ["留证", "藏锋"] },
      { id: "b", text: "立刻找人确认她被带去哪里", weights: w(2, 0, 3, 0, 3, 0), tags: ["共情", "行动"] },
      { id: "c", text: "先关好自己的门，避免被牵连", weights: w(0, 3, -1, 3, 0, -1), tags: ["自保", "边界"] },
      { id: "d", text: "冒险传出消息，让外头的人知道", weights: w(3, -1, 2, 1, 3, 1), tags: ["孤勇", "冒险"] }
    ]
  },
  {
    id: "q20",
    chapter: 4,
    order: 20,
    title: "无人处的眼泪",
    scene: "你终于在无人处崩了一下。可脚步声就在门外，来人可能是关心你，也可能是来探你的虚实。",
    pressurePoint: "脆弱暴露与信任判断",
    hiddenConstruct: "情绪开放、依恋与自我保护",
    choices: [
      { id: "a", text: "收住情绪，开门时像什么都没发生", weights: w(0, 3, 0, 2, 1, 0), tags: ["自持", "藏锋"] },
      { id: "b", text: "只承认累了，不说具体委屈", weights: w(0, 2, 2, 2, 2, 0), tags: ["适度暴露", "分寸"] },
      { id: "c", text: "若是可信的人，就说出真正原因", weights: w(0, 0, 3, 0, 3, -1), tags: ["信任", "共情"] },
      { id: "d", text: "把眼泪转成话术，让对方帮你一个忙", weights: w(2, 1, 2, -1, 2, 3), tags: ["借势", "权力"] }
    ]
  },
  {
    id: "q21",
    chapter: 4,
    order: 21,
    title: "旧伤被提起",
    scene: "有人当众提起你最不愿被人知道的一段旧事。她说得很轻，像玩笑，却刚好让所有人都听见。",
    pressurePoint: "羞耻触发与反击方式",
    hiddenConstruct: "情绪敏感、边界与攻击性",
    choices: [
      { id: "a", text: "平静打断，说这不是可玩笑的事", weights: w(2, 0, 0, 3, 2, 0), tags: ["边界", "表达"] },
      { id: "b", text: "笑着带过，回头再处理她", weights: w(1, 3, 1, 1, 1, 2), tags: ["藏锋", "秋后"] },
      { id: "c", text: "顺着玩笑讲完，不让别人看见你疼", weights: w(0, 2, 2, -1, 3, -1), tags: ["压抑", "讨好"] },
      { id: "d", text: "当场反问她为何知道得这么清楚", weights: w(3, -1, 0, 2, 3, 2), tags: ["反击", "正面"] }
    ]
  },
  {
    id: "q22",
    chapter: 4,
    order: 22,
    title: "一盏青灯",
    scene: "连日风波后，你被暂时冷落。没有人安排你做要紧事，也没有人主动靠近。长夜里，只剩桌上一盏青灯。",
    pressurePoint: "低谷中的自我恢复",
    hiddenConstruct: "恢复力、独处能力和关系需求",
    choices: [
      { id: "a", text: "趁无人打扰，把所有线索重新整理", weights: w(0, 3, 0, 2, -1, 0), tags: ["复盘", "修复"] },
      { id: "b", text: "去找一个可信的人说说话", weights: w(0, 0, 3, 0, 3, -1), tags: ["求助", "关系"] },
      { id: "c", text: "什么都不争，先把身体养回来", weights: w(0, 3, 0, 2, 0, -1), tags: ["恢复", "自保"] },
      { id: "d", text: "主动找一个机会，让自己重新被看见", weights: w(3, -1, 0, 0, 2, 2), tags: ["进取", "显露"] }
    ]
  },
  {
    id: "q23",
    chapter: 4,
    order: 23,
    title: "递来的刀",
    scene: "有人递给你一个可以扳倒对手的证据。证据是真的，但递刀的人明显也想借你之手除掉她。",
    pressurePoint: "被利用时的判断",
    hiddenConstruct: "权力动机、边界和策略控制",
    choices: [
      { id: "a", text: "先核实证据，不接她的情绪", weights: w(1, 3, 0, 3, -1, 1), tags: ["核实", "分寸"] },
      { id: "b", text: "接下证据，但不按她的时间动手", weights: w(2, 3, 0, 2, 0, 3), tags: ["控局", "藏锋"] },
      { id: "c", text: "问清她为何非要现在动手", weights: w(1, 2, 3, 1, 1, 1), tags: ["读人", "关系"] },
      { id: "d", text: "直接利用这把刀打破僵局", weights: w(3, -1, -1, 0, 2, 3), tags: ["破局", "权力"] }
    ]
  },
  {
    id: "q24",
    chapter: 4,
    order: 24,
    title: "一次求救",
    scene: "一个平日与你并不亲近的人来求你救她。她说若你不帮，她就真的没有退路。你看不出她说的有几分真。",
    pressurePoint: "求助情境中的责任边界",
    hiddenConstruct: "共情、怀疑和自我保护",
    choices: [
      { id: "a", text: "只帮她做能核实的一部分", weights: w(1, 2, 2, 3, 1, 0), tags: ["有限帮助", "边界"] },
      { id: "b", text: "先安抚她，问清所有细节", weights: w(0, 1, 3, 1, 3, 0), tags: ["共情", "询问"] },
      { id: "c", text: "拒绝直接卷入，但告诉她可走的路", weights: w(1, 2, 0, 3, 0, -1), tags: ["拒绝", "分寸"] },
      { id: "d", text: "若能换来关键消息，就帮她一次", weights: w(2, 1, 1, 0, 1, 3), tags: ["交换", "权力"] }
    ]
  },
  {
    id: "q25",
    chapter: 5,
    order: 25,
    title: "凤印前夜",
    scene: "宫中传言凤印将落，新秩序很快要定。你手里有一次靠近核心的机会，也有一条可以全身而退的路。",
    pressurePoint: "关键机会前的取舍",
    hiddenConstruct: "目标驱动、风险偏好和安全需求",
    choices: [
      { id: "a", text: "靠近核心，但先设好退路", weights: w(3, 2, 0, 2, 1, 3), tags: ["进取", "留后路"] },
      { id: "b", text: "全身而退，保住已有安稳", weights: w(0, 3, 0, 3, -1, -1), tags: ["自守", "安全"] },
      { id: "c", text: "先看自己能否保护身边的人", weights: w(1, 1, 3, 1, 3, 0), tags: ["情义", "责任"] },
      { id: "d", text: "押上筹码，抓住这次上升", weights: w(3, -1, 0, -1, 2, 3), tags: ["凤印", "权力"] }
    ]
  },
  {
    id: "q26",
    chapter: 5,
    order: 26,
    title: "最后的盟友",
    scene: "一路陪你走来的盟友希望你在关键时刻让一步。她说这是为了大局，可这一步会让你失去最重要的位置。",
    pressurePoint: "亲密关系与自我目标冲突",
    hiddenConstruct: "依附、边界、权力和自尊",
    choices: [
      { id: "a", text: "问清大局是谁的大局，再决定", weights: w(2, 2, 1, 3, 1, 1), tags: ["边界", "求证"] },
      { id: "b", text: "为了这段关系，暂时让一步", weights: w(0, 1, 3, -2, 3, -1), tags: ["让步", "情义"] },
      { id: "c", text: "只让不伤根本的一部分", weights: w(1, 2, 2, 3, 0, 1), tags: ["分寸", "合作"] },
      { id: "d", text: "不让，能并肩的人不该要你消失", weights: w(3, 0, 0, 3, 2, 2), tags: ["孤傲", "自我"] }
    ]
  },
  {
    id: "q27",
    chapter: 5,
    order: 27,
    title: "旧账翻出",
    scene: "有人在最后关头翻出你曾经的一个小错。错是真的，却被说成了不可饶恕的大罪。所有人都等你解释。",
    pressurePoint: "被审判时的自我维护",
    hiddenConstruct: "羞耻反应、边界与责任承担",
    choices: [
      { id: "a", text: "承认错处，但不接受被扩大成罪", weights: w(2, 1, 0, 3, 2, 0), tags: ["承担", "边界"] },
      { id: "b", text: "把前因后果完整摆出来", weights: w(1, 3, 0, 2, 1, 0), tags: ["复盘", "证据"] },
      { id: "c", text: "先看谁在等你失态，再决定说多少", weights: w(1, 3, 2, 1, 1, 2), tags: ["观察", "控局"] },
      { id: "d", text: "指出对方也有旧账，不让自己单独受审", weights: w(3, -1, -1, 1, 3, 3), tags: ["反击", "破局"] }
    ]
  },
  {
    id: "q28",
    chapter: 5,
    order: 28,
    title: "一纸调令",
    scene: "你得到一纸调令，可以离开风暴中心。许多人以为这是失势，只有你知道这也许是另一种自由。",
    pressurePoint: "离开与留下的意义判断",
    hiddenConstruct: "自主性、安全感和地位需求",
    choices: [
      { id: "a", text: "离开，但保留能回来的一条线", weights: w(1, 3, 0, 3, -1, 1), tags: ["退路", "清醒"] },
      { id: "b", text: "离开，终于不用再被卷进去", weights: w(0, 3, 0, 3, -2, -2), tags: ["旁观", "自守"] },
      { id: "c", text: "先问清谁会因你离开受影响", weights: w(0, 1, 3, 1, 2, -1), tags: ["牵挂", "关系"] },
      { id: "d", text: "留下，风暴中心才有真正的位置", weights: w(3, -1, 0, -1, 2, 3), tags: ["权力", "上升"] }
    ]
  },
  {
    id: "q29",
    chapter: 5,
    order: 29,
    title: "殿前一问",
    scene: "高位者忽然问你：若今日无人奖赏你，你还会不会做同样的选择？这句话像是在问功劳，也像是在问心。",
    pressurePoint: "价值感与外部认可",
    hiddenConstruct: "内在原则、权力动机和关系需要",
    choices: [
      { id: "a", text: "会，因为那是当时最稳妥的选择", weights: w(1, 2, 0, 2, -1, 0), tags: ["稳定", "判断"] },
      { id: "b", text: "会，因为有人因此少受一点苦", weights: w(0, 0, 3, 1, 3, -1), tags: ["共情", "价值"] },
      { id: "c", text: "未必，若无人看见就要换一种做法", weights: w(2, 1, 0, 0, 0, 3), tags: ["现实", "权力"] },
      { id: "d", text: "会，因为我不能背叛自己的判断", weights: w(2, 0, 0, 3, 2, 0), tags: ["自我", "孤勇"] }
    ]
  },
  {
    id: "q30",
    chapter: 5,
    order: 30,
    title: "命册落印",
    scene: "最后一页命册展开，上面没有写你的结局，只留下一句：若重来一次，你最想保住什么？",
    pressurePoint: "核心自我价值",
    hiddenConstruct: "人格整合与最终价值排序",
    choices: [
      { id: "a", text: "保住能掌握局面的能力", weights: w(3, 0, 0, 0, 0, 3), tags: ["掌局", "权力"] },
      { id: "b", text: "保住不被吞没的自己", weights: w(1, 2, 0, 3, 0, 0), tags: ["边界", "自我"] },
      { id: "c", text: "保住仍愿意相信人的心", weights: w(0, 0, 3, 0, 3, -1), tags: ["人心", "共情"] },
      { id: "d", text: "保住随时能抽身的清醒", weights: w(0, 3, 0, 3, -2, -1), tags: ["清醒", "旁观"] }
    ]
  }
];
