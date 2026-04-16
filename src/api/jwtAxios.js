import axios from "axios";

const jwtAxios = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

jwtAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

jwtAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      alert("세션 만료. 다시 로그인해주세요");
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default jwtAxios;
