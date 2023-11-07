import styles from './HomeV1.module.css';

import Map from '../../components/map/Map';
import Specialties from '../../components/specialties/Specialties';
import Experts from "../../components/experts/Experts";
import Autho from "../../components/autho/Autho";
import Logoipsum from '../../components/logoipsum/Logoipsum';
import Excel from '../../components/excel/Excel';
import LifeCoaching from '../../components/lifeCoaching/LifeCoaching';

const HomeV1= ()=> {
    
    // setTimeout(()=>{
    //   let leftElement = document.querySelector(".home-first-view .left") as HTMLElement;
    //   leftElement.style.transform = "translateY(0)";
    //   leftElement.style.opacity = "1";
    // }, 2000);

    // setTimeout(()=>{
    //   let rightElement = document.querySelector(".home-first-view .right") as HTMLElement;
    //   rightElement.style.transform = "translate(-100px, -50%)";
    //   rightElement.style.opacity= "1"
    // }, 3000);

    window.addEventListener("scroll", ()=>{
      if(document.body.getBoundingClientRect().top < 0){
        let leftElement = document.querySelector(
          `.${styles.left}`
        ) as HTMLElement;
        leftElement.style.transform = "translateX(0)";
        let rightElement = document.querySelector(
          `.${styles.right}`
        ) as HTMLElement;
        rightElement.style.transform = "translateX(0)";
        
      }
    })
    return (
      <div className={`home ${styles.v1} w-100`}>
        <div className={`homeFirstView ${styles.homeFirstView}`}>
          <div className="homeWrapper">
            <div className="row">
              <div className="left col-12">
                <div className="leftContent">
                  <h5 className="title text-orange">
                    PROFESSIONAL LIFE COACH & ADVISOR
                  </h5>
                  <div className="subTitle my-5">
                    Life Coaching with Meghdad
                  </div>
                  <button className="bg-orange text-white free-consulation">
                    FREE CONSULATION
                  </button>
                </div>
              </div>
              <div className="right">
                <div className="socialWrapper text-end d-flex flex-column justify-content-between">
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.homeSecondView}bg-warning p-5 m-5`}>
          <div className={`${styles.row} row`}>
            <div className={`${styles.left} col-12 col-lg-7 h-100`}>
              <div className={`${styles.row} h-100`}>
                <img
                  className="col-12 col-md-6 p-2"
                  src="/images/home-v1-svl.jpg"
                  alt=""
                />
                <img
                  className="col-12 col-md-6 p-2"
                  src="/images/home-v1-svr.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className={`${styles.right} col-12 col-lg-5 h-100 py-4`}>
              <h6 className="text-orange">GET TO KNOW US</h6>
              <h2 className={`${styles.title} my-4`}>
                Working Together for your Better Life!
              </h2>
              <p className={styles.body}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae eos mollitia optio, exercitationem a minima saepe
                excepturi cumque explicabo vitae amet reprehenderit eum eaque
                quod sequi provident, deleniti tempora. Alias.
              </p>
              <ul>
                <li>
                  <i className="fa-solid fa-check text-orange"></i>
                  <span>Nsectetur cing elit.</span>
                </li>
                <li>
                  <i className="fa-solid fa-check text-orange"></i>
                  <span>Suspe ndisse suscipit sagittis leo.</span>
                </li>
                <li>
                  <i className="fa-solid fa-check text-orange"></i>
                  <span>Entum estibulum dignissim posuere.</span>
                </li>
              </ul>
              <Autho />
            </div>
          </div>
        </div>
        <Specialties animateClass= {true}/>
        <Excel />
        <Experts />
        <LifeCoaching />
        <Logoipsum />
        <div>
          <Map />
        </div>
      </div>
    );
}
export default HomeV1;
