import Link from "next/link";

export function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-card hero-card--cover palace-cover">
        <div className="palace-gate" aria-hidden="true">
          <span />
          <span />
        </div>
        <p className="seal">30 幕 · 约 6 分钟</p>
        <h1>深宫命格</h1>
        <h2>在宫廷情境里，看见你的处世方式。</h2>
        <p>进入三十段宫廷情境，凭第一念选择。结束后，你会得到一张属于自己的命格签。</p>
        <div className="expert-row" aria-label="命格亮点">
          <span>宫廷抉择</span>
          <span>五维命格</span>
          <span>专属判词</span>
        </div>
      </div>
      <div className="button-row">
        <Link className="primary-button" href="/test">开始入宫</Link>
        <Link className="secondary-button" href="/about">查看说明</Link>
      </div>
    </section>
  );
}
