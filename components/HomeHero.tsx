import Link from "next/link";

export function HomeHero() {
  return (
    <section className="home-poster-landing" aria-label="深宫命格首页">
      <Link className="home-poster-start" href="/test">
        开始测试
      </Link>
    </section>
  );
}
