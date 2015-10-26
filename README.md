# esa-bug-fix

## 概要

esa.ioで、個人的に気になる箇所を修正していきます。

## インストール

```bash
git clone https://github.com/okmttdhr/esa-bug-fix.git && cd esa-bug-fix && npm run build
```

実行が終わったら、以下の、`ステップ 2: アプリをテストする`に従い、`パッケージ化されていない拡張機能`を読み込んでください。

* <a href="https://support.google.com/chrome/a/answer/2714278?hl=ja" target="_blank">チュートリアル: Chrome アプリを作成する - Chrome for Work ヘルプ</a>

## 修正した箇所

### ホーム画面で、横スクロールしてしまうズレ

#### before
![](/img/zure1.png)

#### after
![](/img/zure2.png)



### ミドルサイズにした時、テキストがはみ出る

#### before
![](/img/hamideru1.png)

#### after
![](/img/hamideru2.png)



### 記事を下までスクロールしたときに、フッターまでスクロールされてしまうのが、意図した挙動ではなくストレスがあった

#### before
![](/img/scroll1.png)

#### after
![](/img/scroll2.png)



### ハンバーガーをhoverしたときにフィードバックがない

#### before
![](/img/hmb1.png)

#### after
![](/img/hmb2.png)



### ハッシュ付きURLに直接アクセスしたときに、時々ずれた位置にスクロールする

`https://xxx.esa.io/posts/1#2-6-0`にアクセスしたのに、例えば、`https://xxx.esa.io/posts/1#2-5-0`などの中途半端な位置にスクロールされる現象がランダムに発生するため、修正した。
