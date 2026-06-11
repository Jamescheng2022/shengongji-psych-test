import Link from "next/link";

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

      <button className="test-header__menu" type="button" aria-label="更多">
        <span aria-hidden="true">•••</span>
        <i aria-hidden="true" />
      </button>
    </header>
  );
}
