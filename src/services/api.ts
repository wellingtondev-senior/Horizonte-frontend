import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const api: AxiosInstance = axios.create({
    baseURL: `${process.env.API_URL}/v1`,
    timeout: 18000,
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const token = Cookies.get("auth-jwt-secret")?.valueOf();
        if(token){
           config.headers.Authorization = `Bearer ${token?.replace(/"/g, '')}`;
        }
    
    return config
}, (error: AxiosError) => {
    return Promise.reject(error);
  })

export default api;



