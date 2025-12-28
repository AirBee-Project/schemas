type Dim = {
  // 各次元の範囲 or 単体

  //拡張記法のLimitRange,Singleに対応
  f?: [number, number?];
  x?: [number, number?];
  y?: [number, number?];
  t?: [number, number?];

  //データの参照
  ref?: [number, number][];
};

// 時空間IDたち
type Id = {
  // ズームレベル
  z: number;

  // 時間インターバル
  i: number;

  // 次元,データ参照
  dims: Dim[];
};

// データの本体
type Value<T> = {
  name: string;
  data: T[];
};

export type KasaneJson<T = string | boolean | number | object> = {
  // このファイルのメタデータ
  meta: {
    version: string;
    description: string;
  };

  // このファイルのデータたち
  values: Value<T>[];

  // このファイルの時空間IDたち
  ids: Id[];
};
