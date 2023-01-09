import argentBankLogo from '../../assets/argentBankLogo.png';
import './style.scss';
import { HashLink as Link } from 'react-router-hash-link';

export default function Header(){
    return <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>

        <Link to="/signin" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
       &nbsp;   Sign In &nbsp;
      </Link>
      </div>
    </nav>

}