import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import HorMenu from "../horMenu/HorMenu";
import VerMenu from "../verMenu/VerMenu";

function Navbar() {
  const { color } = useTheme();
  const toggleMenu = () => {
    const menu = document.getElementById("hamMenu") as HTMLElement;
    const bars = document.getElementById("bars") as HTMLElement;
    const close = document.getElementById("close") as HTMLElement;
    menu?.classList.toggle("show");
    if (menu.classList.contains('show')){
      bars.style.display = "none";
      close.style.display = "block";
    } else{
      bars.style.display = "block";
      close.style.display = "none";
    }
      
  };
  return (
    <>
      <div
        className="navbar navbar-expand-lg p-0"
        style={{ background: color }}
      >
        {/* <div className="w-100"> */}
        <div className="d-flex justify-content-between w-100">
          <div className="left">
            {/* Your content for the left section */}
            <Link className="navbar-brand" to="/">
              <img
                className=""
                src="/images/logo2.jpg"
                width="95"
                height="95"
                alt=""
              />
            </Link>
          </div>
          <div className="middle d-flex">
            {/* Your content for the middle section */}
            <HorMenu />
          </div>
          <div className="right">
            <div className="callInfo text-white m-3">
              <div className="cellWrapper">
                <i className="fa-sharp fa-solid fa-phone-volume"></i>
              </div>
              <div>
                <small className="text-gray ">Call Anytime</small>
                <h6>(46)76-8997319</h6>
              </div>
            </div>
            <div className="hamMenu text-white">
              <button className="barWrapper" onClick={toggleMenu}>
                <i id="bars" className="fa-solid fa-bars text-white"></i>
                <i id="close" className="fa-solid fa-xmark text-white"></i>
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div id="hamMenu" className="">
          <VerMenu />
        </div>
      </div>
    </>
  );
}

export default Navbar;
