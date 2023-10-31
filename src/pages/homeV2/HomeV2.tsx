import AdvisorsVideo from "../../components/advisors-video/AdvisorsVideo";
import Elementor from "../../components/elementor/Elementor";
import FreeConsulation from "../../components/freeCons/FreeConsulation";
import Introduction from "../../components/introduction/Introduction";
import Logoipsum from "../../components/logoipsum/Logoipsum";
import PricesChart from "../../components/pricesChart/PricesChart";
import Stats from "../../components/stats/Stats";
import styles from './homeV2.module.css';
import './PricesOpcItem.css';

export default function HomeV2() {
  window.addEventListener("scroll", ()=>{
    let pricesOpcItems = document.querySelectorAll(".pricesOpcItem");
    pricesOpcItems.forEach((pricesOpcItem)=>{
      if(pricesOpcItem instanceof HTMLElement && pricesOpcItem.getBoundingClientRect().top < window.innerHeight){
          pricesOpcItem.style.opacity= "1";
      }
    })
    let locationLeft = document.querySelector(`.${styles.location} .${styles.left}`);
    if(locationLeft instanceof HTMLElement && locationLeft.getBoundingClientRect().top < window.innerHeight){
      locationLeft.style.transform= "translateX(0)";
    }
    let freeCons = document.querySelector(`.${styles.freeConsWrapper}`);
    if(freeCons instanceof HTMLElement && freeCons.getBoundingClientRect().top < window.innerHeight){
      freeCons.style.transform= "translateY(0)";
    }
  })
  
  return (
    <div className={`${styles.v2} v2`}>
      <div className={`homeFirstView ${styles.homeFirstView}`}>
        <div className="homeWrapper">
          <div className="row">
            <div className="left text-center col-12">
              <h5 className="title text-orange">
                PROFESSIONAL LIFE COACH & ADVISOR
              </h5>
              <div className="subTitle my-5">Helping You Achieve Anything</div>
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
      </div>
      <Elementor />
      <Introduction />
      <Stats />
      <div className={styles.pricingPlans}>
        <div
          className={`${styles.wall} row text-white`}
        >
          <div className="pricesOpcItem col-12 col-lg-5 mt-5">
            <div className={styles.title}>WHAT WE OFFER</div>
            <div className={styles.subTitle}>Pricing Plans</div>
          </div>
          <div className={`${styles.right} pricesOpcItem col-12 col-lg-7 mt-5`}>
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
          <div className={`${styles.left} col-12 col-md-7`}>
            <div className={`${styles.title} text-orange`}>OUR LOCATION</div>
            <div className={`${styles.subTitle} mt-3`}>
              Trusted by
              <br />
              Millions of People
            </div>
            <p className="text-muted mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              minima, itaque consequatur laudantium natus exercitationem, quam
              sunt dolores vitae deleniti ex sapiente voluptas, totam
              cupiditate. Dignissimos doloribus quam explicabo iusto.
            </p>
          </div>
          <div className="col-12 col-md-5">
            <img
              className="w-100"
              src="/images/map-layout-600x290.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <AdvisorsVideo />
      <Logoipsum />
      <div className="overflow-hidden">
        <div className={styles.freeConsWrapper}>
          <FreeConsulation />
        </div>
      </div>
    </div>
  );
}
