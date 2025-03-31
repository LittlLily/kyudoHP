import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

function HomePage() {
    const homeImageRef = useRef(null);
    const articleRef = useRef(null);

    // IntersectionObserver の処理（既存のコード）
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    homeImageRef.current.classList.remove("backgroundNone");
                    homeImageRef.current.classList.add("backgroundDark");
                } else {
                    homeImageRef.current.classList.remove("backgroundDark");
                    homeImageRef.current.classList.add("backgroundNone");
                }
            });
        }, { threshold: 0.01 });

        if (articleRef.current) {
            observer.observe(articleRef.current);
        }
        return () => observer.disconnect();
    }, []);

    // ScrollReveal の処理を追加する useEffect
    useEffect(() => {
        ScrollReveal({ reset: true, distance: "60px", duration: 1000 });
        ScrollReveal().reveal('.post-info h3', { delay: 100 });
        ScrollReveal().reveal('.post-info p', { delay: 200 });
        ScrollReveal().reveal('article img', { delay: 200, origin: "left" });
        ScrollReveal().reveal('article .info-set', { delay: 200, origin: "bottom" });
        ScrollReveal().reveal('.aside-content .sub-menu li', { delay: 10, origin: "bottom", interval: 50, duration: 500 });
    }, []);

    return (
        <div id="home" className="big-bg">
            <div className="home-content wrapper">
                <img
                    ref={homeImageRef}
                    src="./kyudobu_img/HP_photo.jpg"
                    alt="HP"
                    className="backgroundNone"
                />
                <img src="./kyudobu_img/seisyaseityuu.svg" alt="Secondary" />
            </div>
            <section className="information">
                <p style={{ color: 'red', fontSize: '1.5rem', padding: '0 10%', margin: 0 }}>
                    お知らせ
                </p>
                <ul style={{ padding: '0 10%' }}>
                    <li>Home Page を一新しました(2/28/2024)</li>
                    <li>iOS上でのみ起こるこのページのバグを改善するために、CSS の background-attachment: fixed; 等を変更しました。(3/5/2024)</li>
                    <li>Home Page に JavaScript を導入しました(3/9/2024)</li>
                    <li>最終更新日の位置をヘッダー部分の各セルに移動させました(3/17/2024)</li>
                </ul>
                <article ref={articleRef}>
                    <header className="post-info">
                        <h3 className="sub-title">この弓道部について</h3>
                        <p>
                            この度は東京都市大学体育会弓道部ホームページをご覧いただき誠に有難うございます。<br />
                            我が弓道部の活動の概要を紹介させていただきます。
                        </p>
                    </header>
                    <aside>
                        <div className="aside-content">
                            <div className="aside-img"></div>
                            <ul className="sub-menu">
                                <li><a href="#歴史">歴史</a></li>
                                <li style={{ marginLeft: "10px" }}><a href="#流派">流派</a></li>
                                <li style={{ marginLeft: "20px" }}><a href="#流派">師範、監督、顧問</a></li>
                                <li style={{ marginLeft: "30px" }}><a href="#活動場所">活動場所</a></li>
                                <li style={{ marginLeft: "40px" }}><a href="#活動日">活動日</a></li>
                                <li style={{ marginLeft: "50px" }}><a href="#見学について">見学について</a></li>
                                <li style={{ marginLeft: "60px" }}><a href="#入部について">入部について</a></li>
                                <li style={{ marginLeft: "70px" }}><a href="#未経験者の方へ">未経験者の方へ</a></li>
                                <li style={{ marginLeft: "80px" }}><a href="#経験者の方へ">経験者の方へ</a></li>
                                <li style={{ marginLeft: "90px" }}><a href="#OB・OGの方々へ">OB・OGの方々へ</a></li>
                            </ul>
                        </div>


                    </aside>
                    <div className="articlePadding">
                        <div id="歴史" className="info-set">
                            <img></img>
                            <div className="info-text">
                                <h4>歴史</h4>
                                <p>
                                    半世紀以上前の昭和３７年に、学内の弓道愛好の有志学生により設立されました。
                                </p>
                            </div>
                        </div>
                        <div id="流派" className="info-set">
                            <img></img>
                            <div className="info-text">
                                <h4>流派</h4>
                                <p>
                                    １５世紀中頃に日置弾正が創設した日置流（印西派）です。 初心者には武射系の斜面打起しを指導いたしますが、高校からの弓道経験者には礼射系の正面打起しも指導しております。
                                </p>
                            </div>
                        </div>
                        <div id="師範、監督、顧問" className="info-set">
                            <img></img>
                            <div className="info-text">
                                <h4>師範、監督、顧問</h4>
                                <p>
                                    OBの渡辺洋監督、二見富士夫コーチ、佐藤明博コーチ、佐藤秀憲コーチの指導陣にお願いしております。指導者は全員有段者で、称号、公認スポーツ指導員の資格受有者もいます。顧問は東京都市大学工学部機械工学科教授の白木尚人先生にお願いして指導頂いております。
                                </p>
                            </div>
                        </div>
                        <div id="活動場所" className="info-set">
                            <img></img>
                            <div className="info-text">
                                <h4>活動場所</h4>
                                <p>
                                    新道場建設までの過渡期です。現在は系列校の等々力中高校弓道場と学外公共施設（駒沢弓道場など）を使って練習しています。
                                </p>
                            </div>
                        </div><div id="活動日" className="info-set">
                            <img></img>
                            <div className="info-text">
                                <h4>活動日</h4>
                                <p>
                                    通常は等々力中高校弓道場を借用して、ほぼ毎夕刻に自主練習ができます。週に2回程度、駒沢オリンピック公園内の駒沢弓道場を使って全体練習を行います。この他に、初心者には、世田谷キャンパス内の巻藁射場（5人立）を使って指導します。詳しくは
                                    <a href="Kyudo_schedule.html" style={{ color: '#2a1500' }}>ココのページ</a>
                                    を見てください。
                                </p>
                            </div>
                        </div>

                        <div id="見学について" className="info-set">
                            <img></img>
                            <div className="info-text">
                                <h4>見学について</h4>
                                <p>
                                    希望される方は
                                    <a href="https://twitter.com/tcu_kyudo" style={{ color: '#2a1500' }}>X(旧Twitter)</a>
                                    または
                                    <a href="https://www.instagram.com/tcu_kyudo/" style={{ color: '#2a1500' }}>Instagram</a>
                                    でご連絡ください。
                                </p>
                            </div>
                        </div>

                        <div id="入部について" className="info-set">
                            <img></img>
                            <div className="info-text">
                                <h4>入部について</h4>
                                <p>
                                    まずは見学してみてください。入部の手続きは見学の際に詳しくお伝えします。
                                </p>
                            </div>
                        </div>

                        <div id="未経験者の方へ" className="info-set">
                            <img></img>
                            <div className="info-text">
                                <h4>未経験者の方へ</h4>
                                <p>
                                    今まで弓道の経験の無い方も大歓迎です。
                                    当部では殆どの部員が未経験者ですが、監督や先輩が責任持って基礎から丁寧に指導してくれます。通常の練習で、一年生の内に初段が取れるよう指導します。
                                    興味がありましたら、まずはご見学にお越し下さい。
                                </p>
                            </div>
                        </div>

                        <div id="経験者の方へ" className="info-set" style={{ marginBottom: '580px' }}>
                            <img></img>
                            <div className="info-text">
                                <h4>経験者の方へ</h4>
                                <p>
                                    高校や中学等で弓道を経験した方も大歓迎です。武射系の斜面打起しですが、礼射系の正面打起しの方も射法を変える必要はありません。
                                    むしろ大学４年間の部活動の中で、伝統ある日置流に接する機会があることは、長い弓道修練にあって貴重な経験になります。
                                    ５００名を超えるＯＢ／ＯＧの諸先輩達の中には、卒業後も称号・段位を取得し今でも弓道に修練されている方が沢山おられます。
                                </p>
                            </div>
                        </div>

                        <div id="OB・OGの方々へ" className="info-set" style={{ marginBottom: '700px' }}>
                            <img></img>
                            <div className="info-text">
                                <h4>OB・OGの方々へ</h4>
                                <p>
                                    11月5日に行われた令和5年度リーグ戦・女子部リーグ戦入れ替え戦をもちまして、本年度のリーグ戦・女子部リーグ戦は全日程が終了致しました。
                                    本戦の結果は男子がⅣ部四戦三勝で、明星大学がⅢ部リーグにあがった結果によりリーグ内一位、女子が四戦全勝でⅣ部一位、入れ替え戦で惜しくも敗退しました。
                                    以上より、男子、女子ともにⅣ部に残留となりました。
                                    <span className="thank_line">
                                        この結果は部員の日頃の努力のみならず、日頃より暖かいご声援・ご支援を賜る武弓会をはじめとするOB・OGの皆様のお陰だと存じ、
                                        この場をお借りして心より感謝申し上げます。
                                    </span>
                                    来年度も、男子も女子もⅣ部でリーグ戦に参戦することになり、男子女子共にリーグ昇格を目指して戦って参ります。
                                    今後もご声援・ご支援のほどよろしくお願い致します。
                                </p>
                            </div>
                        </div>

                    </div>
                </article>
            </section>
        </div>
    );
}

export default HomePage;
