import styles from './PricesChart.module.css';

export default function PricesChart() {
   window.addEventListener("scroll", () => {
    let leftElement = document.querySelector(
       `.${styles.left}`
     ) as HTMLElement;
     let midElement = document.querySelector(
       `.${styles.mid}`
     ) as HTMLElement;
     let rightElement = document.querySelector(
       `.${styles.right}`
     ) as HTMLElement;
     if(midElement instanceof HTMLElement && midElement.getBoundingClientRect().top < window.innerHeight){
        midElement.style.opacity = "1"; 
     }
     if(leftElement instanceof HTMLElement && leftElement.getBoundingClientRect().top < window.innerHeight){
       leftElement.style.transform = "translateX(0)";
       rightElement.style.transform = "translateX(0)"; 
       
     }
   });
  return (
    <div className={`${styles.pricesWrapper} row`}>
      <div className="col-12 col-md-4">
        <div
          className={`${styles.card} ${styles.left} text-center`}
        >
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
      <div className="col-12 col-md-4">
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
      <div className="col-12 col-md-4">
        <div
          className={`${styles.card} ${styles.right} text-center`}
        >
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
  );
}
