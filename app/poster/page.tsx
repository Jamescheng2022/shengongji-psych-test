"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getResultPortrait, useFallbackPortrait } from "@/lib/test-model/assets";
import { readResult } from "@/lib/test-model/storage";
import type { ComputedResult } from "@/lib/test-model/types";

export default function PosterPage() {
  const [payload, setPayload] = useState<ComputedResult | null>(null);

  useEffect(() => {
    setPayload(readResult());
  }, []);

  if (!payload) {
    return (
      <main className="shell poster-shell">
        <section className="phone poster-wrap">
          <article className="paper-card">
            <p className="seal">命签未成</p>
            <h1>还没有命格结果</h1>
            <p>完成三十幕选择后，再回来生成命格海报。</p>
          </article>
          <Link className="primary-button" href="/test">开始入宫</Link>
        </section>
      </main>
    );
  }

  const top = payload.rankedDimensions[0];
  const portrait = getResultPortrait(payload.result.id);

  return (
    <main className="shell poster-shell">
      <section className="phone poster-wrap">
        <article className="poster-card poster-card--fate">
          <div className="poster-copy">
            <p className="seal">深宫命格 · 命格签</p>
            <h1>{payload.result.name}</h1>
            <p className="verdict">{payload.result.verdict}</p>
          </div>

          <img className="poster-portrait" src={portrait} alt={payload.result.name} onError={(event) => useFallbackPortrait(event.currentTarget)} />

          <p className="poster-quote">{payload.result.shareQuote}</p>

          <div className="poster-bottom">
            <p>最高倾向：{top?.name}</p>
            <p className="small-note">保存这张命签 · 看看朋友会落在哪一种命格</p>
          </div>
        </article>

        <div className="button-row">
          <Link className="primary-button" href="/result">查看命格全解</Link>
          <Link className="secondary-button" href="/test">重新入宫</Link>
        </div>
      </section>
    </main>
  );
}
