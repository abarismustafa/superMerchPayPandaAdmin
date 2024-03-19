

import { Formik } from 'formik';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomInputField from '../../../../common/CustomInputField';
function LockAmount({ show5, handleClose5 }) {
    const initialValues = {
        SecurityPin: '',
        amount: ''
    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^[0-9]{10}$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.amount) {
            errors.amount = "Amount is required";
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

        if (!values.userName) {
            errors.userName = "User Name is required";
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
            <Modal show={show5} onHide={handleClose5} className='dilog-Locked' id="dilog-box">
                <Modal.Header closeButton>
                    <Modal.Title>Locked Amount</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                        <div className="col-x-12-6 mb-3">
                                            <CustomInputField
                                                type="number"
                                                value={values.amount}
                                                hasError={errors.amount && touched.amount}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                errorMsg={errors.amount}
                                                autoFocus={true}
                                                id="Amount"
                                                placeholder="Amount"
                                                name="amount"
                                            />
                                        </div>
                                        <div className="col-x-12-6 mb-3">
                                            <CustomInputField
                                                type="password"
                                                value={values.SecurityPin}
                                                hasError={errors.SecurityPin && touched.SecurityPin}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                errorMsg={errors.SecurityPin}
                                                autoFocus={true}
                                                id="SecurityPin"
                                                placeholder="Security Pin"
                                                name="SecurityPin"
                                            />
                                        </div>
                                        <div className='border-top'>
                                            <button className="btn btn-primary pd-x-20  rounded-2 " type="submit" style={{ marginTop: "15px" }}> Save </button>
                                        </div>

                                    </div>
                                </form>
                            );
                        }}
                    </Formik>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}
export default LockAmount