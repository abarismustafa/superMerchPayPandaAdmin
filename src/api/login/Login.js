import { baseUrl } from "../../baseUrl";
import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";
import axios from "axios";

//count Length RetDist ----------------------!

export const getLength = () => {
  return axiosInstance.get(`${baseUrl}user/memberType/count`);
}


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
export const getZoon = () => {
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

export const getUserId = (id) => {
  return axiosInstance.get(`${baseUrl}user/${id}`);
};

export const updateUser = (id, value) => {
  return axiosInstance.put(`${baseUrl}user/updateuser/${id}`, value);
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

export const addRole = (data) => {
  return axiosInstance.post(`${baseUrl}role/addrole`, data);
}
export const getListRole = () => {
  return axiosInstance.get(`${baseUrl}role`);
}
export const DeleteRole = (id) => {
  return axiosInstance.delete(`${baseUrl}role/deleterole/${id}`,);
}
export const getRoleEdit = (id) => {
  return axiosInstance.get(`${baseUrl}role/${id}`);
};
export const updateRole = (id, value) => {
  return axiosInstance.put(`${baseUrl}role/updatrole/${id}`, value);
};

//Payout Beneficiary Api Intrigation :-

export const addBeneficiaryData = (data) => {
  console.log(data);
  return axiosInstance.post(`${baseUrl}payout-beneficiary/addpayout`, data);
}
export const getBeneficiaryData = () => {
  return axiosInstance.get(`${baseUrl}payout-beneficiary`);
}
export const DeleteBeneficiaryData = (id) => {
  return axiosInstance.delete(`${baseUrl}payout-beneficiary/deletepayout/${id}`,);
}
export const getBeneficiaryDataEdit = (id) => {
  return axiosInstance.get(`${baseUrl}payout-beneficiary/${id}`);
};
export const updateBeneficiaryData = (id, value) => {
  return axiosInstance.put(`${baseUrl}payout-beneficiary/updatpayout/${id}`, value);
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

// -------------Service Master ---------------!
export const addServiceMaster = (data) => {

  return axiosInstance.post(`${baseUrl}service/addservice`, data);
};
export const getServiceMaster = () => {
  return axiosInstance.get(`${baseUrl}service`)
}
export const getServiceMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}service/${id}`);
};
export const updateServiceMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}service/updateservice/${id}`, value);
};
export const deleteServiceMasterList = (id, value) => {
  return axiosInstance.delete(`${baseUrl}service/deleteservice/${id}`);
};

// serviceCategory

export const serviceCategoryAdd = (data) => {
  return axiosInstance.post(`${baseUrl}servicecategory/addcategory`, data);
};
export const getServiceCategory = () => {
  return axiosInstance.get(`${baseUrl}servicecategory`);
};

export const ServiceCategoryDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}servicecategory/deletecategory/${id}`);
};

export const getServiceCategoryId = (id) => {
  return axiosInstance.get(`${baseUrl}servicecategory/${id}`);
};

export const ServiceCategoryUpdate = (id, value) => {
  console.log(id, value);
  return axiosInstance.put(`${baseUrl}servicecategory/updatecategory/${id}`, value);
};

// staff------//

export const staffUpdateProfile = (value) => {
  console.log(value);
  return axiosInstance.put(`${baseUrl}staff/profile/update`, value);
};

export const getUpdateProfile = (value) => {
  return axiosInstance.get(`${baseUrl}staff/profile/view`);
};


// provider

export const providerAdd = (data) => {
  return axiosInstance.post(`${baseUrl}provider/addprovider`, data);
};
export const getprovider = () => {
  return axiosInstance.get(`${baseUrl}provider`);
};

export const providerDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}provider/deleteprovider/${id}`);
};

export const getProviderId = (id) => {
  return axiosInstance.get(`${baseUrl}provider/${id}`);
};

