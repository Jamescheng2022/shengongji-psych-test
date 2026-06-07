# 首页移动端层级复盘

## 本轮解决的问题

- 首页从长海报式堆叠调整为移动端 H5 首屏：主标题、副标题、辅助说明、引导卡、CTA、轻量卖点、免责声明依次承接。
- 黑色引导卡缩小为三行文案，高度在 375x667 下为 70.69px，在 390x844 和 430x932 下为 81.25px，相比上一版大幅减轻视觉重量。
- 主 CTA 继续使用真实 `Link href="/test"`，文案统一为“开始入宫”，并从说明卡和功能卖点之间独立出来。
- “测试说明”重标题已移除，改为轻量说明文案：“30幕宫廷剧情选择，生成你的专属人格画像”。
- 三个功能卡压缩为轻量卡片，保留“30幕剧情 / 宫廷剧情包裹 / 人格画像解析”，避免像大型道具卡一样挤压主按钮。
- 免责声明使用 `bottom: max(24px, calc(env(safe-area-inset-bottom) + 16px))`，避免贴近手机手势区。

## 当前首页层级

- 图片层：`home-asset-artboard` 使用 `/assets/home-palace-bg.png` 作为宫廷背景图层，并叠加 CSS 渐变遮罩。
- 图片层：`home-asset-title-img` 使用 `/assets/page-01-home/home-title-transparent.png` 作为主标题图层。
- 图片层：`home-asset-divider` 和 `home-asset-cta-bg` 作为装饰分割线与按钮底图。
- HTML 文本层：副标题“以宫廷情境，映照你的真实人格”。
- HTML 文本层：辅助说明“基于情境选择的人格倾向观察”。
- HTML 文本层：三行引导卡文案。
- HTML 文本层：轻量说明“30幕宫廷剧情选择，生成你的专属人格画像”。
- HTML 文本层：三个功能卡文案和免责声明。
- 真实可点击元素：`home-asset-cta` 是 `Link href="/test"`，不是透明热区。

## 生产约束检查

- 仍有整图铺底：否。当前没有 `home-iphone-artboard` / `home-iphone-reference`，首页不再用完整手机长图作为生产首屏。
- 仍依赖 `:has()`：否。核心布局继续使用显式 `.home-shell` / `.home-phone` 类。
- 仍有透明 CTA 热区逻辑：否。CTA 是真实链接组件，背景图只作为按钮视觉层。
- 是否保留 HTML 文本层：是。副标题、辅助说明、引导卡、轻量说明、功能卡、免责声明均为 HTML 文本。
- 是否保留真实 CTA：是。`Link href="/test"`，可点击文案为“开始入宫”。
- 是否仍像长海报：否。本轮压缩说明卡和功能卡，提升 CTA 独立性，首屏更接近可交互 H5 首页。

## 移动端检查结果

| 视口 | 横向滚动 | CTA 完整可见 | 说明卡压迫标题 | 功能卡挤压按钮 | 免责声明贴底 | 关键间距 |
| --- | --- | --- | --- | --- | --- | --- |
| 375x667 | 否，scrollWidth=375 | 是，CTA=378-430px | 否，标题到说明卡 86.48px | 否，CTA 到轻量说明 18px | 否，底部 24px | 说明卡到 CTA 21.31px |
| 390x844 | 否，scrollWidth=390 | 是，CTA=449-505px | 否，标题到说明卡 87.46px | 否，CTA 到轻量说明 18.27px | 否，底部 24px | 说明卡到 CTA 25.09px |
| 430x932 | 否，scrollWidth=430 | 是，CTA=500-556px | 否，标题到说明卡 116.98px | 否，CTA 到轻量说明 20px | 否，底部 24px | 说明卡到 CTA 26.75px |

## 截图产物

- 375x667：`C:\Users\cheng\AppData\Local\Temp\sgj-home-layout-check\home-375x667.png`
- 390x844：`C:\Users\cheng\AppData\Local\Temp\sgj-home-layout-check\home-390x844.png`
- 430x932：`C:\Users\cheng\AppData\Local\Temp\sgj-home-layout-check\home-430x932.png`

## 结论

三个移动尺寸均未出现横向滚动或首屏裁切。CTA 完整可见，免责声明与手势区保持安全距离，首页保留分层素材与 HTML 交互结构，没有恢复整图铺底。
