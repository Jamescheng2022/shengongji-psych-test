import type { Question, Weights } from "./types";

const w = (agency: number, defense: number, relation: number, risk: number, boundary: number): Weights => ({
  agency,
  defense,
  relation,
  risk,
  boundary,
});

export const chapterTitles = [
  "初入宫门",
  "珠帘暗涌",
  "锦帐风波",
  "长夜藏锋",
  "凤印将落",
];

export const questions: Question[] = [
  {
    id: "q01",
    chapter: 1,
    order: 1,
    title: "第一眼",
    scene: "新入宫的清晨，掌事姑姑让众人各自报出擅长之事。有人抢着献艺，有人低头装怯。她的目光停在你身上，殿里忽然安静下来。",
    pressurePoint: "陌生秩序中的自我呈现",
    choices: [
      { id: "a", text: "只说一项最稳的本事，不多解释", weights: w(1, 1, 0, -1, 2), tags: ["稳态", "边界"] },
      { id: "b", text: "微笑补一句，愿替姑姑分忧", weights: w(2, 0, 2, 1, 0), tags: ["靠近权力", "关系"] },
      { id: "c", text: "先看别人反应，再用最不起眼的话收尾", weights: w(0, 2, 2, -1, 1), tags: ["观察", "防御"] },
      { id: "d", text: "故意露出一点锋芒，让人记住你", weights: w(3, -1, 0, 2, 0), tags: ["显露", "冒险"] }
    ]
  },
  {
    id: "q02",
    chapter: 1,
    order: 2,
    title: "错位的寝铺",
    scene: "夜里分铺位，你的位置被人悄悄换到最潮冷的角落。负责登记的小宫女说是名册如此，旁边几个人假装没听见。",
    pressurePoint: "低位处境中的边界维护",
    choices: [
      { id: "a", text: "当面请她重查名册，不争吵也不退", weights: w(2, 0, 0, 0, 3), tags: ["边界", "直接"] },
      { id: "b", text: "先住下，夜里找出是谁动了手脚", weights: w(1, 3, 2, -1, 1), tags: ["忍耐", "调查"] },
      { id: "c", text: "和旁人换一件小物，借人情换位置", weights: w(1, 0, 3, 0, -1), tags: ["交换", "关系"] },
      { id: "d", text: "直接搬回原位，让她们先来拦你", weights: w(3, -1, -1, 3, 2), tags: ["冒险", "强边界"] }
    ]
  },
  {
    id: "q03",
    chapter: 1,
    order: 3,
    title: "第一盏茶",
    scene: "贵妃殿里缺人奉茶，姑姑临时点了你。茶盏很烫，贵妃身边的大宫女却故意催你快些，像是等你失手。",
    pressurePoint: "被注视时的压力反应",
    choices: [
      { id: "a", text: "放慢半步，稳稳奉上，不接催促", weights: w(1, 2, 0, -1, 2), tags: ["稳定", "防御"] },
      { id: "b", text: "顺着催促加快，宁可烫到自己", weights: w(0, 1, 1, 1, -2), tags: ["讨好", "牺牲"] },
      { id: "c", text: "轻声说茶烫，请娘娘稍候片刻", weights: w(2, 0, 1, 0, 3), tags: ["表达", "边界"] },
      { id: "d", text: "借转身避开她的视线，换个角度上前", weights: w(1, 2, 2, 0, 1), tags: ["避锋", "观察"] }
    ]
  },
  {
    id: "q04",
    chapter: 1,
    order: 4,
    title: "被借走的簪子",
    scene: "同屋宫女要借你唯一像样的簪子，说只是戴一刻钟。你看见她袖口露出贵妃殿的绣线，知道这不是普通借物。",
    pressurePoint: "资源与信任的第一次测试",
    choices: [
      { id: "a", text: "借给她，但记清她去见了谁", weights: w(1, 2, 3, 1, 0), tags: ["试探", "关系"] },
      { id: "b", text: "笑着说簪脚松了，改借一支旧的", weights: w(1, 2, 2, -1, 2), tags: ["软拒绝", "边界"] },
      { id: "c", text: "直接不借，东西少更不能乱给", weights: w(1, 0, -1, -1, 3), tags: ["拒绝", "边界"] },
      { id: "d", text: "借出去，顺势请她替你带句话", weights: w(2, 0, 3, 2, -1), tags: ["交换", "冒险"] }
    ]
  },
  {
    id: "q05",
    chapter: 1,
    order: 5,
    title: "一句夸奖",
    scene: "掌事姑姑当众夸你手脚利落。夸奖刚落，旁边的人就安静了几分。你知道这句话会让你被看见，也会让你被记恨。",
    pressurePoint: "被认可后的自我调节",
    choices: [
      { id: "a", text: "立刻把功劳分给同屋几人", weights: w(0, 1, 3, -1, -1), tags: ["缓和", "关系"] },
      { id: "b", text: "只谢一句，不解释也不推让", weights: w(2, 1, 0, 0, 2), tags: ["承接", "稳定"] },
      { id: "c", text: "之后做事更低调，避开风头", weights: w(0, 3, 1, -2, 1), tags: ["藏锋", "防御"] },
      { id: "d", text: "趁热再多做一件能被看见的事", weights: w(3, -1, 0, 2, 0), tags: ["进取", "机会"] }
    ]
  },
  {
    id: "q06",
    chapter: 1,
    order: 6,
    title: "宫门落钥",
    scene: "落钥前，你发现一名小宫女被罚跪在廊下。她曾白日里帮你说过一句话。你若出面，可能一起被牵连；若不出面，没人会知道。",
    pressurePoint: "情义与自保的初次冲突",
    choices: [
      { id: "a", text: "悄悄送热水，不让人知道是你", weights: w(0, 2, 2, -1, 1), tags: ["暗助", "共情"] },
      { id: "b", text: "去找能说得上话的人求情", weights: w(2, 0, 3, 1, 0), tags: ["借力", "关系"] },
      { id: "c", text: "记下这事，先不把自己拖进去", weights: w(0, 3, 0, -2, 2), tags: ["自保", "防御"] },
      { id: "d", text: "当场陪她跪下，让责罚变得难看", weights: w(3, -1, 1, 3, 1), tags: ["对抗", "冒险"] }
    ]
  },

  {
    id: "q07",
    chapter: 2,
    order: 7,
    title: "一碟桂花糕",
    scene: "有位受宠的姐姐把桂花糕推到你面前，说新来的人总要有人照应。她笑得温柔，可她身边的人都在看你的手。",
    pressurePoint: "善意背后的动机判断",
    choices: [
      { id: "a", text: "收下糕点，也回赠一件不贵重的小物", weights: w(1, 0, 3, 0, 1), tags: ["互惠", "关系"] },
      { id: "b", text: "谢过但不吃，等看清她的来意", weights: w(0, 3, 2, -1, 2), tags: ["试探", "防御"] },
      { id: "c", text: "当众吃一块，表示自己不怕欠情", weights: w(2, -1, 2, 2, -1), tags: ["冒险", "靠近"] },
      { id: "d", text: "转送给同屋，让这份人情散开", weights: w(0, 1, 3, 0, 0), tags: ["分散风险", "关系"] }
    ]
  },
  {
    id: "q08",
    chapter: 2,
    order: 8,
    title: "帘后的名字",
    scene: "你无意听见两个人在帘后提到你的名字。她们没有说坏话，只说你“看起来不简单”。脚步声越来越近，你可以选择是否现身。",
    pressurePoint: "被评价时的反应控制",
    choices: [
      { id: "a", text: "装作刚到，平静打招呼", weights: w(1, 2, 2, -1, 1), tags: ["镇定", "关系"] },
      { id: "b", text: "退回去，暂时不让她们知道你听见", weights: w(0, 3, 2, -2, 1), tags: ["隐藏", "观察"] },
      { id: "c", text: "直接掀帘，笑问哪里不简单", weights: w(3, -1, 1, 2, 1), tags: ["正面", "冒险"] },
      { id: "d", text: "隔日故意露出一点笨拙，降低戒心", weights: w(0, 3, 3, -1, 0), tags: ["伪装", "策略"] }
    ]
  },
  {
    id: "q09",
    chapter: 2,
    order: 9,
    title: "站在哪边",
    scene: "两位掌事暗中不和。今日分活时，双方都给了你一个看似轻松的位置。你知道无论选哪边，都会被另一边记住。",
    pressurePoint: "阵营压力中的选择策略",
    choices: [
      { id: "a", text: "选离规矩最近的那边，少留把柄", weights: w(1, 2, 0, -2, 2), tags: ["规避", "边界"] },
      { id: "b", text: "选更有前途的那边，早些押注", weights: w(3, -1, 1, 3, -1), tags: ["押注", "权力"] },
      { id: "c", text: "请她们按名册安排，不主动站队", weights: w(0, 1, 0, -1, 3), tags: ["中立", "边界"] },
      { id: "d", text: "选弱的一边，先换一个真心人情", weights: w(1, 0, 3, 1, 0), tags: ["人情", "关系"] }
    ]
  },
  {
    id: "q10",
    chapter: 2,
    order: 10,
    title: "被托付的秘密",
    scene: "同屋宫女哭着告诉你，她私下替人传过一封信，如今怕被查出来。她求你替她藏一晚。你不知道信里写了什么。",
    pressurePoint: "亲密请求与风险边界",
    choices: [
      { id: "a", text: "不碰信，只陪她想别的脱身法", weights: w(1, 1, 2, -1, 3), tags: ["边界", "共情"] },
      { id: "b", text: "替她藏下，先救眼前的人", weights: w(0, 1, 3, 2, -3), tags: ["牺牲", "关系"] },
      { id: "c", text: "让她当你面把信烧了", weights: w(2, 1, 0, 1, 2), tags: ["决断", "止损"] },
      { id: "d", text: "问清信从何来，再决定帮到哪一步", weights: w(1, 2, 3, 0, 1), tags: ["调查", "关系"] }
    ]
  },
  {
    id: "q11",
    chapter: 2,
    order: 11,
    title: "赏银分法",
    scene: "你们几人共同完成差事，贵妃赏下一小袋银子。出力最多的是你，但开口分银的人想平均分，众人都等你点头。",
    pressurePoint: "公平、关系与自我价值",
    choices: [
      { id: "a", text: "同意平均分，换大家欠你一句明白", weights: w(0, 1, 3, -1, -1), tags: ["关系", "让渡"] },
      { id: "b", text: "按出力多少分，说得清清楚楚", weights: w(3, 0, -1, 1, 3), tags: ["公平", "边界"] },
      { id: "c", text: "自己少拿一点，但指定下次由你安排", weights: w(2, 1, 3, 1, 0), tags: ["交换", "权力"] },
      { id: "d", text: "不争这次，记下谁装糊涂", weights: w(0, 3, 2, -2, 1), tags: ["记账", "防御"] }
    ]
  },
  {
    id: "q12",
    chapter: 2,
    order: 12,
    title: "雨夜同行",
    scene: "雨夜回廊湿滑，一位平日和你疏远的人忽然要与你同行。她说只是怕黑，可你知道她刚从贵妃殿出来。",
    pressurePoint: "靠近与警惕的平衡",
    choices: [
      { id: "a", text: "同行，但一路只说无关紧要的话", weights: w(0, 2, 2, -1, 2), tags: ["防御", "礼貌"] },
      { id: "b", text: "主动问她是不是遇到了难处", weights: w(1, 0, 3, 1, -1), tags: ["靠近", "共情"] },
      { id: "c", text: "借口有事，让她先走", weights: w(0, 2, -1, -2, 3), tags: ["拒绝", "边界"] },
      { id: "d", text: "陪她走完，再把这件事告诉可信的人", weights: w(1, 2, 3, 0, 1), tags: ["留证", "关系"] }
    ]
  },

  {
    id: "q13",
    chapter: 3,
    order: 13,
    title: "账册上的错",
    scene: "掌事姑姑当众说你账册记错了。你知道错不在你，但她身后站着贵妃。众人都在等你开口。",
    pressurePoint: "公开羞辱与证据策略",
    choices: [
      { id: "a", text: "只认未查清，先保住场面", weights: w(0, 3, 1, -2, 1), tags: ["忍耐", "防御"] },
      { id: "b", text: "轻声指出证据，让她自己收回话", weights: w(2, 1, 2, 1, 2), tags: ["证据", "边界"] },
      { id: "c", text: "不争辩，夜里把账册送到更高的人手里", weights: w(2, 3, 2, 0, 1), tags: ["延迟反击", "策略"] },
      { id: "d", text: "当场问她按哪本账册核的", weights: w(3, -1, 0, 3, 2), tags: ["正面", "冒险"] }
    ]
  },
  {
    id: "q14",
    chapter: 3,
    order: 14,
    title: "被夺的差事",
    scene: "你准备多日的差事被临时换给别人。她笑着说自己也是奉命。你看见她手上戴着昨日新赏的戒子。",
    pressurePoint: "资源被夺后的反应",
    choices: [
      { id: "a", text: "交出差事，但留下全部交接痕迹", weights: w(1, 2, 1, -1, 3), tags: ["留证", "边界"] },
      { id: "b", text: "主动帮她做成，让功劳里有你的影子", weights: w(2, 1, 3, 1, -1), tags: ["借势", "关系"] },
      { id: "c", text: "找机会另做一件更难替代的事", weights: w(3, 0, 0, 1, 1), tags: ["替代", "进取"] },
      { id: "d", text: "先不动，等她出错时再补位", weights: w(1, 3, 1, -1, 1), tags: ["等待", "防御"] }
    ]
  },
  {
    id: "q15",
    chapter: 3,
    order: 15,
    title: "殿前失言",
    scene: "有人在殿前故意问你一个不该由你回答的问题。答错是错，答对也是越位。贵妃端着茶，像是没有听见。",
    pressurePoint: "权力边界与表达控制",
    choices: [
      { id: "a", text: "说此事该由掌事定夺", weights: w(0, 1, 0, -2, 3), tags: ["边界", "规避"] },
      { id: "b", text: "只答自己亲眼所见的一小段", weights: w(1, 2, 1, -1, 2), tags: ["克制", "证据"] },
      { id: "c", text: "反问她为何此刻问你", weights: w(3, -1, 1, 3, 2), tags: ["反击", "冒险"] },
      { id: "d", text: "装作没听懂，把问题轻轻带过去", weights: w(0, 3, 2, -1, 1), tags: ["藏拙", "防御"] }
    ]
  },
  {
    id: "q16",
    chapter: 3,
    order: 16,
    title: "一封匿名信",
    scene: "你枕下多了一封匿名信，信里说有人要在明日差事里害你。字迹陌生，内容却说得太细。你不知这是提醒还是陷阱。",
    pressurePoint: "不确定信息下的判断",
    choices: [
      { id: "a", text: "按信里提醒暗中调整，不声张", weights: w(1, 3, 1, 0, 1), tags: ["谨慎", "防御"] },
      { id: "b", text: "故意露出破绽，看谁先动", weights: w(3, 1, 2, 3, 0), tags: ["诱敌", "冒险"] },
      { id: "c", text: "把信交给最中立的人保管", weights: w(1, 1, 2, -1, 2), tags: ["留证", "关系"] },
      { id: "d", text: "当作没看见，只按规矩做事", weights: w(0, 2, 0, -2, 3), tags: ["稳定", "边界"] }
    ]
  },
  {
    id: "q17",
    chapter: 3,
    order: 17,
    title: "旧友变脸",
    scene: "曾与你同吃一碗粥的人，如今在众人面前撇清与你的关系。她眼神闪躲，你知道她可能被逼，也可能已经改投他处。",
    pressurePoint: "被关系切割后的反应",
    choices: [
      { id: "a", text: "不追问，给她留最后一点余地", weights: w(0, 2, 3, -1, 0), tags: ["留情", "关系"] },
      { id: "b", text: "从此不再交心，但不急着翻脸", weights: w(0, 3, 1, -2, 3), tags: ["切割", "边界"] },
      { id: "c", text: "私下问清，她若有苦衷就帮一次", weights: w(1, 0, 3, 1, -1), tags: ["共情", "风险"] },
      { id: "d", text: "当众也撇清，先保住自己", weights: w(1, 2, -1, 0, 2), tags: ["自保", "防御"] }
    ]
  },
  {
    id: "q18",
    chapter: 3,
    order: 18,
    title: "贵妃的试探",
    scene: "贵妃忽然问你，殿里谁最可靠。她语气随意，像是在闲谈。可你知道，说出任何一个名字，都可能改变那个人的命。",
    pressurePoint: "权力提问中的责任与风险",
    choices: [
      { id: "a", text: "只说每个人各有所长，不点名", weights: w(0, 2, 2, -2, 2), tags: ["避锋", "关系"] },
      { id: "b", text: "点一个最安全的人，换取贵妃信任", weights: w(2, 0, 2, 2, -1), tags: ["押注", "权力"] },
      { id: "c", text: "说可靠要看差事，不能凭一句话定", weights: w(2, 1, 1, 0, 3), tags: ["边界", "判断"] },
      { id: "d", text: "借机提醒贵妃，最近有人故意传话", weights: w(3, 0, 2, 3, 1), tags: ["进言", "冒险"] }
    ]
  },

  {
    id: "q19",
    chapter: 4,
    order: 19,
    title: "冷下来的灯",
    scene: "你连续三日被安排到无人看见的差事里。没有责罚，也没有解释。宫里最难受的不是打压，是让你慢慢消失。",
    pressurePoint: "被冷落后的心理修复",
    choices: [
      { id: "a", text: "把无人看见的活做成别人离不开的样子", weights: w(3, 1, 0, 0, 2), tags: ["内功", "进取"] },
      { id: "b", text: "主动找出冷落从哪里开始", weights: w(2, 2, 2, 1, 1), tags: ["调查", "主动"] },
      { id: "c", text: "接受这段安静，先养回自己的心气", weights: w(0, 2, 0, -2, 3), tags: ["修复", "边界"] },
      { id: "d", text: "去投靠另一个愿意看见你的人", weights: w(2, 0, 3, 2, -1), tags: ["转向", "关系"] }
    ]
  },
  {
    id: "q20",
    chapter: 4,
    order: 20,
    title: "深夜敲门",
    scene: "半夜有人敲门，说贵妃急召。来人不是平日传话的人，手里也没有灯。你听见远处有细碎脚步声。",
    pressurePoint: "危险感知与行动边界",
    choices: [
      { id: "a", text: "不开门，隔门问清来人姓名", weights: w(1, 2, 0, -2, 3), tags: ["边界", "谨慎"] },
      { id: "b", text: "叫醒同屋一起去，留下见证", weights: w(1, 1, 3, -1, 2), tags: ["见证", "关系"] },
      { id: "c", text: "从后窗绕出去，先看是谁设局", weights: w(2, 3, 1, 2, 1), tags: ["反侦察", "风险"] },
      { id: "d", text: "直接跟去，路上寻找脱身机会", weights: w(2, 1, 0, 3, -1), tags: ["冒险", "应变"] }
    ]
  },
  {
    id: "q21",
    chapter: 4,
    order: 21,
    title: "不能说的委屈",
    scene: "你明明受了委屈，却被提醒不要让贵妃烦心。所有人都劝你忍一忍，说宫里没有人喜欢听真话。",
    pressurePoint: "情绪表达与自我压抑",
    choices: [
      { id: "a", text: "忍下情绪，只留下事实记录", weights: w(0, 3, 0, -2, 2), tags: ["压抑", "留证"] },
      { id: "b", text: "找一个安全的人，把话说完", weights: w(0, 0, 3, -1, 1), tags: ["表达", "支持"] },
      { id: "c", text: "把委屈变成下一步要做的事", weights: w(3, 2, 0, 1, 1), tags: ["转化", "进取"] },
      { id: "d", text: "直接向贵妃陈明，不替别人遮掩", weights: w(3, -1, 0, 3, 3), tags: ["正面", "边界"] }
    ]
  },
  {
    id: "q22",
    chapter: 4,
    order: 22,
    title: "替罪的机会",
    scene: "一件差事出了错，有人暗示你若主动认下，可以换来以后被照顾。错不在你，但承认以后，名声会留下痕迹。",
    pressurePoint: "短期交换与长期自我",
    choices: [
      { id: "a", text: "不认，哪怕暂时得罪人", weights: w(2, 0, -1, 0, 3), tags: ["边界", "名声"] },
      { id: "b", text: "只认自己确实碰过的部分", weights: w(1, 1, 1, -1, 2), tags: ["分寸", "边界"] },
      { id: "c", text: "认下，但换一份写明的承诺", weights: w(2, 1, 2, 2, -1), tags: ["交易", "风险"] },
      { id: "d", text: "先答应，随后找证据推翻", weights: w(2, 3, 1, 3, 0), tags: ["反转", "策略"] }
    ]
  },
  {
    id: "q23",
    chapter: 4,
    order: 23,
    title: "旧伤被提起",
    scene: "有人在宴后故意提起你进宫前的旧事。那是你最不愿被说出口的部分。众人笑着听，像只是闲谈。",
    pressurePoint: "羞耻感与边界反应",
    choices: [
      { id: "a", text: "平静接一句，旧事不值得扰宴", weights: w(1, 3, 1, -1, 2), tags: ["克制", "防御"] },
      { id: "b", text: "反问她为何记得这样清楚", weights: w(3, 0, 1, 2, 2), tags: ["反击", "边界"] },
      { id: "c", text: "笑着把话题转到她更怕的地方", weights: w(2, 2, 3, 2, 0), tags: ["转移", "关系"] },
      { id: "d", text: "离席，不给任何人继续看的机会", weights: w(0, 2, -1, 0, 3), tags: ["退出", "边界"] }
    ]
  },
  {
    id: "q24",
    chapter: 4,
    order: 24,
    title: "最后一个朋友",
    scene: "你最信任的人劝你放弃一次机会。她说是为你好，可她说话时避开了你的眼睛。你第一次怀疑，她也在怕你往上走。",
    pressurePoint: "亲密关系中的限制与怀疑",
    choices: [
      { id: "a", text: "先听完她的理由，再自己判断", weights: w(1, 1, 2, -1, 2), tags: ["判断", "边界"] },
      { id: "b", text: "照她说的做，因为她不会害你", weights: w(0, 0, 3, -2, -2), tags: ["信任", "依赖"] },
      { id: "c", text: "继续争取机会，但不告诉她细节", weights: w(3, 2, 0, 1, 2), tags: ["切割", "进取"] },
      { id: "d", text: "反过来试探她到底站在哪边", weights: w(2, 2, 3, 2, 0), tags: ["试探", "关系"] }
    ]
  },

  {
    id: "q25",
    chapter: 5,
    order: 25,
    title: "凤印之前",
    scene: "贵妃病中，殿里短暂无人主事。所有人都在等一个敢拍板的人。你知道只要开口，事情成了是功，败了是罪。",
    pressurePoint: "权力真空中的主动性",
    choices: [
      { id: "a", text: "先定最急的事，其余等贵妃醒来", weights: w(2, 1, 1, 0, 2), tags: ["有限掌控", "边界"] },
      { id: "b", text: "全面接手，机会不会等人", weights: w(4, -1, 0, 3, -1), tags: ["掌控", "冒险"] },
      { id: "c", text: "推一个更合适的人到前面", weights: w(1, 1, 3, -1, 1), tags: ["借力", "关系"] },
      { id: "d", text: "只做自己分内事，不碰权柄", weights: w(-1, 2, 0, -3, 3), tags: ["自守", "规避"] }
    ]
  },
  {
    id: "q26",
    chapter: 5,
    order: 26,
    title: "一封能翻案的信",
    scene: "你拿到一封足以翻倒对手的信。可信一旦交出，也会牵连曾经帮过你的人。机会就在今夜，天亮后信就没用了。",
    pressurePoint: "胜利代价与道德边界",
    choices: [
      { id: "a", text: "交出去，胜负面前不能心软", weights: w(4, 0, -1, 3, -1), tags: ["胜负", "代价"] },
      { id: "b", text: "只交出必要部分，尽量少伤旁人", weights: w(2, 1, 2, 1, 2), tags: ["克制", "边界"] },
      { id: "c", text: "不用信，换一种更慢但干净的办法", weights: w(1, 2, 0, -2, 4), tags: ["底线", "自守"] },
      { id: "d", text: "拿信去谈判，不把牌一次打完", weights: w(3, 2, 3, 2, 1), tags: ["谈判", "策略"] }
    ]
  },
  {
    id: "q27",
    chapter: 5,
    order: 27,
    title: "被递上的台阶",
    scene: "曾经害过你的人如今失势，跪在廊下求你递一句话。你只要沉默，她就再无翻身可能。她看你的眼神像看最后一盏灯。",
    pressurePoint: "报复、怜悯与边界",
    choices: [
      { id: "a", text: "不落井下石，但也不救她", weights: w(1, 2, 0, -1, 3), tags: ["边界", "克制"] },
      { id: "b", text: "救她一次，让她以后为你所用", weights: w(3, 1, 3, 2, 0), tags: ["收服", "权力"] },
      { id: "c", text: "让她把真相说完，再决定", weights: w(1, 1, 2, 0, 2), tags: ["判断", "证据"] },
      { id: "d", text: "沉默走过，这是她欠你的", weights: w(1, 3, -1, -1, 2), tags: ["切断", "防御"] }
    ]
  },
  {
    id: "q28",
    chapter: 5,
    order: 28,
    title: "最想要的位置",
    scene: "你终于有机会得到一个真正的位置。可那位置要求你离开现在护着你的人，也要求你以后不能再轻易说真话。",
    pressurePoint: "上升机会与自我代价",
    choices: [
      { id: "a", text: "接受位置，人在高处才有选择", weights: w(4, 0, 0, 2, -1), tags: ["上升", "权力"] },
      { id: "b", text: "推迟答复，先看代价是否可控", weights: w(1, 2, 1, -1, 3), tags: ["审慎", "边界"] },
      { id: "c", text: "只接受部分权力，不把自己全交出去", weights: w(2, 1, 1, 0, 4), tags: ["有限", "自我"] },
      { id: "d", text: "拒绝，因为那不是你想成为的人", weights: w(0, 1, -1, -2, 5), tags: ["底线", "自我"] }
    ]
  },
  {
    id: "q29",
    chapter: 5,
    order: 29,
    title: "最后的传话",
    scene: "大局将定前，有人请你把一句话带给贵妃。这句话若说出口，能保你一时平安；若不说，你可能错过最后的靠山。",
    pressurePoint: "安全感与自主性的最终选择",
    choices: [
      { id: "a", text: "照说，先活下来才有以后", weights: w(1, 1, 2, 1, -2), tags: ["求稳", "依附"] },
      { id: "b", text: "改成自己的话，只说事实", weights: w(2, 1, 1, 0, 3), tags: ["自主", "边界"] },
      { id: "c", text: "不带话，从此不再替人递刀", weights: w(1, 2, -1, -1, 5), tags: ["拒绝", "自我"] },
      { id: "d", text: "带话，但同时留下自己的后路", weights: w(2, 2, 2, 2, 1), tags: ["双线", "策略"] }
    ]
  },
  {
    id: "q30",
    chapter: 5,
    order: 30,
    title: "天亮以后",
    scene: "天快亮时，你站在宫墙下。有人会升，有人会落，有人再也不会被提起。若让你重新选择一次，你最想保住什么？",
    pressurePoint: "核心价值排序",
    choices: [
      { id: "a", text: "保住自己能做选择的余地", weights: w(2, 1, 0, 0, 5), tags: ["自由", "边界"] },
      { id: "b", text: "保住一路走来的关系和情义", weights: w(0, 0, 5, -1, -1), tags: ["关系", "情义"] },
      { id: "c", text: "保住终于握到手里的位置", weights: w(5, 0, 0, 2, -1), tags: ["权力", "位置"] },
      { id: "d", text: "保住没人看见的那点真心", weights: w(0, 3, 1, -2, 2), tags: ["真心", "防御"] }
    ]
  }
];
