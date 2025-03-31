// client/src/AccountManagement.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AccountManagement({ operator }) {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);
  const [logs, setLogs] = useState([]);

  // 【新規作成】用の状態
  const [createAccountName, setCreateAccountName] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [createMessage, setCreateMessage] = useState('');

  // 【パスワード更新】用の状態
  const [updateAccountName, setUpdateAccountName] = useState('');
  const [updateCurrentPassword, setUpdateCurrentPassword] = useState('');
  const [updateNewPassword, setUpdateNewPassword] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  // 【削除】用の状態
  const [deleteAccountName, setDeleteAccountName] = useState('');
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  // アカウント一覧の取得
  const fetchAccounts = () => {
    fetch('/api/accounts')
      .then(response => response.json())
      .then(data => setAccounts(data))
      .catch(error => console.error('Error fetching accounts:', error));
  };

  // アカウント管理の操作ログ取得
  const fetchLogs = () => {
    fetch('/api/account_logs')
      .then(response => response.json())
      .then(data => setLogs(data))
      .catch(error => console.error('Error fetching account logs:', error));
  };

  useEffect(() => {
    fetchAccounts();
    fetchLogs();
  }, []);

  // 新規作成処理
  const handleCreate = (e) => {
    e.preventDefault();
    fetch('/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        accountId: createAccountName,
        password: createPassword,
        operator
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setCreateMessage(`作成失敗: ${data.error}`);
        } else {
          setCreateMessage('アカウントが作成されました');
          setCreateAccountName('');
          setCreatePassword('');
          fetchAccounts();
          fetchLogs();
        }
      })
      .catch(error => {
        console.error('Error creating account:', error);
        setCreateMessage('作成中にエラーが発生しました');
      });
  };

  // パスワード更新処理
  const handleUpdate = (e) => {
    e.preventDefault();
    fetch('/api/accounts', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        accountId: updateAccountName,
        currentPassword: updateCurrentPassword,
        newPassword: updateNewPassword,
        operator
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setUpdateMessage(`更新失敗: ${data.error}`);
        } else {
          setUpdateMessage('パスワードが更新されました');
          setUpdateAccountName('');
          setUpdateCurrentPassword('');
          setUpdateNewPassword('');
          fetchAccounts();
          fetchLogs();
        }
      })
      .catch(error => {
        console.error('Error updating account:', error);
        setUpdateMessage('更新中にエラーが発生しました');
      });
  };

  // アカウント削除処理
  const handleDelete = (e) => {
    e.preventDefault();
    fetch('/api/accounts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        accountId: deleteAccountName,
        currentPassword: deletePassword,
        operator
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setDeleteMessage(`削除失敗: ${data.error}`);
        } else {
          setDeleteMessage('アカウントが削除されました');
          setDeleteAccountName('');
          setDeletePassword('');
          fetchAccounts();
          fetchLogs();
        }
      })
      .catch(error => {
        console.error('Error deleting account:', error);
        setDeleteMessage('削除中にエラーが発生しました');
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>アカウント管理</h1>
      <button onClick={() => navigate('/tool/dashboard')}>ダッシュボードに戻る</button>
      
      {/* アカウント一覧 */}
      <section style={{ marginTop: '20px' }}>
        <h2>現在のアカウント一覧</h2>
        <ul>
          {accounts.map(acc => (
            <li key={acc.id}>
              ID: {acc.id} / アカウント名: {acc.accountId}
            </li>
          ))}
        </ul>
      </section>
      
      {/* 新規アカウント作成エリア */}
      <section style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h2>新規アカウント作成</h2>
        <form onSubmit={handleCreate}>
          <div>
            <label>アカウント名: </label>
            <input
              type="text"
              value={createAccountName}
              onChange={(e) => setCreateAccountName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>パスワード: </label>
            <input
              type="password"
              value={createPassword}
              onChange={(e) => setCreatePassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">作成</button>
        </form>
        {createMessage && <p>{createMessage}</p>}
      </section>

      {/* パスワード更新エリア */}
      <section style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h2>パスワード更新</h2>
        <form onSubmit={handleUpdate}>
          <div>
            <label>アカウント名: </label>
            <input
              type="text"
              value={updateAccountName}
              onChange={(e) => setUpdateAccountName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>現在のパスワード: </label>
            <input
              type="password"
              value={updateCurrentPassword}
              onChange={(e) => setUpdateCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>新しいパスワード: </label>
            <input
              type="password"
              value={updateNewPassword}
              onChange={(e) => setUpdateNewPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">更新</button>
        </form>
        {updateMessage && <p>{updateMessage}</p>}
      </section>

      {/* アカウント削除エリア */}
      <section style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h2>アカウント削除</h2>
        <form onSubmit={handleDelete}>
          <div>
            <label>アカウント名: </label>
            <input
              type="text"
              value={deleteAccountName}
              onChange={(e) => setDeleteAccountName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>現在のパスワード: </label>
            <input
              type="password"
              value={deletePassword}
              onChange={(e) => setDeletePassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">削除</button>
        </form>
        {deleteMessage && <p>{deleteMessage}</p>}
      </section>

      {/* 操作ログ一覧（最新ログが上部に表示） */}
      <section style={{ marginTop: '20px' }}>
        <h2>操作ログ</h2>
        <ul style={{ height: '80px', overflow: 'auto' }}>
          {logs.map((log, index) => (
            <li key={index}>
              {log.timestamp} - {log.operator} が {log.accountName} の {log.operation} を実施
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AccountManagement;
