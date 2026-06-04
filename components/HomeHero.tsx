import Link from "next/link";

const titleFont = {
  fontFamily: '"STKaiti", "KaiTi", "Kaiti SC", "Songti SC", "Noto Serif SC", serif',
  fontWeight: 700,
  letterSpacing: "0.08em",
} as const;

export function HomeHero() {
  return (
    <section className="hero hero--landing">
      <div className="hero-card hero-card--cover palace-cover">
        <div className="palace-gate" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="cover-title-block" style={{ position: "relative", zIndex: 1 }}>
          <p className="seal" style={{ fontFamily: titleFont.fontFamily }}>三十幕 · 一卷命册</p>
          <h1 className="cover-title" style={titleFont}>
            <span style={{ display: "inline-block", transform: "translateY(-2px)" }}>深</span>
            <span style={{ display: "inline-block", transform: "translateY(3px)" }}>宫</span>
            <span style={{ display: "inline-block", transform: "translateY(-1px)" }}>命</span>
            <span style={{ display: "inline-block", transform: "translateY(2px)" }}>格</span>
          </h1>
          <p className="cover-subtitle" style={{ fontFamily: titleFont.fontFamily }}>一入宫门，照见你的真实命格。</p>
        </div>
        <div className="landing-intro-card">
          <p>你将进入一段深宫情境。</p>
          <p>每一次选择，都会映出你面对人心、关系、压力与困局时的真实倾向。</p>
        </div>
        <div className="expert-row" aria-label="命格亮点">
          <span>30幕抉择</span>
          <span>12种命格</span>
          <span>专属判词</span>
        </div>
      </div>
      <div className="button-row landing-buttons">
        <Link className="primary-button" href="/test">开始入宫</Link>
        <Link className="secondary-button" href="/about">查看说明</Link>
      </div>
    </section>
  );
}
