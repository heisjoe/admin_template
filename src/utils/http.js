import axios from 'axios';
import {TOKEN_NAME} from "../constants/app";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 15000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  }
});

http.interceptors.request.use(function (config) {
  const token = localStorage.getItem(TOKEN_NAME);
  if (token) {
    config.headers.Authorization = `Bearer ` + token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

//
http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 403) {
      localStorage.removeItem(TOKEN_NAME);
      window.location.href = "/login";
    }
    return Promise.reject(error)
  }
);


export default http;
