import styles from './Introduction.module.css';

export default function Introduction() {
    window.addEventListener("scroll", () => {
      if (document.body.getBoundingClientRect().top < -900) {
        // عدد خوبی نیست تو ریسپانسیو عمل نمیکنه. نباید عدد ثابت باشه
        let leftElement = document.querySelector(
          `.${styles.left}`
        ) as HTMLElement;
        leftElement.style.transform = "translateX(0)";
        let rightElement = document.querySelector(
          `.${styles.right}`
        ) as HTMLElement;
        rightElement.style.transform = "translateX(0)";
        // let leftElement = document.querySelector(".homeSecondView .left") as HTMLElement;
        // leftElement.style.transform = "translateX(0)";
        // let rightElement = document.querySelector(".homeSecondView .right") as HTMLElement;
        // rightElement.style.transform = "translateX(0)";
      }
    });
  return (
    <div className={styles.introduction}>
      <div className={`${styles.row} row`}>
        <div className={`${styles.left} col-12 col-lg-6`}>
          <div className="title text-orange">OUR INTRODUCTION</div>
          <h1 className="my-4">
            It's Time for a<br />
            Change in your Life
          </h1>
          <p className="text-muted">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            necessitatiam expedita maiores magnam provident? Aut eligendi
            numquam perspiciatis voluptas.
          </p>
          <ul className="my-4">
            <li>
              <i className="fa-solid fa-check text-orange"></i>
              <span className="text-muted">Nsectetur cing elit.</span>
            </li>
            <li>
              <i className="fa-solid fa-check text-orange"></i>
              <span className="text-muted">
                Suspe ndisse suscipit sagittis leo.
              </span>
            </li>
            <li>
              <i className="fa-solid fa-check text-orange"></i>
              <span className="text-muted">Labore et dolore magna andhn.</span>
            </li>
            <li>
              <i className="fa-solid fa-check text-orange"></i>
              <span className="text-muted">
                Entum estibulum dignissim posuere.
              </span>
            </li>
          </ul>
          <button className="free-consulation my-4">FREE CONSULATION</button>
        </div>
        <div className={`${styles.right} col-12 col-lg-6`}>
          <img
            className="w-100 h-100"
            src="/images/businessman-and-businesswomen-working-on-business-S5PJZ55.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
