import argentBankLogo from '../../assets/argentBankLogo.png';
import './style.scss';
import Connexion from '../Connexion';


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

       {<Connexion/>}
      </div>
    </nav>

}