

import axios from "axios";

import { baseUrl } from "../baseUrl";
import { errorHandlerMiddleWare, requestMiddleWare, responseMiddleWare } from "../httpInterSeptur/HttpInterSeptur";

const url = baseUrl

const AxiosServiceFactory = (url) => {
    console.log('url', url);
    const api = axios.create({
        baseURL: url,
        timeout: 0,
    });

    api.interceptors.request.use(requestMiddleWare);

    api.interceptors.response.use(responseMiddleWare, errorHandlerMiddleWare);

    return api;
};

export default AxiosServiceFactory;