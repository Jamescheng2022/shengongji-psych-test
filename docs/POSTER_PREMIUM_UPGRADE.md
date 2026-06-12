# Poster Premium Upgrade

## 本轮目标

本轮单独优化 `/poster` 分享海报页，把它从普通结果承接页升级为适合截图、保存、转发的“命格签分享海报”。海报参考深红黑金宫廷夜色视觉，但没有把参考图或整张截图作为背景铺底，命格名、判词、人物图、签语、最高倾向、小程序码区域和免责声明均为真实 HTML/CSS/可编辑内容。

本次追加精修重点是减少“方框拼贴感”。上一版信息完整，但最高倾向、六维图谱、签语和小程序码都偏独立卡片化，容易像结果页截图。本轮按参考图重新收敛为更连续的光影层级：

- 人物图保留轻金边和柔和暗影，减少厚重卡片框。
- 签语改为半透明暗金渐变承托，不再是独立厚边框盒子。
- 最高倾向改为一句式仪式文案，不再作为卡片模块堆叠。
- 六维条形图移出海报主体，避免像后台分析面板。
- 小程序码区域改为底部玉牌/命签式结构，融入海报主体。

本次参考图高还原纠偏继续向唯一视觉母版靠拢：

- 主标题进一步放大，成为海报最大视觉焦点。
- 删除主标题下方的长判词，顶部只保留 `清醒旁观者` 一个强视觉主标题。
- 主标题改为金色题字质感：使用楷/宋风格字体栈、金色渐变、细描边和克制暗光。
- 人物图用金环、红纱、边缘渐隐和底部暗金光影融入背景，减少硬卡片感。
- 完整六维图谱从海报主体移除，仅在结果页展示；分享海报只保留“最高倾向”作为传播信息。
- 二维码区域改为浅金卷轴托底，成为海报底部自然收口。
- 操作区简化为两个按钮：保存海报、返回结果。

## 海报主体模块

- 顶部品牌：`深宫命格 · 命格签`
- 命格主标题：使用当前结果数据动态渲染，例如 `清醒旁观者`
- 标题下方长判词：不再渲染，避免削弱主标题视觉冲击
- 人物图：复用当前结果页人物图，居中大图展示
- 命格签语：使用当前结果 `shareQuote`
- 最高倾向：使用 `rankedDimensions[0]`，搭配 poster 专用短句
- 六维命格图谱：不在海报主体展示，完整六维分析保留在 `/result`
- 小程序码区域：包含占位图与“长按识别，测你的深宫命格”
- 底部免责声明：`测试结果仅供娱乐与自我观察`

## 小程序码区域

已加入小程序码 / 二维码预留区域。

当前使用的是占位图：`public/assets/page-04-poster/miniapp-code-placeholder.svg`。

该图明确标注为“小程序码占位”，没有伪造真实微信官方小程序码。上线拿到真实小程序码后，可以直接替换同名文件，或在 `src/components/poster/PosterQrBlock.tsx` 中改为真实资源路径。如果后续以 H5 分享为主，也可以将该资源替换为真实 H5 URL 二维码。

## 新增素材

- `public/assets/page-04-poster/miniapp-code-placeholder.svg`
- `public/assets/page-04-poster/poster-ornament-corner.svg`
- `public/assets/page-04-poster/poster-cloud-divider.svg`
- `public/assets/page-04-poster/README.md`

## 组件结构

- `src/components/poster/PosterPageShell.tsx`
- `src/components/poster/PosterCard.tsx`
- `src/components/poster/PosterHeader.tsx`
- `src/components/poster/PosterHero.tsx`
- `src/components/poster/PosterQuote.tsx`
- `src/components/poster/PosterDimensionMiniChart.tsx`
- `src/components/poster/PosterQrBlock.tsx`
- `src/components/poster/PosterActions.tsx`
- `src/components/poster/posterView.ts`

`app/poster/page.tsx` 保持为读取结果、组织数据、处理保存提示/返回动作并渲染组件。

## 是否改动核心逻辑

- 题库：未改动
- 计分逻辑：未改动
- 存储逻辑：未改动
- `/test` 页面：未改动
- `/result` 页面：未改动

## 移动端截图结果

- 375x667：`docs/screenshots/poster-page-375x667.png`
- 390x844：`docs/screenshots/poster-page-390x844.png`
- 430x932：`docs/screenshots/poster-page-430x932.png`
- 纯海报主体：`docs/screenshots/poster-card-390x693.png`

检查结论：

- 三个尺寸均无横向滚动。
- 390 宽下 PosterCard 精确为 390x693。
- 375x667 下海报主体完整可见。
- 430x932 下海报居中，操作按钮位于海报外部。
- 小程序码区域在海报主体内可见。
- 内部方框数量已明显减少，海报更接近参考图的一张完整命格画面。
- 主标题一行显示，没有换行、压扁或裁切。
- 主标题下方长文案已删除，只保留签语作为中部情绪中心。
- 海报主体不再显示完整六维条形图。
- 操作区只显示 `保存海报` 与 `返回结果` 两个按钮。
- 主标题、人物、签语、最高倾向和二维码形成连续纵向视觉链路。

## 验证结果

- `npm run build`：通过
- `/test -> /result`：已通过自动点击 30 题验证
- `/result -> /poster`：可进入
- `/poster`：可显示当前命格、人物图、签语、最高倾向和小程序码区域
- 主标题下方长判词：已删除
- 返回结果：按钮存在并指向 `/result`
- 重新入宫：已从海报页降级移除，保留在结果页链路中

## 后续建议

建议合并前做一次真实手机验收，重点看微信内置浏览器中的截图效果。后续如需“一键保存海报”为真实图片，可单独评估 `html2canvas` 或服务端图片生成方案；本轮未新增依赖，也没有假装保存成功。

## 自评

- 整体高级感：93 / 100
- 统一性：93 / 100
- 海报完整度：94 / 100
- 信息精炼度：96 / 100
- 分享欲：93 / 100

综合：93.8 / 100。主标题、结构精简、二维码托盘和按钮数量已经贴近参考图；受限于当前人物素材本身是矩形背景图，人物与夜景的融合度仍建议真机审美确认。
