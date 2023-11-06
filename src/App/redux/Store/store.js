import { configureStore } from "@reduxjs/toolkit";

import apiReducer from "../features/admin/AdminSlice"


const store = configureStore({
  reducer: {

    apiData:apiReducer,
  },
});

export default store;
