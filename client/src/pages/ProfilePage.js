// src/pages/ProfilePage.js
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

function ProfilePage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API から部員データを取得
  useEffect(() => {
    fetch('/api/members')
      .then(response => {
        if (!response.ok) {
          throw new Error('ネットワークエラーです');
        }
        return response.json();
      })
      .then(data => {
        setMembers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('データ取得エラー:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  // 男女の人数を算出
  const countMan = members.filter(member => member.gender === 'man').length;
  const countWoman = members.filter(member => member.gender === 'woman').length;
  const totalGender = countMan + countWoman;

  // グラフ用のデータ設定
  const chartDataGender = {
    labels: ['男性', '女性'],
    datasets: [{
      data: [countMan, countWoman],
      backgroundColor: ['#03267a', '#ca0000']
    }]
  };

  // 流派の人数を算出
  const countSyamen = members.filter(member => member.party === 'syamen').length;
  const countSyomen = members.filter(member => member.party === 'syomen').length;
  const totalParty = countSyamen + countSyomen;

  // グラフ用のデータ設定
  const chartDataParty = {
    labels: ['日置流', '小笠原流'],
    datasets: [{
      data: [countSyamen, countSyomen],
      backgroundColor: ['#000000', '#006400']
    }]
  };

  // 現在の年と月を基に、4月以降なら学年が上がるようにカテゴリを計算する関数
  const getCategory = (member) => {
    const now = new Date();
    let effectiveYear = now.getFullYear();
    // 現在の月が1月～3月の場合（month: 0～2）なら、まだ4月になっていないので、前年度を学年として扱う
    if (now.getMonth() < 3) {
      effectiveYear = effectiveYear - 1;
    }
    // effectiveYear から部員の年齢（ここでは生まれた年と仮定）を引くことで、学年を計算
    const computedYear = effectiveYear - Number(member.generation);
    switch (computedYear) {
      case 1961:
        return "Freshman";
      case 1962:
        return "Sophomore";
      case 1963:
        return "Junior";
      case 1964:
        return "Senior";
      default:
        return "Unknown";
    }
  };

  // メンバーをカテゴリごとにグループ化する関数
  const groupMembersByCategory = (members) => {
    const groups = {
      Freshman: [],
      Sophomore: [],
      Junior: [],
      Senior: [],
      Unknown: []
    };
    members.forEach(member => {
      const category = getCategory(member);
      groups[category].push(member);
    });
    return groups;
  };

  const groupedMembers = groupMembersByCategory(members);

  if (loading) {
    return <p>データを読み込み中です…</p>;
  }

  if (error) {
    return <p>データの取得に失敗しました。</p>;
  }

  const yearMapping = {
    Freshman: "壱年",
    Sophomore: "弐年",
    Junior: "参年",
    Senior: "肆年"
  };

  return (
    <div id="profile">
      <div className="profile-head">
        <h2 style={{ color: 'rgb(23, 23, 23)', borderBottom: '1px rgb(23, 23, 23) solid' }}>部員紹介</h2>
        <Link to="/profile/obog">
          <h2>OBOG等の紹介→</h2>
        </Link>

      </div>
      <div style={{ width: '90lvw', display: 'flex', justifyContent: 'space-around', margin: '0 auto' }}>
        <div>
          <div style={{ width: '35lvw', display: 'flex', justifyContent: 'space-around', margin: '0 auto' }}>
            <h3 className="man-C">男性: {countMan}名 ({totalGender > 0 ? ((countMan / totalGender) * 100).toFixed(2) : 0}%)</h3>
            <h3 className="woman-C">女性: {countWoman}名 ({totalGender > 0 ? ((countWoman / totalGender) * 100).toFixed(2) : 0}%)</h3>
          </div>
          <div style={{ width: '35lvw', margin: '20px auto' }}>
            <Pie data={chartDataGender} />
          </div>
        </div>
        <div>
          <div style={{ width: '35lvw', display: 'flex', justifyContent: 'space-around', margin: '0 auto' }}>
            <h3 style={{ color: 'black' }}>日置流: {countSyamen}名 ({totalParty > 0 ? ((countSyamen / totalParty) * 100).toFixed(2) : 0}%)</h3>
            <h3 style={{ color: '#006400' }}>小笠原流: {countSyomen}名 ({totalParty > 0 ? ((countSyomen / totalParty) * 100).toFixed(2) : 0}%)</h3>
          </div>
          <div style={{ width: '35lvw', margin: '20px auto' }}>
            <Pie data={chartDataParty} />
          </div>
        </div>
      </div>

      <h3>東京都市大学では、斜面打起しで引いている方と正面打起しで引いている方がいます。ですので、以下のように明示しております。</h3>
      <div className="profile-explain">
        <div>
          <img src="./kyudobu_img/shamen.jpg" alt="斜面打起し"></img>
          <h2>現在斜面打起しで引いている方</h2>
        </div>
        <div>
          <img src="./kyudobu_img/syoumen1.jpg" alt="正面打起し"></img>
          <h2>現在正面打起しで引いている方</h2>
        </div>
      </div>

      <div>
        {["Senior", "Junior", "Sophomore", "Freshman"].map(category => (
          <div key={category} className="profile-group">
            <div className="profile-generation">
              <p>{yearMapping[category]}</p>
            </div>
            <div className="profile-table">
              {groupedMembers[category].map((member, idx) => {
                // member.party の値によって画像のソースと alt を決定
                const imgSrc =
                  member.party === "syomen"
                    ? "kyudobu_img/syoumen1.jpg"
                    : "./kyudobu_img/shamen.jpg";
                const imgAlt =
                  member.party === "syomen"
                    ? "正面打起し"
                    : "斜面打起し";

                // member.gender によってクラス名を決定
                const nameClass =
                  member.gender === "man" ? "man-C" : member.gender === "woman" ? "woman-C" : "man-C";

                return (
                  <div key={member._id || `${member.name}-${idx}`} className="profile-set">
                    <img src={imgSrc} alt={imgAlt} />
                    <div className="profile-item">
                      <div className={`profile-name ${nameClass}`}>{member.name}</div>
                      <div className="profile-position">{member.post}</div>
                      <div className="profile-department">{member.department}</div>
                    </div>
                  </div>
                );
              })
              }
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProfilePage;
