import axios from "axios";

const baseURL = "";

const api = axios.create({
  baseURL,
  headers: { accept: "application/json", "content-type": "application/json" },
});

export default api;
