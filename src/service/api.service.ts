import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.info/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, 
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
