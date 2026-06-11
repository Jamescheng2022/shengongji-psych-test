type SceneTextCardProps = {
  title?: string;
  scene: string;
  prompt?: string;
};

export function SceneTextCard({ scene, prompt }: SceneTextCardProps) {
  return (
    <>
    <article className="test-scene-card">
      <span className="test-scene-card__corner test-scene-card__corner--tl" aria-hidden="true" />
      <span className="test-scene-card__corner test-scene-card__corner--tr" aria-hidden="true" />
      <span className="test-scene-card__corner test-scene-card__corner--bl" aria-hidden="true" />
      <span className="test-scene-card__corner test-scene-card__corner--br" aria-hidden="true" />

      <div className="test-scene-card__divider" aria-hidden="true">
        <span />
        <i>✿</i>
        <span />
      </div>

      <div className="test-scene-card__content">
        <div className="test-scene-card__body">
          <p>{scene}</p>
        </div>
      </div>
    </article>
    {prompt ? <p className="test-decision-prompt">{prompt}</p> : null}
    </>
  );
}
