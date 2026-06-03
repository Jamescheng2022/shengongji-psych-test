import Link from "next/link";
import { MusicToggle } from "@/components/MusicToggle";

export default function HomePage() {
  return (
    <main className="shell">
      <section className="phone">
        <header className="topbar">
          <span>深宫纪</span>
          <MusicToggle />
        </header>

        <section className="hero">
          <div className="hero-card hero-card--cover">
            <div className="palace-gate" aria-hidden="true">
              <span />
              <span />
            </div>
            <p className="seal">剧本化心理测试</p>
            <h1>深宫纪</h1>
            <h2>宫门合上以后，你会怎样保护自己，又会怎样争取想要的位置？</h2>
            <p>
              三十幕深宫选择，测出你在关系、压力、权力与自我边界里的真实反应。完成后生成你的专属命格签，适合截图分享。
            </p>
            <div className="expert-row" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              <span>古典审美</span>
              <span>心理测评</span>
              <span>宫斗剧本</span>
              <span>女性运营</span>
            </div>
          </div>

          <div className="button-row">
            <Link className="primary-button" href="/about">翻开命册</Link>
            <Link className="secondary-button" href="/test">不看前言，直接入宫</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
