import Link from "next/link";
import { MusicToggle } from "@/components/MusicToggle";

export default function AboutPage() {
  return (
    <main className="shell">
      <section className="phone">
        <header className="topbar">
          <Link href="/">‹ 返回</Link>
          <MusicToggle />
        </header>

        <article className="paper-card">
          <p className="seal">命册前言</p>
          <h1>入宫之前</h1>
          <p>
            三十幕深宫选择，会照见你处理关系、压力和边界的方式。
          </p>
          <ul>
            <li>约 6-8 分钟。</li>
            <li>没有标准答案。</li>
            <li>选择你最自然的反应。</li>
            <li>结果仅供娱乐和自我观察。</li>
          </ul>
          <p>
            五章命册：初入宫门、珠帘暗涌、锦帐风波、长夜藏锋、凤印将落。
          </p>
        </article>

        <div className="button-row" style={{ marginTop: 16 }}>
          <Link className="primary-button" href="/test">入宫，开始第一幕</Link>
        </div>
      </section>
    </main>
  );
}
