import { useState } from "react";
import { Formik } from "formik";
import { Link, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import CustomDropdown from "../../../../../common/CustomDropdown";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { areaAdd } from "../../../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";


const breadCrumbsTitle = {
    id: "1",
    title_1: "Zone Module",
    title_2: "Area",
    title_3: "Add Area",
}

function AddArea() {
    const [initialValues, setInitialValues] = useState({
        name: "",
        level: "",
        meta_title: '',
        meta_description: '',
        meta_keyword: '',
        is_active: ''
    });
    const params = useParams()
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "Enabled",
            value: "Enabled",
        },
        {
            name: "Disabled",
            value: "Disabled",
        },
    ];

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Country Successfully.`, {
            position: "top-center",
        });
    };


    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Name is required";
        }

        if (!values.level) {
            errors.level = "Level is required";
        }
        if (!values.meta_title) {
            errors.meta_title = "Meta Title is required";
        }
        if (!values.meta_description) {
            errors.meta_description = "Meta Description is required";
        }
        if (!values.meta_keyword) {
            errors.meta_keyword = "Meta Keyword is required";
        }
        return errors;
    };




    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await areaAdd(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                    }
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
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"}AREA MASTER
                                    </h4>
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
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Name *"
                                                            value={values.name}
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            autoFocus={true}
                                                            id="name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Level *"
                                                            value={values.level}
                                                            hasError={errors.level && touched.level}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.level}
                                                            autoFocus={true}
                                                            id="level"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" name="is_active" onChange={handleChange}>
                                                            <option selected> select Country</option>
                                                            <option value={'Enabled'}>Enabled</option>
                                                            <option value={'diasabled'}>diasabled</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Meta Title *"
                                                            value={values.meta_title}
                                                            hasError={errors.meta_title && touched.meta_title}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.meta_title}
                                                            autoFocus={true}
                                                            id="meta_title"

                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Meta Description *"
                                                            value={values.meta_description}
                                                            hasError={errors.meta_description && touched.meta_description}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.meta_description}
                                                            autoFocus={true}
                                                            id="meta_description"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Meta key Word *"
                                                            value={values.meta_keyword}
                                                            hasError={errors.meta_keyword && touched.meta_keyword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.meta_keyword}
                                                            autoFocus={true}
                                                            id="meta_keyword"
                                                        />
                                                    </div>

                                                </div>
                                                <div>
                                                    <Link to='/admin/area' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button className="btn btn-primary me-1" disabled={!isValid || !dirty}>
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        );
                                    }}
                                </Formik >

                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>

        </>
    )
}
export default AddArea