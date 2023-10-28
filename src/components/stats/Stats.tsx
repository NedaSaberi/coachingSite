import React, { useRef, useEffect } from "react";
import styles from "./Stats.module.css";

export default function Stats() {
  // const numbersRefs = useRef([]);
  const numbersRefs = useRef<(HTMLDivElement | null)[]>([]); // Provide a type annotation
  useEffect(() => {
    const options = {
      threshold: 0.2, // Trigger the animation when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const dataNumber = entry.target.getAttribute("data-number");

          if (dataNumber) {
            const targetNum = parseInt(dataNumber, 10);
            let currentNum = 0;
            const duration = 2000; // Animation duration in milliseconds

            const updateNumber = () => {
              const increment = targetNum / (duration / 10); // Increment step based on animation duration
              if (currentNum < targetNum) {
                currentNum += increment;
                entry.target.textContent = Math.floor(currentNum).toString();
                requestAnimationFrame(updateNumber);
              } else {
                entry.target.textContent = targetNum.toString();
              }
            };
            updateNumber();
          }
        }
      });
    }, options);

    numbersRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect(); // Clean up the observer on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

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
            <div
              className={`${styles.num} ${styles.numbers}`}
              data-number="26"
              ref={(el) => (numbersRefs.current[0] = el)}
            >
              0
            </div>
            <div className="sub">test</div>
          </div>
          <div className={styles.numbers}>
            <div
              className={`${styles.num} ${styles.numbers}`}
              data-number="30"
              ref={(el) => (numbersRefs.current[1] = el)}
            >
              0
            </div>
            <div className="sub">test</div>
          </div>
          <div className={styles.numbers}>
            <div
              className={`${styles.num} ${styles.numbers}`}
              data-number="48"
              ref={(el) => (numbersRefs.current[2] = el)}
            >
              0
            </div>
            <div className="sub">test</div>
          </div>
          <div className={styles.numbers}>
            <div
              className={`${styles.num} ${styles.numbers}`}
              data-number="12"
              ref={(el) => (numbersRefs.current[3] = el)}
            >
              0
            </div>
            <div className="sub">test</div>
          </div>
        </div>
      </div>
    </div>
  );
}
