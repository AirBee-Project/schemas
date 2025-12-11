import * as fs from "fs";
import type { SpacialMapBase, WithCategories, SpaceTimeID } from "./types/SpaceTimeID.ts";

export function loadSpacialMap(
  path: string
): WithCategories<SpacialMapBase<Record<string, SpaceTimeID[]>>> {
  
  const text = fs.readFileSync(path, "utf-8");

  const parsed = JSON.parse(text) as SpacialMapBase<Record<string, SpaceTimeID[]>>;

  const categories = Object.keys(parsed.data) as (keyof typeof parsed.data)[];

  return {
    ...parsed,
    categories
  };
}
