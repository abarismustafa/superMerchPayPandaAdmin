import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import { adddmtcomm, getdmtcommagId, getdmtcommscheme, updatedmtcommagId } from '../../../../api/login/Login';
import { ToastContainer, toast } from 'react-toastify';
function DmtCommisionForm() {
    const [comboData, setcomboData] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    const [initialValues, setInitialValues] = useState({
        dmt_comm_id: "",
        start_amt: "",
        end_amt: "",
        commision: "",
        commision_type: "",
        distributor_comm: "",
        distributor_comm_type: "",
        master_distributer_com: "",
        master_distributer_com_type: "",
        isActive: false

    });


    const validate = (values) => {
        let errors = {};

        if (!values.start_amt) {
            errors.start_amt = "Start Amount is required";
        }

        if (!values.end_amt) {
            errors.end_amt = "End Amount  is required";
        }
        if (!values.commision) {
            errors.commision = "Commision  is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} DMT Commision Successfully.`, {
            position: "top-center",
        });
    };
    const submitForm = async (values) => {

        const clone = { ...values }
        console.log(clone);
        try {
            if (!params?.id) {
                try {
                    await adddmtcomm(clone);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/admin/dmt-commision')
                    }, 5000);
                } catch (error) {

                }

            } else {
                try {
                    const d = await updatedmtcommagId(params.id, values);
                    console.log(d.data);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/admin/dmt-commision')
                    }, 5000);
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }

    }

    useEffect(() => {
        const getSchCombo = async () => {
            const comboRes = await getdmtcommscheme()
            setcomboData(comboRes?.data)
        }
        getSchCombo()
    }, [params.id])
    useEffect(() => {
        const fetchUserType = async () => {
            try {
                if (params?.id) {
                    const response = await getdmtcommagId(params.id);
                    const userTypeData = response.data;
                    setInitialValues(userTypeData);
                } else {
                    setInitialValues({
                        dmt_comm_id: "",
                        start_amt: "",
                        end_amt: "",
                        commision: "",
                        commision_type: "",
                        distributor_comm: "",
                        distributor_comm_type: "",
                        master_distributer_com: "",
                        master_distributer_com_type: "",
                        isActive: false
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
            <ToastContainer />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b> ADD DMT Commision  - </b></h4>
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
                                                            type="number"
                                                            value={values.start_amt}
                                                            hasError={errors.start_amt && touched.start_amt}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.start_amt}
                                                            autoFocus={true}
                                                            id="start_amt"
                                                            placeholder="Start Amount"
                                                            name="start_amt"

                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.end_amt}
                                                            hasError={errors.end_amt && touched.end_amt}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.end_amt}
                                                            autoFocus={true}
                                                            id="end_amt"
                                                            placeholder="End Amount"
                                                            name="end_amt"

                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values.commision}
                                                            hasError={errors.commision && touched.commision}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.commision}
                                                            autoFocus={true}
                                                            id="commision"
                                                            placeholder="Commision"
                                                            name="commision"

                                                        />
                                                    </div>
                                                    <div className='col-xl-4 mb-3'>
                                                        <select class="form-select" aria-label="Default select example" id="commision_type" name="commision_type" onChange={handleChange}><option disabled selected defaultValue={values?.commision_type}> Select Commision Type</option>
                                                            <option value={"Percent"}>{"Percent"}</option>
                                                            <option value={"Flat"}>{"Flat"}</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values.distributor_comm}
                                                            hasError={errors.distributor_comm && touched.distributor_comm}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.distributor_comm}
                                                            autoFocus={true}
                                                            id="distributor_comm"
                                                            placeholder="Distributor Commision"
                                                            name="distributor_comm"

                                                        />
                                                    </div>

                                                    <div className='col-xl-4 mb-3'>
                                                        <select class="form-select" aria-label="Default select example" id="distributor_comm_type" name="distributor_comm_type" onChange={handleChange}><option disabled selected defaultValue={values?.distributor_comm_type}> Select  Distributer Commision Type</option>
                                                            <option value={"Percent"}>{"Percent"}</option>
                                                            <option value={"Flat"}>{"Flat"}</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values.master_distributer_com}
                                                            hasError={errors.master_distributer_com && touched.master_distributer_com}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.master_distributer_com}
                                                            autoFocus={true}
                                                            id="master_distributer_com"
                                                            placeholder="Master Dist Commision"
                                                            name="master_distributer_com"

                                                        />
                                                    </div>

                                                    <div className='col-xl-4 mb-3'>
                                                        <select class="form-select" aria-label="Default select example" id="master_distributer_com_type" name="master_distributer_com_type" onChange={handleChange}><option disabled selected defaultValue={values?.master_distributer_com_type}> select Master Dist Commision Type</option>
                                                            <option value={"Percent"}>{"Percent"}</option>
                                                            <option value={"Flat"}>{"Flat"}</option>
                                                        </select>
                                                    </div>
                                                    {/* <div className='col-xl-4 mb-3'>
                                                        <select class="form-select" aria-label="Default select example" id="dmt_comm_id" name="dmt_comm_id"  onChange={handleChange}>
                                                            {comboData?.map((item, i) => {
                                                                return <><option value={item?._id}>{item?.name}</option>

                                                                </>
                                                            })}
                                                        </select>
                                                    </div> */}
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="dmt_comm_id" name="dmt_comm_id" value={values.dmt_comm_id} onChange={handleChange}
                                                            hasError={
                                                                errors.dmt_comm_id && touched.dmt_comm_id
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.dmt_comm_id && errors.dmt_comm_id
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> select DMT Commision</option>
                                                            {comboData &&
                                                                comboData?.map((item) => {
                                                                    return (
                                                                        <option value={item?._id}>
                                                                            {item?.name}
                                                                        </option>
                                                                    );
                                                                })}
                                                        </select>

                                                    </div>
                                                    <div className='col-xl-4 mb-3'>
                                                        <select class="form-select" aria-label="Default select example" id="isActive" name="isActive" onChange={handleChange}><option disabled> select Status</option><option value={true}>Active</option><option value={false}>Inactive</option></select>
                                                    </div>
                                                    <div><Link class="btn btn-danger light ms-1" to="/admin/dmt-commision">Cancel</Link><button
                                                        className="btn btn-primary me-1"
                                                        type="submit"

                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button></div>

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

export default DmtCommisionForm