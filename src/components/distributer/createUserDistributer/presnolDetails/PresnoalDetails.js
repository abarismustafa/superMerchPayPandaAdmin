import { Formik } from "formik";
import CustomInputField from "../../../../common/CustomInputField";
import CustomDropdown from "../../../../common/CustomDropdown";
import { useEffect, useState } from "react";

function Presnoaldetails({ value, submitForm ,handleInput_B}) {
    const [data, setData] = useState()
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "Maharashtra",
            value: "Maharashtra",
        },
        {
            name: "Delhi",
            value: "Delhi",
        },
        {
            name: "Tamil Nadu",
            value: "Tamil Nadu",
        },
        {
            name: "Gujarat",
            value: "Gujarat",
        },
    ];

    const validate = (values) => {
        let errors = {};

        if (!values.address) {
            errors.address = "Address is required";
        }

        if (!values.city) {
            errors.city = "City Name is required";
        }



        if (!values.pincode) {
            errors.pincode = "Pincode is required";
        }

        if (!values.state) {
            errors.state = "State is required";
        }

        if (!values.lockAmount) {
            errors.lockAmount = "Lock Amount is required";
        }

        if (!values.officeAddress) {
            errors.officeAddress = "Office Address is required";
        }

        return errors;
    };

    // useEffect(() => {
    //     const values = {
    //         ...value
    //     }
    //     setData(values);
    // }, [value])

    const changeHandle = (selectedData) => {
        // TODO
    };
    return (
        <>

            <Formik
                initialValues={value}
                validate={validate}
                // onSubmit={submitForm}
                className="tbl-captionn"
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
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Address * "
                                        value={value?.presentAddr}
                                        hasError={errors.presentAddr && touched.presentAddr}
                                        onChange={handleInput_B}
                                        onBlur={handleBlur}
                                        errorMsg={errors.presentAddr}
                                        id="presentAddr"
                                        name='presentAddr'
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="City"
                                        value={data?.city}
                                        hasError={errors.city && touched.city}
                                        onChange={handleInput_B}
                                        onBlur={handleBlur}
                                        errorMsg={errors.city}
                                        id="city"
                                        name="city"
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Pincode"
                                        value={data?.pincode}
                                        hasError={errors.pincode && touched.pincode}
                                        onChange={handleInput_B}
                                        onBlur={handleBlur}
                                        errorMsg={errors.pincode}
                                        id="pincode"
                                        name="pinCode"
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="State"
                                        value={data?.state}
                                        hasError={errors.state && touched.state}
                                        onChange={handleInput_B}
                                        onBlur={handleBlur}
                                        errorMsg={errors.state}
                                        id="state"
                                        name="state"
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <select className="form-select" aria-label="Default select example" id="is_active" name="is_active"
                                        defaultValue={data?.is_active}
                                        onChange={handleInput_B}
                                    >
                                        <option selected> Select State Id</option>
                                        <option value={data?.state}> Select State By Id</option>
                                    </select>

                                </div>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </>
    );
}
export default Presnoaldetails;
