// client/src/App.js

// { useState }：React のフックのひとつで、コンポーネント内で「状態」を管理するために使われます。たとえば、ログイン状態などを管理するために利用されます。
import React, { useState } from 'react';
// BrowserRouter：Web ブラウザのアドレスバーを使ってルーティング（ページ遷移）を管理するためのコンポーネントです。
// as Router：BrowserRouter を Router という名前で使うという意味です。
// Routes：ルート（URL パス）ごとにどのコンポーネントを表示するかをまとめるコンテナです。
// Route：個々のルートを定義するためのコンポーネントです。
// Navigate：特定の条件に応じて、他のルートへ強制的にリダイレクト（移動）するために使います。
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// 自分で作成した各コンポーネントのファイルから、それぞれのコンポーネントをインポートしています。
import Login from './Login';
import Dashboard from './Dashboard';
import AccountManagement from './AccountManagement';
import MemberManagement from './MemberManagement';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import OBOGProfilePage from './pages/OBOGProfilePage';
import ResultPage from './pages/ResultPage';
import SchedulePage from './pages/SchedulePage';

function App() {
  /* 認証状態と操作者（operator）の状態を管理 */
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [operator, setOperator] = useState('');

  return (
    <Router>
      <Header />
      <main>
        <Routes>
        {/* 以下でパスの構成を定義しています。 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/obog" element={<OBOGProfilePage />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/tool" element={isAuthenticated ? (<Navigate to="/tool/dashboard" />) : (<Login setIsAuthenticated={setIsAuthenticated} setOperator={setOperator} />)} />
          <Route path="/tool/dashboard" element={isAuthenticated ? <Dashboard operator={operator} /> : <Navigate to="/tool" />} />
          <Route path="/tool/account-management" element={isAuthenticated ? <AccountManagement operator={operator} /> : <Navigate to="/tool" />} />
          <Route path="/tool/member-management" element={isAuthenticated ? <MemberManagement operator={operator} /> : <Navigate to="/tool" />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

// App コンポーネントを他のファイルでインポートできるように公開（エクスポート）しています。
export default App;
