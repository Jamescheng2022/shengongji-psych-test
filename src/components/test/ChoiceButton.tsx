import type { Choice } from "@/lib/test-model/types";

const choiceSeals = ["A", "B", "C", "D"];

type ChoiceButtonProps = {
  choice: Choice;
  index: number;
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export function ChoiceButton({ choice, index, selected, disabled = false, onClick }: ChoiceButtonProps) {
  const seal = choiceSeals[index] ?? choice.id.toUpperCase();

  return (
    <button
      className={selected ? "test-choice-button test-choice-button--selected" : "test-choice-button"}
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="test-choice-button__seal" aria-hidden="true">{seal}</span>
      <span className="test-choice-button__text">{choice.text}</span>
      <span className="test-choice-button__arrow" aria-hidden="true">›</span>
    </button>
  );
}
