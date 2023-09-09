import Elementor from "../../components/elementor/Elementor";
import "../stylePages/stylePages.css";
import "./home-v2.css";

export default function HomeV2(){
  setTimeout(() => {
    let leftElement = document.querySelector(
      ".home-first-view .left"
    ) as HTMLElement;
    leftElement.style.transform = "translateY(0)";
    leftElement.style.opacity = "1";
  }, 2000);

  setTimeout(() => {
    let rightElement = document.querySelector(
      ".home-first-view .right"
    ) as HTMLElement;
    rightElement.style.transform = "translate(-100px, -50%)";
    rightElement.style.opacity = "1";
  }, 3000);

  
  return (
    <div className="home v2">
      <div className="home-first-view">
        <div className="row">
          <div className="left text-center">
            <h5 className="text-orange">PROFESSIONAL LIFE COACH & ADVISOR</h5>
            <div className="h0 my-5">
              Helping You
              <br />
              Achieve Anything
            </div>
            <button className="bg-orange text-white free-consulation">
              FREE CONSULATION
            </button>
          </div>
          <div className="right">
            <div className="text-end h-100 d-flex flex-column justify-content-center">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <Elementor />
      <div className="introduction">
        <div className="row">
          <div className="col-6 left">
            <div className="title text-orange">OUR INTRODUCTION</div>
            <h1 className="my-4">It's Time for a<br/>Change in your Life</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti, necessitatiam expedita maiores magnam provident?
              Aut eligendi numquam perspiciatis voluptas.
            </p>
            <ul className="my-4">
              <li>
                <i className="fa-solid fa-check text-orange"></i>
                <span className="text-muted">Nsectetur cing elit.</span>
              </li>
              <li>
                <i className="fa-solid fa-check text-orange"></i>
                <span className="text-muted">
                  Suspe ndisse suscipit sagittis leo.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check text-orange"></i>
                <span className="text-muted">
                  Labore et dolore magna andhn.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check text-orange"></i>
                <span className="text-muted">
                  Entum estibulum dignissim posuere.
                </span>
              </li>
            </ul>
            <button className="free-consulation my-4">FREE CONSULATION</button>
          </div>
          <div className="col-6 right">
            <img className="w-100 h-100" src="/images/businessman-and-businesswomen-working-on-business-S5PJZ55.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
