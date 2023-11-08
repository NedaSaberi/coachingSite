import { useState } from 'react';
import '../../pages/myAccount/MyAccount.css';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [showPassword, setShowPassword]= useState(false);
  const togglePasswordVisibility= ()=>{
    setShowPassword(!showPassword);
  }

  const [user, setUser]= useState('');
  const [pass, setPass]= useState('');
  const clearForm = ()=>{
    setUser('');
    setPass('')
  }
  const submitHandler= (e: React.FormEvent)=>{
    e.preventDefault();
    const loginInfo = {
      user: {user},
      password: {pass}
    }
    console.log(loginInfo);
    clearForm();
  }

  return (
    <div className="formWrapper">
      <h3 className="mb-5">Log in</h3>
      <form className="form" action="" onSubmit={submitHandler}>
        <div className="input-group">
          <label htmlFor="user">
            Username or email address<span className="text-danger">*</span>
          </label>
          <input
            id={styles.user}
            value={user}
            type="text"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="pass">
            Password<span className="text-danger">*</span>
          </label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id={styles.pass}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </span>
          </div>
        </div>
        <div className="submit-group d-block my-3">
          <button className={`${styles.shopBtn} bg-orange text-white`}>
            LOG IN
          </button>
          <input type="checkbox" />
          <span className="m-1">Remember me</span>
        </div>
        <Link to="/lost-password" className="text-orange link">
          Lost your password?
        </Link>
      </form>
    </div>
  );
}
