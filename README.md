# 時空間データスキーマ 

時空間ID情報を管理するためのJSON Schemaをホストしています。環境データやドローン関連の複雑なデータを異なるシステム間で円滑に交換することを目的として設計されています。

アーキテクチャの背景や詳細な仕様については、以下の公式ガイドラインを必ずご参照ください：[IPA 4D時空間データガイドライン](https://www.ipa.go.jp/digital/architecture/guidelines/4dspatio-temporal-guideline.html)

## スキーマの仕様

スキーマファイルは以下のURLで公開・ホストされています：
`https://airbee-project.github.io/schemas/json/v1.0.json`

### 使い方

VS CodeなどのIDEで自動バリデーションや入力補完を有効にするには、JSONファイルの先頭に `$schema` プロパティを追加してください：

```json
{
  "$schema": "https://airbee-project.github.io/schemas/json/v1.0.json",
  "meta": {
    "version": "1.0",
    "description": "ドローン運航用の障害物データ"
  },
  "option": {
    "provider": "XXX社"
  },
  "data": [
    {
      "name": "weather",
      "value": ["障害物", "雨"],
      "ids": [
        {
          "z": 18,
          "f": [7],
          "x": [232846],
          "y": [103220],
          "ref": 0
        },
        {
          "z": 14,
          "x": [23286],
          "y": [10220],
          "ref": 1
        }
      ]
    }
  ]
}
```

## データ構造

  - **`meta`**: バージョン情報やデータの説明を格納します。
  - **`option`**: ユーザーが任意のメタデータを定義できるオブジェクトです。
  - **`data`**: データ系列の配列です。
      - **`value`**: 観測値や属性データの配列（配列内の要素はすべて同じ型である必要があります）。
      - **`ids`**: `ref` インデックスを介して `value` 配列内のデータとマッピングされる時空間IDの配列です。

## 時空間ID (`spatialTemporalId`)

コアとなる空間識別のためのオブジェクトは、以下のパラメータを使用します：

  - `z`: ズームレベル（整数、必須）。
  - `f`, `x`, `y`: 空間インデックス。単一の値 `[i]` または範囲 `[start, end]` をサポートします。
  - `i`, `t`: 時間に依存するデータのための時間インデックス。tは単一の値 `[t]` または範囲 `[start, end]` をサポートします
  - `ref`: `value` 配列内のどのデータを指すかを示す参照インデックス。

## ライセンス

MIT Licenseのもとで提供されています。

