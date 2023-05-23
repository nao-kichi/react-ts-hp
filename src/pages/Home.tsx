import '../App.css';
import '../css/Home.css';
import homeImage1 from '../images/pc.jpg';
import homeImage2 from '../images/pc.jpg';
import programing from '../images/programing.jpeg';

const Home = () => (
  <div>
    {/* １ */}
    <section className="wrapper">
      <div className="container">
        <div className="content">
          <div className="content-item">
            <img src={homeImage1} alt="Sample 1" className="image" />
          </div>
          <div className="content-item">
            <div className="text">
              <h2 className="heading">VISION</h2>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 2 */}
    <section className="wrapper reverse">
      <div className="container">
        <div className="content">
          <div className="content-item">
            <img src={homeImage2} alt="Sample 2" className="image" />
          </div>
          <div className="content-item">
            <div className="text">
              <h2 className="heading">SERVICE</h2>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 3 */}
    <section className="full-width-image">
  <img src={programing} alt="Full Width" />
  <div className="overlay">
    <p>Sample Text</p>
  </div>
</section>

  </div>
);

export default Home;
