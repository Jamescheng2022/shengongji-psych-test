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

## Final Layout Balance Pass

This final pass only adjusts spacing, hierarchy, and surface quality. It does not change the test flow, question data, scoring, storage, or result routing.

- Centered the scene-card rhythm around title, readable body text, and the red decision prompt.
- Softened the paper card border, corner lines, lamp shadow, and drop shadow so the card feels less heavy.
- Reduced the visual weight of the ABCD seals and right arrows while keeping tap targets clear.
- Tuned option spacing and paper-button texture so the answer list feels refined without becoming cramped.
- Moved the bottom hint into a quieter lower-page closing position and added a subtle gold divider motif.
- Added responsive spacing for compact heights so 375x667 keeps the scene card and all four options readable.
- Added low-opacity bottom palace/paper atmosphere for 390x844 and 430x932 so the lower half no longer feels empty.

## Real Mobile Browser Viewport Pass

This pass fixes the production preview issue seen on real phones, where browser chrome leaves less usable height than ideal 390x844 design frames.

- Removed the effective fixed-height story-card behavior for the active content flow.
- Removed the story-body fade mask so the question text is no longer visually clipped.
- Kept the story text readable with natural page flow instead of hiding required reading content.
- Compressed header, progress, card padding, choice spacing, and compact-height typography.
- Moved the bottom hint closer to the four choices so the answer area no longer feels detached.
- Kept the weak gold divider and paper-palace atmosphere without adding a bottom action bar.
- Verified additional compact viewports `390x700` and `375x620` to approximate mobile browser address/tool bars.

## Stable Card And Progress Pass

This final micro-adjustment keeps the accepted visual direction and only stabilizes layout details.

- Changed the progress row to a flex layout so the track expands across the available width.
- Kept the percentage in a fixed, right-aligned column so it no longer makes the track feel prematurely shortened.
- Fixed the scene-card height per viewport size, keeping question 1 and question 2 at the same card height.
- Centered the scene-card content group within the fixed card while keeping Chinese body text left-aligned.
- Restored controlled internal scrolling for long story text instead of letting long prompts move the answer buttons.
- Kept the red decision prompt outside the scroll body so it remains visible.
- Adjusted 375px width card height so the first question no longer looks visually cut off.

## Simplified Scene Card Structure Pass

This pass keeps the accepted paper-palace visual direction while simplifying the reading hierarchy.

- Removed the per-question scene title from the rendered card. The question data still keeps the title field, but `/test` no longer displays it.
- Moved the red decision prompt out of the scene card and placed it between the card and the four choices.
- Kept the scene card focused on body text only, with the same paper texture, corner accents, and inner border language.
- Reduced the fixed scene-card height now that the title and prompt no longer live inside it.
- Kept long text handling inside the body region, but the first question no longer needs internal scrolling in the checked sizes.
- Updated the progress DOM to use three stable parts: fixed left node, flexible track, fixed right percentage.
- Reduced the visible gap before the percentage to 5-6px across checked mobile widths.

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

Preview URL used: `http://127.0.0.1:3017/test`

### 375x667

- No horizontal scroll: pass.
- Header visible and not crowded: pass.
- Progress visible: pass.
- Progress track reaches the available width with only a 6px gap before the percentage.
- Scene title rendered inside the card: no.
- Red decision prompt is outside the card: yes.
- Scene card readable: pass.
- Scene text clipped: no.
- Scene card height: 200px.
- Four ABCD options visible: pass.
- Bottom hint visible at the lower edge without covering the fourth option.
- Red decision prompt remains visible and is not compressed against the card bottom.
- Screenshot: `docs/screenshots/test-page-hybrid-375x667.png`

### 390x844

- No horizontal scroll: pass.
- Header visible and balanced: pass.
- Progress visible: pass.
- Progress track reaches the available width with only a 6px gap before the percentage.
- Scene title rendered inside the card: no.
- Red decision prompt is outside the card: yes.
- Scene card readable: pass.
- Scene text clipped: no.
- Scene card height: 203px.
- Four ABCD options visible: pass.
- Bottom hint visible: pass.
- Lower-page whitespace is closed with subtle decoration instead of a new action bar.
- Screenshot: `docs/screenshots/test-page-hybrid-390x844.png`

### 430x932

- No horizontal scroll: pass.
- Header visible and balanced: pass.
- Progress visible: pass.
- Progress track reaches the available width with only a 6px gap before the percentage.
- Scene title rendered inside the card: no.
- Red decision prompt is outside the card: yes.
- Scene card readable: pass.
- Scene text clipped: no.
- Scene card height: 224px.
- Four ABCD options visible: pass.
- Bottom hint visible with natural breathing room: pass.
- Bottom atmosphere prevents the page from feeling unfinished on taller screens.
- Screenshot: `docs/screenshots/test-page-hybrid-430x932.png`

### Real Browser Chrome Approximation

- `390x700`: no horizontal scroll, story text not clipped, 4 choices visible, bottom hint visible.
- `375x620`: no horizontal scroll, story text not clipped, 4 choices visible, bottom hint visible.
- Fixed card heights remain stable in compact browser-height checks: 178px at `390x700`, 178px at `375x620`.
- Progress gaps before the percentage remain tight: 6px at `390x700`, 5px at `375x620`.

## Interaction Verification

- Question 1 displayed correctly.
- Four options displayed correctly.
- Clicking the first option advanced from question 1 to question 2.
- Full 30-question automated click path reached `/result`.
- `npm run build` passed.

## Merge Recommendation

After the remote preview deployment for this branch succeeds, this version is suitable for human review on a real phone. If the preview matches the product expectation, merge the branch into `main` to update production. Do not expect the production URL to change until `main` receives this commit or the Vercel preview is promoted.

## Still Needs Human Confirmation

- Whether the current scene-card height feels calm enough for long 30-question sessions.
- Whether the music button should receive a custom palace icon later.
- Whether the red-gold badge weight is close enough to the home page visual language.

## Recommended Next Step

Yes, do a separate 30-question copy refinement round later. This round intentionally did not change the question bank. The UI now supports long text through card-level scrolling, but shorter and more emotionally precise prompts will improve completion rate and perceived quality.
