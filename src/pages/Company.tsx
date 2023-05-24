import '../App.css';
import '../css/Company.css';

const Company = () => (
  <div>
    <h2>Company</h2>
    <div className="profile">
      <img src='https://github.com/nao-kichi/react-ts-hp/blob/main/src/images/Profile.jpg?raw=true' alt="Profile" />
      <div className="profile-info">
        <h3>代表取締役: 松本 尚輝</h3>
        <p>
          経歴: 東京通信大学卒業、DNP・ゴールドジム・ビースタイルホールディングス<br />
          企業での経験を経て、現在の会社を設立
        </p>
        <br />
        <p>従業員数: 17名(業務委託・アルバイト含む)</p>
        <br />
        <p>会社設立日時: 2023年8月29日</p>
        <br />
        <p>
          事業内容: Webアプリ/モバイルアプリ/Webサイト開発<br />
          企業様のITサポート「御助け」・プログラミングスクールの運営・資格マッチングサイトの運営<br />
          オンラインフィットネス運営・Youtubeチャンネル運営・Youtubeチャンネル育成<br />
          を展開しています。
        </p>
      </div>
    </div>
  </div>
);

export default Company;
