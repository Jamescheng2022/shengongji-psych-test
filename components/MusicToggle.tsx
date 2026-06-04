"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    __shengongjiAudio?: HTMLAudioElement;
  }
}

function getAudio() {
  if (!window.__shengongjiAudio) {
    const audio = new Audio("/assets/moonlit-garden-path.mp3");
    audio.loop = true;
    audio.volume = 0.22;
    audio.preload = "auto";
    window.__shengongjiAudio = audio;
  }
  return window.__shengongjiAudio;
}

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);

  async function play() {
    try {
      const audio = getAudio();
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  useEffect(() => {
    const onFirstGesture = () => void play();
    document.addEventListener("pointerdown", onFirstGesture, { once: true, capture: true });
    return () => document.removeEventListener("pointerdown", onFirstGesture, true);
  }, []);

  async function toggle() {
    const audio = getAudio();
    if (audio.paused) {
      await play();
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <button type="button" className={playing ? "music-toggle is-playing" : "music-toggle"} onClick={toggle} aria-label="音乐开关">
      {playing ? "音" : "乐"}
    </button>
  );
}
