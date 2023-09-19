import { Link } from "react-router-dom";
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <Link className="link-no-underline" to="/coachingsingle">
          <li className="first">
            <i className="fa-solid fa-caret-right"></i>
            <span>Career Mentoring</span>
          </li>
        </Link>
        <Link className="link-no-underline" to="/worklifebalance">
          <li>
            <i className="fa-solid fa-caret-right"></i>
            <span>Work & Life Balance</span>
          </li>
        </Link>
        <Link className="link-no-underline" to="/importantdecisions">
          <li>
            <i className="fa-solid fa-caret-right"></i>
            <span>Important Decisions</span>
          </li>
        </Link>
        <Link className="link-no-underline" to="/oneononesession">
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
        <h4 className="text-white">(123)456-7890</h4>
      </div>
    </div>
  );
}
