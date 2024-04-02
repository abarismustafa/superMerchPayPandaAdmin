import { useState } from "react";
import PaymentRequestViewDownload from "./paymentRequestViewDownload/PaymentRequestViewDownload"
import { FaDownload, FaSearch } from "react-icons/fa";
import CustomDropdown from "../../../common/CustomDropdown";
import CustomInputField from "../../../common/CustomInputField";
import { Formik } from "formik";
import Loadar from "../../../common/loader/Loader";
const initialValues = {
    from: '',
    to: '',
}
function PaymentRequestViewForm({ submitForm, loading, page, count, token, userData }) {
    const [modalShow, setModalShow] = useState(false);
    const [initialValues, setInitialValues] = useState(
        {
            user: '',
            user_id: token,
            count: count,
            page: page,
            min_amt:  null,
            max_amt:  null,
            end_date: '',
            start_date: '',
            bank: "",
            method: "",
            status: "",
        }
    )

    const validate = (values) => {
        let errors = {};
        /* if (!values.from) {
            errors.from = "From Date is required";
        }
        if (!values.to) {
            errors.to = "To Date is required";
        } */
        return errors;
    };




    return (
        <>
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
                    } = formik;

                    return (
                        <div className="row m-4">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">PAYMENT REQUEST VIEW</h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="Start Date *"
                                                            value={values.start_date}
                                                            hasError={errors.start_date && touched.start_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.start_date}
                                                            autoFocus={true}
                                                            id="start_date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="End Date *"
                                                            value={values.end_date}
                                                            hasError={errors.end_date && touched.end_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.end_date}
                                                            autoFocus={true}
                                                            id="end_date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="number"
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
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Max Amount *"
                                                            value={values.max_amt}
                                                            hasError={errors.max_amt && touched.max}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.max_amt}
                                                            autoFocus={true}
                                                            id="max_amt"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Bank Name *"
                                                            value={values.bank}
                                                            hasError={errors.bank && touched.bank}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.bank}
                                                            autoFocus={true}
                                                            id="bank"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="user" name="user" value={values.user} onChange={handleChange}
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
                                                            {loading && <Loadar />}
                                                            {userData &&
                                                                userData?.map((item,i) => {
                                                                    return (
                                                                            
                                                                            <option value={item?._id} key={i}> {item?.name}</option>
                                                                    );
                                                                })}
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="method" name="method" value={values.method} onChange={handleChange}
                                                            hasError={
                                                                errors.method && touched.method
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.method && errors.method
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected disabled> Select Method</option>
                                                            <option value={"NEFT"}>NEFT</option>
                                                            <option value={"RTGS"}>RTGS</option>

                                                        </select>
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="status" name="status" value={values.status} onChange={handleChange}
                                                            hasError={
                                                                errors.status && touched.status
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.status && errors.status
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected disabled>select Status</option>
                                                            <option value={"Approved"}>Approved</option>
                                                            <option value={"Pending"}>Pendig</option>
                                                            <option value={"Reject"}>Reject</option>

                                                        </select>
                                                    </div>
                                                   

                                                    <div className="col-sm-3 mg-sm-t-25">
                                                        <div className="form-group">
                                                            <button className="btn btn-primary pd-x-20  " type="submit"><i className="fas fa-search"></i> Search</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <PaymentRequestViewDownload show={modalShow}
                                onHide={() => setModalShow(false)} />
                        </div>
                    );
                }}
            </Formik>


            {/* <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">ADD  Pending Transaction Report</h4>
                                </div>
                                <form action="" method="get">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label className="form-label">From: <span className="tx-danger">*</span></label>
                                                <input className="form-control fc-datepicker hasDatepicker" type="date" />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label className="form-label">To: <span className="tx-danger">*</span></label>
                                                <input className="form-control fc-datepicker hasDatepicker" type="date" />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label className="form-label">Status:</label>
                                                <select className="form-control select2 select2-hidden-accessible" id="other_id" name="status_id" style={{ width: '100%' }} data-select2-id="other_id" tabIndex={-1} aria-hidden="true">
                                                    <option value={0} selected data-select2-id={2}> All Status</option>
                                                    <option value={1}>Success</option>
                                                    <option value={2}>Failure</option>
                                                    <option value={3}>Pending</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 mg-sm-t-25">
                                            <div className="form-group">
                                                
                                                <br />
                                                <button className="btn btn-primary pd-x-20 me-2  me-2-2" type="button" fdprocessedid="4y92n"><i className="fas fa-search" /> Search</button>
                                                <button className="btn btn-danger pd-x-20 me-2-2" type="button" onClick={() => setModalShow(true)}> <i className="fas fa-download" /> Download</button>
                                            </div>
                                        </div>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div >

                </div >
            </div> */}
        </>
    )
}
export default PaymentRequestViewForm