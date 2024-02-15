import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";

function AddPaymentMethod() {
    const initialValues = {
        methodType: ''
    };
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Payment Method",
        title_3: "Add Payment Method",
    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^[0-9]{10}$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.methodType) {
            errors.methodType = "Method Type is required";
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
                                    <h4 className="heading mb-0">ADD PAYMENT METHOD</h4>
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
                                                            type="text"
                                                            value={values.methodType}
                                                            hasError={errors.methodType && touched.methodType}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.methodType}
                                                            autoFocus={true}
                                                            id="methodType"
                                                            name="methodType"
                                                            placeholder="Method Type"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-4 mt-2">
                                                        <div>
                                                            <Link to='/admin/payment-method' className="btn btn-danger light ms-1">Cancel</Link>
                                                            <button className="btn btn-primary me-1">Submit</button>
                                                        </div>
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
export default AddPaymentMethod