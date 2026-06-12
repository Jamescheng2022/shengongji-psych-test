"use client";

import Link from "next/link";

type PosterActionsProps = {
  saved: boolean;
  onSave: () => void;
};

export function PosterActions({ saved, onSave }: PosterActionsProps) {
  return (
    <section className="poster-action-zone" aria-label="海报操作">
      <p>{saved ? "已聚焦海报，请长按或截图保存" : "长按海报截图保存"}</p>
      <div className="poster-action-grid">
        <button className="poster-primary-action" type="button" onClick={onSave}>
          保存海报
        </button>
        <Link className="poster-secondary-action" href="/result">
          返回结果
        </Link>
      </div>
    </section>
  );
}
