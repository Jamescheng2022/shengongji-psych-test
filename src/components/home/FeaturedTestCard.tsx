import { featuredTest } from "@/src/config/tests";
import { OrnateCard } from "@/src/components/palace/OrnateCard";

export function FeaturedTestCard() {
  return (
    <OrnateCard
      className="featured-test-card"
      href={featuredTest.href}
      ariaLabel="进入深宫命格测试"
    >
      <span className="featured-test-card__ribbon" aria-hidden="true">
        旗舰推荐
      </span>
      <img
        className="featured-test-card__heroine"
        src="/assets/page-01-home/heroine-card.webp"
        alt=""
        aria-hidden="true"
      />
      <div className="featured-test-card__copy">
        <span className="featured-test-card__mark" aria-hidden="true">✧</span>
        <h2>{featuredTest.title}</h2>
        <p>{featuredTest.desc}</p>
        <div className="featured-test-card__tags" aria-label="深宫命格标签">
          {featuredTest.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <span className="featured-test-card__pendant" aria-hidden="true" />
    </OrnateCard>
  );
}
