import Footer from '../../components/footer/Footer';
import Loginform from '../../components/loginform/Loginform';
import RegisterForm from '../../components/registerForm/RegisterForm';
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
        <div className="col-12 col-lg-6 left">
            <Loginform/>
        </div>
        <div className="col-12 col-lg-6 right">
            <RegisterForm />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
