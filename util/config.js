import axios from 'axios';

export const axiosRequest = axios.create({
    baseURL: "https://pizzaho.vercel.app/api",
    // baseURL: "http://localhost:3000/api",
});