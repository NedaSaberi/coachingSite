import Footer from '../../components/footer/Footer';
import './Coachingsingle.css';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Coachingsingle() {
  return (
    <div className="coaching-single">
      <div className="first-view">
        <div className="first-view-content bg-orange">
          <h1>Career Mentoring</h1>
          <p>Excelling Your Professional Career</p>
        </div>
      </div>
      <div className="body">
        <div className="row">
          <div className="col-12 col-lg-8 left">
            <img src="/images/about-right.jpg" alt="" />
            <h1 className='my-5'>Career Mentoring</h1>
            <p className='text-muted'>
              Lorem ipsum is simply free text used by copytyping refreshing.
              Neque porro est qui dolorem ipsum quia quaed inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
              port lacus quis enim var sed efficitur turpis gilla sed sit amet
              finibus eros. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the ndustry standard
              dummy text ever since the 1500s.
            </p>
            <h4 className="text-orange my-4">
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </h4>
            <p className='text-muted'>
              It has survived not only five centuries. Lorem Ipsum is simply
              dummy text of the new design printng and type setting Ipsum take a
              look at our round. When an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting.
            </p>
            <div className="imgs my-4">
              <img src="/images/careermentoring.jpg" alt="" />
            </div>
            <h3>Service Benefits</h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
              consequatur sit repellendus, mollitia magni aut expedita sunt
              soluta, exercitationem temporibus odit accusamus rerum
              reprehenderit culpa optio, quam tenetur similique ut.
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-check text-orange"></i>
                <span>
                  Nsectetur cing elit so you need to prioze thse tass into.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check text-orange"></i>
                <span>
                  Suspe ndisse suscipit sagittis leo in pety of casos.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check text-orange"></i>
                <span>Entum estibulum dignissim posuere.</span>
              </li>
            </ul>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              laudantium, quis aperiam maiores, numquam similique mollitia hic
              eum at dolorem minima quo corrupti velit error possimus beatae
              sequi quod magnam?
            </p>
          </div>
          <div className="col-12 col-lg-4 right">
            <ul>
              <Link className="link-no-underline" to="/">
                <li className="first">
                  <i className="fa-solid fa-caret-right"></i>
                  <span>Career Mentoring</span>
                </li>
              </Link>
              <Link className="link-no-underline" to="/">
                <li>
                  <i className="fa-solid fa-caret-right"></i>
                  <span>Work & Life Balance</span>
                </li>
              </Link>
              <Link className="link-no-underline" to="/">
                <li>
                  <i className="fa-solid fa-caret-right"></i>
                  <span>Important Decisions</span>
                </li>
              </Link>
              <Link className="link-no-underline" to="/">
                <li>
                  <i className="fa-solid fa-caret-right"></i>
                  <span>One-on-one Sessions</span>
                </li>
              </Link>
            </ul>
            <div className="call-box text-center">
              <div className="phone-wrapper">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="text-orange my-3">
                Call Our Advisors
                <br />
                Anytime
              </div>
              <h4 className='text-white'>(123)456-7890</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
