type PosterQuoteProps = {
  quote: string;
};

function toPosterQuote(text: string, limit = 32) {
  const cleaned = text.replace(/\s+/g, "").replace(/。$/, "");
  const chars = Array.from(cleaned);
  return chars.length > limit ? `${chars.slice(0, limit).join("")}。` : cleaned;
}

export function PosterQuote({ quote }: PosterQuoteProps) {
  return (
    <blockquote className="poster-signature-quote" aria-label="命格签语">
      <span aria-hidden="true">“</span>
      <p>{toPosterQuote(quote)}</p>
      <span aria-hidden="true">”</span>
    </blockquote>
  );
}
