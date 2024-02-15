import { baseUrl } from "../../baseUrl";
import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";

export const LoginSubmit = (data) =>
  axiosInstance.post(`${baseUrl}staff/login`, data);
