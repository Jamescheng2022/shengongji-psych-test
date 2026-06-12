"use client";

import { useEffect, useState } from "react";
import { getResultPortrait, useFallbackPortrait } from "@/lib/test-model/assets";
import { readResult } from "@/lib/test-model/storage";
import type { ComputedResult } from "@/lib/test-model/types";
import { PosterActions } from "@/src/components/poster/PosterActions";
import { PosterCard } from "@/src/components/poster/PosterCard";
import { PosterEmptyState } from "@/src/components/poster/PosterEmptyState";
import { PosterPageShell } from "@/src/components/poster/PosterPageShell";

export default function PosterPage() {
  const [payload, setPayload] = useState<ComputedResult | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setPayload(readResult());
  }, []);

  function savePoster() {
    document.querySelector(".poster-fate-card")?.scrollIntoView({ behavior: "smooth", block: "center" });
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  }

  if (!payload) {
    return (
      <PosterPageShell>
        <PosterEmptyState />
      </PosterPageShell>
    );
  }

  const portrait = getResultPortrait(payload.result.id);

  return (
    <PosterPageShell>
      <PosterCard payload={payload} portrait={portrait} onPortraitError={useFallbackPortrait} />
      <PosterActions saved={saved} onSave={savePoster} />
    </PosterPageShell>
  );
}
