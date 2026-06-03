import Link from "next/link";

export function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-card hero-card--cover">
        <div className="palace-gate" aria-hidden="true">
          <span />
          <span />
        </div>
        <p className="seal">30 幕 · 约 6 分钟</p>
        <h1>深宫纪</h1>
        <h2>你处理关系和压力的方式，往往藏在第一反应里。</h2>
        <p>进入一段深宫处境，凭直觉选择。结束后，你会得到一张属于自己的命格签。</p>
      </div>
      <div className="button-row">
        <Link className="primary-button" href="/test">开始测试</Link>
        <Link className="secondary-button" href="/about">了解测试</Link>
      </div>
    </section>
  );
}
