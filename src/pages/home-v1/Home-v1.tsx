import './Home-v1.css';
import Map from '../../components/map/Map';
import Footer from '../../components/footer/Footer';
import Specialties from '../../components/specialties/Specialties';

const HomeV1= ()=> {
    
    setTimeout(()=>{
      let leftElement = document.querySelector(".v1-first-view .left") as HTMLElement;
      leftElement.style.transform = "translateY(0)";
      leftElement.style.opacity = "1";
    }, 2000);

    setTimeout(()=>{
      let rightElement = document.querySelector(".v1-first-view .right") as HTMLElement;
      rightElement.style.transform = "translateX(0)";
      rightElement.style.opacity= "1"
    }, 3000);

    window.addEventListener("scroll", ()=>{
      if(document.body.getBoundingClientRect().top < 0){
        let leftElement = document.querySelector(".v1-second-view .left") as HTMLElement;
        leftElement.style.transform = "translateX(0)";
        let rightElement = document.querySelector(".v1-second-view .right") as HTMLElement;
        rightElement.style.transform = "translateX(0)";
      }
    })
    return (
      <div className="home-v1">
        <div className="v1-first-view">
          <div className="row">
            <div className="col-6 left">
              <h5 className="text-orange">PROFESSIONAL LIFE COACH & ADVISOR</h5>
              <div className="h0 my-5">
                Life Coaching
                <br />
                with Meghdad
              </div>
              <button className="bg-orange text-white free-consulation">FREE CONSULATION</button>
            </div>
            <div className="col-6 right">
              <div className="text-end h-100 d-flex flex-column justify-content-center">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="v1-second-view p-5 m-5">
          <div className="row">
            <div className="col-7 left h-100">
              <div className="row h-100">
                <img
                  className="col-6 p-2 h-100"
                  src="/images/home-1-sec-row(1).jpg"
                  alt=""
                />
                <img
                  className="col-6 p-2 h-100"
                  src="/images/home-1-sec-row(2).jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-5 right">
              <h6 className="text-orange">GET TO KNOW US</h6>
              <h2 className="title my-4">
                Working Together for your Better Life!
              </h2>
              <p className="body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae eos mollitia optio, exercitationem a minima saepe
                excepturi cumque explicabo vitae amet reprehenderit eum eaque
                quod sequi provident, deleniti tempora. Alias.
              </p>
              <ul>
                <li>
                  <i className="fa-solid fa-check text-orange"></i>
                  <span>Nsectetur cing elit.</span>
                </li>
                <li>
                  <i className="fa-solid fa-check text-orange"></i>
                  <span>Suspe ndisse suscipit sagittis leo.</span>
                </li>
                <li>
                  <i className="fa-solid fa-check text-orange"></i>
                  <span>Entum estibulum dignissim posuere.</span>
                </li>
              </ul>
              <div className="autho">
                <img
                  className="pic rounded-circle"
                  src="/images/Meghdad.jpg"
                  alt=""
                />
                <img className="signature" src="/images/signature.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <Specialties/>
        <div className="excel">
          <div className="row w-100">
            <div className="left col-6">
              <img className="w-100" src="/images/excel.jpg" alt="" />
            </div>
            <div className="right col-6">
              <div className="text-orange">GET TO KNOW US</div>
              <h1 className="text-white my-3">We Can Help You Excel at Work</h1>
              <p className="text-gray">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                eos consequuntuste voluptates ratione aut ab suscipit
                error quidem impedit recusandae labore. Non!
              </p>
              <h6 className="text-white mt-5">Mentorship</h6>
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
              <h6 className="text-white mt-3">Education</h6>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="experts text-center mt-7">
          <div className="text-orange">MEET OUR EXPERTS</div>
          <h2 className="mt-3 mb-5">We can Advise you</h2>
          <div className="pics d-flex justify-content-between">
            <div className="pic">
              <img src="/images/jesica-rose.jpg" alt="" />
              <div className="alt">
                <h5>Jesicaa Rose</h5>
                <p>Consultant</p>
                <div className="social">
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="pic">
              <img src="/images/christine-eve.jpg" alt="" />
              <div className="alt">
                <h5>Cristina Eve</h5>
                <p>Founder</p>
                <div className="social">
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="pic">
              <img src="/images/Meghdad.jpg" alt="" />
              <div className="alt">
                <h5>Meghdad Hadidi</h5>
                <p>Consultant</p>
                <div className="social">
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="life-coaching p-5">
          <div className="content col-5 m-7">
            <h1>
              Get Started Now with Life
              <br />
              Coaching
            </h1>
            <p className="my-5 text-muted">
              Quisque porta nibh quis nibh scelerisque auctor. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Aenean sagittis eget neque ac consequat.
            </p>
            <button className="free-consulation">FREE CONSULATION</button>
          </div>
        </div>
        <div className="logo">
          logoipsum logoipsum logoipsum logoipsum logoipsum logoipsum logoipsum
          logoipsum logoipsum logoipsum logoipsum logoipsum logoipsum logoipsum
          logoipsum logoipsum
        </div>
        <div>
          <Map />
        </div>
        <Footer />
      </div>
    );
}
export default HomeV1;
