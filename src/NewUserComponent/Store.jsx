// store/index.js

import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
import userSlice from "./userSlice";
// import userReducer from "../NewUserComponent/userSlice";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    newUser: userSlice,
    // newUser: userReducer,
  },
});
