// my-app/routes/members.js
// Node.jsでWebサーバーを作るためのライブラリ「Express」を読み込んでいます。これにより、Webサーバーの機能を簡単に使えるようになります。
const express = require('express');
// ファイルシステム（fs）モジュールを読み込んでいます。これを使うと、ファイルの読み書きが可能になります。
const fs = require('fs');
// ファイルやディレクトリのパスを扱いやすくするための「path」モジュールを読み込んでいます。
const path = require('path');

// Expressの「Router」機能を使って、新しいルーター（経路のまとまり）を作成しています。
const router = express.Router();
// members.jsonというファイルが保存されているパスを作成しています。
const dataPath = path.join(__dirname, '../data/members.json');

// operator の確認用ヘルパー関数
function checkOperator(operator, callback) {
  const accountsFile = path.join(__dirname, '../data/accounts.json');
  fs.readFile(accountsFile, 'utf8', (err, data) => {
    if (err) {
      return callback(false, 'accounts.jsonの読み込みエラー');
    }
    try {
      const accounts = JSON.parse(data);
      // accounts.json内にoperatorと同じアカウント名が存在するか確認
      const found = accounts.some(acc => acc.accountId === operator);
      if (found) {
        callback(true);
      } else {
        callback(false, 'operatorがaccounts.jsonに存在しません');
      }
    } catch (e) {
      callback(false, 'accounts.jsonの解析エラー');
    }
  });
}

// ヘルパー：ログを logs.json に追加する
function appendLog(logEntry, callback) {
  const logsPath = path.join(__dirname, '../data/logs.json');
  fs.readFile(logsPath, 'utf8', (err, data) => {
    let logs = [];
    if (!err) {
      try {
        logs = JSON.parse(data);
      } catch (parseErr) {
        logs = [];
      }
    }
    // 新しいログを先頭に追加
    logs.unshift(logEntry);
    // logsというJavaScriptのオブジェクトまたは配列を、JSON形式の文字列に変換します。
    // 第2引数のnullは「変換時に特別な操作をしない」という意味です。
    // 第3引数の2は、出力されるJSON文字列を「見やすく整形する」ためのインデント幅（スペース2個分）を指定しています。
    fs.writeFile(logsPath, JSON.stringify(logs, null, 2), callback);
  });
}

// GET: 全メンバーのデータ取得
// GETの場合は、クエリパラメータoperatorが指定されていれば確認
router.get('/', (req, res) => {
  const operator = req.query.operator;
  if (operator) {
    checkOperator(operator, (valid, errMsg) => {
      if (!valid) {
        return res.status(400).json({ error: errMsg });
      }
      // operator が有効なら通常通りメンバー取得
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          return res.status(500).json({ error: 'データ読み込みエラー' });
        }
        res.json(JSON.parse(data));
      });
    });
  } else {
    // operatorの確認を行わない場合はそのまま取得
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'データ読み込みエラー' });
      }
      res.json(JSON.parse(data));
    });
  }
});

// POST: 新規メンバー追加
// ※ operatorも一緒に送信されている前提
router.post('/', (req, res) => {
  const operator = req.body.operator;
  checkOperator(operator, (valid, errMsg) => {
    if (!valid) {
      return res.status(400).json({ error: errMsg });
    }
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) return res.status(500).json({ error: 'データ読み込みエラー' });
      // readFile で読み込んだデータは文字列なので、JSON.parse でオブジェクトに変換します。
      const members = JSON.parse(data);
      const newMember = req.body;
      // データに新しいIDを付与します。既にメンバーがいれば、最後のIDに1を足し、新規の場合はIDを1に設定します。
      newMember.id = members.length > 0 ? members[members.length - 1].id + 1 : 1;
      // 新しいメンバーを配列に追加します。
      members.push(newMember);
      // 更新後のメンバー配列を members.json に書き込みます。
      fs.writeFile(dataPath, JSON.stringify(members, null, 2), (err) => {
        // 書き込みに失敗した場合はエラー（500）を返します。
        if (err) return res.status(500).json({ error: 'データ保存エラー' });
        // ログの記録
        const logEntry = {
          operator,
          operation: "追加",
          memberName: newMember.name,
          timestamp: new Date().toISOString()
        };
        // appendLog 関数を呼んでログファイルに記録します。
        appendLog(logEntry, () => {});
        res.status(201).json(newMember);
      });
    });
  });
});

// PUT: 既存メンバー更新
// ※ クライアント側からは、operatorも含めて送信する
router.put('/:id', (req, res) => {
  const operator = req.body.operator;
  checkOperator(operator, (valid, errMsg) => {
    if (!valid) {
      return res.status(400).json({ error: errMsg });
    }
    // 更新ボタンのクリックで、メンバーのIDを取得します。
    // parseIntは文字列を整数（数値）に変換する関数
    const memberId = parseInt(req.params.id);
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) return res.status(500).json({ error: 'データ読み込みエラー' });
      let members = JSON.parse(data);
      // findIndex を使って、指定されたIDを持つメンバーのインデックスを探します。mの意味は「メンバー」です。
      const index = members.findIndex(m => m.id === memberId);
      if (index === -1) return res.status(404).json({ error: 'メンバーが見つかりません' });
      // この部分は「オブジェクトのスプレッド構文」を使っています。
      // ...members[index] は、元々のメンバーオブジェクトのすべてのプロパティを新しいオブジェクトに展開（コピー）します。
      // その後、...req.body によって、クライアントから送られてきた更新用のデータ（req.body）のプロパティが追加されます。
      // もし、同じプロパティ名が両方に存在する場合、req.body側の値で上書きされます。
      const updatedMember = { ...members[index], ...req.body };
      members[index] = updatedMember;
      fs.writeFile(dataPath, JSON.stringify(members, null, 2), (err) => {
        if (err) return res.status(500).json({ error: 'データ更新エラー' });
        // ログの記録
        const logEntry = {
          operator,
          operation: "編集",
          memberName: updatedMember.name,
          timestamp: new Date().toISOString()
        };
        appendLog(logEntry, () => {});
        res.json(updatedMember);
      });
    });
  });
});

// DELETE: メンバー削除
// ※ DELETE リクエストでも、operatorが送信されている前提
router.delete('/:id', (req, res) => {
  const operator = req.body.operator;
  checkOperator(operator, (valid, errMsg) => {
    if (!valid) {
      return res.status(400).json({ error: errMsg });
    }
    const memberId = parseInt(req.params.id);
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) return res.status(500).json({ error: 'データ読み込みエラー' });
      let members = JSON.parse(data);
      const index = members.findIndex(m => m.id === memberId);
      if (index === -1) return res.status(404).json({ error: 'メンバーが見つかりません' });
      // splice メソッドを使って、指定したメンバーを配列から削除します。
      // splice は削除した要素を配列で返すので、deletedMember[0] に削除したメンバーの情報が入ります。
      const deletedMember = members.splice(index, 1);
      fs.writeFile(dataPath, JSON.stringify(members, null, 2), (err) => {
        if (err) return res.status(500).json({ error: 'データ削除エラー' });
        // ログの記録
        const logEntry = {
          operator,
          operation: "削除",
          memberName: deletedMember[0].name,
          timestamp: new Date().toISOString()
        };
        appendLog(logEntry, () => {});
        // 削除されたメンバーの情報を返します。
        res.json(deletedMember[0]);
      });
    });
  });
});

// このファイル内で定義されたルーター（router）を他のファイル（例えば server.js）で使えるようにエクスポート（公開）しています。
module.exports = router;
