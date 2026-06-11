"use client";

import Link from "next/link";

type ResultActionsProps = {
  onRetake: () => void;
};

export function ResultActions({ onRetake }: ResultActionsProps) {
  return (
    <div className="result-action-bar" aria-label="结果页操作">
      <Link className="result-primary-action" href="/poster">
        生成命格海报
      </Link>
      <button className="result-secondary-action" type="button" onClick={onRetake}>
        重新入宫
      </button>
    </div>
  );
}
