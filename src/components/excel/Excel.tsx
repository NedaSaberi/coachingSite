import styles from './Excel.module.css';

export default function Excel() {
  window.addEventListener("scroll", ()=>{
    let m = document.querySelector(`.${styles.mProgressBar}`);
    let e = document.querySelector(`.${styles.eProgressBar}`);
      if(m instanceof HTMLElement && e instanceof HTMLElement && m.getBoundingClientRect().top < window.innerHeight){
        m.style.width= "92%";
        e.style.width = "70%";
      }
  })
  return (
    <div className={styles.excel}>
      <div className={`${styles.row} row w-100`}>
        <div className={`${styles.left} d-none d-md-block col-md-6`}>
          <img className="w-100 h-100" src="/images/excel.jpg" alt="" />
        </div>
        <div className={`${styles.right} col-12 col-md-6`}>
          <div className="text-orange">GET TO KNOW US</div>
          <h1 className="text-white my-3">We Can Help You Excel at Work</h1>
          <p className="text-gray">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eos
            consequuntuste voluptates ratione aut ab suscipit error quidem
            impedit recusandae labore. Non!
          </p>
          <h6 className="text-white mt-5">Mentorship</h6>
          <div className={`${styles.progress} progress`}>
            <div
              className={`${styles.mProgressBar} progress-bar`}
              role="progressbar"
              // style={{ width: "92%" }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          <h6 className="text-white mt-3">Education</h6>
          <div className={`${styles.progress} progress`}>
            <div
              className={`${styles.eProgressBar} progress-bar`}
              role="progressbar"
              // style={{ width: "70%" }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
