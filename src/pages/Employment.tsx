import '../App.css';
import '../css/Employment.css';

const Employment = () => (
  <div className="employment-page">
    <h2 className="page-title">従業員募集</h2>
    <p className="job-description">
      当社では才能ある人材を募集しています。もし、当社の業界に情熱を持ち、やりがいのあるキャリアの機会をお探しの方がいらっしゃれば、ぜひご応募ください。
    </p>
    <div className="application-process">
      <h3>応募プロセス</h3>
      <ol>
        <li>履歴書とカバーレターを careers@company.com まで送信してください。</li>
        <li>ご応募内容を確認し、選考に進む場合はご連絡いたします。</li>
        <li>面接を行い、スキルと資格を評価いたします。</li>
        <li>合格の場合、求人オファーを提案いたします。</li>
        <li>入社おめでとうございます！わくわくする新たなステップに踏み出しましょう。</li>
      </ol>
    </div>
    <div className="benefits">
      <h3>福利厚生</h3>
      <ul>
        <li>競争力のある給与と報酬パッケージ</li>
        <li>健康保険と保険のカバレッジ</li>
        <li>柔軟な勤務時間</li>
        <li>キャリアの成長の機会</li>
        <li>ポジティブかつ包括的な職場環境</li>
      </ul>
    </div>
    <p className="contact-info">
      ご質問や詳細については、人事部までお問い合わせください。メールアドレス: hr@company.com
    </p>
  </div>
);

export default Employment;
