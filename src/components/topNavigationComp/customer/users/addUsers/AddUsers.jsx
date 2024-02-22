import { Formik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import CustomInputField from '../../../../../common/CustomInputField';

const AddUsers = () => {
    const initialValues = {
        date: '',
        firstName: '',
        middleName: '',
        lastName: '',
        profile: '',
        dob: '',
        longitude: '',
        latitude: '',
        ApiKey: '',
        password: '',
        email: '',
        mobileNumber: '',
        otp: '',
    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^[0-9]{10}$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.date) {
            errors.date = "Date is required";
        }

        // if (!values.email) {
        //     errors.email = "Email is required";
        // } else if (!regexEmail.test(values.email)) {
        //     errors.email = "Invalid Email";
        // }

        // if (!values.mobileNumber) {
        //     errors.mobileNumber = "Mobile Number is required";
        // } else if (!regexMobileNumber.test(values.mobileNumber)) {
        //     errors.mobileNumber = "Invalid Mobile Number";
        // }

        if (!values.firstName) {
            errors.firstName = "First Name Date is required";
        }

        // if (!values.user) {
        //     errors.user = "User To  is required";
        // }
        if (!values.middleName) {
            errors.middleName = "Middle Name is required";
        }
        if (!values.lastName) {
            errors.lastName = "Last Name is required";
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
        if (!values.email) {
            errors.email = "E-mail is required";
        }
        if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile Number is required";
          } else if (!regexMobileNumber.test(values.mobileNumber)) {
            errors.mobileNumber = "Invalid Mobile Number";
          }
       
        if (!values.otp) {
            errors.otp = "Otp is required";
        }

        // if (!values.panNumber) {
        //     errors.panNumber = "PAN Number is required";
        // } else if (!regexPanNumber.test(values.panNumber)) {
        //     errors.panNumber = "Invalid PAN Number";
        // }

        // if (!values.gstNumber) {
        //   errors.gstNumber = "GST Number is required";
        // } else if (!regexGstNumber.test(values.gstNumber)) {
        //   errors.gstNumber = "Invalid GST Number";
        // }

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
                                                            type="date"
                                                            value={values.date}
                                                            hasError={errors.date && touched.date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.date}
                                                            autoFocus={true}
                                                            id="date"
                                                        />

                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.firstName}
                                                            hasError={errors.firstName && touched.firstName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.firstName}
                                                            autoFocus={true}
                                                            id="firstName"
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.middleName}
                                                            hasError={errors.middleName && touched.middleName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur} s
                                                            errorMsg={errors.middleName}
                                                            autoFocus={true}
                                                            id="middleName"
                                                            placeholder="Middle Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        {/* <label htmlFor="exampleFormControlInput2" className="form-label">Last Name<span className="text-danger">*</span></label> */}
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.lastName}
                                                            hasError={errors.lastName && touched.lastName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.lastName}
                                                            autoFocus={true}
                                                            id="lastName"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.profile}
                                                            hasError={errors.profile && touched.profile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.profile}
                                                            autoFocus={true}
                                                            id="profile"
                                                            placeholder="Profile"
                                                        />

                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.dob}
                                                            hasError={errors.dob && touched.dob}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.dob}
                                                            autoFocus={true}
                                                            id="dob"
                                                            placeholder="DOB "
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
                                                            placeholder="latitude"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.ApiKey}
                                                            hasError={errors.ApiKey && touched.ApiKey}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.ApiKey}
                                                            autoFocus={true}
                                                            id="ApiKey"
                                                            placeholder="Api Key"
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
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.mobileNumber}
                                                            hasError={errors.mobileNumber && touched.mobileNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobileNumber}
                                                            autoFocus={true}
                                                            id="mobile"
                                                            placeholder="Mobile"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.otp}
                                                            hasError={errors.otp && touched.otp}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.otp}
                                                            autoFocus={true}
                                                            id="otp"
                                                            placeholder="OTP"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.adhaar}
                                                            hasError={errors.adhaar && touched.adhaar}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.adhaar}
                                                            autoFocus={true}
                                                            id="adhaar"
                                                            placeholder="Adhaar"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/admin/user' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button className="btn btn-primary me-1">Submit</button>
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
