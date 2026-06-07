export type TestModule = {
  id: string;
  title: string;
  desc: string;
  badge: string;
  icon: string;
  href: string;
  enabled: boolean;
  tone: "jade" | "peach" | "amber" | "sage";
};

export const featuredTest = {
  id: "shengongmingge",
  title: "深宫命格",
  desc: "解锁你的宫廷人格与命运格局",
  href: "/test?module=shengongmingge",
  tags: ["宫廷人格解析", "命格格局分析", "专属命理建议"],
};

export const testModules: TestModule[] = [
  {
    id: "benminggongge",
    title: "本命宫格",
    desc: "解读你的先天宫格，洞悉命运底色",
    badge: "免费",
    icon: "/assets/page-01-home/icon-benminggongge.webp",
    href: "/test?module=benminggongge",
    enabled: true,
    tone: "jade",
  },
  {
    id: "qingjie",
    title: "情劫命书",
    desc: "解锁你的情劫剧本，看透缘起缘落",
    badge: "新测",
    icon: "/assets/page-01-home/icon-qingjie.webp",
    href: "/test?module=qingjie",
    enabled: true,
    tone: "peach",
  },
  {
    id: "liunian",
    title: "流年签文",
    desc: "抽一支流年签，预见你的运势走向",
    badge: "每日",
    icon: "/assets/page-01-home/icon-liunian.webp",
    href: "/test?module=liunian",
    enabled: true,
    tone: "amber",
  },
  {
    id: "guiren",
    title: "贵人小人局",
    desc: "识别命中贵人小人，趋吉避凶",
    badge: "热门",
    icon: "/assets/page-01-home/icon-guiren.webp",
    href: "/test?module=guiren",
    enabled: true,
    tone: "sage",
  },
];

export const dailyRecommend = {
  title: "今日运势速览",
  desc: "每日一测，掌握今日运势关键",
  badge: "每日更新",
  href: "/test?module=daily",
};

export const bottomTabs = [
  { id: "home", label: "首页", href: "/", icon: "palace", active: true },
  { id: "tests", label: "测试", href: "/test", icon: "fan", active: false },
  { id: "archive", label: "档案", href: "/result", icon: "scroll", active: false },
  { id: "me", label: "我的", href: "/about", icon: "profile", active: false },
];
