import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import CustomDropdown from "../../../../../common/CustomDropdown";

const initialValues = {
    providerName: "",
}
function AddProvider() {
    const itemList = [
        { name: "Airtel", value: "Airtel" },
        { name: "Jio", value: "Jio" },
        { name: "VI", value: "VI" },
    ];
    const validate = (values) => {
        let errors = {};
        if (!values.providerName) {
            errors.providerName = "Provider Name is required";
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
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">ADD PROVIDER</h4>
                                            </div>
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="--Select Service Name-- *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Provider  Name *"
                                                            value={values.providerName}
                                                            hasError={errors.providerName && touched.providerName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.providerName}
                                                            autoFocus={true}
                                                            id="providerName"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                    <Link to='/admin/provider' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button className="btn btn-primary me-1">Submit</button>
                                                </div>
                                                </div>
                                               
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Formik>
        </>
    )
}
export default AddProvider