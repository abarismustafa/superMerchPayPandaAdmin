import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../CustomInputField";
import { clodinaryImage, currencyList, getUpdateProfile, languageList, staffUpdateProfile } from "../../api/login/Login";

function Profile() {
    const [conbo, setCombo] = useState(null)
    const [currencu, setCurency] = useState(null)
    const [data, setData] = useState(null)
    const [profileImage, setProfileImage] = useState()
    const [initialValues, setInitialValues] = useState({
        name: "",
        email: "",
        mobile: '',
        dob: '',
        latitude: '',
        longitude: "",
        currency: '',
        language_id: '',
        profile: ''
    });
    const params = useParams();
    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        if (!values.name) {
            errors.name = " Name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        }
        if (!values.mobile) {
            errors.mobile = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobile)) {
            errors.mobile = "Invalid Mobile Number";
        }
        if (!values.dob) {
            errors.dob = "Date Of Birth is required";
        }
        if (!values.latitude) {
            errors.latitude = "Latitude is required";
        }
        if (!values.longitude) {
            errors.longitude = "Longitude is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`Profile Successfully.`, {
            position: "top-center",
        });
    };

    const curencyidget = async () => {
        try {
            const data = await languageList()
            const dataCurrency = await currencyList()
            setCombo(data?.data)
            setCurency(dataCurrency?.data)
        } catch (error) {
            alert(error.message)
        }
    }
    const getUpdateData = async () => {
        try {
            const data = await getUpdateProfile()
            setData(data?.data)
        } catch (error) {
            alert(error.message)
        }
    }

    const imgs = new FormData();
    const colodinaryImage = async (e) => {
        setProfileImage(e.target.files[0])
        imgs.append("image", e.target.files[0]);
        try {
            const res = await clodinaryImage(imgs)
            // console.log(res?.data?.data?.url);
            setProfileImage(res?.data?.data?.url)
        } catch (error) {

        }
    }

    const submitForm = async (values) => {
        const clone = { ...values, profile: profileImage }
        try {
            const res = await staffUpdateProfile(clone)
            if (res?.statusCode == "200") {
                toastSuccessMessage();
            }
        } catch (error) {

        }
        // try {
        //     if (!params?.id) {
        //         try {
        //             // const res = await staffAdd(values);
        //             // if (res?.statusCode == "200") {
        //             //     toastSuccessMessage();
        //             // }
        //         } catch (error) {

        //         }

        //     } else {
        //         try {
        //             // await staffUpdate(params.id, values);
        //         } catch (error) {

        //         }

        //     }

        // } catch (error) {
        //     console.error("Error:", error);
        // }
    };

    useEffect(() => {
        curencyidget()
        getUpdateData()
    }, [])

    useEffect(() => {
        const ob = {
            name: data?.name,
            email: data?.email,
            mobile: data?.mobile,
            dob: data?.dob,
            latitude: data?.latitude,
            longitude: data?.longitude,
            language_id: data?.language_id
        }
        setInitialValues(ob)
    }, [data])


    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {/* {params?.id ? "UPDATE" : "ADD"}  STAFF */}
                                        UPDATE PROFILE
                                    </h4>
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
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.name}
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            autoFocus={true}
                                                            defaultValue={data?.name}
                                                            id="name"
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="file"
                                                            value={values.profile}
                                                            hasError={errors.profile && touched.profile}
                                                            onChange={colodinaryImage}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.profile}
                                                            autoFocus={true}
                                                            id="profile"
                                                            name='profile'
                                                            placeholder="Profile Image"
                                                        />

                                                        {/* <input type="file" name="profile" value={values.profile} onChange={colodinaryImage} /> */}
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
                                                            placeholder="Email"
                                                        />

                                                    </div>

                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.mobile}
                                                            hasError={errors.mobile && touched.mobile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobile}
                                                            autoFocus={true}
                                                            id="mobile"
                                                            name="mobile"
                                                            placeholder="Mobile Number"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="date"
                                                            value={values.dob}
                                                            hasError={errors.dob && touched.dob}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.dob}
                                                            autoFocus={true}
                                                            id="dob"
                                                            name="dob"

                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.latitude}
                                                            hasError={errors.latitude && touched.latitude}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.latitude}
                                                            autoFocus={true}
                                                            id="latitude"
                                                            name="latitude"
                                                            placeholder="Latitude"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values.longitude}
                                                            hasError={errors.longitude && touched.longitude}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.longitude}
                                                            autoFocus={true}
                                                            id="longitude"
                                                            name="longitude"
                                                            placeholder="Longitude"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="curruncy_id" name="currency" onChange={handleChange}
                                                            hasError={
                                                                errors.currency && touched.currency
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.currency && errors.currency
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> select Currency</option>
                                                            {currencu &&
                                                                currencu?.map((item) => {
                                                                    return (
                                                                        <option value={item?._id}>
                                                                            {item?.currency_name}
                                                                        </option>
                                                                    );
                                                                })}
                                                        </select>

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="curruncy_id" name="language_id" value={values.language_id} onChange={handleChange}
                                                            hasError={
                                                                errors.language_id && touched.language_id
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.language_id && errors.language_id
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> select Language</option>
                                                            {conbo &&
                                                                conbo?.map((item) => {
                                                                    return (
                                                                        <option value={item?._id}>
                                                                            {item?.name}
                                                                        </option>
                                                                    );
                                                                })}
                                                        </select>

                                                    </div>

                                                </div>
                                                <div>
                                                    {/* <Link to='/admin/satff' className="btn btn-danger light ms-1">Cancel</Link> */}
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"


                                                    >
                                                        Update
                                                    </button>
                                                    {/* <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"

                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button> */}
                                                </div>
                                            </form>
                                        );
                                    }}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default Profile