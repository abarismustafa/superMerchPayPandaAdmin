import { baseUrl } from "../../baseUrl";
import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";
export const LoginSubmit = (data) =>
  axiosInstance.post(`${baseUrl}staff/login`, data);

export const currencyAdd = (data) => {
  return axiosInstance.post(`${baseUrl}currency/addcurrency`, data);
};
export const currencyList = (data) => {
  return axiosInstance.get(`${baseUrl}currency`);
};
export const currencyDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}currency/deletecurrency/${id}`);
};

export const getCurrency = (id) => {
  return axiosInstance.get(`${baseUrl}currency/${id}`);
};

export const currencyUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}currency/updatcurrency/${id}`, value);
};


export const countryAdd = (data) => {
  return axiosInstance.post(`${baseUrl}country/addcountry`, data);
};
export const getCountryAdd = () => {
  return axiosInstance.get(`${baseUrl}currency`);
};
export const countryList = (data) => {
  return axiosInstance.get(`${baseUrl}country`);
};
export const countryDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}country/deletecountry/${id}`);
};

export const getcountry = (id) => {
  return axiosInstance.get(`${baseUrl}country/${id}`);
};

export const countryUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}country/updatecountry/${id}`, value);
};


export const languageAdd = (data) => {
  return axiosInstance.post(`${baseUrl}language/addlanguage`, data);
};
export const languageList = () => {
  return axiosInstance.get(`${baseUrl}language`);
};
export const languageDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}language/delete_language/${id}`);
};

export const getlanguage = (id) => {
  return axiosInstance.get(`${baseUrl}language/${id}`);
};

export const languageUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}language/update_language/${id}`, value);
};

export const areaAdd = (data) => {
  return axiosInstance.post(`${baseUrl}area/addarea`, data);
};
export const areaList = () => {
  return axiosInstance.get(`${baseUrl}area`);
};
export const areaDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}area/deletearea/${id}`);
};

export const getarea = (id) => {
  return axiosInstance.get(`${baseUrl}area/${id}`);
};

export const areaUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}area/updatearea/${id}`, value);
};
