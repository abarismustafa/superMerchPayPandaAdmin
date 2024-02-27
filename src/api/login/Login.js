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

export const areaUpdate = ({ id, value }) => {
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



// Zoon master
export const getZoon = ({ id }) => {
  return axiosInstance.get(`${baseUrl}zone`);
};

export const zoonById = ({ id }) => {
  return axiosInstance.get(`${baseUrl}zone/${id}`);
};
export const zoonPost = ({ data }) => {
  return axiosInstance.post(`${baseUrl}zone/addzone`, data);
};

// Users
export const addUsers = (data) => {
  return axiosInstance.post(`${baseUrl}user/adduser`, data);
};
export const usersList = () => {
  return axiosInstance.get(`${baseUrl}user`);
};

export const userDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}user/deleteuser/${id}`);
};


// userType Intrigation 

export const addUserType = (data) => {
  return axiosInstance.post(`${baseUrl}usertype/adduser`, data);
};
export const listUserType = () => {
  return axiosInstance.get(`${baseUrl}usertype`);
};
export const deleteUserType = (id) => {
  return axiosInstance.delete(`${baseUrl}usertype/deleteuser/${id}`);
};
export const getUserType = (id) => {
  return axiosInstance.get(`${baseUrl}usertype/${id}`);
};
export const UserTypeUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}usertype/updateuser/${id}`, value);
};


// Role Master 

export const addRole = (data)=>{
  return axiosInstance.post (`${baseUrl}role/addrole`, data);
}
export const getListRole = ()=>{
  return axiosInstance.get (`${baseUrl}role`);
}
export const DeleteRole = (id)=>{
  return axiosInstance.delete (`${baseUrl}role/deleterole/${id}`,);
}
export const getRoleEdit = (id) => {
  return axiosInstance.get(`${baseUrl}role/${id}`);
};
export const updateRole = (id,value) => {
  return axiosInstance.put(`${baseUrl}role/updatrole/${id}`,value);
};

//Payout Beneficiary Api Intrigation :-

export const addBeneficiaryData = (data)=>{
  console.log(data);
  return axiosInstance.post(`${baseUrl}payout-beneficiary/addpayout`, data);
}
export const getBeneficiaryData = ()=>{
  return axiosInstance.get (`${baseUrl}payout-beneficiary`);
}
export const DeleteBeneficiaryData= (id)=>{
  return axiosInstance.delete (`${baseUrl}payout-beneficiary/deletepayout/${id}`,);
}
export const getBeneficiaryDataEdit = (id) => {
  return axiosInstance.get(`${baseUrl}payout-beneficiary/${id}`);
};
export const updateBeneficiaryData = (id,value) => {
  return axiosInstance.put(`${baseUrl}payout-beneficiary/updatpayout/${id}`,value);
};

export const stateMasterAdd = (data) => {
  return axiosInstance.post(`${baseUrl}state/addstate`, data);
};
export const getStateMaster = () => {
  return axiosInstance.get(`${baseUrl}state`);
};
// export const countryList = (data) => {
//   return axiosInstance.get(`${baseUrl}country`);
// };
export const stateMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}state/deletestate/${id}`);
};

export const getstateMaster = (id) => {
  return axiosInstance.get(`${baseUrl}state/${id}`);
};

export const stateMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}state/updatestate/${id}`, value);
};

// bankMaster
export const bankMasterAdd = (data) => {
  return axiosInstance.post(`${baseUrl}bank/addbank`, data);
};
export const getBankMaster = () => {
  return axiosInstance.get(`${baseUrl}bank`);
};

export const BankMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}bank/deletebank/${id}`);
};

export const getBnakMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}bank/${id}`);
};

export const bankMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}bank/updatebank/${id}`, value);
};

// statusMaster
export const statusMasterAdd = (data) => {
  return axiosInstance.post(`${baseUrl}status/addstatus`, data);
};
export const getStatusMaster = () => {
  return axiosInstance.get(`${baseUrl}status`);
};

export const statusMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}status/deletestatus/${id}`);
};

export const getStatusMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}status/${id}`);
};

export const statusMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}status/updatstatus/${id}`, value);
};

// paymentMaster
export const paymentMethodAdd = (data) => {
  return axiosInstance.post(`${baseUrl}payment-method/addpayment`, data);
};
export const getpaymentMethod = () => {
  return axiosInstance.get(`${baseUrl}payment-method`);
};

export const paymentMethodDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}payment-method/deletepayment/${id}`);
};

export const getpaymentMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}payment-method/${id}`);
};

export const paymentMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}payment-method/updatpayment/${id}`, value);
};

// -------------
