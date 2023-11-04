import styles from './AboutUs.module.css';
import Experts from "../../components/experts/Experts";
import Autho from "../../components/autho/Autho";
import Testimonials from "../../components/testimonials/Testimonials";
import Logoipsum from "../../components/logoipsum/Logoipsum";
import AdvisorsVideo from "../../components/advisors-video/AdvisorsVideo";
import FreeConsulation from "../../components/freeCons/FreeConsulation";

export default function Aboutus() {
  window.addEventListener("scroll", ()=>{
    let pb1 = document.querySelector(`.${styles.pb1}`);
    let pb2 = document.querySelector(`.${styles.pb2}`);
      if (pb1 instanceof HTMLElement && pb2 instanceof HTMLElement && pb1.getBoundingClientRect().top < window.innerHeight
      ) {
        //  console.log("pb1 top position:", pb1.getBoundingClientRect().top);
        //  console.log("pb2 top position:", pb2.getBoundingClientRect().top);
         pb1.style.width = "92%";
         pb2.style.width = "82%";
      }
    });
  

  return (
    <div>
      <div className="firstView">
        <div className="firstViewContent bg-orange">
          <h1>About us</h1>
          <p>Specializing in Career Mentoring</p>
        </div>
      </div>
      <div className={styles.aboutCompany}>
        <div className="row p-7">
          <div className={`col-12 col-lg-6 ${styles.left} mb-5`}>
            <div className="text-orange">ABOUT OUR COMPANY</div>
            <h1 className="my-4">
              Get to Know About
              <br />
              Tudor Advisors!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              earum in recusandae. Recusandae voluptatem odit, aperiam veniam,
              similique nihil quia architecto quibusdam eos nesciunt ut sed
              maxime, aliquid totam quis.
            </p>
            <h5>Mentorship</h5>
            <div className={`progress ${styles.progress}`}>
              <div
                className={`progress-bar ${styles.progressBar} ${styles.pb1}`}
                role="progressbar"
                style={{ width: "0" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <h5 className="mt-3">Education</h5>
            <div className={`progress ${styles.progress}`}>
              <div
                className={`progress-bar ${styles.progressBar} ${styles.pb2}`}
                role="progressbar"
                style={{ width: "0" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <Autho />
          </div>
          <div className={`${styles.right} col-12 col-lg-6 px-5`}>
            <img src="/images/about-company.jpg" alt="" />
          </div>
        </div>
      </div>
      <Testimonials />
      <Logoipsum />
      <AdvisorsVideo />
      <Experts />
      <FreeConsulation />
    </div>
  );
}
