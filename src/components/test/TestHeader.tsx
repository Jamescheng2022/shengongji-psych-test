import Link from "next/link";
import { MusicToggle } from "@/components/MusicToggle";

type TestHeaderProps = {
  title: string;
};

export function TestHeader({ title }: TestHeaderProps) {
  return (
    <header className="test-header">
      <Link className="test-header__back" href="/" aria-label="返回首页">
        <span aria-hidden="true">‹</span>
      </Link>

      <div className="test-header__title" aria-label={title}>
        <span className="test-header__ornament" aria-hidden="true">✤</span>
        <h1>{title}</h1>
        <span className="test-header__ornament" aria-hidden="true">✤</span>
      </div>

      <div className="test-header__music">
        <MusicToggle />
      </div>
    </header>
  );
}
