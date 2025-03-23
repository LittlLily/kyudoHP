// hash.js
const bcrypt = require('bcrypt');
const password = "demo";      // ハッシュ化したいパスワード
const saltRounds = 10;        // ソルトのラウンド数（セキュリティと速度のバランス）

// 非同期版の場合
bcrypt.hash(password, saltRounds, function(err, hash) {
  if (err) {
    console.error("エラー:", err);
  } else {
    console.log("生成されたハッシュ値:", hash);
  }
});

// ※ 同期版で実行したい場合は以下のコードも利用可能です
// const hashSync = bcrypt.hashSync(password, saltRounds);
// console.log("生成されたハッシュ値 (同期版):", hashSync);
