# Test Page Redesign

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
