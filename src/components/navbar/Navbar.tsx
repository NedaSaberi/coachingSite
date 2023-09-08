import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useState } from "react";

function Navbar() {
  const { color } = useTheme();

  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ background: color }}
    >
      <div className="container-fluid">
        <div className="row w-100">
          {/* Left section with 25% width */}
          <div className="col-lg-3 col-md-3 col-sm-6">
            {/* Your content for the left section */}
            <a className="navbar-brand" href="h">
              <img
                src="/docs/4.0/assets/brand/bootstrap-solid.svg"
                width="30"
                height="30"
                alt=""
              />
            </a>
          </div>

          {/* Middle section with 50% width */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* Your content for the middle section */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav d-flex justify-content-between w-100">
                <li
                  className={`nav-item dropdown ${show ? "show" : ""}`}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle"
                    id="homeDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={show}
                  >
                    Home
                  </Link>
                  <ul
                    className={`dropdown-menu ${show ? "show" : ""}`}
                    aria-labelledby="homeDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Home V1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/home-v2">
                        Home V2
                      </a>
                    </li>
                  </ul>
                </li> 
                <li className="nav-item active">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/coaching" className="nav-link">
                    Coaching
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/pages"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="h">
                      Action
                    </a>
                    <a className="dropdown-item" href="h">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="h">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/news" className="nav-link">
                    News
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/shop"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="h">
                      Action
                    </a>
                    <a className="dropdown-item" href="h">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="h">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Right section with 25% width */}
          <div className="col-lg-3 col-md-3 col-sm-6 d-flex flex-row-reverse">
            {/* Your content for the right section */}
            <ul>
              <li>Call Anytime</li>
              <li>(46)76-8997319</li>
            </ul>
            <div>
              <i className="fa-sharp fa-solid fa-phone-volume"></i>
            </div>
          </div>
        </div>

        {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
      </div>
    </nav>
  );
}

export default Navbar;
