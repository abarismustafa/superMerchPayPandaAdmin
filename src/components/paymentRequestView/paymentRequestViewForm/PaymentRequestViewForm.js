import { useState } from "react";
import PaymentRequestViewDownload from "./paymentRequestViewDownload/PaymentRequestViewDownload"
import { FaDownload, FaSearch } from "react-icons/fa";
import CustomDropdown from "../../../common/CustomDropdown";
import CustomInputField from "../../../common/CustomInputField";
import { Formik } from "formik";
const initialValues = {
    from: '',
    to: '',
}
function PaymentRequestViewForm() {
    const [modalShow, setModalShow] = useState(false);
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
        if (!values.from) {
            errors.from = "From Date is required";
        }
        if (!values.to) {
            errors.to = "To Date is required";
        }



        return errors;
    };


    const submitForm = (selectedData) => {
        // TODO
    };
    const changeHandle = (selectedData) => {
        // TODO
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
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="From *"
                                                            value={values.from}
                                                            hasError={errors.from && touched.from}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.from}
                                                            autoFocus={true}
                                                            id="from"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="To *"
                                                            value={values.to}
                                                            hasError={errors.to && touched.to}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.to}
                                                            autoFocus={true}
                                                            id="to"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Select KYC Status *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3 mg-sm-t-25">
                                                        <div className="form-group">
                                                            <button className="btn btn-primary pd-x-20 me-2  me-2-2" type="button" fdprocessedid="4y92n"><i className="fas fa-search" /> Search</button>
                                                            <button className="btn btn-danger pd-x-20 me-2-2" type="button" onClick={() => setModalShow(true)}> <i className="fas fa-download" /> Download</button>
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