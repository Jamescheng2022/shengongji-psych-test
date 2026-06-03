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
            <h2>三十幕宫廷选择，照见你在压力、关系与权力中的真实反应。</h2>
            <p>
              由中国古典审美前端设计师、女性心理学家与宫斗剧本编剧共同打造。表面是入宫剧本，底层是心理测评。
            </p>
            <div className="expert-row">
              <span>古典审美</span>
              <span>心理测评</span>
              <span>宫斗剧本</span>
            </div>
          </div>

          <div className="button-row">
            <Link className="primary-button" href="/about">开始入宫</Link>
            <Link className="secondary-button" href="/test">直接测试</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
