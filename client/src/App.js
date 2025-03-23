// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import AccountManagement from './AccountManagement';
import MemberManagement from './MemberManagement';

function App() {
  // 認証状態と操作者（operator）の状態を管理
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [operator, setOperator] = useState('');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} setOperator={setOperator} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard operator={operator} /> : <Navigate to="/" />}
        />
        <Route
          path="/account-management"
          element={isAuthenticated ? <AccountManagement operator={operator} /> : <Navigate to="/" />}
        />
        <Route
          path="/member-management"
          element={isAuthenticated ? <MemberManagement operator={operator} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
