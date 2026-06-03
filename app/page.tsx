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
          <div className="hero-card">
            <p className="seal">剧本化心理测试</p>
            <h1>深宫纪</h1>
            <h2>三十幕宫廷选择，照见你在压力、关系与权力中的真实反应。</h2>
            <p>
              这不是宫斗小游戏。你将在一段精心设计的深宫剧本里完成心理测评：每一次退让、试探、沉默与出手，都会留下你的心理痕迹。
            </p>
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
