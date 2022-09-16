import axios from "axios";


export const axiosInstance = () => {
  let token = localStorage.getItem("token");
  console.log("getting local: " + token);
  const http = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  return http;
}


