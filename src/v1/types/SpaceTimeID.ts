export interface SpaceTimeID {
  z: number;
  x: [number] | [number, number];
  y: [number] | [number, number];
  f: [number] | [number, number];
}

export type CategoryMap = Record<string, SpaceTimeID[]>;

export interface SpacialMapBase<Data extends CategoryMap> {
  meta: {
    version: string;
    description: string;
  };
  option?: any;
  data: Data;
}

/**
 * カテゴリー（data のキー）を Union 型として扱うため、
 * ジェネリクス T を使って data のキーを抽出する。
 *
 * categories は "晴れ" | "雨" ... のような literal union を保持できる。
 */
export type WithCategories<T extends SpacialMapBase<CategoryMap>> =
  T & { categories: (keyof T["data"])[]; };
