import styles from './Specialties.module.css';

export default function Specialties() {
      
      window.addEventListener("scroll", () => {
        let elements = document.querySelectorAll(`.${styles.items}`);

        elements.forEach((element)=>{
          if (
            element instanceof HTMLElement &&
            element.getBoundingClientRect().top < window.innerHeight
            ) {
              element.style.animationPlayState = "running";
          }      
        })
      });

  return (
    <div className={`${styles.speWrapper} py-7`}>
      <div
        className={`${styles.title} ${styles.spe0} ${styles.items} text-center`}
      >
        <div className="text-orange ">HELPING PROFESSIONALS</div>
        <h1>Our Specialties</h1>
      </div>
      <div className={`${styles.specialtiesList} row`}>
        <div className={`${styles.spe} ${styles.spe1} ${styles.items} col-12 col-md-3`}>
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
        <div
          className={`${styles.spe} ${styles.spe2} ${styles.items} col-12 col-md-3 border-start`}
        >
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
        <div
          className={`${styles.spe} ${styles.spe3} ${styles.items} border-start col-12 col-md-3`}
        >
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
        <div
          className={`${styles.spe} ${styles.spe4} ${styles.items} border-start col-12 col-md-3`}
        >
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



