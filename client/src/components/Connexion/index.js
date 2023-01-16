import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Connexion() {
    //const [firstName, setfirstName] = useState("");
    const user =useSelector((state)=>state.userName)


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
         {user.firstName}
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
    <Link to="/login" className="main-nav-item">
      <i className="fa fa-user-circle"></i>
      &nbsp; Sign In &nbsp;
    </Link>
  );
}
