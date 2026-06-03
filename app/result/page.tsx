"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MusicToggle } from "@/components/MusicToggle";
import { buildMiniBiography, buildRealLifeMirror } from "@/lib/test-model/narrative";
import { readResult } from "@/lib/test-model/storage";
import type { ComputedResult } from "@/lib/test-model/types";

function percent(value: number, all: number[]) {
  const min = Math.min(...all);
  const max = Math.max(...all);
  if (max === min) return 70;
  return Math.round(42 + ((value - min) / (max - min)) * 54);
}

export default function ResultPage() {
  const [payload, setPayload] = useState<ComputedResult | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setPayload(readResult());
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <main className="shell"><section className="phone"><p>正在翻阅命册……</p></section></main>;
  }

  if (!payload) {
    return (
      <main className="shell">
        <section className="phone">
          <article className="paper-card">
            <p className="seal">命册未启</p>
            <h1>你还没有完成测试</h1>
            <p>请先完成三十幕选择，命格才会落印。</p>
          </article>
          <div className="button-row" style={{ marginTop: 16 }}>
            <Link className="primary-button" href="/test">开始测试</Link>
            <Link className="secondary-button" href="/">返回首页</Link>
          </div>
        </section>
      </main>
    );
  }

  const values = payload.rankedDimensions.map((item) => item.score);
  const primary = payload.rankedDimensions[0];
  const miniBiography = payload.result.miniBiography ?? buildMiniBiography(payload.result.name);
  const realLifeMirror = payload.result.realLifeMirror ?? buildRealLifeMirror(primary?.name ?? "压力反应");

  return (
    <main className="shell">
      <section className="phone">
        <header className="topbar">
          <Link href="/">‹ 返回</Link>
          <MusicToggle />
        </header>

        <article className="result-card result-card--ritual">
          <div className="fate-slip">
            <p className="seal">你的深宫命格</p>
            <h1>{payload.result.name}</h1>
            <p className="verdict">{payload.result.verdict}</p>
            <span className="fate-stamp">命</span>
          </div>

          <section className="result-section">
            <h2>你的深宫小传</h2>
            <p>{miniBiography}</p>
          </section>

          <section className="result-section">
            <h2>深宫画像</h2>
            <p>{payload.result.archetype}</p>
          </section>

          <section className="result-section">
            <h2>心理画像</h2>
            <p>{payload.result.psychProfile}</p>
          </section>

          <section className="result-section">
            <h2>现实映射</h2>
            <p>{realLifeMirror}</p>
          </section>

          <section className="result-section evidence-section">
            <h2>为什么是这个结果</h2>
            {payload.keyChoices.map((answer, index) => (
              <article className="evidence-card" key={`${answer.questionId}-${answer.choiceId}`}>
                <strong>关键选择 {index + 1}</strong>
                <p>{answer.choiceText}</p>
                <span>{answer.evidence ?? "这个选择暴露了你在压力中的惯用保护方式。"}</span>
              </article>
            ))}
          </section>

          <section className="result-section">
            <h2>关系模式</h2>
            <p>{payload.result.relationshipPattern}</p>
          </section>

          <section className="result-section">
            <h2>压力反应</h2>
            <p>{payload.result.stressResponse}</p>
          </section>

          <section className="result-section">
            <h2>隐藏风险</h2>
            <p>{payload.result.hiddenRisk}</p>
          </section>

          <section className="result-section">
            <h2>成长建议</h2>
            <p>{payload.result.growthAdvice}</p>
          </section>

          <section className="result-section">
            <h2>心理倾向图</h2>
            <p className="small-note">不是好坏分数，只是你在三十幕里最常使用的心理工具。</p>
            <div className="dim-list">
              {payload.rankedDimensions.map((dimension) => (
                <div className="dim-row" key={dimension.id}>
                  <span>{dimension.name}</span>
                  <span className="dim-bar"><span style={{ width: `${percent(dimension.score, values)}%` }} /></span>
                  <span>{percent(dimension.score, values)}%</span>
                </div>
              ))}
            </div>
          </section>
        </article>

        <div className="button-row" style={{ marginTop: 16 }}>
          <Link className="primary-button" href="/poster">生成分享命签</Link>
          <Link className="secondary-button" href="/test">重新测试</Link>
        </div>
      </section>
    </main>
  );
}
