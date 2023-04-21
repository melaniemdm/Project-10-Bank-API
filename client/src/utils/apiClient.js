import axios from 'axios';
const urlBase = "http://localhost:3001/api/v1";
const endpoint = "/user"
const routeLogin = "/login";
const routeProfile = "/profile";

async function getAuthorization(userMail, userPassword){
 const response = await axios.post(urlBase +endpoint + routeLogin , {
        email: userMail,
        password: userPassword,
      });
      return response.data.body.token
}

async function getUserName(token){

    const response = await axios.post(urlBase +endpoint + routeProfile, {}, {headers: { Authorization: `Bearer `+ token }} )
    return {firstName :response.data.body.firstName, lastName: response.data.body.lastName}
}

async function updateName(user,token ){
    await axios.put(
      urlBase + endpoint + routeProfile,
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



