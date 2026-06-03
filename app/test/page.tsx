"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MusicToggle } from "@/components/MusicToggle";
import { chapterTitles, questions } from "@/lib/test-model/questions";
import { getChapterIntro, buildEvidence } from "@/lib/test-model/narrative";
import { computeResult } from "@/lib/test-model/scoring";
import { clearTest, saveAnswers, saveResult } from "@/lib/test-model/storage";
import type { Answer, Choice } from "@/lib/test-model/types";

export default function TestPage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const question = questions[index];
  const chapterIntro = getChapterIntro(question.chapter);
  const progress = Math.round(((index + 1) / questions.length) * 100);
  const isChapterOpening = [1, 7, 13, 19, 25].includes(question.order);

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
      <section className="phone">
        <header className="topbar">
          <Link href="/">‹ 离宫</Link>
          <MusicToggle />
        </header>

        <section className="test-screen">
          <div>
            <div className="progress-text">
              <span>{chapterTitles[question.chapter - 1]}</span>
              <span>{index + 1} / {questions.length}</span>
            </div>
            <div className="progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
          </div>

          {isChapterOpening ? (
            <aside className="chapter-intro-card">
              <strong>{chapterIntro.title}</strong>
              <span>{chapterIntro.intro}</span>
            </aside>
          ) : null}

          <article className="hero-card question-card">
            <p className="chapter">第 {question.chapter} 章 · {question.pressurePoint}</p>
            <h1>{question.title}</h1>
            <p className="scene">{question.scene}</p>
          </article>

          <div className="choices">
            {question.choices.map((choice) => (
              <button
                key={choice.id}
                type="button"
                className={selected === choice.id ? "choice selected" : "choice"}
                disabled={Boolean(selected)}
                onClick={() => choose(choice)}
              >
                <strong>{selected === choice.id ? "✓" : choice.id.toUpperCase()}</strong>
                <span>{choice.text}</span>
              </button>
            ))}
          </div>

          <button className="secondary-button" type="button" onClick={restart}>重新开始</button>
        </section>
      </section>
    </main>
  );
}
