import { DailyRecommendCard } from "./DailyRecommendCard";
import { BottomTabBar } from "./BottomTabBar";
import { FeaturedTestCard } from "./FeaturedTestCard";
import { HomeHero } from "./HomeHero";
import { TestModuleGrid } from "./TestModuleGrid";
import { GoldDivider } from "@/src/components/palace/GoldDivider";

export function HomePage() {
  return (
    <main className="home-shell">
      <div className="home-phone">
        <HomeHero />
        <section className="home-content" aria-label="深宫命格首页内容">
          <FeaturedTestCard />
          <GoldDivider>更多测试</GoldDivider>
          <TestModuleGrid />
          <GoldDivider>今日推荐</GoldDivider>
          <DailyRecommendCard />
        </section>
        <BottomTabBar />
      </div>
    </main>
  );
}
