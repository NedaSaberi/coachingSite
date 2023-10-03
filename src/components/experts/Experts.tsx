import styles from './Experts.module.css';

export default function Experts() {
  return (
    <div className={`${styles.experts} text-center`}>
      <div className="text-orange">MEET OUR EXPERTS</div>
      <h2 className="mt-3 mb-5">We can Advise you</h2>
      <div className={`${styles.pics} d-flex justify-content-between`}>
        <div className={styles.pic}>
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
        <div className={styles.pic}>
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
        <div className={styles.pic}>
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
  );
}
