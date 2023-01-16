import './style.scss';
import CardAccount from '../CardAccount';
import { useEffect } from "react";
import { openModal } from '../../utils/modal';
import ProfilUser from '../ProfilUser';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../store/redux';
import apiClient from '../../utils/apiClient';

export default function UserDetail() {

const user =useSelector((state)=>state.userName)
const dispatch = useDispatch();

useEffect(()=> {
async function getProfile(){
  const token = sessionStorage.getItem("token");
  const userName = await apiClient.getUserName(token);
  if (user.firstName === "" && user.lastName === "") dispatch(changeName(userName))
   
}  
getProfile()

})

return <main className="main bg-dark">
      <div className="header">
        
        <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
        <button className="edit-button" onClick={()=> openModal()}>Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>

      <CardAccount  titleAccount="Argent Bank Checking (x8349)" dollars="$2,082.79" accountDescription ="Available Balance"/>
      <CardAccount  titleAccount="Argent Bank Savings (x6712)" dollars="$10,928.42" accountDescription ="Available Balance"/>
      <CardAccount  titleAccount="Argent Bank Credit Card (x8349)" dollars="$184.30" accountDescription ="Current Balance"/>
       <ProfilUser/>
    </main>

}