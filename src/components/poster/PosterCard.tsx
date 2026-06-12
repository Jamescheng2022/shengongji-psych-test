import type { ComputedResult } from "@/lib/test-model/types";
import { PosterDimensionMiniChart } from "@/src/components/poster/PosterDimensionMiniChart";
import { PosterHeader } from "@/src/components/poster/PosterHeader";
import { PosterHero } from "@/src/components/poster/PosterHero";
import { PosterQrBlock } from "@/src/components/poster/PosterQrBlock";
import { PosterQuote } from "@/src/components/poster/PosterQuote";

type PosterCardProps = {
  payload: ComputedResult;
  portrait: string;
  onPortraitError: (image: HTMLImageElement) => void;
};

export function PosterCard({ payload, portrait, onPortraitError }: PosterCardProps) {
  const top = payload.rankedDimensions[0];

  return (
    <article className="poster-fate-card poster-fate-card--premium" data-poster-card aria-label="深宫命格分享海报">
      <div className="poster-fate-card__frame" aria-hidden="true" />
      <div className="poster-card-flower poster-card-flower--left" aria-hidden="true" />
      <div className="poster-card-flower poster-card-flower--right" aria-hidden="true" />
      <PosterHeader />
      <PosterHero
        title={payload.result.name}
        verdict={payload.result.verdict}
        portrait={portrait}
        onPortraitError={onPortraitError}
      />
      <PosterQuote quote={payload.result.shareQuote} />
      <PosterDimensionMiniChart topDimension={top} />
      <PosterQrBlock />
      <p className="poster-disclaimer">测试结果仅供娱乐与自我观察</p>
    </article>
  );
}
