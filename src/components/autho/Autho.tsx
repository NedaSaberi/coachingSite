import styles from './Autho.module.css';

export default function Autho() {
  return (
      <div className={styles.autho}>
        <img className={`${styles.pic} rounded-circle`} src="/images/Meghdad.jpg" alt="" />
        <img className={styles.signature} src="/images/signature.png" alt="" />
      </div>
  );
}
