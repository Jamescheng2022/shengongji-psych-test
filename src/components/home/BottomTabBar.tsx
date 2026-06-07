import Link from "next/link";
import { bottomTabs } from "@/src/config/tests";

function TabIcon({ id }: { id: string }) {
  if (id === "fan") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 29c5-10 10-15 16-15s11 5 16 15" />
        <path d="M12 31h24" />
        <path d="M24 15v20M17 18l7 17M31 18l-7 17" />
      </svg>
    );
  }

  if (id === "scroll") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M16 10h16a5 5 0 0 1 5 5v23H16z" />
        <path d="M16 10a5 5 0 0 0-5 5v23h5" />
        <path d="M20 19h12M20 26h10M20 33h8" />
      </svg>
    );
  }

  if (id === "profile") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="17" r="7" />
        <path d="M12 39c2-8 7-12 12-12s10 4 12 12" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M9 23l15-12 15 12" />
      <path d="M14 22v17h20V22" />
      <path d="M19 39V27h10v12" />
      <path d="M17 18h14" />
    </svg>
  );
}

export function BottomTabBar() {
  return (
    <nav className="bottom-tab-bar" aria-label="底部导航">
      {bottomTabs.map((tab) => (
        <Link
          key={tab.id}
          className={tab.active ? "bottom-tab-bar__item is-active" : "bottom-tab-bar__item"}
          href={tab.href}
          aria-current={tab.active ? "page" : undefined}
        >
          <TabIcon id={tab.icon} />
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
}
