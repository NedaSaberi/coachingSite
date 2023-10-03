import styles from './PricesChart.module.css';

export default function PricesChart() {
  return (
    <div className="row">
      <div className="mx-auto col-10 col-md-12 col-xl-10">
        <div className={`${styles.pricesWrapper} row`}>
          <div className="col-12 offset-1 col-md-4 offset-md-0 col-xl-4 p-3">
            <div className={`${styles.card} text-center`}>
              <div className={styles.title}>SINGLE SESSION</div>
              <h1 className={styles.price}>$200</h1>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>ipsum dolor svit elit</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Piscing elit sed eiusi et</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Mepor indunt ut labor</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Unt sit randome</span>
                </li>
              </ul>
              <button>CONTACT US</button>
            </div>
          </div>
          <div className="col-12 offset-1 col-md-4 offset-md-0 col-xl-4 p-3">
            <div className={`${styles.card} ${styles.mid} text-center`}>
              <div className={`${styles.title} text-orange`}>RECOMMENDED</div>
              <h1 className={`${styles.price} text-orange`}>$650</h1>
              <ul>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>ipsum dolor svit elit</span>
                </li>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>Piscing elit sed eiusi et</span>
                </li>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>Mepor indunt ut labor</span>
                </li>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>Unt sit randome</span>
                </li>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>Piscing elit sed eius</span>
                </li>
              </ul>
              <button>CONTACT US</button>
            </div>
          </div>
          <div className="col-12 offset-1 col-md-4 offset-md-0 col-xl-4 p-3">
            <div className={`${styles.card} text-center`}>
              <div className={styles.title}>PREMIERE PACKAGE</div>
              <h1 className={styles.price}>$1,200</h1>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>ipsum dolor svit elit</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Piscing elit sed eiusi et</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Mepor indunt ut labor</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Unt sit randome</span>
                </li>
              </ul>
              <button>CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
