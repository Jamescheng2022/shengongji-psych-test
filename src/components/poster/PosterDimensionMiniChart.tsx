import type { DimensionId, Scores } from "@/lib/test-model/types";
import { posterDimensionOrder, posterDimensionView, posterScorePercent } from "@/src/components/poster/posterView";

type PosterDimensionMiniChartProps = {
  scores: Scores;
  topDimension?: { id: DimensionId; score: number; name: string };
};

export function PosterDimensionMiniChart({ scores, topDimension }: PosterDimensionMiniChartProps) {
  const top = topDimension ? posterDimensionView[topDimension.id] : null;

  return (
    <section className="poster-card-grid" aria-label="命格倾向与六维图谱">
      <div className="poster-tendency-card">
        <span>最高倾向</span>
        <strong>{top?.label ?? "命格"}</strong>
        <em>{top?.desc ?? "三十幕落印"}</em>
      </div>

      <div className="poster-mini-chart">
        <h2>六维命格图谱</h2>
        <div className="poster-mini-chart__bars">
          {posterDimensionOrder.map((id) => (
            <div className="poster-mini-chart__bar" key={id}>
              <span>{posterDimensionView[id].short}</span>
              <i aria-hidden="true">
                <b style={{ width: `${posterScorePercent(scores[id])}%` }} />
              </i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
