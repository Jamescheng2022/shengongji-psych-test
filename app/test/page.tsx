"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/test-model/questions";
import { getExpandedScene } from "@/lib/test-model/expanded-scenes";
import { buildEvidence } from "@/lib/test-model/narrative";
import { computeResult } from "@/lib/test-model/scoring";
import { readAnswers, saveAnswers, saveResult } from "@/lib/test-model/storage";
import type { Answer, Choice } from "@/lib/test-model/types";
import { BottomHint } from "@/src/components/test/BottomHint";
import { ChoiceButton } from "@/src/components/test/ChoiceButton";
import { ProgressMeter } from "@/src/components/test/ProgressMeter";
import { SceneTextCard } from "@/src/components/test/SceneTextCard";
import { TestActionBar } from "@/src/components/test/TestActionBar";
import { TestHeader } from "@/src/components/test/TestHeader";
import { TestPageShell } from "@/src/components/test/TestPageShell";

function buildAnswer(questionId: string, choice: Choice): Answer {
  return {
    questionId,
    choiceId: choice.id,
    choiceText: choice.text,
    evidence: choice.evidence ?? buildEvidence(choice.tags),
    weights: choice.weights,
    tags: choice.tags,
  };
}

export default function TestPage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(() => new Set());
  const [warning, setWarning] = useState("");

  const question = questions[index];
  const scene = useMemo(() => getExpandedScene(question.id, question.scene), [question.id, question.scene]);
  const selectedAnswer = answers[index];
  const selectedChoiceData = question.choices.find((choice) => choice.id === selectedChoice);
  const isLastQuestion = index + 1 >= questions.length;

  useEffect(() => {
    const storedAnswers = readAnswers();
    if (storedAnswers.length === 0) return;

    const nextIndex = Math.min(storedAnswers.length, questions.length - 1);
    setAnswers(storedAnswers);
    setIndex(nextIndex);
    setSelectedChoice(storedAnswers[nextIndex]?.choiceId ?? null);
  }, []);

  useEffect(() => {
    setSelectedChoice(selectedAnswer?.choiceId ?? null);
    setWarning("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [index, selectedAnswer?.choiceId]);

  function selectChoice(choice: Choice) {
    setSelectedChoice(choice.id);
    setWarning("");
  }

  function goPrevious() {
    if (index === 0) return;
    const previousIndex = index - 1;
    setIndex(previousIndex);
    setSelectedChoice(answers[previousIndex]?.choiceId ?? null);
  }

  function toggleFavorite() {
    setFavoriteIds((current) => {
      const next = new Set(current);
      if (next.has(question.id)) {
        next.delete(question.id);
      } else {
        next.add(question.id);
      }
      return next;
    });
  }

  function goNext() {
    if (!selectedChoiceData) {
      setWarning("请先落下一枚选择。");
      return;
    }

    const answer = buildAnswer(question.id, selectedChoiceData);
    const nextAnswers = [...answers.slice(0, index), answer, ...answers.slice(index + 1)];
    saveAnswers(nextAnswers);
    setAnswers(nextAnswers);

    if (isLastQuestion) {
      const result = computeResult(nextAnswers);
      saveResult(result);
      router.push("/result");
      return;
    }

    const nextIndex = index + 1;
    setIndex(nextIndex);
    setSelectedChoice(nextAnswers[nextIndex]?.choiceId ?? null);
  }

  return (
    <TestPageShell>
      <TestHeader title="深宫命格" />

      <ProgressMeter current={index + 1} total={questions.length} />

      <SceneTextCard
        title={question.title}
        scene={scene}
        prompt="你会如何应对？"
      />

      <section className="test-choice-section" aria-label="选择你的应对方式">
        <p className="test-choice-kicker">择一枚命签</p>
        <div className="test-choice-list">
          {question.choices.map((choice, choiceIndex) => (
            <ChoiceButton
              key={choice.id}
              choice={choice}
              index={choiceIndex}
              selected={selectedChoice === choice.id}
              onClick={() => selectChoice(choice)}
            />
          ))}
        </div>
        {warning ? <p className="test-choice-warning" role="status">{warning}</p> : null}
      </section>

      <TestActionBar
        canGoPrevious={index > 0}
        canGoNext={Boolean(selectedChoice)}
        favorite={favoriteIds.has(question.id)}
        nextLabel={isLastQuestion ? "看命格" : "下一题"}
        onPrevious={goPrevious}
        onFavorite={toggleFavorite}
        onNext={goNext}
      />

      <BottomHint />
    </TestPageShell>
  );
}
