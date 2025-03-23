// my-app/routes/login.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const router = express.Router();
const accountsPath = path.join(__dirname, '../data/accounts.json');

router.post('/', (req, res) => {
  const { accountId, password } = req.body;
  fs.readFile(accountsPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'データ読み込みエラー' });
    }
    const accounts = JSON.parse(data);
    const account = accounts.find(acc => acc.accountId === accountId);
    if (!account) {
      return res.status(401).json({ error: '認証失敗: アカウントIDまたはパスワードが正しくありません' });
    }
    // bcrypt.compare() でパスワードを照合
    bcrypt.compare(password, account.password, (err, result) => {
      if (err) {
        return res.status(500).json({ error: '認証エラー' });
      }
      if (result) {
        res.json({ success: true, account });
      } else {
        res.status(401).json({ error: '認証失敗: アカウントIDまたはパスワードが正しくありません' });
      }
    });
  });
});

module.exports = router;