export const providerUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}provider/updateprovider/${id}`, value);
};

// clodinaryImage

export const clodinaryImage = (value) => {
  return axios.post(`${baseUrl}cloudinary/addImage`, value);
};

// clodinaryImage

// Zone get filter

export const ZoneGetFilter = (id) => {
  return axiosInstance.get(`${baseUrl}zone/get/filter`, id);
};

// Api  Master

export const ApiTransactionAdd = (data) => {
  return axiosInstance.post(`${baseUrl}apiList/addApi`, data);
};
export const getApiTransaction = () => {
  return axiosInstance.get(`${baseUrl}apiList`);
};

export const apiMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}apiList/deleteApi/${id}`);
};

export const getapiMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}apiList/${id}`);
};

export const apiMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}apiList/updateApi/${id}`, value);
};

// Api Transaction Master

export const getApiTransactionMaster = () => {
  return axiosInstance.get(`${baseUrl}apiTrans`);
};
export const getTransactionList = (id) => {
  return axiosInstance.delete(`${baseUrl}apiTrans/deleteApiTrans/${id}`);
};


// Contact Enquiries Api

export const contactEnquiryAdd = (data) => {
  return axiosInstance.post(`${baseUrl}contact-enquiries/addContactEnquiries`, data);
};
export const getcontactEnquiry = () => {
  return axiosInstance.get(`${baseUrl}contact-enquiries`);
};

