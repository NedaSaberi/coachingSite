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
    </div>
  );
}
