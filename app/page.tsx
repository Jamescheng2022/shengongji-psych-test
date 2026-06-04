import { MusicToggle } from "@/components/MusicToggle";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  return (
    <main className="shell">
      <section className="phone">
        <header className="topbar">
          <span>深宫命格</span>
          <MusicToggle />
        </header>
        <HomeHero />
      </section>
    </main>
  );
}
