"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getResultPortrait, useFallbackPortrait } from "@/lib/test-model/assets";
import { readResult } from "@/lib/test-model/storage";
import type { ComputedResult } from "@/lib/test-model/types";

export default function PosterPage() {
  const [payload, setPayload] = useState<ComputedResult | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPayload(readResult());
  }, []);

  async function sharePoster() {
    if (!payload) return;
    const text = `我的深宫命格是「${payload.result.name}」：${payload.result.shareQuote}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "深宫命格", text, url: window.location.origin });
        return;
      }
      await navigator.clipboard.writeText(`${text}\n${window.location.origin}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  if (!payload) {
    return (
      <main className="shell poster-shell">
        <section className="phone poster-wrap">
          <article className="paper-card empty-poster-card">
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
        <article className="poster-card poster-card--fate" aria-label="深宫命格海报">
          <div className="poster-frame-line" aria-hidden="true" />

          <div className="poster-copy">
            <p className="seal">深宫命格 · 命格签</p>
            <h1>{payload.result.name}</h1>
            <p className="verdict">{payload.result.verdict}</p>
          </div>

          <img className="poster-portrait" src={portrait} alt={payload.result.name} onError={(event) => useFallbackPortrait(event.currentTarget)} />

          <div className="poster-quote-card">
            <p>{payload.result.shareQuote}</p>
          </div>

          <div className="poster-bottom">
            <span>最高倾向 · {top?.name}</span>
            <small>三十幕入宫抉择，照见真实的自己</small>
          </div>
        </article>

        <p className="small-note poster-tip">长按海报截图保存，或使用下方按钮分享文案。</p>

        <div className="button-row poster-actions">
          <button className="primary-button" type="button" onClick={sharePoster}>{copied ? "已复制文案" : "分享命格"}</button>
          <Link className="secondary-button" href="/result">查看全解</Link>
          <Link className="secondary-button" href="/test">重新入宫</Link>
        </div>
      </section>
    </main>
  );
}
