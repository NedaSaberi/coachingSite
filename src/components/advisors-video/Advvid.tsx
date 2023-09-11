import './Advvid.css'

export default function Advvid() {
  return (
      <div className="advisors-video">
        <video
          src="/videos/pexels-zen-chung-5530410 (2160p).mp4"
          autoPlay
        ></video>
        <div className="context position-absolute text-center">
          <h1 className="text-white">
            Experienced Advisors
            <br />
            Committed to Your Life Goals
          </h1>
        </div>
      </div>
  );
}
