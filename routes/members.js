// my-app/routes/members.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataPath = path.join(__dirname, '../data/members.json');

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
    fs.writeFile(logsPath, JSON.stringify(logs, null, 2), callback);
  });
}

// GET: 全メンバーのデータ取得
router.get('/', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'データ読み込みエラー' });
    }
    res.json(JSON.parse(data));
  });
});

// POST: 新規メンバー追加
// ※ クライアント側では、operator も一緒に送信するようにしてください。
router.post('/', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'データ読み込みエラー' });
    const members = JSON.parse(data);
    const newMember = req.body;
    newMember.id = members.length > 0 ? members[members.length - 1].id + 1 : 1;
    members.push(newMember);
    fs.writeFile(dataPath, JSON.stringify(members, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'データ保存エラー' });
      // ログの記録
      const operator = req.body.operator || "不明";
      const logEntry = {
        operator,
        operation: "追加",
        memberName: newMember.name,
        timestamp: new Date().toISOString()
      };
      appendLog(logEntry, () => {});
      res.status(201).json(newMember);
    });
  });
});

// PUT: 既存メンバー更新
// ※ クライアント側からは、operator も含めて送信してください。
router.put('/:id', (req, res) => {
  const memberId = parseInt(req.params.id);
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'データ読み込みエラー' });
    let members = JSON.parse(data);
    const index = members.findIndex(m => m.id === memberId);
    if (index === -1) return res.status(404).json({ error: 'メンバーが見つかりません' });
    const updatedMember = { ...members[index], ...req.body };
    members[index] = updatedMember;
    fs.writeFile(dataPath, JSON.stringify(members, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'データ更新エラー' });
      // ログの記録
      const operator = req.body.operator || "不明";
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

// DELETE: メンバー削除
// ※ DELETE リクエストの場合、リクエストボディも送信可能です（例：fetch で method:'DELETE' とともに body を設定）。
router.delete('/:id', (req, res) => {
  const memberId = parseInt(req.params.id);
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'データ読み込みエラー' });
    let members = JSON.parse(data);
    const index = members.findIndex(m => m.id === memberId);
    if (index === -1) return res.status(404).json({ error: 'メンバーが見つかりません' });
    const deletedMember = members.splice(index, 1);
    fs.writeFile(dataPath, JSON.stringify(members, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'データ削除エラー' });
      // ログの記録
      const operator = req.body.operator || "不明";
      const logEntry = {
        operator,
        operation: "削除",
        memberName: deletedMember[0].name,
        timestamp: new Date().toISOString()
      };
      appendLog(logEntry, () => {});
      res.json(deletedMember[0]);
    });
  });
});

module.exports = router;
