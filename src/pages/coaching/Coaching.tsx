import Footer from '../../components/footer/Footer';
import FreeConsulation from '../../components/freeCons/FreeConsulation';
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
      <div className="my-9">
        <div className="text-orange text-center">HELPING PROFESSIONALS</div>
        <h1 className="text-center">Our Specialties</h1>
        <div className="specialtiesList">
          <div className="spe">
            <div className="icon"><img src="/images/icon-1-1.png" alt="" /></div>
            <h4 className="title">Career <br/>Mentoring</h4>
            <div className="definition">
              Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Ut elit
              tellus, luctus nec dolar es ullam.
            </div>
          </div>
          <div className="spe border-start">
            <div className="icon"><img src="/images/icon-2-1.png" alt="" /></div>
            <h4 className="title">Career Mentoring</h4>
            <div className="definition">
              Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Ut elit
              tellus, luctus nec dolar es ullam.
            </div>
          </div>
          <div className="spe border-start">
            <div className="icon"><img src="/images/icon-3-1.png" alt="" /></div>
            <h4 className="title">Career Mentoring</h4>
            <div className="definition">
              Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Ut elit
              tellus, luctus nec dolar es ullam.
            </div>
          </div>
          <div className="spe border-start">
            <div className="icon"><img src="/images/icon-4-1.png" alt="" /></div>
            <h4 className="title">One-on-One<br/>Consulting</h4>
            <div className="definition">
              Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Ut elit
              tellus, luctus nec dolar es ullam.
            </div>
          </div>
        </div>
      </div>
      <FreeConsulation />
      <video className='nnn' src="/videos/pexels-zen-chung-5530410 (2160p).mp4" controls>Your browser doesn't support the video tag.</video>
      <Footer />
    </>
  );
}
