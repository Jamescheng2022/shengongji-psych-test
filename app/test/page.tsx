"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MusicToggle } from "@/components/MusicToggle";
import { questions } from "@/lib/test-model/questions";
import { buildEvidence } from "@/lib/test-model/narrative";
import { computeResult } from "@/lib/test-model/scoring";
import { clearTest, saveAnswers, saveResult } from "@/lib/test-model/storage";
import type { Answer, Choice } from "@/lib/test-model/types";

export default function TestPage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const question = questions[index];
  const progress = Math.round(((index + 1) / questions.length) * 100);

  function choose(choice: Choice) {
    if (selected) return;
    setSelected(choice.id);
    const nextAnswers = [
      ...answers,
      {
        questionId: question.id,
        choiceId: choice.id,
        choiceText: choice.text,
        evidence: choice.evidence ?? buildEvidence(choice.tags),
        weights: choice.weights,
        tags: choice.tags,
      },
    ];
    saveAnswers(nextAnswers);
    window.setTimeout(() => {
      if (index + 1 >= questions.length) {
        const result = computeResult(nextAnswers);
        saveResult(result);
        router.push("/result");
        return;
      }
      setAnswers(nextAnswers);
      setIndex((value) => value + 1);
      setSelected(null);
    }, 180);
  }

  function restart() {
    clearTest();
    setAnswers([]);
    setIndex(0);
    setSelected(null);
  }

  return (
    <main className="shell">
      <section className="phone phone--test">
        <header className="topbar">
          <Link href="/">‹ 返回</Link>
          <MusicToggle />
        </header>

        <section className="test-screen" style={{ gap: 14 }}>
          <div className="test-progress-block">
            <div className="progress-text">
              <span>凭第一念选择</span>
              <span>第 {index + 1} 幕 / 共 {questions.length} 幕</span>
            </div>
            <div className="progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
          </div>

          <article className="hero-card question-card" style={{ padding: "26px 22px", borderRadius: 28 }}>
            <p className="chapter">入宫十二问</p>
            <p className="scene" style={{ fontSize: 17, lineHeight: 1.82 }}>{question.scene}</p>
          </article>

          <p className="small-note" style={{ textAlign: "center", margin: 0 }}>在这种情境下，你更可能：</p>

          <div className="choices" style={{ gap: 12 }}>
            {question.choices.map((choice) => {
              const isSelected = selected === choice.id;
              return (
                <button
                  key={choice.id}
                  type="button"
                  className={isSelected ? "choice selected" : "choice"}
                  disabled={Boolean(selected)}
                  onClick={() => choose(choice)}
                  style={{
                    minHeight: 58,
                    borderRadius: 18,
                    padding: "13px 15px",
                    background: isSelected ? "rgba(215,181,109,0.18)" : "rgba(255,255,255,0.045)",
                  }}
                >
                  <strong>{isSelected ? "✓" : choice.id.toUpperCase()}</strong>
                  <span>{choice.text}</span>
                </button>
              );
            })}
          </div>

          <div className="test-actions">
            <button className="text-button" type="button" onClick={restart}>重新开始</button>
          </div>
        </section>
      </section>
    </main>
  );
}
