# 案件名

## ブラウザ対応　確認

[Browserslist 確認サイト](https://browsersl.ist/#q=defaults&region=JP "Browserslist")

▲ 適宜確認して package.json に記述してください

```bash
 npx browserslist # 対応ブラウザの確認
```

## 起動

```bash
npm i # または pnpm i を実行
npm run dev # 開発サーバーを立ち上げる (ターミナル : o →でブラウザが開く ,h → ヘルプ)
npm run build # htdocsフォルダ内にコンパイル
```

## チャンクファイル概要

```
#page-container(data-page="sub")
↓
このように書くと、設定したページにのみ
sub.js が動きます
```

例 )

```
#page-container(data-page="about")
↓
about.js が動きます
```

## フォルダ・ファイル概要

```フォルダ構成
.editorconfig	                  インデントや改行などのコーディングスタイルのルールを記述。
jsconfig.json	                  プロジェクト全体のJSに関する設定（主にパス）
package.json	                  依存パッケージなどの設定ファイル
vite.config.js	                Viteの設定ファイル
node_modules/	                  プロジェクトにインストールしたパッケージ
htdocs/                           npm run build した先のフォルダ
public/	                        画像や動画、フォントファイルなど
src/                            スクリプトが格納されるフォルダ
│
├─_pug                          PUG用フォルダ
│
├─_scripts                       JS用フォルダ
│  │  main.js                   プロジェクト全体の制御ファイル
│  │  index.js                  エントリーポイント
│  │
│  ├─component
│  │      menu.js               開閉、制御に関する処理を記述
│  │
│  │
│  ├─helper                     汎用性のあるヘルパー関数を保存
│  │      config.js             プロジェクトの設定値を管理
│  │      utils.js              汎用関数を管理
│  │      INode.js              Node取得関数を管理
│  │      index.js              helperフォルダのエントリーポイント
│  │
│  └─page
│          home.js              HOME(index.html)ページ特有のJS処理を記述
│          sub.js               下層ページ特有のJS処理を記述
│
└─_styles
    │  style.scss               メインスタイル
    │
    ├─globals
    │      _functions.scss      function記述
    │      _icons.scss          icons(svg -> base64)まとめ
    │      _index.scss          globalsエントリーポイント
    │      _mixin.scss          mixin記述
    │      _mq.scss             メディアクエリ
    │      _variables.scss      Sass変数
    │
    ├─pages
    │      _home.scss           Homeページに必要なスタイル
    │
    ├─parts
    │      _common.scss         サイト内の共通スタイル
    │      _fonts.scss          フォント制御スタイル
    │      _footer.scss         フッター制御スタイル
    │      _header.scss         ヘッダー制御スタイル
    │      _general.scss        コンテナ制御スタイル
    │      _main.scss           メイン制御スタイル
    │      _menu.scss           メニュー制御スタイル
    │
    └─vendors                   サードパーティ製スタイル置き場
            css-reset.css       Reset CSS
```
