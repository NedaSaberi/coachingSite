import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <div className={`${styles.testimonials} p-5`}>
      <h5 className="text-orange my-3 text-center">OUR TESTIMONIALS</h5>
      <h1 className="text-center">What People Are Saying</h1>
      <div className="d-flex justify-content-around my-5">
        <div className={styles.people}>
          <i className="fa-solid fa-quote-left text-orange"></i>
          <p>
            Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum.
            Suspendisse id orci sit amet justo interdum hendrerit sagittis.
            Nulla semper pharetra lacinia. Maecenas gravida dapibus neque id
            dictum.
          </p>
          <div className={styles.autho}>
            <img src="/images/Meghdad.jpg" alt="" />
            <div>Meghdad Hadidi</div>
            <div className={styles.position}>CEO</div>
          </div>
        </div>
        <div className={styles.people}>
          <i className="fa-solid fa-quote-left text-orange"></i>
          <p>
            Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum.
            Suspendisse id orci sit amet justo interdum hendrerit sagittis.
            Nulla semper pharetra lacinia. Maecenas gravida dapibus neque id
            dictum.
          </p>
          <div className={styles.autho}>
            <img src="/images/RobertSmith.jpg" alt="" />
            <div>Robert Smith</div>
            <div className={styles.position}>Accountant</div>
          </div>
        </div>
        <div className={styles.people}>
          <i className="fa-solid fa-quote-left text-orange"></i>
          <p>
            Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum.
            Suspendisse id orci sit amet justo interdum hendrerit sagittis.
            Nulla semper pharetra lacinia. Maecenas gravida dapibus neque id
            dictum.
          </p>
          <div className={styles.autho}>
            <img src="/images/KateBrown.jpg" alt="" />
            <div>Kate Brown</div>
            <div className={styles.position}>Stock Broker</div>
          </div>
        </div>
      </div>
    </div>
  );
}
