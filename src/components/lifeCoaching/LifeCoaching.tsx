import styles from './LifeCoaching.module.css';

export default function LifeCoaching() {
        window.addEventListener("scroll", () => {
            let element = document.querySelector(
            `.${styles.lifeContext}`
            ) as HTMLBRElement;
            if (
            element instanceof HTMLElement &&
            element.getBoundingClientRect().top < window.innerHeight
            ) {
            element.style.transform = "translateX(0)";
            }
        })

  return (
    <div className={`${styles.lifeCoaching} p-5`}>
      <div className={`${styles.lifeContext} col-12 col-md-6 m-7`}>
        <div className={styles.title}>Get Started Now with Life Coaching</div>
        <p className="my-5 text-muted">
          Quisque porta nibh quis nibh scelerisque auctor. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean sagittis eget neque ac consequat.
        </p>
        <button className="free-consulation">FREE CONSULATION</button>
      </div>
    </div>
  );
}
