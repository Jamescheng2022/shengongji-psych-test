import Link from "next/link";

export function ResultEmptyState() {
  return (
    <section className="result-empty-state">
      <p className="result-eyebrow">命册未启</p>
      <h1>你还没有完成入宫选择</h1>
      <p>请先完成三十幕选择，命格才会落印。</p>
      <div className="result-empty-state__actions">
        <Link className="result-primary-action" href="/test">
          开始入宫
        </Link>
        <Link className="result-secondary-action" href="/">
          返回首页
        </Link>
      </div>
    </section>
  );
}
