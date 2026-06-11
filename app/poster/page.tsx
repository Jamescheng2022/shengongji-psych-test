"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getResultPortrait, useFallbackPortrait } from "@/lib/test-model/assets";
import { clearTest, readResult } from "@/lib/test-model/storage";
import type { ComputedResult } from "@/lib/test-model/types";
import { PosterActions } from "@/src/components/poster/PosterActions";
import { PosterCard } from "@/src/components/poster/PosterCard";
import { PosterEmptyState } from "@/src/components/poster/PosterEmptyState";

export default function PosterPage() {
  const router = useRouter();
  const [payload, setPayload] = useState<ComputedResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setPayload(readResult());
  }, []);

  function retake() {
    clearTest();
    setPayload(null);
    router.replace(`/test?restart=${Date.now()}`);
  }

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

  function savePoster() {
    document.querySelector(".poster-fate-card")?.scrollIntoView({ behavior: "smooth", block: "center" });
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  }

  if (!payload) {
    return (
      <main className="shell poster-page">
        <section className="phone poster-phone">
          <PosterEmptyState />
        </section>
      </main>
    );
  }

  const portrait = getResultPortrait(payload.result.id);

  return (
    <main className="shell poster-page">
      <section className="phone poster-phone">
        <PosterCard payload={payload} portrait={portrait} onPortraitError={useFallbackPortrait} />
        <PosterActions copied={copied} saved={saved} onSave={savePoster} onShare={sharePoster} onRetake={retake} />
      </section>
    </main>
  );
}
