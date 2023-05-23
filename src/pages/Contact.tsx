import React, { useState } from 'react';
import '../App.css';
import '../css/Contact.css';

const Contact = () => {
  const [companyName, setCompanyName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // フォームの送信処理を記述する（例: バックエンドにデータを送信するなど）
    // ...

    // フォーム送信後、入力内容をリセットする
    setCompanyName('');
    setLastName('');
    setFirstName('');
    setEmail('');
    setConfirmEmail('');
    setPhoneNumber('');
    setInquiry('');
  };

  return (
    <div className="contact-container">
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="companyName">会社名</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">担当者(姓)</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">担当者(名)</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmEmail">メールアドレス確認用</label>
          <input
            type="email"
            id="confirmEmail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">電話番号</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="inquiry">お問い合わせ内容</label>
          <textarea
            id="inquiry"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">送信</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
