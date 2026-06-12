import type { DimensionId, Scores } from "@/lib/test-model/types";
import { posterDimensionOrder, posterDimensionView, posterScorePercent } from "@/src/components/poster/posterView";

type PosterDimensionMiniChartProps = {
  scores: Scores;
  topDimension?: { id: DimensionId; score: number; name: string };
};

export function PosterDimensionMiniChart({ scores, topDimension }: PosterDimensionMiniChartProps) {
  const top = topDimension ? posterDimensionView[topDimension.id] : null;

  return (
    <section className="poster-dimension-flow" aria-label="命格倾向与六维图谱">
      <h2>你的深宫六维命格图谱</h2>
      <div className="poster-mini-chart__bars">
        {posterDimensionOrder.map((id) => (
          <div className="poster-mini-chart__bar" key={id}>
            <span>{posterDimensionView[id].label}</span>
            <i aria-hidden="true">
              <b style={{ width: `${posterScorePercent(scores[id])}%` }} />
            </i>
            <em>{posterScorePercent(scores[id])}</em>
          </div>
        ))}
      </div>
      <p className="poster-top-tendency-line">
        <span>最高倾向 · {top?.label ?? "命格"}</span>
        <small>{top ? `${top.desc}，是你在深宫里的护身符。` : "三十幕落印，照见你的处世底色。"}</small>
      </p>
    </section>
  );
}
