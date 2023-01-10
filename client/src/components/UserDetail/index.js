import './style.scss';
import CardAccount from '../CardAccount';
import { useEffect } from "react";
import Axios from 'axios';
import { openModal } from '../../Utils/modal';
import ProfilUser from '../ProfilUser';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../redux';

export default function UserDetail() {

//const [userName, setUserName] = useState("");

const user =useSelector((state)=>state.nameText)
const dispatch = useDispatch();

useEffect(()=> {
async function getProfile(){
  const response = await Axios.post("http://localhost:3001/api/v1/user/profile", {}, {headers: { Authorization: `Bearer `+ sessionStorage.getItem("token") }} )
  dispatch(changeName({firstName :response.data.body.firstName, lastName: response.data.body.lastName}))
   
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