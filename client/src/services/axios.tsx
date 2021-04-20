import axios from 'axios'

const token = localStorage.getItem("token")
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.withCredentials = true;

export const instance = axios.create({
  baseURL: "http://127.0.0.1:4000",
  headers:{
    ...axios.defaults.headers
  }
});