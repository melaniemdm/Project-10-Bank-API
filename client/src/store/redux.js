import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
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
  
});
export const {changeName} = userSlice.actions;

export const store = configureStore({
  reducer: {
    userName: userSlice.reducer,
  },
});
