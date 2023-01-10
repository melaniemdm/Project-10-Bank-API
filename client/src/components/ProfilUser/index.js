
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { closeModal } from '../../Utils/modal';
import './style.scss';

export default function ProfilUser(){
  const [firstName, setFirstName] = useState('toto')   
  const [lastName, setLastName] = useState('titi')  
  useEffect(()=> {
    
    async function getProfile(){
      const response = await Axios.post("http://localhost:3001/api/v1/user/profile", {}, {headers: { Authorization: `Bearer `+ sessionStorage.getItem("token") }} )
      setFirstName(response.data.body.firstName)
      setLastName(response.data.body.lastName)
    }  
    getProfile()
    
    },[])
    return <div className="sign-in-content containerUser" ><div className="input-wrapper">
        <h1> Settings User</h1>
<div>LastName : </div>
<input id='lastName' type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>

<div>FirstName : </div>
<input id='firstName'  type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>

<div id="mail">Mail : toto@gmail.com</div>

<button className="sign-in-button" onClick={()=>closeModal()}>Valider</button>
    </div></div>
}