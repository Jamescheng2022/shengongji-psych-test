import type { Answer, ResultType } from "@/lib/test-model/types";

type ResultInsightCardsProps = {
  result: ResultType;
  realLifeMirror: string;
  keyChoices: Answer[];
};

const compactSections = [
  ["关系方式", "relationshipPattern"],
  ["困局反应", "stressResponse"],
] as const;

export function ResultInsightCards({ result, realLifeMirror, keyChoices }: ResultInsightCardsProps) {
  return (
    <>
      <section className="result-panel result-panel--major">
        <div className="result-section-heading">
          <span>画像</span>
          <h2>命格画像</h2>
        </div>
        <p>{result.archetype}</p>
      </section>

      <section className="result-panel result-panel--major">
        <div className="result-section-heading">
          <span>底色</span>
          <h2>处世底色</h2>
        </div>
        <p>{result.psychProfile}</p>
      </section>

      <div className="result-compact-grid">
        {compactSections.map(([title, key]) => (
          <section className="result-panel result-panel--compact" key={key}>
            <h2>{title}</h2>
            <p>{result[key]}</p>
          </section>
        ))}
      </div>

      <section className="result-panel result-panel--major">
        <div className="result-section-heading">
          <span>映照</span>
          <h2>现实映照</h2>
        </div>
        <p>{realLifeMirror}</p>
      </section>

      <section className="result-panel result-panel--gold">
        <div className="result-section-heading">
          <span>锦囊</span>
          <h2>命格锦囊</h2>
        </div>
        <p>{result.growthAdvice}</p>
      </section>

      <details className="result-drawer">
        <summary>查看关键选择</summary>
        <div className="result-evidence-list">
          {keyChoices.map((answer, index) => (
            <article className="result-evidence-card" key={`${answer.questionId}-${answer.choiceId}`}>
              <strong>关键选择 {index + 1}</strong>
              <p>{answer.choiceText}</p>
              <span>{answer.evidence ?? "这个选择映出你在困局中的惯用保护方式。"}</span>
            </article>
          ))}
        </div>
      </details>

      <details className="result-drawer">
        <summary>查看隐藏风险</summary>
        <p>{result.hiddenRisk}</p>
      </details>
    </>
  );
}
