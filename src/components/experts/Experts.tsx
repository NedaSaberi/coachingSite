import styles from './Experts.module.css';

export default function Experts() {
  window.addEventListener("scroll", () => {
    let elements = document.querySelectorAll(`.${styles.title}, .${styles.pic}`);
    elements.forEach((element) => {
      if (
        element instanceof HTMLElement &&
        element.getBoundingClientRect().top < window.innerHeight
      ) {
        element.style.animationPlayState = "running";
      }
    });
  });
  return (
    <div className={`${styles.experts} text-center`}>
      <div className={styles.title}>
        <div className="text-orange">MEET OUR EXPERTS</div>
        <h2 className="mt-3 mb-5">We can Advise you</h2>
      </div>
      <div className={`${styles.pics}`}>
        <div className="row">
          <div className={`${styles.pic} ${styles.pic1} col-12 col-md-4`}>
            <img src="/images/jesica-rose.jpg" alt="" />
            <div className={styles.alt}>
              <h5>Jesicaa Rose</h5>
              <p>Consultant</p>
              <div className={styles.social}>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className={`${styles.pic} ${styles.pic2} col-12 col-md-4`}>
            <img src="/images/christine-eve.jpg" alt="" />
            <div className={styles.alt}>
              <h5>Cristina Eve</h5>
              <p>Founder</p>
              <div className={styles.social}>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className={`${styles.pic} ${styles.pic3} col-12 col-md-4`}>
            <img src="/images/Meghdad.jpg" alt="" />
            <div className={styles.alt}>
              <h5>Meghdad Hadidi</h5>
              <p>Consultant</p>
              <div className={styles.social}>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
