type PosterHeroProps = {
  title: string;
  verdict: string;
  portrait: string;
  onPortraitError: (image: HTMLImageElement) => void;
};

export function PosterHero({ title, verdict, portrait, onPortraitError }: PosterHeroProps) {
  return (
    <section className="poster-premium-hero" aria-label="命格主视觉">
      <h1>{title}</h1>
      <p>{verdict}</p>
      <figure className="poster-premium-portrait">
        <img src={portrait} alt={`${title}命格人物图`} onError={(event) => onPortraitError(event.currentTarget)} />
      </figure>
    </section>
  );
}
