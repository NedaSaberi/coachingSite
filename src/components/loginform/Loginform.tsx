import { useState } from 'react';
import '../../pages/shop/Shop.css';
import { Link } from 'react-router-dom';

export default function Loginform() {
  const [showPassword, setShowPassword]= useState(false);
  const togglePasswordVisibility= ()=>{
    setShowPassword(!showPassword);
  }
  return (
    <div className="form-wrapper">
      <h3 className='mb-5'>Log in</h3>
      <form className="form" action="">
        <div className="input-group">
          <label htmlFor="user">
            Username or email address<span className="text-danger">*</span>
          </label>
          <input id="user" type="text"/>
        </div>
        <div className="input-group">
            <label htmlFor="pass">
            Password<span className="text-danger">*</span>
            </label>
            <div className="password-input">
              <input id="pass" type={showPassword ? 'text' : 'password'}/>
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
              </span>
            </div>
        </div>
        <div className="submit-group d-block my-3">
            <button className='shop-btn bg-orange text-white'>LOG IN</button>
            <input type="checkbox" />
            <span className='m-1'>
              Remember me
            </span>
        </div>
        <Link to='/lost-password' className='text-orange link'>Lost your password?</Link>
      </form>
    </div>
  );
}
