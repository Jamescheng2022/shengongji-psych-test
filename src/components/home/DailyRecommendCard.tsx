import { dailyRecommend } from "@/src/config/tests";
import { PalaceButton } from "./PalaceButton";
import { OrnateCard } from "@/src/components/palace/OrnateCard";

export function DailyRecommendCard() {
  return (
    <OrnateCard className="daily-recommend-card">
      <span className="daily-recommend-card__ribbon" aria-hidden="true">
        今日宜测
      </span>
      <div className="daily-recommend-card__copy">
        <h2>{dailyRecommend.title}</h2>
        <p>{dailyRecommend.desc}</p>
      </div>
      <PalaceButton href={dailyRecommend.href} className="daily-recommend-card__button">
        立即查看
      </PalaceButton>
      <span className="daily-recommend-card__badge">{dailyRecommend.badge}</span>
    </OrnateCard>
  );
}
