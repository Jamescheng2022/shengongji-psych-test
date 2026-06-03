import Link from "next/link";

export function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-card hero-card--cover">
        <div className="palace-gate" aria-hidden="true">
          <span />
          <span />
        </div>
        <p className="seal">30 幕 · 深宫人格测试</p>
        <h1>深宫纪</h1>
        <h2>你在压力、关系和权力面前，会本能地选择哪一种生存方式？</h2>
        <p>进入一段深宫处境，凭直觉做出选择。测试结束后，你会得到一张专属命格签。</p>
      </div>
      <div className="button-row">
        <Link className="primary-button" href="/test">开始测试</Link>
        <Link className="secondary-button" href="/about">测试说明</Link>
      </div>
    </section>
  );
}
