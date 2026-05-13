import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

export const signup = async (signupRequestDto) => {
  const response = await api.post("/api/auth/signup", signupRequestDto);
  return response.data;
};

export const login = async (loginRequestDto) => {
  const response = await api.post("/api/auth/login", loginRequestDto);
  return response.data;
};
