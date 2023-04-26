import { useEffect} from "react";
import { closeModal } from "../../utils/modal";
import "./style.scss";
import { useDispatch, useSelector  } from "react-redux";
import { changeName } from "../../store/redux";
import apiClient from "../../utils/apiClient";



export default function ProfilUser() {
const user =useSelector((state)=>state.userName)
const dispatch = useDispatch();

const handleSubmit = (event) => {
 event.preventDefault();
 const lastName =  document.querySelector("#lastName").value
 const firstName =  document.querySelector("#firstName").value
 console.log(firstName,lastName)
dispatch(changeName({firstName, lastName} ))

};



  useEffect(() => {
   document.querySelector("#lastName").value = user.lastName;
   document.querySelector("#firstName").value = user.firstName;
  }, );

  async function sendProfile() {
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const token = sessionStorage.getItem("token");
    await apiClient.updateName({firstName, lastName},token)
  }

  function saveAndValid() {
    closeModal();
    sendProfile();
  }

  return (
    <form onSubmit={handleSubmit} className="sign-in-content containerUser">
      <div className="input-wrapper">
        <h1> Settings User</h1>
        <div>LastName : </div>
        <input
          id="lastName"
          type="text"
          
          onChange={(e) => handleSubmit(e)}
        ></input>

        <div>FirstName : </div>
        <input
          id="firstName"
          type="text"
         
          onChange={(e) => handleSubmit(e)}
        ></input>

        {/* <div id="mail">Mail : toto@gmail.com</div> */}

        <button className="sign-in-button" onClick={() => saveAndValid()}>
          Valider
        </button>
      </div>
    </form>
  );
}
