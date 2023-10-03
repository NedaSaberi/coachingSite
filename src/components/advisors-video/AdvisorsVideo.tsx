import styles from './AdvisorsVideo.module.css';

export default function AdvisorsVideo() {
  return (
      <div className={styles.advisorsVideo}>
        <video
          src="/videos/pexels-zen-chung-5530410 (2160p).mp4"
          autoPlay
        ></video>
        <div className={`${styles.context} position-absolute text-center`}>
          <h1 className="text-white">
            Experienced Advisors
            <br />
            Committed to Your Life Goals
          </h1>
        </div>
      </div>
  );
}