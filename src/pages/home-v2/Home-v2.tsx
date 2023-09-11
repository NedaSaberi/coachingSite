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
          <div className="col-12 col-lg-6 left">
            <div className="title text-orange">OUR INTRODUCTION</div>
            <h1 className="my-4">
              It's Time for a<br />
              Change in your Life
            </h1>
            <p className="text-muted">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti, necessitatiam expedita maiores magnam provident? Aut
              eligendi numquam perspiciatis voluptas.
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
          <div className="col-12 col-lg-6 right">
            <img
              className="w-100 h-100"
              src="/images/businessman-and-businesswomen-working-on-business-S5PJZ55.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="pricing-plans">
        <div className="row wall text-white">
          <div className="orange-cover"></div>
          <div className="col-12 col-lg-5">
            <div className="title">WHAT WE OFFER</div>
            <h2>Pricing Plans</h2>
          </div>
          <div className="col-12 col-lg-7">
            <p>
              There are many variations of passag of Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quibusdam officiis voluptatem sunt
              nam ipsa, repudiandae distinctio repellendus similique incidunt
              enim, vel autem dicta possimus blanditiis animi provident
              assumenda qui quis.
            </p>
          </div>
        </div>

        <div className="prices-wrapper row">
          <div className="col-12 col-md-4 p-3">
            <div className="card">
              <div className="title">SINGLE SESSION</div>
              <h1 className="price">$200</h1>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>ipsum dolor svit elit</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Piscing elit sed eiusi et</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Mepor indunt ut labor</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Unt sit randome</span>
                </li>
              </ul>
              <button>CONTACT US</button>
            </div>
          </div>
          <div className="col-12 col-md-4 p-3">
            <div className="card mid">
              <div className="title text-orange">RECOMMENDED</div>
              <h1 className="price text-orange">$650</h1>
              <ul>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>ipsum dolor svit elit</span>
                </li>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>Piscing elit sed eiusi et</span>
                </li>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>Mepor indunt ut labor</span>
                </li>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>Unt sit randome</span>
                </li>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>Piscing elit sed eius</span>
                </li>
              </ul>
              <button>CONTACT US</button>
            </div>
          </div>
          <div className="col-12 col-md-4 p-3">
            <div className="card">
              <div className="title">PREMIERE PACKAGE</div>
              <h1 className="price">$1,200</h1>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>ipsum dolor svit elit</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Piscing elit sed eiusi et</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Mepor indunt ut labor</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Unt sit randome</span>
                </li>
              </ul>
              <button>CONTACT US</button>
            </div>
          </div>
          <div className="col-12 col-md-8 mission">
            <h3>What I live for and how I can be useful to you</h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, fugit. Voluptates eaque repellat maxime soluta id
              ratione ipsum. Nihil iure totam cum ducimus corporis, veritatis
              modi nam eos ipsa doloribus.
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-100" src="/images/mission.jpg" alt="" />
          </div>
        </div>
        <div className="row location">
          <div className="context col-12 col-md-6">
            <div className="text-orange">OUR LOCATION</div>
            <h1 className="mt-3">Trusted by<br/>Millions of People</h1>
            <p className="text-muted mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum minima, itaque consequatur laudantium natus exercitationem, quam sunt dolores vitae deleniti ex sapiente voluptas, totam cupiditate. Dignissimos doloribus quam explicabo iusto.</p>
          </div>
          <div className="map col-12 col-md-6"></div>
        </div>
      </div>
    </div>
  );
}
