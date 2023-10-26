import { Link } from "react-router-dom";

export default function VerMenu() {
  const arrowClickHandler= (e:any)=>{
    const sub = e.target.parentNode.parentNode.children[1];
    const arrow = e.target.firstChild;
    if(sub?.classList.contains('open')){
      sub?.classList.remove('open');
      arrow?.classList.remove('open');
    }else{
      sub?.classList.add('open');
      arrow?.classList.add('open');
    }
  }
  return (
    <div className="verMenu">

      <div className="items">
        <div className="drop d-flex justify-content-between align-items-center">
          <Link className="link" to="/">
            Home
          </Link>
          <button className="arrowWrapper" onClick={(e) => arrowClickHandler(e)}>
            <div className="arrow"></div>
          </button>
        </div>
        <div className="subList">
          <div className="subItems">
            <Link className="link" to="/">
              Home V1
            </Link>
          </div>
          <div className="subItems">
            <Link className="link" to="/home-v2">
              Home V2
            </Link>
          </div>
        </div>
      </div>
      <div className="items">
        <div className="drop d-flex justify-content-between">
          <Link className="link" to="/about">
            about
          </Link>
        </div>
      </div>
      <div className="items">
        <div className="drop d-flex justify-content-between align-items-center">
          <Link className="link" to="/coaching">
            Coaching
          </Link>
        </div>
      </div>
      <div className="items">
        <div className="drop d-flex justify-content-between">
          <Link className="link" to="/about">
            Pages
          </Link>
          <button className="arrowWrapper" onClick={(e) => arrowClickHandler(e)}>
            <div className="arrow"></div>
          </button>
        </div>
        <div className="subList">
          <div className="subItems">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="subItems">
            <Link className="link" to="/about-us">
              About us
            </Link>
          </div>
          <div className="subItems">
            <Link className="link" to="/">
              Coaching Single
            </Link>
          </div>
          <div className="subItems">
            <Link className="link" to="/">
              Pricing Plans
            </Link>
          </div>
        </div>
      </div>
      <div className="items">
        <div className="drop d-flex justify-content-between">
          <Link className="link" to="/news">
            News
          </Link>
        </div>
      </div>
      <div className="items">
        <div className="drop d-flex justify-content-between">
          <Link className="link" to="/">
            Shops
          </Link>
          <button className="arrowWrapper" onClick={(e) => arrowClickHandler(e)}>
            <div className="arrow"></div>
          </button>
        </div>
        <div className="subList">
          <div className="subItems">
            <Link className="link" to="/">
              My account
            </Link>
          </div>
          <div className="subItems">
            <Link className="link" to="/">
              Cart
            </Link>
          </div>
          <div className="subItems">
            <Link className="link" to="/">
              Checkout
            </Link>
          </div>
        </div>
      </div>
      <div className="items">
        <div className="drop d-flex justify-content-between">
          <Link className="link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
