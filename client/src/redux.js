import { createSlice, configureStore } from "@reduxjs/toolkit";

const todoName = createSlice({
  name: "nameText",
  initialState: {lastName : "", firstName : ""},

  reducers: {
   
    changeName: (state, action) => {
      //{type:"nameText/changeName", payload: "nouveau name"}
     state.firstName = action.payload.firstName;
     state.lastName = action.payload.lastName;
     console.log(action.payload)
     return state
    },
  },
});
export const {changeName} = todoName.actions;

export const store = configureStore({
  reducer: {
    nameText: todoName.reducer,
  },
});
