import styles from './LostPassForm.module.css';

export default function LostPassForm() {
  return (
    <div className={`${styles.formWrapper} row`}>
      <form className={`${styles.lostPassForm} col-12 col-lg-7`}>
        <p>
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>
        <div className="mb-2">Username or email</div>
        <input className="col-12 col-md-6" type="text" />
        <button className={`${styles.resetPass} bg-orange`}>RESET PASSWORD</button>
      </form>
    </div>
  );
}
