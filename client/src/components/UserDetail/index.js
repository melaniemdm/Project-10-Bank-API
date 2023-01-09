import './style.scss';
import CardAccount from '../CardAccount';
import { useEffect, useState } from "react";
import Axios from 'axios';

export default function UserDetail() {

const [userName, setUserName] = useState("");
useEffect(()=> {
async function getProfile(){
  const response = await Axios.post("http://localhost:3001/api/v1/user/profile", {}, {headers: { Authorization: `Bearer `+ sessionStorage.getItem("token") }} )
   setUserName(response.data.body.firstName)
}  
getProfile()

})

return <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{userName}!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>

      <CardAccount  titleAccount="Argent Bank Checking (x8349)" dollars="$2,082.79" accountDescription ="Available Balance"/>
      <CardAccount  titleAccount="Argent Bank Savings (x6712)" dollars="$10,928.42" accountDescription ="Available Balance"/>
      <CardAccount  titleAccount="Argent Bank Credit Card (x8349)" dollars="$184.30" accountDescription ="Current Balance"/>
       
    </main>

}