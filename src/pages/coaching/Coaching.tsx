import Advvid from '../../components/advisors-video/Advvid';
import FreeConsulation from '../../components/freeCons/FreeConsulation';
import Logoipsum from '../../components/logoipsum/Logoipsum';
import Specialties from '../../components/specialties/Specialties';
import './Coaching.css'

export default function Coaching() {
  return (
    <>
      <div className="first-view">
        <div className="first-view-content">
          <h1>Coaching</h1>
          <p>Excelling Your Professional Career</p>
        </div>
      </div>
      <Specialties/>
      <Logoipsum/>
      <FreeConsulation />
      <Advvid/>
      {/* <video className='coaching-video' src="/public/videos/pexels-zen-chung-5530410 (2160p).mp4" controls>Your browser doesn't support the video tag.</video> */}
    </>
  );
}
