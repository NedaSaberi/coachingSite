import styles from './FreeConsulation.module.css';

export default function FreeConsulation() {
  return (
    <div className={`${styles.freeConsulationBox} bg-orange d-flex text-white align-items-center justify-content-around`}>
      <div className={styles.left}>
        Find Workable Solution which will Succeed within the Structure
      </div>
      <div className={styles.right}>
        <button>FREE CONSULATION</button>
      </div>
    </div>
  );
}
