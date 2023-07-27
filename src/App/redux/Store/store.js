import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/createToken/createTokenSlice"
import formReducer from "../features/FormStore/FormSlice"


const store = configureStore({
  reducer: {
    user: todoReducer,
    lounchPad:formReducer,
  },
});

export default store;
