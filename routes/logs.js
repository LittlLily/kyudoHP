// my-app/routes/logs.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const logsPath = path.join(__dirname, '../data/logs.json');

// GET: ログ一覧の取得
router.get('/', (req, res) => {
  fs.readFile(logsPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'ログ読み込みエラー' });
    }
    try {
      const logs = JSON.parse(data);
      res.json(logs);
    } catch (e) {
      res.status(500).json({ error: 'ログ解析エラー' });
    }
  });
});

module.exports = router;
