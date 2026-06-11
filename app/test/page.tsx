"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/test-model/questions";
import { getExpandedScene } from "@/lib/test-model/expanded-scenes";
import { buildEvidence } from "@/lib/test-model/narrative";
import { computeResult } from "@/lib/test-model/scoring";
import { saveAnswers, saveResult } from "@/lib/test-model/storage";
import type { Answer, Choice } from "@/lib/test-model/types";
import { BottomHint } from "@/src/components/test/BottomHint";
import { ChoiceButton } from "@/src/components/test/ChoiceButton";
import { ProgressMeter } from "@/src/components/test/ProgressMeter";
import { SceneTextCard } from "@/src/components/test/SceneTextCard";
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

  const question = questions[index];
  const scene = useMemo(() => getExpandedScene(question.id, question.scene), [question.id, question.scene]);

  function choose(choice: Choice) {
    if (selectedChoice) return;
    setSelectedChoice(choice.id);
    const answer = buildAnswer(question.id, choice);
    const nextAnswers = [...answers, answer];
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
      setSelectedChoice(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 180);
  }

  return (
    <TestPageShell>
      <TestHeader title="深宫命册" />

      <ProgressMeter current={index + 1} total={questions.length} />

      <SceneTextCard
        title={question.title}
        scene={scene}
        prompt="在这种情境下，你更可能："
      />

      <section className="test-choice-section" aria-label="选择你的应对方式">
        <div className="test-choice-list">
          {question.choices.map((choice, choiceIndex) => (
            <ChoiceButton
              key={choice.id}
              choice={choice}
              index={choiceIndex}
              selected={selectedChoice === choice.id}
              disabled={Boolean(selectedChoice)}
              onClick={() => choose(choice)}
            />
          ))}
        </div>
      </section>

      <BottomHint />
    </TestPageShell>
  );
}
