import { Link } from "react-router-dom"
import './Footer.css'
export default function Footer() {
  return (
    <div className="footer p-5">
      <div className="row mb-7 pb-7 border-bottom border-secondary">
        <div className="left col-6 text-white p-5">
          <h2>Lets Work Together to Improve Your Professional Life!</h2>
          <Link to="https://www.company.com/" className="text-orange">
            needhelp@company.com
          </Link>
          <div className="text-orange">(123)45678</div>
        </div>
        <div className="middle col-3 px-4 py-5">
          <ul>
            <h4 className="text-white mb-4">Coaching</h4>
            <li><Link to="">Career Mentoring</Link></li>
            <li><Link to="">Work Life & Balance</Link></li>
            <li><Link to="">Important Decisions</Link></li>
            <li><Link to="">One-on-One Sessions</Link></li>
          </ul>
          
          
          
        </div>
        <div className="right col-3 px-4 py-5">
          <ul>
            <h4 className="text-white mb-4">About Meghdad</h4>
            <li><Link to="">About us</Link></li>
            <li><Link to="">Life Coaching</Link></li>
            <li><Link to="">Pricing Plans</Link></li>
            <li><Link to="">Contact us</Link></li>
          </ul>
          
          
          
          
        </div>
      </div>
      <div className="row text-center">
        <div className="social-media">
          <span>
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span>
            <i className="fa-brands fa-facebook"></i>
          </span>
          <span>
            <i className="fa-brands fa-linkedin"></i>
          </span>
          <span>
            <i className="fa-brands fa-instagram"></i>
          </span>
        </div>
        <div className="text-gray mt-4">
          {" "}
          {/* text-sm */}© Copyrights are Reserved. by meghdad.com
        </div>
      </div>
    </div>
  );
}
