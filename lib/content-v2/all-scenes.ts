import { v2Scenes } from "./scenes";
import { v2ScenesPart2 } from "./scenes-part2";
import { v2ScenesPart3 } from "./scenes-part3";

export const allV2Scenes = [...v2Scenes, ...v2ScenesPart2, ...v2ScenesPart3].sort((a, b) => a.order - b.order);
