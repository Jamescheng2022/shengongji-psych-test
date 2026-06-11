import type { ReactNode } from "react";

type PosterPageShellProps = {
  children: ReactNode;
};

export function PosterPageShell({ children }: PosterPageShellProps) {
  return (
    <main className="shell poster-page">
      <section className="phone poster-phone">
        <div className="poster-page-shell">{children}</div>
      </section>
    </main>
  );
}
