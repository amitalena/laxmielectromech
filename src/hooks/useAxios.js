import axios from "axios";
import useStorage from "./useStorage";

const useAxios = () => {
    let name = "laxmi-electromech-token";
    const storage = useStorage();
    const token = storage.get(name);
    const BASE_URL = import.meta.env.VITE_API_URL;

    // Create Axios instance with default config
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
        },
    });

    // **Request Interceptor**
    axiosInstance.interceptors.request.use(
        (config) => {
            const updatedToken = storage.get(name);
            if (updatedToken) {
                config.headers.Authorization = `Bearer ${updatedToken}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // **Response Interceptor**
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error("API Error:", error.response?.data || error.message);
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxios;
