// my-app/server.js

// 以下三行は？？？
// Node.jsでExpressというライブラリを使えるようにインポートしています。
const express = require('express');
// HTTPリクエストの中にあるデータ（例えばJSON形式のデータ）を扱いやすくするために使います。
const bodyParser = require('body-parser');
// 他のドメイン（例えば別のWebサイト）からのリクエストを許可するための仕組みを簡単に設定できるツールです。
const cors = require('cors');

const app = express();
const port = 5000;

// アプリケーションでcors（クロスオリジンリソースシェアリング）を有効にしています。
// これにより、他のドメインからのアクセスも受け入れることができるようになります。
app.use(cors());
// リクエストの本文（body）の中にJSON形式のデータが含まれている場合、
// それを自動的にJavaScriptのオブジェクトに変換してくれるよう設定しています。
app.use(bodyParser.json());

// 「routes」フォルダ内の「members.js」というファイルをインポートし、membersRouterという変数に代入しています。
// これにより、メンバーに関連するルート（URLの処理）がまとめられたファイルを利用できるようになります。
const membersRouter = require('./routes/members');
// URLが「/api/members」で始まるリクエストに対して、先ほどインポートしたmembersRouterを使って処理するように設定しています。
app.use('/api/members', membersRouter);

const loginRouter = require('./routes/login');
app.use('/api/login', loginRouter);

const accountsRouter = require('./routes/accounts');
app.use('/api/accounts', accountsRouter);

const logsRouter = require('./routes/memberLogs');
app.use('/api/memberLogs', logsRouter);

const accountLogsRouter = require('./routes/accountLogs');
app.use('/api/account_logs', accountLogsRouter);

// サーバーを起動して、指定したポート（この場合は5000番）でリクエストを待ち受けるようにしています。
// ここからサーバーが「待機状態」に入ります。
app.listen(port, () => {
  // サーバーが正常に起動したことを確認するために、コンソール（画面上のログ出力）に「Server is running on port 5000」というメッセージを表示します。
  // テンプレートリテラルを使って、変数portの値が表示されるようになっています。
  console.log(`Server is running on port ${port}`);
});
