"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readResult } from "@/lib/test-model/storage";
import type { ComputedResult } from "@/lib/test-model/types";

export default function PosterPage() {
  const [payload, setPayload] = useState<ComputedResult | null>(null);

  useEffect(() => {
    setPayload(readResult());
  }, []);

  if (!payload) {
    return (
      <main className="shell">
        <section className="phone poster-wrap">
          <article className="paper-card">
            <p className="seal">命签未成</p>
            <h1>还没有测试结果</h1>
            <p>完成三十幕选择后，再回来生成分享命签。</p>
          </article>
          <Link className="primary-button" href="/test">开始测试</Link>
        </section>
      </main>
    );
  }

  const top = payload.rankedDimensions[0];

  return (
    <main className="shell">
      <section className="phone poster-wrap">
        <article className="poster-card poster-card--fate">
          <div>
            <p className="seal">深宫纪 · 命格签</p>
            <h1>{payload.result.name}</h1>
            <p className="verdict">{payload.result.verdict}</p>
          </div>

          <p className="poster-quote">{payload.result.shareQuote}</p>

          <div className="poster-bottom">
            <p>最高倾向：{top?.name}</p>
            <p className="small-note">截图保存 · 邀朋友一起入宫测试</p>
          </div>
        </article>

        <div className="button-row">
          <Link className="primary-button" href="/result">查看完整解释</Link>
          <Link className="secondary-button" href="/test">重新测试</Link>
        </div>
      </section>
    </main>
  );
}
