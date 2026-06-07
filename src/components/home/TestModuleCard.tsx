import type { TestModule } from "@/src/config/tests";
import { OrnateCard } from "@/src/components/palace/OrnateCard";

type TestModuleCardProps = {
  module: TestModule;
};

export function TestModuleCard({ module }: TestModuleCardProps) {
  return (
    <OrnateCard
      className={`test-module-card test-module-card--${module.tone}`}
      href={module.href}
      ariaLabel={`进入${module.title}`}
    >
      <span className="test-module-card__badge">{module.badge}</span>
      <div className="test-module-card__copy">
        <h3>{module.title}</h3>
        <p>{module.desc}</p>
      </div>
      <img className="test-module-card__icon" src={module.icon} alt="" aria-hidden="true" />
      <span className="test-module-card__arrow" aria-hidden="true">›</span>
    </OrnateCard>
  );
}
