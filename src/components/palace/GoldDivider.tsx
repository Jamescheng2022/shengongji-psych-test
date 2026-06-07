type GoldDividerProps = {
  children: string;
  className?: string;
};

export function GoldDivider({ children, className = "" }: GoldDividerProps) {
  return (
    <div className={["gold-divider", className].filter(Boolean).join(" ")} aria-label={children}>
      <span className="gold-divider__line" aria-hidden="true" />
      <span className="gold-divider__knot" aria-hidden="true" />
      <h2>{children}</h2>
      <span className="gold-divider__knot" aria-hidden="true" />
      <span className="gold-divider__line" aria-hidden="true" />
    </div>
  );
}
