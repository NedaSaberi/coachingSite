import LoginForm from '../../components/loginForm/LoginForm';
import RegisterForm from '../../components/registerForm/RegisterForm';
import './MyAccount.css';

export default function MyAccount() {
  return (
    <div className="myaccount">
      <div className="first-view">
        <div className="first-view-content bg-orange">
          <h1>My account</h1>
        </div>
      </div>
      <div className="row forms">
        <div className="col-12 col-lg-6 left">
            <LoginForm/>
        </div>
        <div className="col-12 col-lg-6 right">
            <RegisterForm />
        </div>
      </div>
    </div>
  );
}
