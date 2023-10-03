import styles from './Map.module.css';

export default function Map() {
    const Latitude = 59.3726;
    const Longitude = 18.0040;
  return (
    <div className={`${styles.mapContainer} position-relative`}>
      <div className={`${styles.contactingWays} bg-orange text-white col-9 position-absolute d-flex py-5`}>
        <div className="col-4 px-5">
          <div className={styles.key}>Call Anytime</div>
          <div className={styles.val}>(123)456789</div>
        </div>
        <div className="col-4 border-start border-end px-5">
          <div className={styles.key}>Send Email</div>
          <div className={styles.val}>meghdad@gmail.com</div>
        </div>
        <div className="col-4 px-5">
          <div className={styles.key}>Our Location</div>
          <div className={styles.val}>
            Mall of Scandinavia, number 126
          </div>
        </div>
      </div>
      <iframe
        title="Map of Westfield Mall of Scandinavia"
        src={`https://maps.google.com/maps?q=Westfield+mall+of+scandinavia&ll=${Latitude},${Longitude}&z=13&ie=UTF8&iwloc=&output=embed`}
        className="h-100 w-100"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </div>
  );
}
