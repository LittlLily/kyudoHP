import React from 'react';

function ResultPage() {
    return (
        <div id="result" className="big-bg">
            <section id="contents">
                {/*                 <div className='imgSet'>
                    <div className='img1'></div>
                    <div className='img2'></div>
                </div> */}
                <div className="v-container">
                    <video id="js-video" src="./kyudobu_img/movie8.mp4" controls />
                    <canvas
                        id="js-canvas"
                        style={{
                            objectFit: 'cover',
                            zIndex: '-1',
                            position: 'fixed',
                            width: '100%',
                            height: '100%',
                            left: 0,
                            top: 0
                        }}
                    ></canvas>
                </div>
                <div className="sub-menu">
                    <h4>メニュー</h4>
                    <ul>
                        <li><a href="#2024年度">2024年度(令和6年度)</a></li>
                        <li><a href="#2023年度">2023年度(令和5年度)</a></li>
                    </ul>
                </div>
                <p
                    style={{
                        margin: '25px auto 300px 8%',
                        fontSize: '1.4rem',
                        padding: '5px 15px',
                        backgroundColor: 'rgb(247, 247, 247)',
                        borderRadius: '15px',
                        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.5)'
                    }}
                >
                    試合の写真は
                    <a href="https://twitter.com/tcu_kyudo">X(旧Twitter)</a>及び
                    <a href="https://www.instagram.com/tcu_kyudo/">Instagram</a>に掲載しております
                </p>

                <div id="2024年度" className="result-year"></div>

                <h5>2024年度(令和6年度)</h5>




                <div className="fight-box">
                    <div className="fight-detail">
                        <p>8/23 第72回全日本学生弓道選手権大会(女子)</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <div className="fight-result">
                            <h2>結果:予選敗退</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;1</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>8/22 第72回全日本学生弓道選手権大会(男子)</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <div className="fight-result">
                            <h2>結果:予選敗退</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)三的</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                        </table>
                    </div>

                </div>


                <div className="fight-box">
                    <div className="fight-detail">
                        <p>8/20 合同試合(女子)</p>
                        <p>本学 対 埼玉大学,獨協大学,東洋大学川越</p>
                        <p></p>
                        <p></p>
                        <div className="fight-others">
                            <h1>
                                補足:本学と埼玉大学大学との試合の結果、同中であったため1手競射を行い1対3で本学の負け
                            </h1>
                        </div>
                        <div className="fight-result" style={{ display: 'block' }}>
                            <h2>結果:<br></br>
                                1位獨協大学<br></br>
                                2位東洋大学川越<br></br>
                                3位埼玉大学<br></br>
                                4位本学<br></br>
                            </h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;7</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                        </table>
                    </div>

                </div>


                <div className="fight-box">
                    <div className="fight-detail">
                        <p>8/20 合同試合(男子)</p>
                        <p>本学 対 埼玉大学,獨協大学,東洋大学川越</p>
                        <p></p>
                        <p></p>
                        <div className="fight-others">
                            <h1>
                            </h1>
                        </div>
                        <div className="fight-result" style={{ display: 'block' }}>
                            <h2>
                                結果:<br></br>
                                １位　東洋大学川越<br></br>
                                ２位　獨協大学<br></br>
                                ３位　埼玉大学<br></br>
                                ４位　本学<br></br>
                            </h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;7</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;7</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)三的</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;9</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>6/15 第54回全関東学生弓道選手権大会<br></br>(女子)</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <div className="fight-others">
                            <h1>全関東学生弓道選手権大会女子団体予選(計12射)の結果<br></br>
                                7中以上の大学と、6中でかつ競射の結果より、勝ち上がったのは以下の大学でした。<br></br>
                                (決勝トーナメントでは、上位8校がシード)<br></br>
                                &nbsp;&nbsp;1位 12中 　　　　明治大学<br></br>
                                &nbsp;&nbsp;2位 11中 　　　　筑波大学<br></br>
                                &nbsp;&nbsp;3位 &nbsp;&nbsp;9中 　　　　日本大学<br></br>
                                &nbsp;&nbsp;3位 &nbsp;&nbsp;9中 　　国際武道大学<br></br>
                                &nbsp;&nbsp;5位 &nbsp;&nbsp;8中 　　芝浦工業大学<br></br>
                                &nbsp;&nbsp;5位 &nbsp;&nbsp;8中 　　　　中央大学<br></br>
                                &nbsp;&nbsp;5位 &nbsp;&nbsp;8中 　　　桜美林大学<br></br>
                                &nbsp;&nbsp;5位 &nbsp;&nbsp;8中 日本女子体育大学<br></br>
                                &nbsp;&nbsp;5位 &nbsp;&nbsp;8中 　　大東文化大学<br></br>
                                10位 &nbsp;&nbsp;7中 　　　　専修大学<br></br>
                                10位 &nbsp;&nbsp;7中 　　東京農業大学<br></br>
                                10位 &nbsp;&nbsp;7中 　　　　明星大学<br></br>
                                10位 &nbsp;&nbsp;7中 　　　　東海大学<br></br>
                                10位 &nbsp;&nbsp;7中 　　　　　　本学<br></br>
                                10位 &nbsp;&nbsp;7中 　　東京工業大学<br></br>
                                10位 &nbsp;&nbsp;7中 　　明治学院大学<br></br>
                                10位 &nbsp;&nbsp;7中 　　　　城西大学<br></br>
                                10位 &nbsp;&nbsp;7中 　　都留文科大学<br></br>
                                19位 &nbsp;&nbsp;6中 　　　　立教大学<br></br>
                                19位 &nbsp;&nbsp;6中 　　東京都立大学<br></br>
                                19位 &nbsp;&nbsp;6中 　　　　法政大学<br></br>
                                19位 &nbsp;&nbsp;6中 　　慶應義塾大学<br></br>
                                19位 &nbsp;&nbsp;6中 　　　早稲田大学<br></br>
                                19位 &nbsp;&nbsp;6中 　　　学習院大学<br></br>
                                <br></br>
                                全関東学生弓道選手権大会女子団体<br></br>
                                決勝トーナメント1回戦(計12射)の結果<br></br>
                                本学(4中) 対 東海大学(7中)<br></br>
                                東海大学の勝利
                            </h1>
                        </div>
                        <div className="fight-result">
                            <h2>結果：本学は予選突破、トーナメント1回戦敗退</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table style={{ margin: '20% 0' }}>
                            <tr>
                                <th>女子団体予選</th>
                                <th>一立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                        </table>

                        <table style={{ margin: '20% 0' }}>
                            <tr>
                                <th>決勝1回戦</th>
                                <th>一立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;1</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>6/15 第54回全関東学生弓道選手権大会<br></br>(男子)</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <div className="fight-others">
                            <h1>全関東学生弓道選手権大会男子団体予選(計24射)の結果<br></br>
                                15中以上の大学と、14中でかつ競射の結果より、勝ち上がったのは以下の大学でした。<br></br>
                                (決勝トーナメントでは、上位8校がシード)<br></br>
                                &nbsp;1位 23中 　　法政大学<br></br>
                                &nbsp;2位 21中 　　明治大学<br></br>
                                &nbsp;2位 21中 国際武道大学<br></br>
                                &nbsp;4位 20中 慶應義塾大学<br></br>
                                &nbsp;4位 20中 東京農業大学<br></br>
                                &nbsp;6位 18中 　　筑波大学<br></br>
                                &nbsp;6位 18中 　桜美林大学<br></br>
                                &nbsp;6位 18中 　早稲田大学<br></br>
                                &nbsp;9位 17中 　　　　本学<br></br>
                                &nbsp;9位 17中 　　山梨大学<br></br>
                                &nbsp;9位 17中 　　中央大学<br></br>
                                &nbsp;9位 17中 　宇都宮大学<br></br>
                                &nbsp;9位 17中 大東文化大学<br></br>
                                14位 16中 　　専修大学<br></br>
                                14位 16中 　　日本大学<br></br>
                                14位 16中 　　東海大学<br></br>
                                17位 15中 　　城西大学<br></br>
                                17位 15中 千葉商科大学<br></br>
                                17位 15中 　　東京大学<br></br>
                                17位 15中 　國學院大學<br></br>
                                20位 14中 　国士舘大学<br></br>
                                20位 14中 日本体育大学<br></br>
                                20位 14中 横浜国立大学<br></br>
                                20位 14中 東洋大学川越<br></br>
                                <br></br>
                                全関東学生弓道選手権大会男子団体<br></br>
                                決勝トーナメント1回戦(計24射)の結果<br></br>
                                本学(17中) 対 専修大学(18中)<br></br>
                                専修大学の勝利
                            </h1>
                        </div>
                        <div className="fight-result">
                            <h2>結果：本学は予選突破、トーナメント1回戦敗退</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table style={{ margin: '20% 0' }}>
                            <tr>
                                <th>男子団体予選</th>
                                <th>一立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)三的</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)四的</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                        </table>

                        <table style={{ margin: '20% 0' }}>
                            <tr>
                                <th>決勝1回戦</th>
                                <th>一立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)三的</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)四的</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>5/12 練習試合(女子:全関方式)</p>
                        <p>本学 対 成城大学</p>
                        <p></p>
                        <p></p>
                        <div className="fight-others">
                            <h1>
                                一立目:本学 &nbsp;&nbsp;5中 対 相手校 &nbsp;&nbsp;5中<br></br>
                                二立目:本学 &nbsp;&nbsp;5中 対 相手校 &nbsp;&nbsp;9中<br></br>
                                三立目:本学 &nbsp;&nbsp;6中 対 相手校 &nbsp;&nbsp;5中<br></br>
                                四立目:本学 &nbsp;&nbsp;8中 対 相手校 &nbsp;&nbsp;6中<br></br>
                                総計:本学 &nbsp;&nbsp;2勝 対 相手校 &nbsp;&nbsp;1勝<br></br>
                                (尚、試合会場の都合上、5立目は行いませんでした。)
                            </h1>
                        </div>
                        <div className="fight-result">
                            <h2>結果：</h2>
                            <h2 className="colored1">本学</h2>
                            <h2>の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">&nbsp;&nbsp;5</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">&nbsp;&nbsp;8</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">11</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>4/28 練習試合(男子:全関方式)</p>
                        <p>本学 対 成城大学</p>
                        <p></p>
                        <p></p>
                        <div className="fight-others">
                            <h1>一立目:本学 11中 対 相手校 10中<br></br>
                                二立目:本学 17中 対 相手校 11中<br></br>
                                三立目:本学 13中 対 相手校 17中<br></br>
                                四立目:本学 11中 対 相手校 14中<br></br>
                                五立目:本学 12中 対 相手校 13中<br></br>
                                総計:本学 &nbsp;&nbsp;2勝 対 相手校 &nbsp;&nbsp;3勝
                            </h1>
                        </div>
                        <div className="fight-result">
                            <h2>結果：成城大学の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">13</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;9</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)三的</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;8</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)四的</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">14</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;7</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">13</td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div className="fight-box">
                    <div className="fight-detail">
                        <p>4/28 練習試合(女子)</p>
                        <p>本学 対 学習院女子大学</p>
                        <p>先攻:学習院女子大学 24中</p>
                        <p>後攻:本学 31中</p>
                        <div className="fight-result">
                            <h2>結果：</h2>
                            <h2 className="colored1">本学</h2>
                            <h2>の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;9</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">13</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;6</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>4/21 練習試合(男子:全関形式)</p>
                        <p>本学 対 東京理科大学</p>
                        <p></p>
                        <p></p>
                        <div className="fight-others">
                            <h1>一立目:本学 &nbsp;&nbsp;7中 対 相手校 12中<br></br>
                                二立目:本学 10中 対 相手校 15中<br></br>
                                三立目:本学 11中 対 相手校 16中<br></br>
                                四立目:本学 10中 対 相手校 14中<br></br>
                                五立目:本学 &nbsp;&nbsp;7中 対 相手校 15中<br></br>
                                総計:本学 &nbsp;&nbsp;0勝 対 相手校 &nbsp;&nbsp;5勝
                            </h1>
                        </div>
                        <div className="fight-result">
                            <h2>結果：東京理科大学の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">11</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;9</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)三的</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;5</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)四的</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;9</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;9</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>4/8 理工系戦</p>
                        <div className="fight-others">
                            <h1>
                                <br></br>理工系戦の予選(計64射)の結果は以下のようになりました。
                                <br></br>工学院大学 　20中
                                <br></br>芝浦工業大学 21中
                                <br></br>東京海洋大学 24中
                                <br></br>本学　　　　 34中
                                <br></br>東京理科大学 35中
                                <br></br>日本工業大学 33中
                                <br></br>
                                <br></br>予選の結果
                                <br></br>1位 東京理科大学
                                <br></br>2位 本学
                                <br></br>3位 日本工業大学
                                <br></br>4位 東京海洋大学
                                <br></br>5位 芝浦工業大学
                                <br></br>6位 工学院大学
                                <br></br>(上記の1位から3位の大学が予選突破)
                            </h1>
                        </div>
                        <div className="fight-result" style={{ display: 'block' }}>
                            <h2>決勝戦(総当り)の結果
                                <br></br>1位 東京理科大学
                            </h2>
                            <h2 style={{ display: 'flex' }}>2位&nbsp;<div className="colored1">本学</div>
                            </h2>
                            <h2>3位 日本工業大学<br></br><br></br></h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <h3 style={{ margin: '30px 0 0 10px', fontWeight: 100, textAlign: 'center', fontSize: '1.2rem' }}>(1,
                            東京理科大学 20中 - 日本工業大学 12中)</h3>
                        <table>
                            <tr>
                                <th>2, 本学 対 日本工業大学</th>
                                <th>一立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)大前</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)二的</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)落前</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)落</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                        </table>
                        <h3 style={{ margin: '30px 0 0 10px', fontWeight: 100, textAlign: 'center', fontSize: '1.2rem' }}>2, 本学 19中 - 日本工業大学
                            9中</h3>
                        <table>
                            <tr>
                                <th>3, 東京理科大学 対 本学</th>
                                <th>一立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)大前</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)二的</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)落前</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)落</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                        </table>
                        <h3 style={{ margin: '30px 0 0 10px', fontWeight: 100, textAlign: 'center', fontSize: '1.2rem' }}>3, 東京理科大学
                            21中 - 本学 19中</h3>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>4/6 練習試合(女子)</p>
                        <p>本学 対 芝浦工業大学</p>
                        <p>先攻:芝浦工業大学 26中</p>
                        <p>後攻:本学 31中</p>
                        <div className="fight-result">
                            <h2>結果：</h2>
                            <h2 className="colored1">本学</h2>
                            <h2>の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;9</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;5</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">13</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div id="2023年度" className="result-year"></div>

                <h5>2023年度(令和5年度)</h5>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>3/27 練習試合(男子)</p>
                        <p>本学 対 専修大学</p>
                        <p>先攻:専修大学 105中</p>
                        <p>後攻:本学 83中</p>
                        <div className="fight-result">
                            <h2>結果：専修大学の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">15</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">13</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">12</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">11</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)大前</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)二的</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;9</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)落前</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">10</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)落</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">10</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>3/25 練習試合(男子)</p>
                        <p>本学 対 学習院大学</p>
                        <p>先攻:学習院大学 80中</p>
                        <p>後攻:本学 82中</p>
                        <div className="fight-result">
                            <h2>結果：</h2>
                            <h2 className="colored1">本学</h2>
                            <h2>の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">13</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;9</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;8</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">11</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)大前</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;9</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)二的</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">11</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)落前</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">16</td>
                            </tr>
                            <tr>
                                <td className="player_name">(弐之立)落</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;5</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>3/16 第70期新人戦第3回戦(女子)</p>
                        <p>本学 対 青山学院大学</p>
                        <p>先攻:本学 27中</p>
                        <p>後攻:青山学院大学 39中</p>
                        <div className="fight-result">
                            <h2>結果：青山学院大学の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;5</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;5</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;6</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">11</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>3/10 第70期新人戦2回戦(女子)</p>
                        <p>本学 対 東京工科大学</p>
                        <p>先攻:東京工科大学 19中</p>
                        <p>後攻:本学 22中</p>
                        <div className="fight-others">
                            <h1>補足:シードにより、2回戦目からの出場</h1>
                        </div>
                        <div className="fight-result">
                            <h2>結果：</h2>
                            <h2 className="colored1">本学</h2>
                            <h2>の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;5</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">〇〇〇〇</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;9</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>3/10 第70期新人戦2回戦(男子)</p>
                        <p>本学 対 青山学院大学</p>
                        <p>先攻:青山学院大学 44中</p>
                        <p>後攻:本学 40中</p>
                        <div className="fight-others">
                            <h1>補足:シードにより、2回戦目から出場</h1>
                        </div>
                        <div className="fight-result">
                            <h2>結果：青山学院大学の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;8</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)三的</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)四的</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;5</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;9</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇〇✕✕</td>
                                <td className="player_result_sum">✕〇〇〇</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">11</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>2/17 練習試合(男子:新人戦形式)</p>
                        <p>本学 対 東京農工大学</p>
                        <p>先攻:本学 30中</p>
                        <p>後攻:東京農工大学 60中</p>
                        <div className="fight-result">
                            <h2>結果：東京農工大学の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">〇〇〇✕</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result_sum">10</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">〇✕〇✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">〇〇✕〇</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;8</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)三的</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕〇〇✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)四的</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">&nbsp;&nbsp;2</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>2/13 練習試合(女子:新人戦形式)</p>
                        <p>本学 対 日本女子大学</p>
                        <p>先攻:本学 22中</p>
                        <p>後攻:日本女子大学 29中</p>
                        <div className="fight-result">
                            <h2>結果：日本女子大学の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result">&nbsp;&nbsp;5</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">〇✕✕〇</td>
                                <td className="player_result_sum">〇✕〇〇</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result">&nbsp;&nbsp;7</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">✕✕✕〇</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">✕〇✕✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">✕✕✕✕</td>
                                <td className="player_result_sum">〇✕✕✕</td>
                                <td className="player_result_sum">✕✕〇✕</td>
                                <td className="player_result_sum">✕〇✕〇</td>
                                <td className="player_result_sum">✕✕〇〇</td>
                                <td className="player_result">&nbsp;&nbsp;6</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="fight-box">
                    <div className="fight-detail">
                        <p>2/4 練習試合(男子:新人戦形式)</p>
                        <p>本学 対 青山学院大学</p>
                        <p>先攻:本学 29中</p>
                        <p>後攻:青山学院大学 49中</p>
                        <div className="fight-result">
                            <h2>結果：青山学院大学の勝利</h2>
                        </div>
                    </div>
                    <div className="fight-hit">
                        <table>
                            <tr>
                                <th></th>
                                <th>一立目</th>
                                <th>二立目</th>
                                <th>三立目</th>
                                <th>四立目</th>
                                <th>五立目</th>
                                <th>計</th>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)大前</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result">&nbsp;&nbsp;6</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)二的</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result">&nbsp;&nbsp;5</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)三的</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result">&nbsp;&nbsp;8</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)四的</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result">&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落前</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result">&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td className="player_name">(壱之立)落</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result_sum">----</td>
                                <td className="player_result">&nbsp;&nbsp;4</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <h3
                    style={{
                        padding: '5px 15px',
                        backgroundColor: 'rgb(247, 247, 247)',
                        borderRadius: '15px',
                        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.5)'
                    }}
                >
                    上記以前の結果は旧サイトに掲載しております。
                </h3>
            </section>
        </div>
    );
}

export default ResultPage;
