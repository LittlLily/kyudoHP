// my-app/routes/accounts.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const router = express.Router();
const accountsPath = path.join(__dirname, '../data/accounts.json');
const saltRounds = 10;
const accountLogsPath = path.join(__dirname, '../data/account_logs.json');

// ヘルパー：operatorの存在確認
// accounts.json内に、operatorと同じアカウント名が存在するかチェックする
function checkOperator(operator, callback) {
  fs.readFile(accountsPath, 'utf8', (err, data) => {
    if (err) {
      return callback(false, 'accounts.json 読み込みエラー');
    }
    try {
      const accounts = JSON.parse(data);
      const found = accounts.some(acc => acc.accountId === operator);
      if (found) {
        callback(true);
      } else {
        callback(false, 'operator が accounts.json に存在しません');
      }
    } catch (e) {
      callback(false, 'accounts.json 解析エラー');
    }
  });
}

// ヘルパー：アカウントログを account_logs.json に追加する
function appendAccountLog(logEntry, callback) {
  fs.readFile(accountLogsPath, 'utf8', (err, data) => {
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
    fs.writeFile(accountLogsPath, JSON.stringify(logs, null, 2), callback);
  });
}

// GET: 全アカウント情報の取得
// operator がクエリパラメータで送信されていれば、その存在を確認する
router.get('/', (req, res) => {
  const operator = req.query.operator;
  if (operator) {
    checkOperator(operator, (valid, errMsg) => {
      if (!valid) {
        return res.status(400).json({ error: errMsg });
      }
      fs.readFile(accountsPath, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'データ読み込みエラー' });
        res.json(JSON.parse(data));
      });
    });
  } else {
    // operator の指定がない場合はそのまま取得
    fs.readFile(accountsPath, 'utf8', (err, data) => {
      if (err) return res.status(500).json({ error: 'データ読み込みエラー' });
      res.json(JSON.parse(data));
    });
  }
});

// POST: 新規アカウントの追加
// リクエストボディに operator を含める前提
router.post('/', (req, res) => {
  const { accountId, password, operator } = req.body;
  if (!operator) {
    return res.status(400).json({ error: 'operator を入力してください' });
  }
  checkOperator(operator, (valid, errMsg) => {
    if (!valid) {
      return res.status(400).json({ error: errMsg });
    }
    fs.readFile(accountsPath, 'utf8', (err, data) => {
      if (err) return res.status(500).json({ error: 'データ読み込みエラー' });
      const accounts = JSON.parse(data);
      
      // 重複チェック
      if (accounts.find(acc => acc.accountId === accountId)) {
        return res.status(400).json({ error: '既に同じアカウント名が存在します' });
      }
      
      const newAccount = {
        id: accounts.length > 0 ? accounts[accounts.length - 1].id + 1 : 1,
        accountId,
        password: bcrypt.hashSync(password, saltRounds)
      };
      
      accounts.push(newAccount);
      fs.writeFile(accountsPath, JSON.stringify(accounts, null, 2), (err) => {
        if (err) return res.status(500).json({ error: 'データ保存エラー' });
        
        // ログの記録
        const logEntry = {
          operator,
          operation: "追加",
          accountName: newAccount.accountId,
          timestamp: new Date().toISOString()
        };
        appendAccountLog(logEntry, () => {});
        res.status(201).json(newAccount);
      });
    });
  });
});

// PUT: パスワード更新（アカウント名と現在のパスワードの一致で更新）
// リクエストボディに accountId, currentPassword, newPassword, operator を含める
router.put('/', (req, res) => {
  const { accountId, currentPassword, newPassword, operator } = req.body;
  if (!accountId || !currentPassword || !newPassword || !operator) {
    return res.status(400).json({ error: 'accountId, currentPassword, newPassword, operator を入力してください' });
  }
  checkOperator(operator, (valid, errMsg) => {
    if (!valid) {
      return res.status(400).json({ error: errMsg });
    }
    fs.readFile(accountsPath, 'utf8', (err, data) => {
      if (err) return res.status(500).json({ error: 'データ読み込みエラー' });
      let accounts = JSON.parse(data);
      const index = accounts.findIndex(acc => acc.accountId === accountId);
      if (index === -1) return res.status(404).json({ error: 'アカウントが見つかりません' });
      
      // 現在のパスワードの照合
      bcrypt.compare(currentPassword, accounts[index].password, (err, isMatch) => {
        if (err) return res.status(500).json({ error: '認証エラー' });
        if (!isMatch) return res.status(401).json({ error: '現在のパスワードが正しくありません' });
        
        // 新しいパスワードをハッシュ化して更新
        accounts[index].password = bcrypt.hashSync(newPassword, saltRounds);
        fs.writeFile(accountsPath, JSON.stringify(accounts, null, 2), (err) => {
          if (err) return res.status(500).json({ error: 'データ更新エラー' });
          const logEntry = {
            operator,
            operation: "編集",
            accountName: accounts[index].accountId,
            timestamp: new Date().toISOString()
          };
          appendAccountLog(logEntry, () => {});
          res.json(accounts[index]);
        });
      });
    });
  });
});

// DELETE: アカウント削除（アカウント名と現在のパスワードの一致で削除）
// リクエストボディに accountId, currentPassword, operator を含める
router.delete('/', (req, res) => {
  const { accountId, currentPassword, operator } = req.body;
  if (!accountId || !currentPassword || !operator) {
    return res.status(400).json({ error: 'accountId, currentPassword, operator を入力してください' });
  }
  checkOperator(operator, (valid, errMsg) => {
    if (!valid) {
      return res.status(400).json({ error: errMsg });
    }
    fs.readFile(accountsPath, 'utf8', (err, data) => {
      if (err) return res.status(500).json({ error: 'データ読み込みエラー' });
      let accounts = JSON.parse(data);
      const index = accounts.findIndex(acc => acc.accountId === accountId);
      if (index === -1) return res.status(404).json({ error: 'アカウントが見つかりません' });
      
      bcrypt.compare(currentPassword, accounts[index].password, (err, isMatch) => {
        if (err) return res.status(500).json({ error: '認証エラー' });
        if (!isMatch) return res.status(401).json({ error: '現在のパスワードが正しくありません' });
        
        const deletedAccount = accounts.splice(index, 1);
        fs.writeFile(accountsPath, JSON.stringify(accounts, null, 2), (err) => {
          if (err) return res.status(500).json({ error: 'データ削除エラー' });
          const logEntry = {
            operator,
            operation: "削除",
            accountName: deletedAccount[0].accountId,
            timestamp: new Date().toISOString()
          };
          appendAccountLog(logEntry, () => {});
          res.json(deletedAccount[0]);
        });
      });
    });
  });
});

module.exports = router;
