import AdvisorsVideo from "../../components/advisors-video/AdvisorsVideo";
import Elementor from "../../components/elementor/Elementor";
import FreeConsulation from "../../components/freeCons/FreeConsulation";
import Logoipsum from "../../components/logoipsum/Logoipsum";
import PricesChart from "../../components/pricesChart/PricesChart";
import Map from "../../components/map/Map";
import styles from './homeV2.module.css';

export default function HomeV2() {
  // setTimeout(() => {
  //   let leftElement = document.querySelector(
  //     ".home-first-view .left"
  //   ) as HTMLElement;
  //   leftElement.style.transform = "translateY(0)";
  //   leftElement.style.opacity = "1";
  // }, 2000);

  // setTimeout(() => {
  //   let rightElement = document.querySelector(
  //     ".home-first-view .right"
  //   ) as HTMLElement;
  //   rightElement.style.transform = "translate(-100px, -50%)";
  //   rightElement.style.opacity = "1";
  // }, 3000);

  return (
    <div className={styles.v2}>
      <div className={`homeFirstView ${styles.homeFirstView}`}>
        <div className="row">
          <div className="left text-center col-12">
            <h5 className="text-orange">PROFESSIONAL LIFE COACH & ADVISOR</h5>
            <div className="h0 my-5">
              Helping You
              <br />
              Achieve Anything
            </div>
            <button className="bg-orange text-white free-consulation">
              FREE CONSULATION
            </button>
          </div>
          <div className="right">
            <div className="text-end h-100 d-flex flex-column justify-content-center">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <Elementor />
      <div className={styles.introduction}>
        <div className={`${styles.row} row`}>
          <div className={`${styles.left} col-12 col-lg-6`}>
            <div className="title text-orange">OUR INTRODUCTION</div>
            <h1 className="my-4">
              It's Time for a<br />
              Change in your Life
            </h1>
            <p className="text-muted">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti, necessitatiam expedita maiores magnam provident? Aut
              eligendi numquam perspiciatis voluptas.
            </p>
            <ul className="my-4">
              <li>
                <i className="fa-solid fa-check text-orange"></i>
                <span className="text-muted">Nsectetur cing elit.</span>
              </li>
              <li>
                <i className="fa-solid fa-check text-orange"></i>
                <span className="text-muted">
                  Suspe ndisse suscipit sagittis leo.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check text-orange"></i>
                <span className="text-muted">
                  Labore et dolore magna andhn.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check text-orange"></i>
                <span className="text-muted">
                  Entum estibulum dignissim posuere.
                </span>
              </li>
            </ul>
            <button className="free-consulation my-4">FREE CONSULATION</button>
          </div>
          <div className={`${styles.right} col-12 col-lg-6`}>
            <img
              className="w-100 h-100"
              src="/images/businessman-and-businesswomen-working-on-business-S5PJZ55.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.pricingPlans}>
        <div className={`${styles.wall} row text-white`}>
          {/* <div className="orange-cover"></div> */}
          <div className="col-12 col-lg-5">
            <div>WHAT WE OFFER</div>
            <h2>Pricing Plans</h2>
          </div>
          <div className="col-12 col-lg-7">
            <p>
              There are many variations of passag of Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quibusdam officiis voluptatem sunt
              nam ipsa, repudiandae distinctio repellendus similique incidunt
              enim, vel autem dicta possimus blanditiis animi provident
              assumenda qui quis.
            </p>
          </div>
        </div>
        <div className={styles.pricesChartWrapper}>
          <PricesChart />
        </div>
        <div className="row p-5">
          <div className="col-12 col-md-8 mission d-flex flex-column justify-content-center border-top pt-5">
            <h3 className="mb-5">
              What I live for and how I can be useful to you
            </h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, fugit. Voluptates eaque repellat maxime soluta id
              ratione ipsum. Nihil iure totam cum ducimus corporis, veritatis
              modi nam eos ipsa doloribus.
            </p>
          </div>
          <div className="col-12 col-md-4 text-center border-top pt-5">
            <img
              className={styles.missionImg}
              src="/images/mission.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={`${styles.location} row`}>
          <div className="col-12 col-md-6 p-5">
            <div className="text-orange">OUR LOCATION</div>
            <h1 className={`${styles.title} mt-3`}>
              Trusted by
              <br />
              Millions of People
            </h1>
            <p className="text-muted mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              minima, itaque consequatur laudantium natus exercitationem, quam
              sunt dolores vitae deleniti ex sapiente voluptas, totam
              cupiditate. Dignissimos doloribus quam explicabo iusto.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src="/images/map-layout-600x290.jpg" alt="" />
          </div>
        </div>
      </div>
      <AdvisorsVideo />
      <Logoipsum />
      <FreeConsulation />
    </div>
  );
}