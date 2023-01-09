import './style.scss';
//import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";


export default function SignIn() {
  const navigate = useNavigate();
  
  const onPressSignIn = () => {
    const userMail= document.querySelector('#username').value;
    const userPassword= document.querySelector('#password').value;  
    sessionStorage.setItem("token",userMail)
    navigate({ pathname: "/user" });

  }

  return (
    
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
         
          <button onClick={onPressSignIn} to="/user" className="sign-in-button">
        Sign In 
      </button>

        </form>
      </section>
    
  );
}
