type ProgressMeterProps = {
  current: number;
  total: number;
};

export function ProgressMeter({ current, total }: ProgressMeterProps) {
  const percent = Math.round((current / total) * 100);

  return (
    <section className="test-progress" aria-label={`第 ${current} 题 / 共 ${total} 题`}>
      <p className="test-progress__text">
        <span>第 {current} 题 / 共 {total} 题</span>
      </p>
      <div className="test-progress__row">
        <div className="test-progress__track" aria-hidden="true">
          <span className="test-progress__fill" style={{ width: `${percent}%` }} />
          <span className="test-progress__thumb" style={{ left: `${percent}%` }} />
        </div>
        <span className="test-progress__percent">{percent}%</span>
      </div>
    </section>
  );
}
