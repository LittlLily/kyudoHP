// client/src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated, setOperator }) {
  const [accountId, setAccountId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accountId, password })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('ログイン失敗');
        }
        return response.json();
      })
      .then(data => {
        // 認証成功時、認証状態を true にし、操作者としてログインしたアカウント名を保存
        setIsAuthenticated(true);
        setOperator(data.account.accountId);
        navigate('/dashboard');
      })
      .catch(error => {
        setErrorMsg('アカウントIDまたはパスワードが正しくありません');
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>ログイン</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>アカウントID: </label>
          <input
            type="text"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>パスワード: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">ログイン</button>
      </form>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
    </div>
  );
}

export default Login;
