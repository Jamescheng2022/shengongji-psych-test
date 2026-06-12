type PosterHeroProps = {
  title: string;
  verdict: string;
  portrait: string;
  onPortraitError: (image: HTMLImageElement) => void;
};

function toPosterLine(text: string, limit = 32) {
  const cleaned = text.replace(/\s+/g, "").replace(/。$/, "");
  const chars = Array.from(cleaned);
  return chars.length > limit ? `${chars.slice(0, limit).join("")}。` : cleaned;
}

export function PosterHero({ title, verdict, portrait, onPortraitError }: PosterHeroProps) {
  return (
    <section className="poster-premium-hero" aria-label="命格主视觉">
      <h1>{title}</h1>
      <p>{toPosterLine(verdict)}</p>
      <figure className="poster-premium-portrait">
        <img src={portrait} alt={`${title}命格人物图`} onError={(event) => onPortraitError(event.currentTarget)} />
      </figure>
    </section>
  );
}
