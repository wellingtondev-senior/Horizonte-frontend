import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const upload: AxiosInstance = axios.create({
    baseURL: `${process.env.UPLOAD_URL}/v1`,
    timeout: 18000,

   
});

upload.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const token = Cookies.get("jwt-secret")?.valueOf();
        if(token){
           config.headers.Authorization = `Bearer ${token?.replace(/"/g, '')}`;
        }
    
    return config
}, (error: AxiosError) => {
    return Promise.reject(error);
  })

export default upload;



