import Link from "next/link";
import { MusicToggle } from "@/components/MusicToggle";

export default function AboutPage() {
  return (
    <main className="shell about-shell">
      <section className="phone">
        <header className="topbar">
          <Link href="/">‹ 返回</Link>
          <MusicToggle />
        </header>

        <article className="paper-card about-card">
          <p className="seal">命册前言</p>
          <h1>入宫之前</h1>
          <p>
            深宫命格是一场关于选择、情感与人心的宫廷命格体验。
          </p>
          <ul>
            <li>约 6-8 分钟完成。</li>
            <li>没有标准答案。</li>
            <li>凭第一念选择你最自然的反应。</li>
            <li>结果仅供娱乐和自我探索，不涉及命运预测。</li>
          </ul>
          <p>
            五章命册：初入宫门、珠帘暗涌、锦帐风波、长夜藏锋、凤印将落。
          </p>
        </article>

        <div className="button-row" style={{ marginTop: 16 }}>
          <Link className="primary-button" href="/test">开始入宫</Link>
        </div>
      </section>
    </main>
  );
}
