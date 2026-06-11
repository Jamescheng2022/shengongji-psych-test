import type { ComputedResult } from "@/lib/test-model/types";
import { dimensionLabel, dimensionView, scorePercent } from "./resultView";

type ResultDimensionChartProps = {
  dimensions: ComputedResult["rankedDimensions"];
};

export function ResultDimensionChart({ dimensions }: ResultDimensionChartProps) {
  return (
    <section className="result-panel result-panel--chart" aria-label="命格六维图">
      <div className="result-section-heading">
        <span>六维</span>
        <h2>命格六维图</h2>
      </div>
      <p className="result-muted">不是好坏分数，而是你在三十幕里最常调用的处世方式。</p>
      <div className="result-dimension-list">
        {dimensions.map((dimension) => {
          const percent = scorePercent(dimension.score);
          const view = dimensionView[dimension.id];
          return (
            <div className="result-dimension-row" key={dimension.id}>
              <div className="result-dimension-row__label">
                <strong>{dimensionLabel(dimension.id)}</strong>
                <small>{view.desc}</small>
              </div>
              <div className="result-dimension-row__bar" aria-hidden="true">
                <span style={{ width: `${percent}%` }} />
              </div>
              <em>{percent}</em>
            </div>
          );
        })}
      </div>
    </section>
  );
}
