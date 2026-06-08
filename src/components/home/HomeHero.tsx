import Link from "next/link";
import { PalaceButton } from "./PalaceButton";

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__scenery" aria-hidden="true">
        <span className="home-hero__curtain home-hero__curtain--left" />
        <span className="home-hero__curtain home-hero__curtain--right" />
        <span className="home-hero__lantern" />
        <span className="home-hero__flower-branch" />
      </div>

      <div className="home-top-actions" aria-label="顶部操作">
        <Link className="home-top-action home-top-action--notice" href="/about" aria-label="公告">
          <span className="home-top-action__icon" aria-hidden="true">告</span>
          <span>公告</span>
        </Link>
        <Link className="home-top-action home-top-action--gift" href="/test?module=shengongmingge" aria-label="30幕主测试">
          <span className="home-top-action__icon" aria-hidden="true">命</span>
          <span>30幕主测</span>
        </Link>
      </div>

      <div className="home-hero__content">
        <h1 id="home-title" className="sr-only">
          深宫命格
        </h1>
        <img
          className="home-hero__title"
          src="/assets/page-01-home/title-shengongmingge.png"
          alt=""
          aria-hidden="true"
        />
        <p className="home-hero__subtitle">
          <span aria-hidden="true">❖</span>
          30幕深宫抉择，照见你的真实处世底色
          <span aria-hidden="true">❖</span>
        </p>
        <PalaceButton href="/test?module=shengongmingge" className="home-hero__button" ariaLabel="开始30幕深宫命格测试">
          开始入宫
        </PalaceButton>
      </div>
    </section>
  );
}
