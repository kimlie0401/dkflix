import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "4da722b234e38fdd45bd7c40aa7d41d1",
    language: "en-US"
  }
});

export default api;
