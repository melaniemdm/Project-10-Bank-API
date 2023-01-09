import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

export default function Connexion() {
    const [firstName, setfirstName] = useState("tony");


  const navigate = useNavigate();
  const onPressSignOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    navigate({ pathname: "/" });
  };
  if (sessionStorage.getItem("token")) {
    return (
      <div>
        <a className="main-nav-item" href="./user.html">
          <i className="fa fa-user-circle"></i>
         {firstName}
        </a>
        <Link
          onClick={(e) => onPressSignOut(e)}
          className="main-nav-item"
          to="/"
        >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    );
  }
  return (
    <Link to="/signin" className="main-nav-item">
      <i className="fa fa-user-circle"></i>
      &nbsp; Sign In &nbsp;
    </Link>
  );
}
