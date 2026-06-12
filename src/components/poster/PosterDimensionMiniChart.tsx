import type { DimensionId } from "@/lib/test-model/types";
import { posterDimensionView, posterTendencyCopy } from "@/src/components/poster/posterView";

type PosterDimensionMiniChartProps = {
  topDimension?: { id: DimensionId; score: number; name: string };
};

export function PosterDimensionMiniChart({ topDimension }: PosterDimensionMiniChartProps) {
  const top = topDimension ? posterDimensionView[topDimension.id] : null;

  return (
    <section className="poster-dimension-flow" aria-label="最高命格倾向">
      <p className="poster-top-tendency-line">
        <span>最高倾向 · {top?.label ?? "命格"}</span>
        <small>{topDimension ? posterTendencyCopy[topDimension.id] : "三十幕落印，照见你的处世底色。"}</small>
      </p>
    </section>
  );
}
