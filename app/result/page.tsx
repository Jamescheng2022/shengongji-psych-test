"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MusicToggle } from "@/components/MusicToggle";
import { getResultPortrait, useFallbackPortrait } from "@/lib/test-model/assets";
import { buildMiniBiography, buildRealLifeMirror } from "@/lib/test-model/narrative";
import { clearTest, readResult } from "@/lib/test-model/storage";
import type { ComputedResult } from "@/lib/test-model/types";
import { ResultActions } from "@/src/components/result/ResultActions";
import { ResultDimensionChart } from "@/src/components/result/ResultDimensionChart";
import { ResultEmptyState } from "@/src/components/result/ResultEmptyState";
import { ResultHeroCard } from "@/src/components/result/ResultHeroCard";
import { ResultInsightCards } from "@/src/components/result/ResultInsightCards";

export default function ResultPage() {
  const router = useRouter();
  const [payload, setPayload] = useState<ComputedResult | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setPayload(readResult());
    setLoaded(true);
  }, []);

  function retake() {
    clearTest();
    setPayload(null);
    router.replace(`/test?restart=${Date.now()}`);
  }

  if (!loaded) {
    return <main className="shell"><section className="phone"><p>正在翻阅命册……</p></section></main>;
  }

  if (!payload) {
    return (
      <main className="shell result-page">
        <section className="phone result-phone">
          <ResultEmptyState />
        </section>
      </main>
    );
  }

  const primary = payload.rankedDimensions[0];
  const secondary = payload.rankedDimensions[1];
  const portrait = getResultPortrait(payload.result.id);
  const miniBiography = payload.result.miniBiography ?? buildMiniBiography(payload.result.name);
  const realLifeMirror = payload.result.realLifeMirror ?? buildRealLifeMirror(primary?.name ?? "应变方式");

  return (
    <main className="shell result-page">
      <section className="phone result-phone">
        <header className="result-topbar">
          <Link href="/">‹ 返回</Link>
          <MusicToggle />
        </header>

        <ResultHeroCard
          result={payload.result}
          portrait={portrait}
          primary={primary}
          secondary={secondary}
          miniBiography={miniBiography}
          onPortraitError={useFallbackPortrait}
        />

        <ResultDimensionChart dimensions={payload.rankedDimensions} />

        <ResultInsightCards result={payload.result} realLifeMirror={realLifeMirror} keyChoices={payload.keyChoices} />

        <ResultActions onRetake={retake} />
      </section>
    </main>
  );
}
