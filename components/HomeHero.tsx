import Link from "next/link";

export function HomeHero() {
  return (
    <section className="home-page-v2">
      <div className="home-scenery" aria-hidden="true">
        <span className="home-curtain home-curtain-left" />
        <span className="home-curtain home-curtain-right" />
        <span className="home-lantern" />
        <span className="home-plum" />
      </div>

      <div className="home-brand-row">
        <span className="home-brand-mark">✾</span>
        <span>深宫命格</span>
      </div>

      <section className="home-title-stage">
        <div className="home-title-ornament" aria-hidden="true"><span /></div>
        <p className="home-side-tag">命格<br />入宫</p>
        <h1 className="home-brush-title">深宫命格</h1>
        <p className="home-main-subtitle">以宫廷情境，映射你的真实人格</p>
        <p className="home-minor-subtitle">真实严谨的自我探索测试</p>
      </section>

      <section className="home-intro-panel">
        <p>通过精心设计的深宫情境与多维选择，</p>
        <p>本测试将映出你在权谋、情感、关系与压力中的真实倾向，</p>
        <p>并为你匹配最具代表性的宫廷命格。</p>
        <span className="home-panel-flower" aria-hidden="true">✤</span>
        <Link className="home-main-button" href="/test">开始测试</Link>
      </section>

      <Link className="home-about-link" href="/about">测试说明 ›</Link>

      <section className="home-feature-strip" aria-label="测试亮点">
        <div>
          <span className="home-feature-icon">▤</span>
          <strong>30道题</strong>
        </div>
        <div>
          <span className="home-feature-icon">☷</span>
          <strong>宫廷剧情包装</strong>
        </div>
        <div>
          <span className="home-feature-icon">◉</span>
          <strong>人格画像解析</strong>
        </div>
      </section>

      <p className="home-disclaimer">本测试为自我探索与娱乐参考，非专业心理诊断。</p>
    </section>
  );
}
