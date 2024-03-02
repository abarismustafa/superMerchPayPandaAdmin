import { Formik } from 'formik';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import CustomInputField from '../../../../../common/CustomInputField';
import { addUsers } from '../../../../../api/login/Login';
import { ToastContainer, toast } from 'react-toastify';

const AddUsers = () => {
    const navigate = useNavigate()
    const [initialValues, setinitialValues] = useState({
        name: "",
        email: "",
        profile: "",
        mobile: "",
        dob: "",
        latitude: "",
        longitude: "",
        password: "",
        emailVerified: false,
        mobileVerified: false,
        is_otp: false,
        is_kyc: false,
        adhaar_number: "",
        pan_number: "",
        transaction_mode: "",
        user_type_id: "",
    })

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^[0-9]{10}$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexAdhaar = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/ 
       
        if (!values.name) {
            errors.name = "Name  is required";
        }
        if (!values.email) {
            errors.email = "E-mail is required";
        }else if(!regexEmail.test(values.email)){
            errors.email = "Invalid email Id";
        }
        if (!values.mobile) {
            errors.mobile = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobile)) {
            errors.mobile = "Invalid Mobile Number";
        }
        if (!values.profile) {
            errors.profile = "Profile is required";
        }
        if (!values.dob) {
            errors.dob = "DOB is Required";
        }
        if (!values.longitude) {
            errors.longitude = "Longitude is required";
        }
        if (!values.latitude) {
            errors.latitude = "Latitude is required";
        }
        if (!values.ApiKey) {
            errors.ApiKey = "Api Key is required";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        
        
        if (!values.otp) {
            errors.otp = "Otp is required";
        }
        if (!values.pan_number) {
            errors.pan_number = "PAN Number is required";
        } else if (!regexPanNumber.test(values.pan_number)) {
            errors.pan_number = "Invalid PAN Number";
        }
        if (!values.adhaar_number) {
            errors.adhaar_number = "Adhaar Number is required";
        } else if (!regexAdhaar.test(values.adhaar_number)) {
            errors.adhaar_number = "Invalid Adhaar Number";
        }

        // if (!values.gstNumber) {
        //   errors.gstNumber = "GST Number is required";
        // } else if (!regexGstNumber.test(values.gstNumber)) {
        //   errors.gstNumber = "Invalid GST Number";
        // }

        return errors;
    };

    const handleChange = (e) => {
        const clone = { ...initialValues }
        clone[e.target.name] = e.target.value
        validate(clone)
        setinitialValues(clone)
    }
    const params = useParams()
    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Users Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        console.log(values);
        try {
            await addUsers(values);
            toastSuccessMessage();
            setTimeout(() => {
                navigate(`/admin/user`)
            }, 5000)
        } catch (error) {

        }
    };

    return (
        <>
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={""} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">ADD Retailer Income</h4>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={submitForm}
                                    enableReinitialize
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
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.name}
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            autoFocus={true}
                                                            id="name"
                                                            placeholder="Name"
                                                            name='name'
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="email"
                                                            value={values.email}
                                                            hasError={errors.email && touched.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.email}
                                                            autoFocus={true}
                                                            id="email"
                                                            placeholder="Email"
                                                            name='email'
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.mobile}
                                                            hasError={errors.mobile && touched.mobile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobile}
                                                            autoFocus={true}
                                                            id="mobile"
                                                            placeholder="Mobile"
                                                            name='mobile'
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            value={values.dob}
                                                            hasError={errors.dob && touched.dob}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.dob}
                                                            autoFocus={true}
                                                            id="dob"
                                                            placeholder="DOB"
                                                            name='dob'
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.latitude}
                                                            hasError={errors.latitude && touched.latitude}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.latitude}
                                                            autoFocus={true}
                                                            id="latitude"
                                                            placeholder="Latitude"
                                                            name='latitude'
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.longitude}
                                                            hasError={errors.longitude && touched.longitude}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.longitude}
                                                            autoFocus={true}
                                                            id="longitude"
                                                            placeholder="Longitude"
                                                            name='longitude'
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="password"
                                                            value={values.password}
                                                            hasError={errors.password && touched.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.password}
                                                            autoFocus={true}
                                                            id="password"
                                                            placeholder="Password"
                                                            name='password'
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.adhaar_number}
                                                            hasError={errors.adhaar_number && touched.adhaar_number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.adhaar_number}
                                                            autoFocus={true}
                                                            id="adhaar_number"
                                                            placeholder="Aadhar Number (Space Must After 4 digit)"
                                                            name='adhaar_number'
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.pan_number}
                                                            hasError={errors.pan_number && touched.pan_number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.pan_number}
                                                            autoFocus={true}
                                                            id="pan_number"
                                                            placeholder="Pan Number"
                                                            name='pan_number'
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <div className="dropdownWrapper">
                                                            <select className="form-select" aria-label="Default select example" name="emailVerified: " onChange={handleChange} >
                                                                <option selected>User Type</option>
                                                                <option value={'false'}>No</option>
                                                                <option value={'true'}>Yes</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <div className="dropdownWrapper">
                                                            <select className="form-select" aria-label="Default select example" name="emailVerified: " onChange={handleChange} >
                                                                <option selected>Email Verification</option>
                                                                <option value={'false'}>No</option>
                                                                <option value={'true'}>Yes</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <div className="dropdownWrapper">
                                                            <select className="form-select" aria-label="Default select example" name="mobileVerified: " onChange={handleChange} >
                                                                <option selected>Mobile Verification</option>
                                                                <option value={'false'}>No</option>
                                                                <option value={'true'}>Yes</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <div className="dropdownWrapper">
                                                            <select className="form-select" aria-label="Default select example" name="is_otp: " onChange={handleChange} >
                                                                <option selected>Is Otp Verification</option>
                                                                <option value={'false'}>No</option>
                                                                <option value={'true'}>Yes</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <div className="dropdownWrapper">
                                                            <select className="form-select" aria-label="Default select example" name="mobileVerified: " onChange={handleChange} >
                                                                <option selected>Is Mobile Verification</option>
                                                                <option value={'false'}>No</option>
                                                                <option value={'true'}>Yes</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <div className="dropdownWrapper">
                                                            <select className="form-select" aria-label="Default select example" name="transaction_mode" onChange={handleChange} >
                                                                <option selected>transaction_mode</option>
                                                                <option value={'online'}>Online</option>
                                                                <option value={'offline'}>Offline</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/admin/user' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
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

export default AddUsers
