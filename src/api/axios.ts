import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://localhost:8000';
// const baseURL = 'https://languagewire-api.onrender.com';

// Setting withCredentials at the Axios instance level
const APICall: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
});

export { APICall };
