# CSS 审计记录

本次只做审计，不强行合并或删除样式文件，避免影响现有首页、测试页、结果页和海报页视觉。

## 当前入口

`app/layout.tsx` 当前引入：

1. `globals.css`
2. `palace-assets.css`
3. `poster-polish.css`
4. `result-polish.css`
5. `final-polish.css`
6. `visual-redesign.css`
7. `home-and-test-layout.css`
8. `home-reference.css`
9. `home-reference-polish.css`
10. `home-page-assets.css`

## 文件用途判断

| 文件 | 当前判断 | 是否生产需要 | 风险 |
| --- | --- | --- | --- |
| `globals.css` | 全局基础样式、页面壳、测试/结果基础类可能仍在使用 | 是 | 低 |
| `palace-assets.css` | 宫廷视觉资产、通用氛围样式 | 可能需要 | 中 |
| `poster-polish.css` | 海报页补丁样式 | 需要进一步核对 | 中 |
| `result-polish.css` | 结果页补丁样式 | 需要进一步核对 | 中 |
| `final-polish.css` | 多轮最终调整样式，命名不利维护 | 需要审慎拆分 | 高 |
| `visual-redesign.css` | 视觉重设计补丁 | 需要判断是否仍覆盖生产 UI | 高 |
| `home-and-test-layout.css` | 首页和测试页布局样式 | 可能仍是生产依赖 | 中 |
| `home-reference.css` | 历史参考实现痕迹，需核对是否仍被选择器引用 | 疑似可归档 | 高 |
| `home-reference-polish.css` | 历史参考补丁，需核对是否仍被选择器引用 | 疑似可归档 | 高 |
| `home-page-assets.css` | 当前首页资产化生产样式 | 是 | 中 |

## 初步结论

- 当前 CSS 入口过多，确实存在历史补丁和生产样式混杂问题。
- 不建议在线直接删除 `home-reference.css`、`home-reference-polish.css`、`final-polish.css`、`visual-redesign.css`，因为无法在当前在线环境完整跑移动端截图回归。
- 下一步应在本地或 Codex 环境中逐个关闭候选 CSS，使用 375、390、430 宽度截图验证后再合并。

## 推荐目标结构

后续稳定后可整理为：

- `globals.css`
- `theme.css`
- `home.css`
- `test.css`
- `result.css`
- `poster.css`
- `components.css`

## 本次处理原则

- 不新增功能。
- 不改变视觉大方向。
- 不删除 CSS。
- 先记录审计结论，等待本地截图和 build 验证后再做合并。
