import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

export const getNearbyGyms = (lat, lng) =>
  api.get(`/api/map/gyms`, { params: { lat, lng } });