export const contactEnquiryDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}contact-enquiries/deleteContactEnquiries/${id}`);
};

export const getcontactEnquiryId = (id) => {
  return axiosInstance.get(`${baseUrl}contact-enquiries/${id}`);
};

export const apiContactEnquiry = (id, value) => {
  return axiosInstance.put(`${baseUrl}contact-enquiries/updateContactEnquiries/${id}`, value);
};

// agent onBoarding -------!

export const addAgentOnboarding = (data) => {
  return axiosInstance.post(`${baseUrl}agentonboarding/addOnboarding`, data);
};
export const getAgentOnboarding = () => {
  return axiosInstance.get(`${baseUrl}agentonboarding`)
}
export const getAgentOnboardingEdit = (id) => {
  return axiosInstance.get(`${baseUrl}agentonboarding/${id}`)
}
export const updateAgentOnboarding = (id, value) => {
  return axiosInstance.put(`${baseUrl}agentonboarding/updateOnBoarding/${id}`, value);
};
export const deleteAgentOnboarding = (id) => {
  console.log(id);
  return axiosInstance.delete(`${baseUrl}agentonboarding/deleteOnBoarding/${id}`);
};

export const getAreaZoon = () => {
  return axiosInstance.get(`${baseUrl}area`)
}

// pagination

export const paginationApiArea = (page, count) => {
  return axiosInstance.get(`${baseUrl}area/page/${page}&${count}`)
}

export const paginationApiMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}bank/page/${page}&${count}`)
}
export const paginationUserTypeMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}usertype/page/${page}&${count}`)
}
export const paginationstaffMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staff/page/${page}&${count}`)
}
export const paginationstaffTypeMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}stafftype/page/${page}&${count}`)
}
export const paginationPayoutbeneficiaryMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}payout-beneficiary/page/${page}&${count}`)
}
export const paginationCountryMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}country/page/${page}&${count}`)
}


// pagination

// Distributor Retailer

export const reailerDistIdAgainst = (page, count, id) => {
  return axiosInstance.get(`${baseUrl}user/member/filter?id=${id}&page=${page}&count=${count}`)
}

// Distributor Retailer upDate

export const getDistIdAgainst = (id) => {
  return axiosInstance.get(`${baseUrl}user/${id}`)
}
export const updateDistIdAgainst = (id, value) => {
  // console.log(value);
  return axiosInstance.put(`${baseUrl}user/updateuser/${id}`, { ...value.basicDetails, ...value.permanentDetails, ...value.serviceDetails,permission:value.permission })
}

export const ZoonFilter = ({ areaid, level }) => {
  return axiosInstance.get(`${baseUrl}/zone/get/filter?area=${areaid}&level=${level}`);
};
export const ZoonFilterSec = ({ zone, area }) => {
  return axiosInstance.get(`${baseUrl}/zone/get/filter?zone=${zone}&area=${area}`);
}
// ------------- billing Address Api---------------

export const addBillingAddress = (data) => {
  return axiosInstance.post(`${baseUrl}deliveryaddress/addDeliveryAddress`, data);
};
export const getBillingAddress = (id) => {
  return axiosInstance.get(`${baseUrl}deliveryaddress/user/billing/${id}`)
}
export const getBillingAddressDetails = (id) => {
  return axiosInstance.get(`${baseUrl}deliveryaddress/${id}`)
}
export const updateBillingAddress = (id, value) => {
  return axiosInstance.put(`${baseUrl}deliveryaddress/updatDeliveryAddress/${id}`, value);
};
export const deletBillingAddress = (id) => {
  return axiosInstance.delete(`${baseUrl}deliveryaddress/deleteDeliveryAddress/${id}`);
};
// ------------- shipping Address Api---------------

export const addshippingAddress = (data) => {
  return axiosInstance.post(`${baseUrl}deliveryaddress/addDeliveryAddress`, data);
};
export const getshippingAddress = (id) => {
  return axiosInstance.get(`${baseUrl}deliveryaddress/user/shipping/${id}`)
}
export const getshippingAddressDetails = (id) => {
  return axiosInstance.get(`${baseUrl}deliveryaddress/${id}`)
}
export const updateshippingAddress = (id, value) => {
  return axiosInstance.put(`${baseUrl}deliveryaddress/updatDeliveryAddress/${id}`, value);
};
export const deletshippingAddress = (id) => {
  return axiosInstance.delete(`${baseUrl}deliveryaddress/deleteDeliveryAddress/${id}`);
};


//  DMT Apis

export const adddmtcommscheme = (data) => {
  console.log(data);
  return axiosInstance.post(`${baseUrl}dmtCommisionSchema/add`, data)
}
export const getdmtcommscheme = () => {
  return axiosInstance.get(`${baseUrl}dmtCommisionSchema`)
}
export const getdmtcommschemeagId = (id) => {
  return axiosInstance.get(`${baseUrl}dmtCommisionSchema/${id}`)
}
export const updatedmtcommschemeagId = (id, value) => {
  return axiosInstance.put(`${baseUrl}dmtCommisionSchema/update/${id}`, value)
}
export const deletedmtcommschemeagId = (id) => {
  return axiosInstance.delete(`${baseUrl}dmtCommisionSchema/delete/${id}`,)
}
// -------------DMT API ---------
export const adddmtcomm = (data) => {
  return axiosInstance.post(`${baseUrl}dmtCommision/add`, data)
}
export const getdmtcomm = () => {
  return axiosInstance.get(`${baseUrl}dmtCommision`)
}
export const getdmtcommagId = (id) => {
  return axiosInstance.get(`${baseUrl}dmtCommision/${id}`)
}
export const updatedmtcommagId = (id, value) => {
  return axiosInstance.put(`${baseUrl}dmtCommision/update/${id}`, value)
}
export const deletedmtcommagId = (id) => {
  return axiosInstance.delete(`${baseUrl}dmtCommision/delete/${id}`,)
}


// ---------------DMT Txn Fillter --------------- 

export const fillterDmtTxnReport = (data) => {
  return axiosInstance.post(`${baseUrl}dmt_txn/st/report`, data)
}

export const walletsReport = (data) => {
  return axiosInstance.post(`${baseUrl}mainwallet/create`, data)
}

export const walletsReportFilter = (page, count, data) => {
  return axiosInstance.post(`${baseUrl}mainwallet/filter`, { page, ...data, count })
}
// --------------------paymentRequest-------------------
export const fillterRequestPayment = (data) => {
  console.log(data);
  return axiosInstance.post(`${baseUrl}paymentRequest/admin`, data)
}


