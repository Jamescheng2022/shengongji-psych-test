type TestActionBarProps = {
  canGoPrevious: boolean;
  canGoNext: boolean;
  favorite: boolean;
  nextLabel: string;
  onPrevious: () => void;
  onFavorite: () => void;
  onNext: () => void;
};

export function TestActionBar({
  canGoPrevious,
  canGoNext,
  favorite,
  nextLabel,
  onPrevious,
  onFavorite,
  onNext,
}: TestActionBarProps) {
  return (
    <nav className="test-action-bar" aria-label="答题操作">
      <button
        className="test-action-bar__previous"
        type="button"
        disabled={!canGoPrevious}
        onClick={onPrevious}
      >
        <span aria-hidden="true">‹</span>
        上一题
      </button>

      <button
        className={favorite ? "test-action-bar__favorite is-active" : "test-action-bar__favorite"}
        type="button"
        aria-pressed={favorite}
        onClick={onFavorite}
      >
        <span aria-hidden="true">{favorite ? "★" : "☆"}</span>
        收藏
      </button>

      <button
        className="test-action-bar__next"
        type="button"
        disabled={!canGoNext}
        onClick={onNext}
      >
        {nextLabel}
        <span aria-hidden="true">›</span>
      </button>
    </nav>
  );
}
