# yesnochart

シンプルなCSVファイルから動的な分岐パスを生成する、インタラクティブなフローチャートジェネレーターです。

## デモ
- [サンプルチャート](https://code4fukui.github.io/yesnochart/)
- [プログラミングガイド](https://code4fukui.github.io/yesnochart/#data/programming.csv)
- [オープンデータ診断](https://code4fukui.github.io/yesnochart/#data/opendata-assist.csv)（[デジタル庁資料](https://www.digital.go.jp/resources/open_data/materials-for-learning)に基づく）

## 特徴
- **シンプルなCSVから作成**: 質問、回答、分岐パスなど、フローチャートのロジック全体を1つのCSVファイルで定義できます。
- **サーバーレス**: 完全にブラウザ上で動作します。GitHub Pagesなどの任意の静的Webサーバーでホスト可能です。
- **多分岐のサポート**: 単純なYES/NOにとどまらず、3つ以上の選択肢を持つ質問も作成できます。
- **簡単な共有**: URL1つでチャートを共有できます。QRコードが自動生成されるため、モバイル端末からのアクセスも簡単です。

## 使い方
1. **CSVファイルの作成**: 以下のフォーマットに従って、フローチャートのロジックを記述したCSVファイルを作成します。
2. **CSVファイルのホスト**: GitHub、Gist、独自のサーバーなど、公開URL経由でアクセスできるようにCSVファイルをオンラインにホストします。
3. **チャートURLの作成**: メインのURLの後に `#` を付け、その後にCSVファイルのURLを追加してチャートのURLを作成します。

**URL構造:**
```
https://code4fukui.github.io/yesnochart/#<your-csv-file-url>
```

**例:**
`https://code4fukui.github.io/yesnochart/#https://code4fukui.github.io/yesnochart/data/sample.csv`

## CSVフォーマット
CSVファイルには以下の列を含むヘッダー行が必要です。チャートは常に `id` が `1` の行から開始されます。

- `id`: 各ステップの一意の数値ID。
- `question`: 質問や説明として表示されるテキスト。
- `answer1_label`: 1つ目の回答ボタンのテキスト。
- `answer1_id`: この回答が選ばれたときにジャンプする次の `id`。外部にリンクさせるための完全なURL（例: `https://example.com`）を指定することも可能です。
- `answer2_label`, `answer2_id`: 2つ目の回答用の列。

さらに選択肢を追加する場合は、`answer3_label`, `answer3_id` のように列のペアを追加するだけです。

### サンプルCSV
```csv
id,question,answer1_label,answer1_id,answer2_label,answer2_id
1,YES/NOチャートを知っている,YES,3,NO,2
2,YES/NOチャートはYESかNOなど、2択でガイドしてくれるツールです,OK,3,,
3,YES/NOチャートを作ってみたい？,YES,5,NO,4
4,つくりたくなったらまたおいでください〜,OK,https://fukuno.jig.jp/4408,やっぱりつくりたい,5
5,このYES/NOチャートはGitHubでのオープンソースなので、どなたでも改造できます！,やった！作ってみる！,https://github.com/code4fukui/yesnochart/,GitHubって？,6
6,GitHubはオープンソースを共有するサービスです,試してみる！,https://fukuno.jig.jp/2875,難しそう,7
```

## ライセンス
[MIT License](LICENSE)
