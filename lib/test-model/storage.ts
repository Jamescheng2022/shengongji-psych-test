import type { Answer, ComputedResult } from "./types";

const ANSWERS_KEY = "shengongji.psych.answers.v1";
const RESULT_KEY = "shengongji.psych.result.v1";

export function saveAnswers(answers: Answer[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}

export function readAnswers(): Answer[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(ANSWERS_KEY);
    return raw ? (JSON.parse(raw) as Answer[]) : [];
  } catch {
    return [];
  }
}

export function saveResult(result: ComputedResult) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(RESULT_KEY, JSON.stringify(result));
}

export function readResult(): ComputedResult | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(RESULT_KEY);
    return raw ? (JSON.parse(raw) as ComputedResult) : null;
  } catch {
    return null;
  }
}

export function clearTest() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ANSWERS_KEY);
  window.localStorage.removeItem(RESULT_KEY);
}
