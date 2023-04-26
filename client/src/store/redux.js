import { createSlice, configureStore } from "@reduxjs/toolkit";
//parametre du slice
const usersParameters={
  name: "userName",
  initialState: {lastName : "", firstName : ""},

  reducers: {
   
      changeName: (state, action) => {
      //{type:"userName/changeName", payload: "nouveau name"}
     state.firstName = action.payload.firstName;
     state.lastName = action.payload.lastName;
     console.log(action.payload)
     return state
    },
  },
  
}
//partie de store
const userSlice = createSlice(usersParameters);
//exporte les actions
export const {changeName} = userSlice.actions;
//création du store
export const store = configureStore({
  reducer: {
    userName: userSlice.reducer,
  },
});
