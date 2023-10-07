import styles from './Stats.module.css';

export default function Stats() {
  return (
    <div className={`${styles.statsBack} w-100 position-relative`}>
      <img src="/images/stats.jpg" alt="" className="w-100 h-100" />
      <div
        className={`${styles.statsFront} position-absolute fixed-top w-100 h-100 text-center p-5`}
      >
        <h5 className="text-orange mt-3 mb-5">LATEST NUMBERS</h5>
        <h1 className="text-white">Leadership Stats</h1>
        <div
          className={`${styles.numbersWrapper} d-flex justify-content-around my-5 p-5`}
        >
          <div className={styles.numbers}>
            <div className={styles.num}>26</div>
            <div className={styles.sub}>Years of Working</div>
          </div>
          <div className={styles.numbers}>
            <div className={styles.num}>30</div>
            <div className={styles.sub}>Reliable Clients</div>
          </div>
          <div className={styles.numbers}>
            <div className={styles.num}>48</div>
            <div className={styles.sub}>Success Stories</div>
          </div>
          <div className={styles.numbers}>
            <div className={styles.num}>12</div>
            <div className={styles.sub}>Expert Advisors</div>
          </div>
        </div>
      </div>
    </div>
  );
}
