import type { ComputedResult } from "@/lib/test-model/types";
import { dimensionLabel, dimensionView, scorePercent } from "@/src/components/result/resultView";

type PosterCardProps = {
  payload: ComputedResult;
  portrait: string;
  onPortraitError: (image: HTMLImageElement) => void;
};

export function PosterCard({ payload, portrait, onPortraitError }: PosterCardProps) {
  const top = payload.rankedDimensions[0];

  return (
    <article className="poster-fate-card" aria-label="深宫命格分享海报">
      <div className="poster-fate-card__frame" aria-hidden="true" />
      <header className="poster-fate-card__header">
        <p>深宫命格 · 命格签</p>
        <h1>{payload.result.name}</h1>
        <span>{payload.result.verdict}</span>
      </header>

      <div className="poster-fate-card__portrait">
        <img src={portrait} alt={payload.result.name} onError={(event) => onPortraitError(event.currentTarget)} />
      </div>

      <blockquote className="poster-quote">
        <p>{payload.result.shareQuote}</p>
      </blockquote>

      <section className="poster-dimension-summary" aria-label="六维简表">
        <div className="poster-top-tendency">
          <span>最高倾向</span>
          <strong>{top ? dimensionLabel(top.id) : "命格"}</strong>
          <small>{top ? dimensionView[top.id].desc : "三十幕落印"}</small>
        </div>
        <div className="poster-mini-bars">
          {payload.rankedDimensions.map((dimension) => (
            <div className="poster-mini-bar" key={dimension.id}>
              <span>{dimensionView[dimension.id].short}</span>
              <i aria-hidden="true">
                <b style={{ width: `${scorePercent(dimension.score)}%` }} />
              </i>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
