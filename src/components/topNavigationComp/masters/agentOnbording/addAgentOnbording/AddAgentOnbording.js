import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { useState } from "react";
import { toast } from "react-toastify";
import { addAgentOnboarding } from "../../../../../api/login/Login";
const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Agent Onboarding ",
    title_3: "Add  Agent Onboarding ",
}
function AddAgentOnbording() {
    const [initialValues, setInitialValues] = useState({
        id: "123456789",
        first_name: "John",
        last_name: "Doe 1",
        mobile_number: "9876543211",
        email: "john.doe@example.com",
        aadhar_number: "123456789012",
        pan_number: "ABCDE1234F",
        company: "ABC Insurance",
        pin_code: 560001,
        address: "123, Main Street",
        bank_account_number: "9876543210123456",
        ifsc: "ABCD0123456",
        state_id: "65d7223dc940711405e73149",
        district_id: "65d742595d11a929d0ad84f9",
        city: "Bangalore",
        user_id: "user123",
        status_id: true,
        apiresponse: "Success",
        meta_title: "Agent Profile",
        meta_description: "Agent profile details",
        meta_keyword: "agent, insurance, profile",
        meta_image: {
            "public_id": "image123",
            "url": "https://example.com/image.jpg"
        },
        language_id: "65c23e32777ff4808ef0f1c9"
    });
    const params = useParams()
    const navigate = useNavigate()

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^[0-9]{10}$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
        const regexAdhar = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;


        if (!values.userName) {
            errors.userName = "User Name is required";
        }
        if (!values.date) {
            errors.date = "Date is required";
        }
        if (!values.firstName) {
            errors.firstName = "First Name is required";
        }
        if (!values.middleName) {
            errors.middleName = "Middle Name is required";
        }
        if (!values.lastName) {
            errors.lastName = "Last Name is required";
        }
        if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobileNumber)) {
            errors.mobileNumber = "Invalid Mobile Number";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        }

        if (!values.aadharNumber) {
            errors.aadharNumber = "Aadhar Number is required";
        } else if (!regexAdhar.test(values.aadharNumber)) {
            errors.aadharNumber = "Invalid Aadhar Number";
        }


        if (!values.panNumber) {
            errors.panNumber = "PAN Number is required";
        } else if (!regexPanNumber.test(values.panNumber)) {
            errors.panNumber = "Invalid PAN Number";
        }
        return errors;
    };
   
    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Role Master
        Successfully.`, {
            position: "top-center",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    await addAgentOnboarding(values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/admin/role-master')
                    }, 5000);
                } catch (error) {
                    alert.error("NOT SUCCESS :", error);
                }

            } else {
                  /* try {
                      await updateRole(params.id, values);
                      toastSuccessMessage();
                      setTimeout(() => {
                          navigate('/admin/role-master')
                      }, 5000);
                  } catch (error) {
  
                  } */

            }

        } catch (error) {
            alert.error("Error:", error);
        }

    }
    /* useEffect(() => {
        const fetchUserType = async () => {
            try {
                if (params?.id) {
                    const response = await getRoleEdit(params.id);  
                    const roleData = response.data;
                console.log(roleData);
                    setInitialValues(roleData);
                } else {
                    setInitialValues({
                       name:""
                    });
                }
            } catch (error) {
                console.error("Error fetching User type:", error);
            }
        };
        fetchUserType();
    }, [params?.id]); */
   
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add Agent Onboarding</h4>
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
                                                            value={values.userName}
                                                            hasError={errors.userName && touched.userName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.userName}
                                                            autoFocus={true}
                                                            id="userName"
                                                            name="userName"
                                                            placeholder="User Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            value={values.date}
                                                            hasError={errors.date && touched.date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.date}
                                                            autoFocus={true}
                                                            id="date"
                                                            name="date"
                                                            placeholder="Date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.firstName}
                                                            hasError={errors.firstName && touched.firstName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.firstName}
                                                            autoFocus={true}
                                                            id="firstName"
                                                            name="firstName"
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.middleName}
                                                            hasError={errors.middleName && touched.middleName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.middleName}
                                                            autoFocus={true}
                                                            id="middleName"
                                                            name="middleName"
                                                            placeholder="Middle Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.lastName}
                                                            hasError={errors.lastName && touched.lastName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.lastName}
                                                            autoFocus={true}
                                                            id="lastName"
                                                            name="lastName"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.mobileNumber}
                                                            hasError={errors.mobileNumber && touched.mobileNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobileNumber}
                                                            autoFocus={true}
                                                            id="mobileNumber"
                                                            name="mobileNumber"
                                                            placeholder="Mobile Number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="email"
                                                            value={values.email}
                                                            hasError={errors.email && touched.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.email}
                                                            autoFocus={true}
                                                            id="email"
                                                            name="email"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values.aadharNumber}
                                                            hasError={errors.aadharNumber && touched.aadharNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.aadharNumber}
                                                            autoFocus={true}
                                                            id="aadharNumber"
                                                            name="aadharNumber"
                                                            placeholder="Aadhar Number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.panNumber}
                                                            hasError={errors.panNumber && touched.panNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.panNumber}
                                                            autoFocus={true}
                                                            id="panNumber"
                                                            name="panNumber"
                                                            placeholder="Pan Number"
                                                        />
                                                    </div>

                                                </div>
                                                <div>
                                                    <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button className="btn btn-primary me-1">Submit</button>
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
export default AddAgentOnbording