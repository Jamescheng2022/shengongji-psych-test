type PosterQuoteProps = {
  quote: string;
};

export function PosterQuote({ quote }: PosterQuoteProps) {
  return (
    <blockquote className="poster-signature-quote" aria-label="命格签语">
      <span aria-hidden="true">“</span>
      <p>{quote}</p>
      <span aria-hidden="true">”</span>
    </blockquote>
  );
}
