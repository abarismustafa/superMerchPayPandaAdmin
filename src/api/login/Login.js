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


// ---------Zone Module Intrigation--------------

export const zoneCountryAdd = (data) => {
  return axiosInstance.post(`${baseUrl}zone/addzone`, data);
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

export const areaUpdate = ({id, value}) => {
  return axiosInstance.put(`${baseUrl}area/updatearea/${id}`, value);
};

export const staffAdd = (data) => {
  return axiosInstance.post(`${baseUrl}staff/addstaff`, data);
};
export const staffList = () => {
  return axiosInstance.get(`${baseUrl}staff`);
};
export const staffType = () => {
  return axiosInstance.get(`${baseUrl}stafftype`);
};
export const staffDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}staff/deletestaff/${id}`);
};

export const getstaff = (id) => {
  return axiosInstance.get(`${baseUrl}staff/${id}`);
};

export const staffUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}staff/updatestaff/${id}`, value);
};

export const staffTypeAdd = (data) => {
  return axiosInstance.post(`${baseUrl}stafftype/addstaff`, data);
};
export const staffTypeList = () => {
  return axiosInstance.get(`${baseUrl}stafftype`);
};
export const staffTypeDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}stafftype/deleteStaff/${id}`);
};

export const getstaffType = (id) => {
  return axiosInstance.get(`${baseUrl}stafftype/${id}`);
};

export const staffTypeUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}stafftype/updateStaff/${id}`, value);
};
