import Footer from '../../components/footer/Footer';
import FreeConsulation from '../../components/freeCons/FreeConsulation';
import Specialties from '../../components/specialties/Specialties';
import '../stylePages/stylePages.css'
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
      <FreeConsulation />
      <video className='coaching-video' src="/public/videos/pexels-zen-chung-5530410 (2160p).mp4" controls>Your browser doesn't support the video tag.</video>
      <Footer />
    </>
  );
}
