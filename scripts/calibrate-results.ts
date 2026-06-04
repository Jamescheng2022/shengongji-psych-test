import { questions } from "../lib/test-model/questions";
import { DIMENSION_IDS, getDimensionName } from "../lib/test-model/dimensions";
import { computeResult } from "../lib/test-model/scoring";
import type { Answer, Choice } from "../lib/test-model/types";

function toAnswer(choice: Choice, questionId: string): Answer {
  return {
    questionId,
    choiceId: choice.id,
    choiceText: choice.text,
    evidence: choice.evidence,
    weights: choice.weights,
    tags: choice.tags,
  };
}

function byChoiceId(choiceId: string) {
  return questions.map((question) => {
    const choice = question.choices.find((item) => item.id === choiceId) ?? question.choices[0];
    return toAnswer(choice, question.id);
  });
}

function byTag(tags: string[]) {
  return questions.map((question) => {
    const scored = question.choices
      .map((choice) => ({
        choice,
        score: choice.tags.reduce((sum, tag) => sum + (tags.includes(tag) ? 2 : 0), 0) +
          DIMENSION_IDS.reduce((sum, id) => sum + Math.max(0, choice.weights[id]), 0) * 0.05,
      }))
      .sort((a, b) => b.score - a.score);
    return toAnswer(scored[0].choice, question.id);
  });
}

function randomAnswers(seed: number) {
  let state = seed;
  function rand() {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  }
  return questions.map((question) => {
    const choice = question.choices[Math.floor(rand() * question.choices.length)];
    return toAnswer(choice, question.id);
  });
}

const scenarios: Record<string, Answer[]> = {
  ALL_A: byChoiceId("a"),
  ALL_B: byChoiceId("b"),
  ALL_C: byChoiceId("c"),
  ALL_D: byChoiceId("d"),
  EMPATHY: byTag(["共情", "情义", "暗助", "信任", "牵挂", "价值"]),
  POWER: byTag(["权力", "借势", "交换", "筹码", "押注", "凤印", "上升"]),
  CAUTION: byTag(["藏锋", "观察", "谨慎", "避险", "自保", "复盘", "留证"]),
  BOUNDARY: byTag(["边界", "拒绝", "分寸", "自我", "强边界", "责任"]),
  AGENCY: byTag(["掌局", "控局", "进取", "负责", "直接", "破局"]),
  DETACHED: byTag(["旁观", "自守", "清醒", "退路", "恢复", "稳定"]),
};

function describe(name: string, answers: Answer[]) {
  const result = computeResult(answers);
  const top = result.rankedDimensions
    .slice(0, 3)
    .map((item) => `${item.name}:${item.score}`)
    .join(" / ");
  const low = result.rankedDimensions[result.rankedDimensions.length - 1];
  console.log(`${name.padEnd(10)} -> ${result.result.name.padEnd(6)} | top ${top} | low ${low.name}:${low.score}`);
}

console.log("\nFixed scenarios");
console.log("===============");
for (const [name, answers] of Object.entries(scenarios)) describe(name, answers);

console.log("\nRandom simulation");
console.log("=================");
const counts = new Map<string, number>();
const dimTotals = Object.fromEntries(DIMENSION_IDS.map((id) => [id, 0])) as Record<(typeof DIMENSION_IDS)[number], number>;
const samples = 1000;
for (let i = 1; i <= samples; i += 1) {
  const result = computeResult(randomAnswers(i));
  counts.set(result.result.name, (counts.get(result.result.name) ?? 0) + 1);
  for (const id of DIMENSION_IDS) dimTotals[id] += result.scores[id];
}

for (const [name, count] of Array.from(counts.entries()).sort((a, b) => b[1] - a[1])) {
  const pct = ((count / samples) * 100).toFixed(1);
  const warning = count / samples > 0.3 ? "  <-- concentrated" : "";
  console.log(`${name.padEnd(8)} ${String(count).padStart(4)}  ${pct}%${warning}`);
}

console.log("\nDimension averages");
console.log("==================");
for (const id of DIMENSION_IDS) {
  console.log(`${getDimensionName(id).padEnd(4)} ${(dimTotals[id] / samples).toFixed(1)}`);
}
