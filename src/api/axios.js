import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-43-201-28-82.ap-northeast-2.compute.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;