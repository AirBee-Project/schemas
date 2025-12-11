import { loadSpacialMap } from "./utils/loadJson.ts";

const spacialMap = loadSpacialMap("./src/v1/mock.json");

console.log(spacialMap.meta);
console.log(spacialMap.categories);

console.log(spacialMap.data[spacialMap.categories[0]]);
console.log(spacialMap.data[spacialMap.categories[0]][0].demensions);