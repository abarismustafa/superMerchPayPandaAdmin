import React from 'react'
import { Link } from 'react-router-dom'
import CustomInputField from '../../../../../common/CustomInputField';
import { Formik } from 'formik';
import CustomTextArea from '../../../../../common/CustomTextArea';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';

const AddContactEnquiry = () => {
    const initialValues = {
        date: '',
        name: '',
        email: '',
        mobileNumber: '',
        message: '',
    };
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Contact Inquery",
        title_3: "Edit Contact Inquery",
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
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        }

        if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobileNumber)) {
            errors.mobileNumber = "Invalid Mobile Number";
        }

        if (!values.message) {
            errors.message = "Message is required";
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
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">Edit Customer Enquiry</h4>
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
                                                <div className="col-xl-6 mb-3">

                                                    <CustomInputField
                                                        type="date"
                                                        value={values.date}
                                                        hasError={errors.date && touched.date}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.date}
                                                        autoFocus={true}
                                                        id="date"
                                                        name="date"

                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="Name"
                                                        name="name"
                                                        placeholder="Name"

                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="email"
                                                        value={values.email}
                                                        hasError={errors.email && touched.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.email}
                                                        autoFocus={true}
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <CustomInputField
                                                        type="number"
                                                        value={values.mobileNumber}
                                                        hasError={errors.mobileNumber && touched.mobileNumber}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mobileNumber}
                                                        autoFocus={true}
                                                        id="mobileNumber"
                                                        name="mobileNumber"
                                                        placeholder="Mobile"
                                                    />

                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <CustomTextArea
                                                        type="text"
                                                        value={values.message}
                                                        hasError={errors.message && touched.message}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.message}
                                                        autoFocus={true}
                                                        id="message"
                                                        name="message"
                                                        placeholder="Message"
                                                    />
                                                </div>

                                            </div>
                                            <div>
                                                <Link to='/admin/contact-enquiry' className="btn btn-danger light ms-1">Cancel</Link>
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

export default AddContactEnquiry
