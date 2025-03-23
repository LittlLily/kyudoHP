// my-app/routes/accountLogs.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const accountLogsPath = path.join(__dirname, '../data/account_logs.json');

router.get('/', (req, res) => {
  fs.readFile(accountLogsPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'ログ読み込みエラー' });
    try {
      const logs = JSON.parse(data);
      res.json(logs);
    } catch (e) {
      res.status(500).json({ error: 'ログ解析エラー' });
    }
  });
});

module.exports = router;
