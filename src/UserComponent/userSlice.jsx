// store/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [], // Store registered users
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      const newUser = action.payload;
      state.users.push(newUser); // Store new user in the users array
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const existingUser = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (existingUser) {
        state.isAuthenticated = true;
        state.user = existingUser; // Store logged-in user details
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { signUp, login, logout } = userSlice.actions;
export default userSlice.reducer;
