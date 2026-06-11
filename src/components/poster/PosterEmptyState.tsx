import Link from "next/link";

export function PosterEmptyState() {
  return (
    <section className="poster-empty-state">
      <p>命签未成</p>
      <h1>还没有命格结果</h1>
      <span>完成三十幕选择后，再回来生成命格海报。</span>
      <Link className="poster-primary-action" href="/test">
        开始入宫
      </Link>
    </section>
  );
}
