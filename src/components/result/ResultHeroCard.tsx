import type { ResultType } from "@/lib/test-model/types";
import { dimensionLabel } from "./resultView";

type RankedDimension = {
  id: Parameters<typeof dimensionLabel>[0];
  score: number;
};

type ResultHeroCardProps = {
  result: ResultType;
  portrait: string;
  primary?: RankedDimension;
  secondary?: RankedDimension;
  miniBiography: string;
  onPortraitError: (image: HTMLImageElement) => void;
};

export function ResultHeroCard({ result, portrait, primary, secondary, miniBiography, onPortraitError }: ResultHeroCardProps) {
  return (
    <article className="result-reveal-card" aria-label="命格揭晓">
      <div className="result-reveal-card__glow" aria-hidden="true" />
      <div className="result-portrait">
        <img src={portrait} alt={result.name} onError={(event) => onPortraitError(event.currentTarget)} />
      </div>
      <div className="result-reveal-card__copy">
        <p className="result-eyebrow">你的深宫命格</p>
        <h1>{result.name}</h1>
        <p className="result-verdict">{result.verdict}</p>
        <div className="result-fate-tags" aria-label="主要倾向">
          {primary ? <span>主倾向 {dimensionLabel(primary.id)}</span> : null}
          {secondary ? <span>副倾向 {dimensionLabel(secondary.id)}</span> : null}
          <span>三十幕落印</span>
        </div>
      </div>
      <p className="result-mini-bio">{miniBiography}</p>
    </article>
  );
}
