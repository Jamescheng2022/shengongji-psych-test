import Link from "next/link";

export function HomeHero() {
  return (
    <section className="home-asset-artboard" aria-label="深宫命格首页">
      <div className="home-asset-brand">深宫命格</div>

      <div className="home-asset-title-area">
        <p className="home-asset-title-text">深宫命格</p>
        <p className="home-asset-subtitle-main">以宫廷情境，映射你的真实人格</p>
        <p className="home-asset-subtitle-minor">真实严谨的心理学人格测试</p>
      </div>

      <section className="home-asset-copy-panel" aria-label="首页说明">
        <p>
          你将走入一场深宫命局。每一次进退、沉默、示弱与反击，都会映照出你真实的人格倾向。
        </p>
      </section>

      <Link className="home-asset-cta" href="/test" aria-label="开始测试">
        <span>开始测试</span>
      </Link>

      <div className="home-asset-note" aria-label="测试说明">
        <strong>测试说明</strong>
        <span>30道宫廷剧情选择，生成你的专属人格画像</span>
      </div>

      <div className="home-asset-feature-row" aria-label="测试卖点">
        <div className="home-asset-feature-card"><em>卷</em><strong>30道题</strong></div>
        <div className="home-asset-feature-card"><em>宫</em><strong>宫廷剧情包裹</strong></div>
        <div className="home-asset-feature-card"><em>像</em><strong>人格画像解析</strong></div>
      </div>

      <p className="home-asset-disclaimer">
        本测试仅用于娱乐与自我观察，不作为专业心理诊断依据。
      </p>
    </section>
  );
}
