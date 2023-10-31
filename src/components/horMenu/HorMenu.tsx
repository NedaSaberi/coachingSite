import { Link } from "react-router-dom";

export default function HorMenu() {
  return (
    <div
      className="hor collapse navbar-collapse align-self-center"
      id="navbarSupportedContent"
    >
      <ul className="nav-list navbar-nav d-flex justify-content-between">
        <li className="nav-item dropdown homeDrop">
          <Link
            className="nav-link dropdown-toggle text-white"
            to="/"
            id="homeDropdown"
            role="button"
          >
            Home
          </Link>
          <div
            className="dropdown-menu home-dropdown"
            aria-labelledby="homeDropdown"
          >
            <a className="dropdown-item" href="/">
              Home V1
            </a>
            <a className="dropdown-item" href="/home-v2">
              Home V2
            </a>
          </div>
        </li>
        <li className="nav-item active">
          <Link to="/about" className="nav-link text-white">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/coaching" className="nav-link text-white">
            Coaching
          </Link>
        </li>
        <li className="nav-item dropdown pagesDrop">
          <Link
            to="/pages"
            className="nav-link dropdown-toggle text-white"
            id="pagesDropdown"
            role="button"
          >
            Pages
          </Link>
          <div
            className="dropdown-menu pages-dropdown"
            aria-labelledby="pagesDropdown"
          >
            <a className="dropdown-item" href="/about">
              About
            </a>

            <a className="dropdown-item" href="/aboutus">
              About us
            </a>

            <a className="dropdown-item" href="/coachingsingle">
              Coaching Single
            </a>

            <a className="dropdown-item" href="/pricingplans">
              Pricing Plans
            </a>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/news" className="nav-link text-white">
            News
          </Link>
        </li>
        <li className="nav-item dropdown shopDrop">
          <Link
            to="/shop"
            className="nav-link dropdown-toggle text-white"
            id="shopDropdown"
            role="button"
          >
            Shop
          </Link>
          <div
            className="dropdown-menu shop-dropdown"
            aria-labelledby="shopDropdown"
          >
            <a className="dropdown-item" href="/myaccount">
              My account
            </a>

            <a className="dropdown-item" href="/cart">
              Cart
            </a>

            <a className="dropdown-item" href="/checkout">
              Checkout
            </a>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link text-white">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
