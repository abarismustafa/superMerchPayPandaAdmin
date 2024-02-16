import { baseUrl } from "../../baseUrl";
import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";
import { getToken } from "../../utils/localStorage";

const token = getToken()

export const LoginSubmit = (data) =>
    axiosInstance.post(`${baseUrl}staff/login`, data);

export const currencyAdd = (data) => {
    return axiosInstance.post(`${baseUrl}currency/addcurrency`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${token}`,
        },
    });
}
export const currencyList = (data) => {
    return axiosInstance.get(`${baseUrl}currency`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${token}`,
        },
    });
}
export const currencyDelete = (id) => {
    return axiosInstance.delete(`${baseUrl}currency/deletecurrency/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${token}`,
        },
    });
}

export const getCurrency = (id) => {
    return axiosInstance.get(`${baseUrl}currency/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${token}`,
        },
    });
}