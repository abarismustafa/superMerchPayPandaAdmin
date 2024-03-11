import { Formik } from 'formik';
import React from 'react'
import CustomInputField from '../../../../common/CustomInputField';

function BillingAddress() {
    const initialValues = {
            country: "",
            state: "",
            city: "",
            zip: "",
            addressLine1: "",
            addressLine2: "",
            landmark: "",
            province: "",
            phone: "",
            email: "",
            firstname: "",
            lastname: "",
            company: "",
            // userid: "652f93e1e1b62ee07cd69ca0",
            // type: "shipping",
            // accCompany_id: "657ac4549a4119af8c21dced",
            // _id: "65ec1374d5ff8bb9ebcff7af",
            // createdAt: "2024-03-09T07:44:52.739Z",
            // updatedAt: "2024-03-09T07:44:52.739Z",
            // __v: 0
    }
    
    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^[0-9]{10}$/;
        const rezexzip = /^[0-9]+$/;
       
        if (!values.country) {
            errors.country = "Company Name is required";
        }

        if (!values.state) {
            errors.state = "Company Website is required";
        }
        if (!values.city) {
            errors.city = "Support Number is required";
        }

        if (!values.email) {
            errors.email = "Company Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        }
        if (!values.mobile) {
            errors.mobile = "Contact No is required";
        } else if (!regexMobileNumber.test(values.mobile)) {
            errors.mobile = "Invalid Contact No";
        }

        

        if (!values.province) {
            errors.province = "province is required";
        }

        if (!values.addressLine1) {
            errors.addressLine1 = "Sender SMS is required";
        }

        if (!values.addressLine2) {
            errors.addressLine2 = "Maintanence Message is required";
        }

        if (!values.zip) {
            errors.zip = "ZIP No is required";
        } else if (!rezexzip.test(values.zip)) {
            errors.zip = "Invalid ZIP Number";
        }
        

        // if (!values.gstNumber) {
        //   errors.gstNumber = "GST Number is required";
        // } else if (!regexGstNumber.test(values.gstNumber)) {
        //   errors.gstNumber = "Invalid GST Number";
        // }

        if (!values.landmark) {
            errors.landmark = "Land Mark is required";
        }
        if (!values.company) {
            errors.company = "Comapny Name is required";
        }

        return errors;
    };

    const submitForm = (values) => {
        console.log(values);
    };

    const changeHandle = (selectedData) => {
        // TODO
    };
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption bg-primary justify-content-center">
                                <h4 className="heading mb-0 border p-1 rounded"><b>Billing Address</b></h4>
                            </div>
                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={submitForm}
                                    className="tbl-captionn"
                                >
                                    {(formik) => {
                                        const {
                                            values,
                                            handleChange,
                                            handleSubmit,
                                            errors,
                                            touched,
                                            handleBlur,
                                            isValid,
                                            dirty,
                                        } = formik;
                                        return (
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Country *"
                                                            value={values.country}
                                                            hasError={errors.country && touched.country}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.country}
                                                            autoFocus={true}
                                                            id="country"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="mail"
                                                            placeholder="E-mail *"
                                                            value={values.email}
                                                            hasError={errors.email && touched.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.email}
                                                            autoFocus={true}
                                                            id="email"
                                                        />

                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="State *"
                                                            value={values.state}
                                                            hasError={errors.state && touched.state}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.state}
                                                            autoFocus={true}
                                                            id="state"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="City *"
                                                            value={values.city}
                                                            hasError={errors.city && touched.city}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.city}
                                                            autoFocus={true}
                                                            id="city"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="ZIP *"
                                                            value={values.zip}
                                                            hasError={errors.zip && touched.zip}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.zip}
                                                            autoFocus={true}
                                                            id="zip"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="province *"
                                                            value={values.province}
                                                            hasError={errors.province && touched.province}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.province}
                                                            autoFocus={true}
                                                            id="province"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Address (1) *"
                                                            value={values.addressLine1}
                                                            hasError={errors.addressLine1 && touched.addressLine1}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.addressLine1}
                                                            autoFocus={true}
                                                            id="addressLine1"
                                                        />
                                                    </div>
                                                    
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Address (2) "
                                                            value={values.addressLine2}
                                                            hasError={errors.addressLine2 && touched.addressLine2}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.addressLine2}
                                                            id="addressLine_2"
                                                        />
                                                    </div>
                                                    
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Contact No * "
                                                            value={values.mobile}
                                                            hasError={errors.mobile && touched.mobile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobile}
                                                            id="mobile"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Landmark * "
                                                            value={values.landmark}
                                                            hasError={errors.landmark && touched.landmark}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.landmark}
                                                            id="landmark"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Companyy"
                                                            value={values.company}
                                                            hasError={errors.company && touched.company}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.company}
                                                            id="company"
                                                        />
                                                    </div>
                                                    
                                                    <div className=''>
                                                        <button className="btn btn-danger pd-x-20 rounded-2 mt-4 " type="submit"> Update Billing </button>
                                                    </div>

                                                </div>
                                            </form>
                                        );
                                    }}
                                </Formik>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BillingAddress
