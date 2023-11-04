import '../../pages/myAccount/MyAccount.css';
import { Link } from 'react-router-dom';
import styles from './RegisterForm.module.css';

export default function RegisterForm() {
  return (
    <div className="formWrapper">
      <h3 className="mb-5">Register</h3>
      <form className="form" action="">
        <div className="input-group">
          <label htmlFor="user">
            Email address<span className="text-danger">*</span>
          </label>
          <input id="user" type="text" />
        </div>
        <p className="my-3">
          A link to set a new password will be sent to your email address.
        </p>
        <p>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <Link to="/" className='text-orange link'>privacy policy</Link>.
        </p>
        <div className="submit-group d-block my-2">
          <button className={`${styles.shopBtn} bg-orange text-white`}>REGISTER</button>
        </div>
      </form>
    </div>
  );
}
