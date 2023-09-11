import './Aboutus.css'
import Experts from '../../components/experts/Experts'
import Autho from '../../components/autho/Autho';
import Testimonials from '../../components/testimonials/Testimonials';
import Logoipsum from '../../components/logoipsum/Logoipsum';
import Advvid from '../../components/advisors-video/Advvid';
import FreeConsulation from '../../components/freeCons/FreeConsulation';
import Footer from '../../components/footer/Footer';

export default function Aboutus() {
  return (
    <div className="aboutus">
      <div className="first-view">
        <div className="first-view-content bg-orange">
          <h1>About us</h1>
          <p>Specializing in Career Mentoring</p>
        </div>
      </div>
      <div className="about-company">
        <div className="row p-7">
          <div className="col-12 col-lg-6 left">
            <div className="text-orange">ABOUT OUR COMPANY</div>
            <h1 className="my-4">
              Get to Know About
              <br />
              Tudor Advisors!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              earum in recusandae. Recusandae voluptatem odit, aperiam veniam,
              similique nihil quia architecto quibusdam eos nesciunt ut sed
              maxime, aliquid totam quis.
            </p>
            <h5>Mentorship</h5>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "92%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <h5 className='mt-3'>Education</h5>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "82%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <Autho/>
          </div>
          <div className="col-12 col-lg-6 right px-5">
            <img src="/images/about-company.jpg" alt="" />
          </div>
        </div>
      </div>
      <Testimonials/>
      <Logoipsum/>
      <Advvid/>
      <Experts />
      <FreeConsulation/>
      <Footer/>
    </div>
  );
}
