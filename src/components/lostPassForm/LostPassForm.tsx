import styles from './LostPassForm.module.css';
import { useState } from "react";

export default function LostPassForm() {
  const [user, setUser]= useState('');

  const submitHandler = (e: React.FormEvent)=>{
    e.preventDefault();
    const lostInfo = {
      user: {user}
    }
    console.log(lostInfo);
  }
  return (
    <div className={`${styles.formWrapper} row`}>
      <form className={`${styles.lostPassForm} col-12 col-lg-7`} onSubmit={submitHandler}>
        <p>
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>
        <div className="mb-2">Username or email</div>
        <input className="col-12 col-md-6" type="text" value={user} onChange={(e) => setUser(e.target.value)}/>
        <button className={`${styles.resetPass} bg-orange`}>RESET PASSWORD</button>
      </form>
    </div>
  );
}
