import axios from 'axios';

async function getAuthorization(userMail, userPassword){
 const response = await axios.post("http://localhost:3001/api/v1/user/login", {
        email: userMail,
        password: userPassword,
      });
      return response.data.body.token
}

async function getUserName(token){

    const response = await axios.post("http://localhost:3001/api/v1/user/profile", {}, {headers: { Authorization: `Bearer `+ token }} )
    return {firstName :response.data.body.firstName, lastName: response.data.body.lastName}
}

async function updateName(user,token ){
    await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          firstName:user.firstName ,
          lastName: user.lastName,
        },
        {
          headers: { Authorization: `Bearer ` + token },
        }
      );
      return 0
}

//creation d'un objet contenant les méthodes get
const apiClient = {
   getAuthorization, 
   getUserName,
   updateName
}
export default apiClient



