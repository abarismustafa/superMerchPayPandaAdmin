import axios from "axios";
import { baseUrl } from "../baseUrl";
import {
  errorHandlerMiddleWare,
  requestMiddleWare,
  responseMiddleWare,
} from "../httpInterSeptur/HttpInterSeptur";

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000, // Set timeout to 10 seconds (adjust as needed)
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Apply request middleware logic
    const modifiedConfig = requestMiddleWare(config);
    return modifiedConfig;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Apply response middleware logic
    const modifiedResponse = responseMiddleWare(response);
    return modifiedResponse;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
