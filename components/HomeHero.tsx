import Link from "next/link";

const features = [
  {
    label: "30幕剧情",
    icon: "/assets/page-01-home/home-feature-icon-questions-transparent.png",
  },
  {
    label: "宫廷剧情包裹",
    icon: "/assets/page-01-home/home-feature-icon-story-transparent.png",
  },
  {
    label: "人格画像解析",
    icon: "/assets/page-01-home/home-feature-icon-persona-transparent.png",
  },
];

export function HomeHero() {
  return (
    <section className="home-asset-artboard" aria-labelledby="home-title">
      <div className="home-asset-brand" aria-hidden="true">
        深宫命格
      </div>

      <div className="home-asset-title-area">
        <h1 id="home-title" className="sr-only">
          深宫命格
        </h1>
        <img
          className="home-asset-title-img"
          src="/assets/page-01-home/home-title-transparent.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="home-asset-divider"
          src="/assets/page-01-home/home-ornament-divider-transparent.png"
          alt=""
          aria-hidden="true"
        />
        <p className="home-asset-subtitle-main">以宫廷情境，映照你的真实人格</p>
        <p className="home-asset-subtitle-minor">基于情境选择的人格倾向观察</p>
      </div>

      <div className="home-asset-copy-panel" aria-label="命格导语">
        <p>
          你将走入一场深宫命局。
          <br />
          每一次进退、沉默、示弱与反击，
          <br />
          都会映照出你的处世底色。
        </p>
      </div>

      <Link className="home-asset-cta" href="/test" aria-label="开始入宫">
        <img
          className="home-asset-cta-bg"
          src="/assets/page-01-home/home-cta-bg-transparent.png"
          alt=""
          aria-hidden="true"
        />
        <span>开始入宫</span>
      </Link>

      <p className="home-asset-note">30幕宫廷剧情选择，生成你的专属人格画像</p>

      <div className="home-asset-feature-row" aria-label="产品特点">
        {features.map((feature) => (
          <div className="home-asset-feature-card" key={feature.label}>
            <img src={feature.icon} alt="" aria-hidden="true" />
            <strong>{feature.label}</strong>
          </div>
        ))}
      </div>

      <p className="home-asset-disclaimer">
        本测试仅用于娱乐与自我观察，不作为专业心理诊断依据。
      </p>
    </section>
  );
}
