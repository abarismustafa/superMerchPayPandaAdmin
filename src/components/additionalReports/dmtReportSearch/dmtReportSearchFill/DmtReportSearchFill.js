import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import CustomDropdown from '../../../../common/CustomDropdown';
import { fillterDmtTxnReport, getDmtTxnReport, usersList } from '../../../../api/login/Login';
import { toast } from 'react-toastify';
import Loadar from '../../../../common/loader/Loader';

// const initialValues = { from: "", to: "" }

function DmtReportSearchFill({ submitForm, userData, page, count, token, loading }) {


    const [initialValues, setInitialValues] = useState(
        {
            user: '',
            user_id: token,
            count: count,
            page: page,
            min_amt: 0,
            max_amt: 0,
            end_date: '',
            start_date: ''
        }
    )

    const validate = (values) => {
        let errors = {};

        /*  if (!values.start_date) {
             errors.start_date = "Start Date  is required";
         }
         if (!values.end_date) {
             errors.end_date = "End Date  is required";
         }
         if (!values.min_amt) {
             errors.min_amt = "Min Amt  is required";
         }
         if (!values.max_amt) {
             errors.max_amt = "Max Amt is required";
         } */
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`DMT Txn Search Successfully.`, {
            position: "top-center",
        });
    };



    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Filter  </b></h4>
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
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-4 mb-4">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="Start Date*"
                                                            value={values.start_date}
                                                            hasError={errors.start_date && touched.start_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.start_date}
                                                            autoFocus={true}
                                                            id="start_date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-4">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="End Date*"
                                                            value={values.end_date}
                                                            hasError={errors.end_date && touched.end_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.end_date}
                                                            autoFocus={true}
                                                            id="end_date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-4">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Min Amount*"
                                                            value={values.min_amt}
                                                            hasError={errors.min_amt && touched.min_amt}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.min_amt}
                                                            autoFocus={true}
                                                            id="min_amt"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-4">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Max Amount*"
                                                            value={values.max_amt}
                                                            hasError={errors.max_amt && touched.max_amt}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.max_amt}
                                                            autoFocus={true}
                                                            id="max_amt"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-4">
                                                        <select className="form-select" aria-label="Default select example" id="user_id" name="user" value={values.user} onChange={handleChange}
                                                            hasError={
                                                                errors.user && touched.user
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.user && errors.user
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> Select User</option>
                                                            {userData &&
                                                                userData?.map((item) => {
                                                                    return (
                                                                        <>
                                                                            {loading && <Loadar />}
                                                                            <option value={item?._id}> {item?.name}</option>
                                                                        </>
                                                                    );
                                                                })}
                                                        </select>

                                                    </div>


                                                    <div className="col-lg-4 col-md-4 mg-t-10 mg-sm-t-25">
                                                        <button className="btn btn-primary pd-x-20  " type="submit"><i className="fas fa-search"></i> Search</button>
                                                        {/* <button className="btn btn-danger pd-x-20 " type="button" data-toggle="modal" data-target="#transaction_download_model"><i className="fas fa-export"></i> Export</button> */}
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

export default DmtReportSearchFill