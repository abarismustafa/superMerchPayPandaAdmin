import React from 'react'
import { Formik } from 'formik';
import CustomInputField from '../../../../common/CustomInputField';
function ShipingAddress() {
    const initialValues = {
        country: "",
        state: "",
        city: "",
        zip: "",
        province: "",
        email: "",
        adressLine_1: "",
        adressLine_2: "",
        mobile: "",
        landmark: "",
        company: "",
    }
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "Abc",
            value: "Abc",
        },
        {
            name: "Abcd",
            value: "Abcd",
        },
        {
            name: "Abce",
            value: "Abce",
        },
        {
            name: "Abcf",
            value: "Abcf",
        },
    ];

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

        if (!values.adressLine_1) {
            errors.adressLine_1 = "Sender SMS is required";
        }

        if (!values.adressLine_2) {
            errors.adressLine_2 = "Maintanence Message is required";
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
                                    <h4 className="heading mb-0 border p-1 rounded"><b>Shipping Address</b></h4>
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
                                                            value={values.adressLine_1}
                                                            hasError={errors.adressLine_1 && touched.adressLine_1}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.adressLine_1}
                                                            autoFocus={true}
                                                            id="adressLine_1"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Address (2) "
                                                            value={values.adressLine_2}
                                                            hasError={errors.adressLine_2 && touched.adressLine_2}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.adressLine_2}
                                                            id="adressLine_2"
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

export default ShipingAddress
