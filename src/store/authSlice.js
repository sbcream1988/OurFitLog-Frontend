import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("accessToken") || null,
  refresh: localStorage.getItem("refreshToken") || null,
  isLoggedIn: !!localStorage.getItem("accessToken"),
  memberEmail: localStorage.getItem("memberEmail") || null,
  memberId: localStorage.getItem("memberId") || null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, refresh, user } = action.payload;
      state.token = token;
      state.refresh = refresh;
      state.isLoggedIn = true;
      state.user = user;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("refreshToken", refresh);

      try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const payload = JSON.parse(atob(base64));

        if (payload.sub) {
          state.memberId = payload.sub;
          localStorage.setItem("memberId", payload.sub);
        }
        if (payload.email) {
          state.memberEmail = payload.email;
          localStorage.setItem("memberEmail", payload.email);
        }
      } catch (e) {
        console.error("토큰 디코딩 실패", e);
      }
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.user = null;
      state.memberId = null;
      state.memberEmail = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("memberId");
      localStorage.removeItem("memberEmail");
    },
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
