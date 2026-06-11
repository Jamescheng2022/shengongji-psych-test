# Test Page Hybrid Refinement

## Why Not Continue The Light Seal Version

The previous light answer page improved readability, but the full `甲乙丙丁` seal direction and bottom `上一题 / 收藏 / 下一题` action bar felt too far from the original program flow. It also introduced a heavier tool-like structure that did not coordinate well enough with the current platform-style home page.

This round returns to the original test page behavior and structure:

- Answer by tapping an option directly.
- Keep four ABCD choices.
- Keep the existing 30-question flow.
- Keep the current scoring, storage, and result transition.
- Only refine the visual skin toward a paper palace style.

## Lightweight Refinements

- Replaced the heavy bottom action bar rendering with the original direct-choice flow.
- Changed choice badges back from `甲乙丙丁` to `A / B / C / D`.
- Kept the componentized structure: `TestHeader`, `ProgressMeter`, `SceneTextCard`, `ChoiceButton`, `BottomHint`, and `TestPageShell`.
- Updated the header to show the original-style music toggle in a lighter red-gold circular control.
- Rethemed the page background from dark/heavy to warm paper tones with subtle red-gold palace atmosphere.
- Rethemed the scene card as a refined paper card with gold hairline borders, soft shadow, corner accents, and internal scroll support.
- Rethemed choice buttons as warm paper buttons with small vermilion ABCD badges.
- Kept the bottom hint as a weak reading cue: `凭第一念选择，命卷自会记下`.

## Product Logic

- ABCD preserved: yes.
- 30 questions preserved: yes.
- 4 options preserved: yes.
- Six-dimension model preserved: yes.
  - `agency`
  - `caution`
  - `affiliation`
  - `boundary`
  - `emotionality`
  - `power`
- Question bank changed: no.
- Scoring logic changed: no.
- Storage logic changed: no.
- Result page logic changed: no.
- Final question still calls `computeResult`, `saveResult`, and navigates to `/result`: yes.

## Mobile Checks

Preview URL used: `http://localhost:3014/test`

### 375x667

- No horizontal scroll: pass.
- Header visible and not crowded: pass.
- Progress visible: pass.
- Scene card readable: pass.
- Four ABCD options visible: pass.
- Bottom hint hidden on this compact height to preserve answer space.
- Screenshot: `docs/screenshots/test-page-hybrid-375x667.png`

### 390x844

- No horizontal scroll: pass.
- Header visible and balanced: pass.
- Progress visible: pass.
- Scene card readable: pass.
- Four ABCD options visible: pass.
- Bottom hint visible: pass.
- Screenshot: `docs/screenshots/test-page-hybrid-390x844.png`

### 430x932

- No horizontal scroll: pass.
- Header visible and balanced: pass.
- Progress visible: pass.
- Scene card readable: pass.
- Four ABCD options visible: pass.
- Bottom hint visible with natural breathing room: pass.
- Screenshot: `docs/screenshots/test-page-hybrid-430x932.png`

## Interaction Verification

- Question 1 displayed correctly.
- Four options displayed correctly.
- Clicking the first option advanced from question 1 to question 2.
- Full 30-question automated click path reached `/result`.
- `npm run build` passed.

## Still Needs Human Confirmation

- Whether the current scene-card height feels calm enough for long 30-question sessions.
- Whether the music button should receive a custom palace icon later.
- Whether the red-gold badge weight is close enough to the home page visual language.

## Recommended Next Step

Yes, do a separate 30-question copy refinement round later. This round intentionally did not change the question bank. The UI now supports long text through card-level scrolling, but shorter and more emotionally precise prompts will improve completion rate and perceived quality.
