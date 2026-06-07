import Link from "next/link";

type PalaceButtonProps = {
  href: string;
  children: string;
  className?: string;
  ariaLabel?: string;
};

export function PalaceButton({ href, children, className = "", ariaLabel }: PalaceButtonProps) {
  return (
    <Link className={["palace-button", className].filter(Boolean).join(" ")} href={href} aria-label={ariaLabel}>
      <span className="palace-button__spark" aria-hidden="true" />
      <span>{children}</span>
      <span className="palace-button__spark" aria-hidden="true" />
    </Link>
  );
}
