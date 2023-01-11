import argentBankLogo from '../../assets/argentBankLogo.png';
import './style.scss';
import Connexion from '../Connexion';
import { Link } from 'react-router-dom';


export default function Header(){



    return <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>

       {<Connexion/>}
      </div>
    </nav>

}