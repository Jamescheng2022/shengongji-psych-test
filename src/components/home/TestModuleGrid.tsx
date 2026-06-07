import { testModules } from "@/src/config/tests";
import { TestModuleCard } from "./TestModuleCard";

export function TestModuleGrid() {
  return (
    <div className="test-module-grid" aria-label="更多测试">
      {testModules.map((module) => (
        <TestModuleCard key={module.id} module={module} />
      ))}
    </div>
  );
}
