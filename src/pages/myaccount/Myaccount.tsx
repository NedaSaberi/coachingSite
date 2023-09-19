import Loginform from '../../components/loginform/Loginform';
import './Myaccount.css';

export default function Myaccount() {
  return (
    <div className="myaccount">
      <div className="first-view">
        <div className="first-view-content bg-orange">
          <h1>My account</h1>
        </div>
      </div>
      <div className="row forms">
        <div className="col-12 col-lg-6 left bg-warning">
            <Loginform/>
        </div>
        <div className="col-12 col-lg-6 right bg-success">
            right
        </div>
      </div>
    </div>
  );
}
