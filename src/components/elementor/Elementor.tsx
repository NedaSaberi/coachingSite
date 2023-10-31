import { Link } from 'react-router-dom';
import styles from './Elementor.module.css';

export default function Elementor() {
  window.addEventListener("scroll", () => {
    let elementors= document.querySelector(`.${styles.elementorWrapper}`) as HTMLElement;
    if (
      elementors instanceof HTMLElement &&
      elementors.getBoundingClientRect().top < window.innerHeight
    ) {
      elementors.style.opacity = "1";
    }
    
  });
  
  return (
    <div className={`${styles.elementorWrapper}`}>
      <div className={`${styles.elementor}`}>
        <div className={`${styles.items} row`}>
          <div className={`${styles.e1} ${styles.e} e col-12 col-md-6 col-lg-4`}>
            <div className={`${styles.elementorInside} row bg-white p-3 m-1`}>
              <div className={`${styles.icon} col-3 text-orange`}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="col-9">
                <div className={styles.title}>Explore</div>
                <div className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis numquam!
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.e2} ${styles.e} e col-12 col-md-6 col-lg-4`}>
            <div className={`${styles.elementorInside} row bg-white p-3 m-1`}>
              <div className={`${styles.icon} col-3 text-orange`}>
                <i className="fa-regular fa-circle-user"></i>
              </div>
              <div className="col-9">
                <div className={styles.title}>Mentors</div>
                <div className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis numquam!
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.e3} ${styles.e} e col-12 col-md-6 col-lg-4`}>
            <div className={`${styles.elementorInside} row bg-white p-3 m-1`}>
              <div className={`${styles.icon} col-3 text-orange`}>
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="col-9">
                <div className={styles.title}>Education</div>
                <div className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis numquam!
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.e4} ${styles.e} e col-12 col-md-6 col-lg-4`}>
            <div className={`${styles.elementorInside} row bg-white p-3 m-1`}>
              <div className={`${styles.icon} col-3 text-orange`}>
                <i className="fa-solid fa-user-secret"></i>
              </div>
              <div className="col-9">
                <div className={styles.title}>Coaching</div>
                <div className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis numquam!
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.e5} ${styles.e} e col-12 col-md-6 col-lg-4`}>
            <div className={`${styles.elementorInside} row bg-white p-3 m-1`}>
              <div className={`${styles.icon} col-3 text-orange`}>
                <i className="fa-brands fa-space-awesome"></i>
              </div>
              <div className="col-9">
                <div className={styles.title}>Motivate</div>
                <div className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis numquam!
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.e6} ${styles.e} e col-12 col-md-6 col-lg-4`}>
            <div className={`${styles.elementorInside} row bg-white p-3 m-1`}>
              <div className={`${styles.icon} col-3 text-orange`}>
                <i className="fa-brands fa-think-peaks"></i>
              </div>
              <div className="col-9">
                <div className={styles.title}>Decesion</div>
                <div className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis numquam!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.sub} border-top text-center`}>
          <p className="text-muted">
            Let us take the mystery out of financial planning so you can focus
            on what matters.{" "}
            <Link to="/contact" className="text-orange">
              Contact an Advisor
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}



