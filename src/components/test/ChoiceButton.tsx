import type { Choice } from "@/lib/test-model/types";

const choiceSeals = ["甲", "乙", "丙", "丁"];

type ChoiceButtonProps = {
  choice: Choice;
  index: number;
  selected: boolean;
  onClick: () => void;
};

export function ChoiceButton({ choice, index, selected, onClick }: ChoiceButtonProps) {
  const seal = choiceSeals[index] ?? "签";

  return (
    <button
      className={selected ? "test-choice-button test-choice-button--selected" : "test-choice-button"}
      type="button"
      aria-pressed={selected}
      onClick={onClick}
    >
      <span className="test-choice-button__seal" aria-hidden="true">{seal}</span>
      <span className="test-choice-button__text">{choice.text}</span>
      <span className="test-choice-button__arrow" aria-hidden="true">›</span>
    </button>
  );
}
