import styles from './FreeConsulation.module.css';

export default function FreeConsulation() {
  return (
    <div className={`${styles.freeConsulationBox} bg-orange d-flex text-white`}>
      <h2 className={styles.left}>
        Find Workable Solution which will Succeed within the Structure
      </h2>
      <div className={`${styles.right} text-center`}>
        <button>FREE CONSULATION</button>
      </div>
    </div>
  );
}
