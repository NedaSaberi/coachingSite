import './Loginform.css';

export default function Loginform() {
  return (
    <div className="loginform-wrapper">
      <h3>Log in</h3>
      <form className="loginform" action="">
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
            <input id="pass" type="text" />
        </div>
        <div className="input-group">
            <button>LOG IN</button>
            <span>
            <i className="fa fa-check-square-o" aria-hidden="true"></i> Remember
            me
            </span>
        </div>
      </form>
    </div>
  );
}
