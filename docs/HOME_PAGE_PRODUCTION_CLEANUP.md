# 首页生产化清理

## 当前状态

- 仓库：`Jamescheng2022/shengongji-psych-test`
- 清理前已确认远端 `origin/main` 与本地 `HEAD` 同步在 `e31947e`。
- 首页入口使用显式 class：`home-shell`、`home-phone`。
- 首页生产代码不再依赖 `:has()`。
- 首页生产代码不再包含整图参考实现、整图铺底节点或透明 CTA 热区逻辑。

## 首页组件结构

首页由 `app/page.tsx` 渲染外层壳：

- `main.home-shell`
- `section.home-phone`
- `HomeHero`

`components/HomeHero.tsx` 内部是分层结构：

- `section.home-asset-artboard`：首页 artboard 和背景承载层。
- `div.home-asset-brand`：顶部品牌徽章文字。
- `img.home-asset-title-img`：主标题图片层。
- `p.home-asset-subtitle-main`：HTML 副标题。
- `p.home-asset-subtitle-minor`：HTML 支撑文案。
- `div.home-asset-copy-panel > p`：HTML 说明卡正文。
- `Link.home-asset-cta`：真实可点击 CTA。
- `div.home-asset-note`：HTML 测试说明标题和说明文字。
- `div.home-asset-feature-row`：HTML 三个功能卡容器。
- `p.home-asset-disclaimer`：HTML 免责声明。

## 图片层

当前生产首页使用这些图片层：

- `home-bg.png`：宫廷背景和复杂结构底图。
- `home-title-transparent.png`：书法主标题。
- `home-ornament-divider-transparent.png`：标题装饰分割线。
- `home-cta-bg-transparent.png`：CTA 牌匾底图。
- `home-feature-panel-transparent.png`：功能卡背景。
- `home-feature-icon-questions-transparent.png`：30幕剧情图标。
- `home-feature-icon-story-transparent.png`：宫廷剧情包裹图标。
- `home-feature-icon-persona-transparent.png`：人格画像解析图标。
- `home-footer-ornament-transparent.png`：底部装饰。

## HTML 文本层

以下内容为 HTML 文本，不写死在图片中：

- `深宫命格`
- `以宫廷情境，映照你的真实人格`
- `基于情境选择的人格倾向观察`
- `你将走入一场深宫命局，每一次进退、沉默、示弱与反击，都会映照出你真实的人格倾向。`
- `开始入宫`
- `测试说明`
- `30幕宫廷剧情选择，生成你的专属人格画像`
- `30幕剧情`
- `宫廷剧情包裹`
- `人格画像解析`
- `本测试仅用于娱乐与自我观察，不作为专业心理诊断依据。`

## 真实可点击元素

- CTA 是 `next/link` 的真实 `Link` 元素。
- CTA href：`/test`
- CTA 可见文案：`开始入宫`
- 不再使用透明热区覆盖整图。

## 整图铺底检查

- 生产首页不存在整图铺底节点。
- 已移除旧整图参考 PNG 生产资源。
- `home-iphone-artboard`、`home-iphone-reference`、透明 CTA 热区样式均已从生产 CSS/组件中移除。

## `:has()` 检查

- `app/home-page-assets.css` 不再包含 `.shell:has(...)`。
- `app/home-page-assets.css` 不再包含 `.phone:has(...)`。
- 首页布局改用显式 `.home-shell` 和 `.home-phone`。

## 移动尺寸检查

通过 Chrome 移动设备 emulation 检查 `http://localhost:3012/`。

| Viewport | 横向滚动 | CTA 完整可见 | 底部不裁切 | CTA 文案 | 整图参考节点 |
| --- | --- | --- | --- | --- | --- |
| 375x667 | 否，`scrollWidth=375` | 是，`top=365.52 bottom=417.52` | 是，免责声明 `bottom=654` | 开始入宫 | 不存在 |
| 390x844 | 否，`scrollWidth=390` | 是，`top=476.02 bottom=534.02` | 是，免责声明 `bottom=831` | 开始入宫 | 不存在 |
| 430x932 | 否，`scrollWidth=430` | 是，`top=534.95 bottom=592.95` | 是，免责声明 `bottom=919` | 开始入宫 | 不存在 |

结论：三个目标移动尺寸均无横向滚动，CTA 完整可见，底部免责声明和装饰未被裁切。
