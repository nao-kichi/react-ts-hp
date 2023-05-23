import '../App.css';
import '../css/Product.css';
import member from '../images/member.jpeg';
import keisankun from '../images/keisan-kun.jpeg';
import onlinefitness from '../images/online-fitness.jpeg';
import rockpaperscissors from '../images/rockpaperscissors.jpeg';
import stopwatch from '../images/stopwatch.jpeg';
import typinggame from '../images/typinggame.jpeg';

const Product = () => (
  <div>
    <h2>Product</h2>
    <div id="pickup" className="wrapper">
      <article>
        <img src={member} alt="テキストテキストテキスト" className="article-image" />
        <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
        <div className="readmore"><a href="https://react-firebase-192b5.web.app/">READ MORE</a></div>
      </article>

      <article>
        <img src={keisankun} alt="テキストテキストテキスト" className="article-image" />
        <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
        <div className="readmore"><a href="https://nao-kichi.github.io/Keisan-kun-app/">READ MORE</a></div>
      </article>

      <article>
        <img src={onlinefitness} alt="テキストテキストテキスト" className="article-image" />
        <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
        <div className="readmore"><a href="https://nao-kichi.github.io/Online-Trainer/">READ MORE</a></div>
      </article>

      <article>
        <img src={rockpaperscissors} alt="テキストテキストテキスト" className="article-image" />
        <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
        <div className="readmore"><a href="https://nao-kichi.github.io/Rock-Pape-Scissors/">READ MORE</a></div>
      </article>

      <article>
        <img src={stopwatch} alt="テキストテキストテキスト" className="article-image" />
        <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
        <div className="readmore"><a href="https://main.d2b0qt30hgt5gk.amplifyapp.com/">READ MORE</a></div>
      </article>

      <article>
        <img src={typinggame} alt="テキストテキストテキスト" className="article-image" />
        <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
        <div className="readmore"><a href="https://nao-kichi.github.io/typing-JavaScript/">READ MORE</a></div>
      </article>

    </div>
  </div>
  
);

export default Product;
