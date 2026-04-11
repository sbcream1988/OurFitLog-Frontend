import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("accessToken") || null,
  isLoggedIn: !!localStorage.getItem("accessToken"),
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.isLoggedIn = true;
      state.user = user;
      localStorage.setItem("accessToken", token);
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("accessToken");
    },
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
