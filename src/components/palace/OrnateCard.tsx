import type { ReactNode } from "react";
import Link from "next/link";

type OrnateCardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  ariaLabel?: string;
};

export function OrnateCard({ children, className = "", href, ariaLabel }: OrnateCardProps) {
  const cardClassName = ["ornate-card", className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link className={cardClassName} href={href} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return <div className={cardClassName}>{children}</div>;
}
