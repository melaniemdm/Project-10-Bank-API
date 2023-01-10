
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { closeModal } from '../../Utils/modal';
import './style.scss';

export default function ProfilUser(){
  const [firstName, setFirstName] = useState('tony')   
  const [lastName, setLastName] = useState('stark')  


  useEffect(()=> {
    
    async function getProfile(){
      const response = await Axios.post("http://localhost:3001/api/v1/user/profile", {}, {headers: { Authorization: `Bearer `+ sessionStorage.getItem("token") }} )
      setFirstName(response.data.body.firstName)
      setLastName(response.data.body.lastName)

         }  
       getProfile()

           },[])

           async function sendProfile(){
             await Axios.put('http://localhost:3001/api/v1/user/profile',{
                firstName: firstName,
                lastName: lastName,
                    
                 }, {headers: { Authorization: `Bearer `+ sessionStorage.getItem("token") }}
                 
                 ) 
         }
         
    
function saveAndValid(){
    closeModal();
    sendProfile()
}


    return <div className="sign-in-content containerUser" ><div className="input-wrapper">
        <h1> Settings User</h1>
<div>LastName : </div>
<input id='lastName' type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>

<div>FirstName : </div>
<input id='firstName'  type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>

<div id="mail">Mail : toto@gmail.com</div>

<button className="sign-in-button" onClick={()=>saveAndValid()}>Valider</button>
    </div></div>
}