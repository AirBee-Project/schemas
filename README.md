# Stid-Schema-Draft-TypeScript
### 実行
`node "パス"` (ex.`node ./src/v1/index.ts`)
### 暫定
```json
{
    "meta": { "version": "1.0", "description": "東京エリア天気"},
    "option?": {..........},
    "data": {
      "晴れ": [
          {
              "z": 18,
              "demensions": [
                {
                  "f": [7],
                  "x": [232846],
                  "y": [103220, 232846]
                },
                {
                  "f": [7],
                  "x": [232846],
                  "y": [103220, 232846]
                },
                {
                  "f": [7],
                  "x": [232846],
                  "y": [103220, 232846]
                },
                ...
              ]
          },
          ...
        ]
    }
}
```