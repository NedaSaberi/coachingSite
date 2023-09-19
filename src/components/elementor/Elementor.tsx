import { Link } from 'react-router-dom';
import './Elementor.css';

export default function Elementor() {
  return (
    <div className="elementor-wrapper w-100 h-100">
      <div className="row elementor">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="row elementor-inside bg-white p-3 m-1">
            <div className="col-3 text-orange">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="col-9">
              <div className="title">Explore</div>
              <div className="description text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis numquam!
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="row elementor-inside bg-white p-3 m-1">
            <div className="col-3 text-orange">
              <i className="fa-regular fa-circle-user"></i>
            </div>
            <div className="col-9">
              <div className="title">Mentors</div>
              <div className="description text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis numquam!
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="row elementor-inside bg-white p-3 m-1">
            <div className="col-3 text-orange">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div className="col-9">
              <div className="title">Education</div>
              <div className="description text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis numquam!
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="row elementor-inside bg-white p-3 m-1">
            <div className="col-3 text-orange">
              <i className="fa-solid fa-user-secret"></i>
            </div>
            <div className="col-9">
              <div className="title">Coaching</div>
              <div className="description text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis numquam!
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="row elementor-inside bg-white p-3 m-1">
            <div className="col-3 text-orange">
              <i className="fa-brands fa-space-awesome"></i>
            </div>
            <div className="col-9">
              <div className="title">Motivate</div>
              <div className="description text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis numquam!
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <div className="row elementor-inside bg-white p-3 m-1">
            <div className="col-3 text-orange">
              <i className="fa-brands fa-think-peaks"></i>
            </div>
            <div className="col-9">
              <div className="title">Decesion</div>
              <div className="description text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis numquam!
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 border-top text-center pt-5">
          <p className="text-muted">
            Let us take the mystery out of financial planning so you can focus
            on what matters.{" "}
            <Link to='/contact' className="text-orange"> Contact an Advisor</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
