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
  desc: "30幕深宫抉择，照见你的真实处世底色",
  href: "/test?module=shengongmingge",
  tags: ["30幕宫廷剧情", "六维人格画像", "专属命格海报"],
};

export const testModules: TestModule[] = [
  {
    id: "benminggongge",
    title: "本命宫格",
    desc: "更多深度命格测试正在打磨中",
    badge: "即将开放",
    icon: "/assets/page-01-home/icon-benminggongge.webp",
    href: "/test?module=benminggongge",
    enabled: true,
    tone: "jade",
  },
  {
    id: "qingjie",
    title: "情劫命书",
    desc: "情感剧情画像模块即将开放",
    badge: "即将开放",
    icon: "/assets/page-01-home/icon-qingjie.webp",
    href: "/test?module=qingjie",
    enabled: true,
    tone: "peach",
  },
  {
    id: "liunian",
    title: "流年签文",
    desc: "每日签文模块暂不作为正式入口",
    badge: "即将开放",
    icon: "/assets/page-01-home/icon-liunian.webp",
    href: "/test?module=liunian",
    enabled: true,
    tone: "amber",
  },
  {
    id: "guiren",
    title: "贵人关系局",
    desc: "人际关系剧情测试即将开放",
    badge: "即将开放",
    icon: "/assets/page-01-home/icon-guiren.webp",
    href: "/test?module=guiren",
    enabled: true,
    tone: "sage",
  },
];

export const dailyRecommend = {
  title: "30幕深宫抉择",
  desc: "不是简单问答，而是一场关于情感、权力、人心、自保与边界的命格推演。",
  badge: "主测试",
  href: "/test?module=daily",
};

export const bottomTabs = [
  { id: "home", label: "首页", href: "/", icon: "palace", active: true },
  { id: "tests", label: "测试", href: "/test", icon: "fan", active: false },
  { id: "archive", label: "档案", href: "/result", icon: "scroll", active: false },
  { id: "me", label: "我的", href: "/about", icon: "profile", active: false },
];
