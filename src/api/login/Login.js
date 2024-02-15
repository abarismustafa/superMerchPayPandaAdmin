import { baseUrl } from "../../baseUrl";
import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";

const token = window.localStorage.getItem('userToken')

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
