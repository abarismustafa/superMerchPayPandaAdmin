import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import { adddmtcommscheme, getdmtcommschemeagId, updatedmtcommschemeagId } from '../../../../api/login/Login';
import { toast } from 'react-toastify';

function DmtcommschForm() {
    const params = useParams()
    const [initialValues, setInitialValues] = useState({
        name: "",
        isActive: false,
        
    });
    const validate = (values) => {
        let errors = {};

        if (!values.name) {
            errors.name = "Scheme Name is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} DMT Scheme Successfully.`, {
            position: "top-center",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                  const d =   await adddmtcommscheme(values);
                //   console.log(d);
                    toastSuccessMessage();
                   /*  setTimeout(() => {
                        navigate('/admin/add-commision-scheme')
                    }, 5000); */
                } catch (error) {

                }

            } else {
                try {
                    await updatedmtcommschemeagId(params.id, values);
                    toastSuccessMessage();
                    /* setTimeout(() => {
                        navigate('/admin/user-type')
                    }, 5000); */
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }

    }
    useEffect(() => {
        const fetchUserType = async () => {
            try {
                if (params?.id) {
                    const response = await getdmtcommschemeagId(params.id);
                    const userTypeData = response.data;
                    setInitialValues(userTypeData);
                } else {
                    setInitialValues({
                        name: "",
                        isActive: false,
                    });
                }
            } catch (error) {
                console.error("Error fetching User type:", error);
            }
        };
        fetchUserType();
    }, [params?.id]);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={""} />

            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b> ADD DMT Commision SCHEME  - </b></h4>
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

                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.name}
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            autoFocus={true}
                                                            id="name"
                                                            placeholder="Scheme Name"
                                                            name="name"
                                                        />
                                                    </div>


                                                    <div className='col-xl-4 mb-3'>
                                                        <select class="form-select" aria-label="Default select example" id="isActive" name="isActive"
                                                            defaultValue={values?.isActive}onChange={handleChange}><option disabled> select Status</option><option value={true}>Active</option><option value={false}>Inactive</option></select>
                                                    </div>
                                                    <div>
                                                    <Link
                                                        to="/admin/dmt-commision-scheme"
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

export default DmtcommschForm