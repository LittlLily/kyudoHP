// src/pages/OBOGProfilePage.js
import React, { useEffect, useState } from 'react';

function OBOGProfilePage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // コンポーネントマウント時に API から部員データを取得
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

  // 現在の年から1965を引いた値を上限としてグループを作成する
  let currentYear = new Date().getFullYear();
  // 現在の月が1月～3月の場合（month: 0～2）なら、まだ4月になっていないので、前年度を学年として扱う
  if (new Date().getMonth() < 3) {
    currentYear = currentYear - 1;
  }
  const maxGeneration = currentYear - 1965; // 例：2025年なら95


  // 1 〜maxGeneration までの各年齢ごとに空の配列を初期化
  const groupsByGeneration = {};
  for (let generation = 1; generation <= maxGeneration; generation++) {
    groupsByGeneration[generation] = [];
  }
  // 読み込んだ各部員の generation（文字列なので Number() で変換）をキーとしてグループ化
  members.forEach(member => {
    const memberGeneration = Number(member.generation);
    // 1〜maxGeneration の範囲内ならグループに追加
    if (memberGeneration >= 1 && memberGeneration <= maxGeneration) {
      groupsByGeneration[memberGeneration].push(member);
    }
  });

  if (loading) {
    return <p>データを読み込み中です…</p>;
  }
  if (error) {
    return <p>データの取得に失敗しました。</p>;
  }

  return (
    <div id="profile" className="big-bg">
      <div className="profile-content">
        <div className="profile-explain">
          <div>
            <img src="/kyudobu_img/shamen.jpg" alt="斜面打起し" />
            <h2>現在斜面打起しで引いている方</h2>
          </div>
          <div>
            <img src="/kyudobu_img/syoumen1.jpg" alt="正面打起し"></img>
            <h2>現在正面打起しで引いている方</h2>
          </div>
        </div>

        <div className="sub-menu">
          <h4>メニュー</h4>

          <div>
            {Object.keys(groupsByGeneration)
              .sort((a, b) => Number(b) - Number(a)) // 数値として降順にソート
              .map(generationKey => {
                const generationGroup = groupsByGeneration[generationKey];
                if (generationGroup.length === 0) return null; // その年齢の部員がいなければ表示しない
                return (
                  <li key={generationKey}>
                    <a href={`#${generationKey}generation`}>{generationKey}代</a>
                  </li>
                );
              })
            }
          </div>
        </div>

        <div>
          <p>名簿が手に入り次第、随時更新していきます。</p>
        </div>

        <div className="profile-generation">
          <p>監督・コーチ・顧問</p>
        </div>
        <div className="profile-table" style={{ justifyContent: 'space-around' }}>
          <div className="profile-set">
            <img src="/kyudobu_img/shamen.jpg" alt="斜面打起し" />
            <div className="profile-item">
              <div className="profile-name man-C">渡辺 洋</div>
              <div className="profile-position">監督</div>
              <div className="profile-department">----</div>
            </div>
          </div>
          <div className="profile-set">
            <img src="/kyudobu_img/shamen.jpg" alt="斜面打起し" />
            <div className="profile-item">
              <div className="profile-name man-C">二見 富士夫</div>
              <div className="profile-position">コーチ・会計</div>
              <div className="profile-department">----</div>
            </div>
          </div>
          <div className="profile-set">
            <img src="/kyudobu_img/shamen.jpg" alt="斜面打起し" />
            <div className="profile-item">
              <div className="profile-name man-C">佐藤 明博</div>
              <div className="profile-position">コーチ</div>
              <div className="profile-department">----</div>
            </div>
          </div>
          <div className="profile-set">
            <img src="/kyudobu_img/shamen.jpg" alt="斜面打起し" />
            <div className="profile-item">
              <div className="profile-name man-C">佐藤 秀憲</div>
              <div className="profile-position">コーチ</div>
              <div className="profile-department">----</div>
            </div>
          </div>
          <div className="profile-set">
            <img src="/kyudobu_img/shiro.jpg" alt="白" />
            <div className="profile-item">
              <div className="profile-name man-C">白木 尚人</div>
              <div className="profile-position">顧問(教授)</div>
              <div className="profile-department">機械工学科</div>
            </div>
          </div>
        </div>
        {/* ここから、年齢ごとのグループ表示 */}
        <div>
          {Object.keys(groupsByGeneration)
            .sort((a, b) => Number(b) - Number(a)) // 数値として降順にソート
            .map(generationKey => {
              const generationGroup = groupsByGeneration[generationKey];
              if (generationGroup.length === 0) return null; // その年齢の部員がいなければ表示しない

              return (
                <div key={generationKey} className="profile-group">
                  <div id={`${generationKey}generation`} className="profile-year"></div>
                  <div className="profile-generation">
                    <p>{generationKey}代</p>
                  </div>
                  <div className="profile-table">
                    {generationGroup.map((member, idx) => {
                      // member.party の値によって画像のソースと alt を決定
                      const imgSrc =
                        member.party === "syomen"
                          ? "/kyudobu_img/syoumen1.jpg"
                          : "/kyudobu_img/shamen.jpg";
                      const imgAlt =
                        member.party === "syomen"
                          ? "正面打起し"
                          : "斜面打起し";
                      // member.gender によりクラス名を決定
                      const nameClass = member.gender === 'man' ? 'man-C' : 'woman-C';
                      return (
                        <div key={member._id || `${member.name}-${idx}`} className="profile-set">
                          <img src={imgSrc} alt={imgAlt} />
                          <div className="profile-item">
                            <div className={`profile-name ${nameClass}`}>
                              {member.name}
                            </div>
                            <div className="profile-position">{member.post}</div>
                            <div className="profile-department">{member.department}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default OBOGProfilePage;
