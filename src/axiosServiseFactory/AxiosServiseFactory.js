import axios from "axios";
import { baseUrl } from "../baseUrl";
import CryptoJS from 'crypto-js';

import {
    errorHandlerMiddleWare,
    requestMiddleWare,
    responseMiddleWare,
} from "../httpInterSeptur/HttpInterSeptur";

// jbuyviycutxydrxyrxyddyxyrdx


function hashStringWithSecretKey(string, secretKey) {
    // return CryptoJS.SHA256(string, secretKey).toString(CryptoJS.enc.Hex)
    var ciphertext = CryptoJS.AES.encrypt(string, secretKey).toString();
    // var bytes = CryptoJS.AES.decrypt(string, secretKey);
    // var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return ciphertext
}

// Create an instance of Axios
const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000, // Set timeout to 10 seconds (adjust as needed)
});

// Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const base64 = btoa(JSON.stringify(config.data))
        const checkSum = hashStringWithSecretKey(base64, 'jbuyviycutxydrxyrxyddyxyrdx')
        config.data = { base64, checkSum }

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
