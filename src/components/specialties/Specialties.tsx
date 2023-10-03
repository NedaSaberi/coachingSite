import styles from './Specialties.module.css';

export default function Specialties() {
  return (
    <div className={`${styles.speWrapper} py-7`}>
      <div className="text-orange text-center">HELPING PROFESSIONALS</div>
      <h1 className="text-center">Our Specialties</h1>
      <div className={styles.specialtiesList}>
        <div className={styles.spe}>
          <div className={styles.icon}>
            <img src="/images/icon-1-1.png" alt="" />
          </div>
          <h4 className={styles.title}>
            Career <br />
            Mentoring
          </h4>
          <div className={styles.definition}>
            Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Ut elit
            tellus, luctus nec dolar es ullam.
          </div>
        </div>
        <div className={`${styles.spe} border-start`}>
          <div className={styles.icon}>
            <img src="/images/icon-2-1.png" alt="" />
          </div>
          <h4 className={styles.title}>
            Work & Life <br />
            Balance
          </h4>
          <div className={styles.definition}>
            Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Ut elit
            tellus, luctus nec dolar es ullam.
          </div>
        </div>
        <div className={`${styles.spe} border-start`}>
          <div className={styles.icon}>
            <img src="/images/icon-3-1.png" alt="" />
          </div>
          <h4 className={styles.title}>
            Important <br />
            Decesions
          </h4>
          <div className={styles.definition}>
            Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Ut elit
            tellus, luctus nec dolar es ullam.
          </div>
        </div>
        <div className={`${styles.spe} border-start`}>
          <div className={styles.icon}>
            <img src="/images/icon-4-1.png" alt="" />
          </div>
          <h4 className={styles.title}>
            One-on-One
            <br />
            Consulting
          </h4>
          <div className={styles.definition}>
            Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Ut elit
            tellus, luctus nec dolar es ullam.
          </div>
        </div>
      </div>
    </div>
  );
}



