import React from 'react';

function SchedulePage() {
  return (
    <div id="schedule" className="big-bg">
      <section className="schedule-content">
        <p>
          青は男子、赤は女子、黒は全体の活動予定です。青緑は学校の予定となっております。<br />
          また祝日の練習は日曜と同様の扱いになります。<br />
          キャッシュにより過去の予定が表示されることがあります。
        </p>
        <br />
        <iframe
          src="https://calendar.google.com/calendar/b/1/embed?height=505&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=dG9nYWt1LnRva3lvdG9zaGlAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=aGNhY2FtZWI1dnQ0YWtqZXRtbXRqZHFsbDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=MTJlN3J0cjdkZmJncWxrcmpxdTg3dmcxNzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=OWtxZmgyNzVra29kMWlvOWJ0MGZwbmhodm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23616161&amp;color=%2333B679&amp;color=%23D50000&amp;color=%23009688&amp;color=%23039BE5&amp;color=%230B8043&amp;showTabs=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0"
          style={{ width: "100%", borderWidth: 0 }}
          width="798"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Schedule Calendar"
        ></iframe>
        <div className="schedule_table">
          <p>試合・練習試合</p>
          <p>集合時間は基本的に9時～10時集合です。ですので、集合時間がこの範囲外の場合のみ "時間" に記入します。</p>
          <table>
            <thead>
              <tr>
                <th>日時</th>
                <th>試合・練習試合</th>
                <th>時間</th>
                <th>開催場所</th>
                <th>その他追記事項</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9/15</td>
                <td>
                  リーグ戦第Ⅰ週(男子)
                  <br />
                  対　電気通信大学
                </td>
                <td>----</td>
                <td>上智大学</td>
                <td></td>
              </tr>
              {/* 追加の行 */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default SchedulePage;
