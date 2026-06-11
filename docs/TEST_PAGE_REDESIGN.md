# Test Page Redesign

## Round 2 Small Screen Usability Update

本轮只修 `/test` 小屏适配与交互可达性，不改视觉方向、不改题库、不改计分、不改存储。

- 375x667：底部操作区改为 `position: sticky; bottom: 0`，下一题按钮始终可触达。
- 375x667：新增 `max-height: 700px` 响应式规则，压缩 header、进度区、剧情卡 padding、选项间距和按钮内部尺寸。
- 剧情卡：小屏下保持内部滚动，降低正文行高与标题字号，但保留可读性。
- 选项按钮：小屏保持 4 个真实 `button`，甲乙丙丁印章缩小，按钮高度维持约 58px，文字最多两行并保留右侧箭头空间。
- 底部操作区：未选择时下一题仍 disabled；选择后红金主按钮恢复可点击；上一题在第 1 题 disabled；收藏仍只做 UI toggle。
- 小屏免责声明：375x667 高度下隐藏，避免挤占下一题 CTA。

保留项：

- 30 题：保留。
- 4 选项：保留。
- 六维模型 `agency / caution / affiliation / boundary / emotionality / power`：保留。
- 题库：未改。
- 计分逻辑：未改。
- 存储结构：未改。
- 第 30 题后 `computeResult`、`saveResult`、跳转 `/result`：代码路径保留。

验证：

- `npm run build`：通过。
- 浏览器截图/点击复测：本轮尝试使用 in-app Browser 访问本地 `/test` 时被 Browser URL policy 拦截，因此未绕过策略使用其他浏览器通道生成新截图。CSS 修正已提交前通过构建验证，仍需人工或解锁浏览器策略后复核 375x667 视觉截图。

## 修改目标

将 `/test` 答题页改造成符合参考图的浅色宣纸宫廷风移动端页面，并保留当前测试业务逻辑。

## 模型与逻辑保留

- 是否保留 30 题：是，仍使用 `questions.length`。
- 是否保留 4 个选项：是，所有题目继续渲染 4 个真实 `button`。
- 是否保留六维模型：是，仍使用当前六维权重数据。
- 是否改动题库：否。
- 是否改动计分逻辑：否。
- 是否改动存储结构：否。
- 是否改成选择后点击下一题：是。
- 完成后是否进入 `/result`：是，最后一题调用 `computeResult`、`saveResult` 后跳转。

## 当前组件结构

- `app/test/page.tsx`：状态管理、题目读取、答案保存、上一题/下一题/收藏处理、结果跳转。
- `src/components/test/TestPageShell.tsx`：测试页外层移动端容器。
- `src/components/test/TestHeader.tsx`：返回、标题、右侧占位操作。
- `src/components/test/ProgressMeter.tsx`：题号、总题数、百分比和进度条。
- `src/components/test/SceneTextCard.tsx`：题目标题、剧情正文、红色提问句。
- `src/components/test/ChoiceButton.tsx`：甲乙丙丁四个选项按钮。
- `src/components/test/TestActionBar.tsx`：上一题、收藏、下一题。
- `src/components/test/BottomHint.tsx`：底部免责声明。

## 样式文件

- `app/test-page.css`
- 通过 `app/layout.tsx` 引入。
- class 命名使用 `test-page`、`test-shell`、`test-header`、`test-progress`、`test-scene-card`、`test-choice-button`、`test-action-bar`。

## 交互说明

- 用户点击选项只更新 `selectedChoice`，并显示选中红金高亮。
- 点击下一题时，如果未选择则显示弱提示，不写入答案。
- 点击下一题时，如果已选择则写入当前题答案。
- 上一题可回到已答题目，并恢复该题选中状态。
- 收藏只维护本地 UI 状态，不进入答案和计分。

## 移动尺寸检查

- 375x667：无横向滚动；长剧情卡片内部滚动；4 个选项无遮挡，底部操作区需要轻微下滑查看。
- 390x844：无横向滚动；4 个选项可见；底部操作区接近首屏底部，轻微下滑可见完整免责声明。
- 430x932：无横向滚动；4 个选项和底部操作区可在首屏完整呈现，留白自然。

## 验证结果

- 横向滚动：未发现。
- `/test` 到 `/result`：已通过完整 30 题点击流验证。
- 构建：`npm run build` 通过。

## 仍需人工审美确认

- 右侧胶囊占位按钮是否需要替换成正式小程序/更多图标素材。
- 题卡四角纹样目前为 CSS 模拟，后续可换成 SVG 角花。
- 进度节点目前为 CSS 模拟花印，后续可换成更接近参考图的金色花形 SVG。
