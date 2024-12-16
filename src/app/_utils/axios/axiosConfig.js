import axios from "axios";

export const latestNewsApi = axios.create({
  baseURL: "https://newsdata.io/api/1/latest",
  params: {
    apikey: process.env.API_KEY,
  },
});
