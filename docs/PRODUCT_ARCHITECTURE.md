# 产品架构：深宫纪专业心理测试 H5

## 一、产品第一性原理

深宫纪的底层不是“宫斗”，而是“心理投射”。

用户面对的不是抽象问卷，而是深宫情境：

- 被误解
- 被冷落
- 被试探
- 被拉拢
- 被羞辱
- 被赋予机会
- 被迫选择阵营
- 被要求牺牲自己

这些情境天然适合观察人的心理模式。

深宫只是舞台，测试的是：

- 你如何处理压力
- 你如何理解关系
- 你如何面对权力
- 你如何保护自己
- 你如何做出代价选择

## 二、用户体验路径

### 1. 首页：建立信任

目标：

- 让用户觉得这不是廉价小游戏
- 让用户相信这是精心设计的心理测试
- 让用户产生“我想知道自己是哪种深宫人格”的冲动

首页必须传达：

- 剧本化心理测试
- 女性视角
- 古典审美
- 专业设计
- 非诊断，仅自我观察

### 2. 测试说明页：降低疑虑

说明：

- 共 30 题
- 约 6-8 分钟
- 没有标准答案
- 选择你最自然会做的反应
- 结果仅供娱乐和自我观察

### 3. 测试页：沉浸完成

结构：

- 5 章，每章 6 题
- 每章有一个剧情主题
- 每题有短剧情、压力点、4 个选项
- 不展示维度、不展示分数

五章建议：

1. 初入宫门：陌生秩序与第一印象
2. 珠帘暗涌：关系试探与群体站队
3. 锦帐风波：资源竞争与情绪受挫
4. 长夜藏锋：背叛、冷落与自我保护
5. 凤印将落：权力机会与最终代价

### 4. 结果页：专业解释 + 传播表达

结果页不能像游戏结算。

必须包含：

- 命格名
- 一句判词
- 剧情化画像
- 心理画像
- 关系模式
- 压力反应
- 隐藏风险
- 成长建议
- 你的关键选择回看
- 分享金句

### 5. 海报页：截图传播

海报不是附属功能，而是增长入口。

海报必须：

- 一屏适合手机截图
- 文字少而准
- 命格名醒目
- 金句有共鸣
- 有产品名和复测入口提示

## 三、信息架构

```text
app/
  page.tsx              首页
  about/page.tsx        测评说明
  test/page.tsx         测试流程
  result/page.tsx       结果页
  poster/page.tsx       分享海报
components/
  AppShell.tsx
  MusicToggle.tsx
  QuestionCard.tsx
  ChoiceButton.tsx
  ResultCard.tsx
  PosterCard.tsx
lib/
  test-model/
    dimensions.ts       维度定义
    questions.ts        题库
    results.ts          结果类型
    scoring.ts          计分与结果算法
    storage.ts          本地存储
styles/
  globals.css
  tokens.css
```

## 四、数据结构

### Question

```ts
type Question = {
  id: string;
  chapter: number;
  order: number;
  title: string;
  scene: string;
  pressurePoint: string;
  choices: Choice[];
};
```

### Choice

```ts
type Choice = {
  id: string;
  text: string;
  subtext?: string;
  weights: {
    agency: number;
    defense: number;
    relation: number;
    risk: number;
    boundary: number;
  };
  tags: string[];
};
```

### ResultType

```ts
type ResultType = {
  id: string;
  name: string;
  verdict: string;
  archetype: string;
  psychProfile: string;
  relationshipPattern: string;
  stressResponse: string;
  hiddenRisk: string;
  growthAdvice: string;
  shareQuote: string;
  match: ResultRule;
};
```

## 五、算法原则

第一版不需要复杂机器学习。

采用透明可控的规则算法：

1. 统计五个维度得分
2. 计算最高维度、次高维度、最低维度
3. 根据关键题标签做修正
4. 匹配 12 个结果类型
5. 在结果页回扣 2-3 个关键选择

这样便于调试，也便于后续人工优化。

## 六、内容生产流程

每道题要经过三轮：

### 编剧轮

检查：

- 宫斗情境是否成立
- 是否有戏剧张力
- 是否像女性真实处境
- 是否避免狗血和套路

### 心理学轮

检查：

- 这题到底测什么
- 选项是否能区分心理倾向
- 有没有明显正确答案
- 是否存在诱导或污名化

### 前端设计轮

检查：

- 手机端是否读得下
- 文字是否太长
- 选项是否能一屏展示
- 是否需要拆句、留白、动效

## 七、上线节奏

### Phase 1：工程骨架

- 建 Next.js 项目
- 页面路由
- 全局视觉系统
- 30 题数据结构
- 结果算法
- 基础结果页

### Phase 2：内容打磨

- 优化 30 题
- 打磨 12 个结果
- 增加关键选择回看
- 优化专业感说明

### Phase 3：视觉升级

- 首页高级感
- 测试页一屏体验
- 结果页海报感
- 分享海报页
- 轻动效

### Phase 4：增长验证

- Vercel 部署
- 手机试玩
- 观察完成率
- 观察用户是否截图
- 根据反馈调题目和结果
