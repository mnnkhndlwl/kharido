import axios from "axios";

const BASE_URL = "http://localhost:8000/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
