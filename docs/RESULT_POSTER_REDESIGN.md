# Result And Poster Redesign

## 本轮目标

本轮只优化 `/result` 结果页和 `/poster` 分享海报页，让完整链路形成统一产品体验：

- 首页：深宫红金平台首页。
- 答题页：米白宣纸宫廷答题页。
- 结果页：黑金命格揭晓页。
- 分享页：深红黑金命格海报。

## 逻辑边界

- 题库改动：否。
- 计分逻辑改动：否。
- 存储逻辑改动：否。
- `/test` 页面改动：否。
- `/test -> /result -> /poster` 流程保留：是。
- 重新入宫功能保留：是。
- 30 题保留：是。
- 4 选项保留：是。
- 六维模型保留：是，`agency / caution / affiliation / boundary / emotionality / power`。

## 五维 / 六维修正

- 已修正结果页旧文案 `五维命格图`。
- 当前结果页显示 `命格六维图`。
- 六个维度统一映射为：
  - 掌局
  - 藏锋
  - 人心
  - 分寸
  - 心潮
  - 权势

## 结果页组件结构

- `app/result/page.tsx`
  - 只负责读取结果、处理重新入宫、组织组件。
- `src/components/result/ResultHeroCard.tsx`
  - 顶部命格揭晓卡，包含人物图、命格名、判词、主/副倾向。
- `src/components/result/ResultDimensionChart.tsx`
  - 六维命格图，包含 6 个维度和红金进度条。
- `src/components/result/ResultInsightCards.tsx`
  - 命格画像、处世底色、关系方式、困局反应、现实映照、命格锦囊、关键选择与隐藏风险。
- `src/components/result/ResultActions.tsx`
  - 生成命格海报、重新入宫。
- `src/components/result/ResultEmptyState.tsx`
  - 未完成测试时的空状态。
- `src/components/result/resultView.ts`
  - 六维中文映射与分数格式化。

## 海报页组件结构

- `app/poster/page.tsx`
  - 只负责读取结果、分享、保存提示和重新入宫。
- `src/components/poster/PosterCard.tsx`
  - 9:16 深红黑金命格海报主体，包含命格名、人物图、判词、分享句、最高倾向和六维简表。
- `src/components/poster/PosterActions.tsx`
  - 保存海报、分享命格、返回结果、重新入宫。
- `src/components/poster/PosterEmptyState.tsx`
  - 未完成测试时的空状态。

## 移动端截图结果

### Result Page

- `docs/screenshots/result-page-375x667.png`
- `docs/screenshots/result-page-390x844.png`
- `docs/screenshots/result-page-430x932.png`

检查结论：

- 375x667：无横向滚动，结果 hero 和六维图可读，页面可继续自然滚动。
- 390x844：无横向滚动，hero、六维图和首个解析模块在首屏衔接自然。
- 430x932：无横向滚动，黑金氛围和解析卡片留白更舒展。

### Poster Page

- `docs/screenshots/poster-page-375x667.png`
- `docs/screenshots/poster-page-390x844.png`
- `docs/screenshots/poster-page-430x932.png`

检查结论：

- 375x667：无横向滚动，9:16 海报主体完整可读，保存/分享入口露出，更多操作可自然滚动。
- 390x844：无横向滚动，海报主体与保存/分享/返回/重新入宫操作完整可见。
- 430x932：无横向滚动，海报主体更舒展，人物图、判词和六维简表清晰。

## 链路验证

- 自动完成 30 题后进入 `/result`：通过。
- `/result` 显示命格结果：通过。
- `/result` 点击 `生成命格海报` 进入 `/poster`：通过。
- `/poster` 显示对应命格海报：通过。
- `重新入宫` 返回 `/test?restart=...`：通过。
- `npm run build`：通过。

## 合并前建议

建议进入合并 main 前最终验收。合并前建议用真实手机打开 preview，重点确认：

- 结果页长文阅读节奏是否符合预期。
- 海报页人物图裁切是否满意。
- 375 小屏下海报操作按钮是否接受“保存/分享先露出，返回/重测可滚动”的体验。
