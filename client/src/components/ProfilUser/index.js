
import './style.scss';

export default function ProfilUser(){
     

    return <div className="sign-in-content"><div className="input-wrapper">
        <h1> Settings User</h1>
<div>LastName</div>
<input id='lastName' placeholder="lastName"></input>

<div>FirstName</div>
<input id='firstName' placeholder="FirstName"></input>

<div id="mail">Mail : toto@gmail.com</div>

<button className="sign-in-button">Valider</button>
    </div></div>
}