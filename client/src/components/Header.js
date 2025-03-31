import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="page-header">
      <h1>
        <Link to="/">東京都市大学弓道部</Link>
      </h1>
      <nav>
        <ul className="main-nav">
          <li><Link to="/"><div>TOP</div></Link></li>
          <li><Link to="/profile"><div>関係者紹介</div></Link></li>
          <li><Link to="/results"><div>試合結果</div></Link></li>
          <li><Link to="/schedule"><div>活動予定</div></Link></li>
          <li><Link to="/tool"><div>ツール</div></Link></li>
          <li><a href="pre_home_page.html"><div>旧サイト</div></a></li>
        </ul>
      </nav>
      <div id="SNS">
      <a href="https://www.instagram.com/tcu_kyudo/" style={{
      fontFamily: "'Philosopher', serif",
      textDecoration: "none",
    }}>→INSTA</a>
        <a href="https://twitter.com/tcu_kyudo" style={{
      fontFamily: "'Philosopher', serif",
      textDecoration: "none",
    }}>→X</a>
      </div>
    </header>
  );
}

export default Header;
