import styles from './Map.module.css';

export default function Map() {
    const Latitude = 59.3726;
    const Longitude = 18.0040;
  return (
    <div className={`${styles.mapContainer}`}>
      <div
        className={`${styles.contactingWays} bg-orange row text-white col-11 col-lg-9 d-flex`}
      >
        <div className="col-12 col-md-4 px-lg-5">
          <div className={styles.key}>Call Anytime</div>
          <div className={styles.val}>(123)456789</div>
        </div>
        <div className={`${styles.middle} col-12 col-md-4 px-lg-5`}>
          <div className={styles.key}>Send Email</div>
          <div className={styles.val}>meghdad@gmail.com</div>
        </div>
        <div className="col-12 col-md-4 px-lg-5">
          <div className={styles.key}>Our Location</div>
          <div className={styles.val}>Mall of Scandinavia, number 126</div>
        </div>
      </div>
      <div className={styles.mapWrapper}>
        <iframe
          title="Westfield Mall of Scandinavia"
          src={`https://maps.google.com/maps?q=Westfield+mall+of+scandinavia&ll=${Latitude},${Longitude}&z=13&ie=UTF8&iwloc=&output=embed`}
          className={`${styles.map} w-100`}
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>

      </div>
    </div>
  );
}
