import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CustomDropdown from "../../../common/CustomDropdown";


const itemList = [
    {
        name: "Active",
        value: "Active",
    },
    {
        name: "De-Active",
        value: "De-Active",
    },
];
function FormServicePermission() {
    const [conbo, setCombo] = useState(null)
    const [initialValues, setInitialValues] = useState({
        service_id: '',
        area_id: "",
        zone_id: "",
        parent_id: '',
        is_active: ''
    });
    const params = useParams();
    const validate = (values) => {
        let errors = {};
        if (!values.service_id) {
            errors.service_id = "Service Id is required";
        }
        if (!values.area_id) {
            errors.area_id = "Area Id is required";
        }
        if (!values.parent_id) {
            errors.parent_id = "Parent Id is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Country Successfully.`, {
            position: "top-center",
        });
    };

    const serviceidget = async () => {
        try {
            // const data = await getCountryAdd()
            // setCombo(data?.data)

        } catch (error) {
            alert(error.message)
        }
    }

    const submitForm = async (values) => {

        try {
            if (!params?.id) {
                try {
                    // const res = await countryAdd(values);
                    // if (res?.statusCode == "200") {
                    //     toastSuccessMessage();
                    // }
                } catch (error) {

                }

            } else {
                try {
                    // await countryUpdate(params.id, values);
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        serviceidget()
    }, [])

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    // const response = await getcountry(params.id);
                    // const currencyData = response.data;
                    // setInitialValues(currencyData);
                } else {
                    setInitialValues({
                        name: "",
                        code: "",
                        curruncy_id: "",
                    });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"} service area permision
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
                                                        <select className="form-select" aria-label="Default select example" id="curruncy_id" name="curruncy_id" value={values.curruncy_id} onChange={handleChange}
                                                            hasError={
                                                                errors.curruncy_id && touched.curruncy_id
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.curruncy_id && errors.curruncy_id
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> select Service</option>
                                                            {conbo &&
                                                                conbo?.map((item) => {
                                                                    return (
                                                                        <option value={item?._id}>
                                                                            {item?.currency_name}
                                                                        </option>
                                                                    );
                                                                })}
                                                        </select>

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="curruncy_id" name="curruncy_id" value={values.curruncy_id} onChange={handleChange}
                                                            hasError={
                                                                errors.curruncy_id && touched.curruncy_id
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.curruncy_id && errors.curruncy_id
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> select Area</option>
                                                            {conbo &&
                                                                conbo?.map((item) => {
                                                                    return (
                                                                        <option value={item?._id}>
                                                                            {item?.currency_name}
                                                                        </option>
                                                                    );
                                                                })}
                                                        </select>

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomDropdown
                                                            itemList={itemList}
                                                            placeholder="Select Zone"
                                                            isSingleSelect={false}
                                                            icon={true}
                                                        // onChange={changeHandle}
                                                        />

                                                    </div>
                                                </div>
                                                <div>
                                                    <Link
                                                        to="/admin/country"
                                                        className="btn btn-danger light ms-1"
                                                    >
                                                        Cancel
                                                    </Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
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
export default FormServicePermission