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
          <p className="seal">测前说明</p>
          <h1>这套测试如何工作</h1>
          <p>
            深宫纪由三个虚拟专家角色共同设计：懂中国古典审美的前端设计师、女性心理学家、宫斗剧本编剧。
          </p>
          <ul>
            <li>共 30 题，约 6-8 分钟。</li>
            <li>没有标准答案，请选你最自然会做的反应。</li>
            <li>每道题都是宫斗情境，也是心理测评题。</li>
            <li>结果用于娱乐和自我观察，不作为心理诊断。</li>
          </ul>
          <p>
            你将经历五章：初入宫门、珠帘暗涌、锦帐风波、长夜藏锋、凤印将落。
          </p>
        </article>

        <div className="button-row" style={{ marginTop: 16 }}>
          <Link className="primary-button" href="/test">我已明白，开始测试</Link>
        </div>
      </section>
    </main>
  );
}
