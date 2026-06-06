import Link from "next/link";

export function HomeHero() {
  return (
    <section className="home-asset-artboard home-iphone-artboard" aria-label="深宫命格首页">
      <img
        className="home-iphone-reference"
        src="/assets/page-01-home/home-iphone-reference.png"
        alt="深宫命格：首页。以宫廷情境映射真实人格，开始测试。"
      />
      <Link className="home-asset-cta home-iphone-cta" href="/test" aria-label="开始测试">
        <span>开始测试</span>
      </Link>
    </section>
  );
}
