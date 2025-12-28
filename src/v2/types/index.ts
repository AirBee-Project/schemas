import type { KasaneJson } from "./SpatioTemporalId.js";

let test: KasaneJson = {
  meta: {
    version: "1.0",
    description: "東京都の気象データ",
  },
  values: [
    {
      name: "天気",
      data: ["晴れ", "雨", "曇り"],
    },
    {
      name: "気温",
      data: [30, 40, 50],
    },
  ],
  ids: [
    {
      z: 0,
      i: 0,
      dims: [{ f: [30], ref: [[0, 1]] }],
    },
  ],
};
