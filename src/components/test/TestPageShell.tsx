import type { ReactNode } from "react";

type TestPageShellProps = {
  children: ReactNode;
};

export function TestPageShell({ children }: TestPageShellProps) {
  return (
    <main className="test-page">
      <section className="test-shell" aria-label="深宫命格答题页">
        {children}
      </section>
    </main>
  );
}
