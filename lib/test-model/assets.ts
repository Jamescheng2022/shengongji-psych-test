const DEFAULT_PORTRAIT = "/assets/portrait-zhimou-guifei.png";
const FALLBACK_PORTRAIT = "/assets/portrait-guifei.svg";

export const portraitByResultId: Record<string, string> = {
  "brocade-controller": "/assets/portrait-zhimou-guifei.png",
  "long-night-empath": "/assets/portrait-wenyi-guiren.png",
  "cold-palace-reviewer": "/assets/portrait-lengyue-mouhou.png",
  "hidden-fragrance": "/assets/portrait-cangfeng-meiren.png",
  "winter-lamp": "/assets/portrait-qingxing-pangguanzhe.png",
  "jade-step-tester": "/assets/portrait-linglong-nvguan.png",
  "phoenix-seal": "/assets/portrait-guao-fengyi.png",
  "gold-hairpin-breaker": "/assets/portrait-xiaomian-quanchen.png",
  "curtain-reader": "/assets/portrait-linglong-nvguan.png",
  "palace-wall-keeper": "/assets/portrait-qingxing-pangguanzhe.png",
  "mirror-lake-hidden-edge": "/assets/portrait-cangfeng-meiren.png",
  "crimson-stair-courage": "/assets/portrait-guao-fengyi.png",
};

export function getResultPortrait(resultId?: string) {
  if (!resultId) return DEFAULT_PORTRAIT;
  return portraitByResultId[resultId] ?? DEFAULT_PORTRAIT;
}

export function useFallbackPortrait(image: HTMLImageElement) {
  if (image.src.endsWith(FALLBACK_PORTRAIT)) return;
  image.src = FALLBACK_PORTRAIT;
}
