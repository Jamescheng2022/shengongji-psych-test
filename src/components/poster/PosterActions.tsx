"use client";

import Link from "next/link";

type PosterActionsProps = {
  copied: boolean;
  saved: boolean;
  onSave: () => void;
  onShare: () => void;
  onRetake: () => void;
};

export function PosterActions({ copied, saved, onSave, onShare, onRetake }: PosterActionsProps) {
  return (
    <section className="poster-action-zone" aria-label="海报操作">
      <p>{saved ? "已聚焦海报，请长按或截图保存" : "长按海报截图保存，也可以分享命格文案。"}</p>
      <div className="poster-action-grid">
        <button className="poster-primary-action" type="button" onClick={onSave}>
          保存海报
        </button>
        <button className="poster-secondary-action" type="button" onClick={onShare}>
          {copied ? "已复制" : "分享命格"}
        </button>
        <Link className="poster-secondary-action" href="/result">
          返回结果
        </Link>
        <button className="poster-text-action" type="button" onClick={onRetake}>
          重新入宫
        </button>
      </div>
    </section>
  );
}
