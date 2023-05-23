import '../App.css';
import '../css/News.css';

const News = () => (
  <section className="news">
    <div className="inner">
      <h2 className="sub_ttl">NEWS</h2>

      <ul className="news_list">
        {/* 情報を追加 */}
        <li className="news_list_item">
          <a href="/">
            <div className="news_list_date">
              <time>2023.05.23</time>
              <p className="news_item">お知らせ</p>
            </div>
            <p>サイトを作成しました。</p>
            <span className="arrow"></span>
          </a>
        </li>
        {/* 情報を追加 */}
        <li className="news_list_item">
          <a href="/">
            <div className="news_list_date">
              <time>2020.05.25</time>
              <p className="news_item">お知らせ</p>
            </div>
            <p>ドメイン・サーバー取得しました。事業開始。</p>
            <span className="arrow"></span>
          </a>
        </li>
        {/* 情報を追加 */}
        <li className="news_list_item">
          <a href="/">
            <div className="news_list_date">
              <time>2023.5.29</time>
              <p className="news_item">お知らせ</p>
            </div>
            <p>従業員の募集を開始</p>
            <span className="arrow"></span>
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default News;
