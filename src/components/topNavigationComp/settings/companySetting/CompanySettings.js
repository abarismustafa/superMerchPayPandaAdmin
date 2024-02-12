import CustomInputField from "../../../../common/CustomInputField";
import CustomDropdown from "../../../../common/CustomDropdown";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomTextArea from "../../../../common/CustomTextArea";
const initialValues = {
    CompanySettings: {
        companyName: "",
        companyEmail: "",
        companyWebsite: "",
        supportNo: "",
        whattsappNo: "",
        news: "",
        smsSender: "",
        maintanenceMessage: "",
        pincode: "",
        pancardNumber: "",
        gstNumber: "",
        companyAddress1: "",
        companyAddress2: "",
    }
}
const CompanySettings = () => {
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
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^[0-9]{10}$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.firstName) {
            errors.firstName = "First Name is required";
        }

        if (!values.lastName) {
            errors.lastName = "Last Name is required";
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        }

        if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobileNumber)) {
            errors.mobileNumber = "Invalid Mobile Number";
        }

        if (!values.masterType) {
            errors.masterType = "Master Type is required";
        }

        if (!values.shopName) {
            errors.shopName = "Shop Name is required";
        }

        if (!values.lockAmount) {
            errors.lockAmount = "Lock Amount is required";
        }

        if (!values.panNumber) {
            errors.panNumber = "PAN Number is required";
        } else if (!regexPanNumber.test(values.panNumber)) {
            errors.panNumber = "Invalid PAN Number";
        }

        // if (!values.gstNumber) {
        //   errors.gstNumber = "GST Number is required";
        // } else if (!regexGstNumber.test(values.gstNumber)) {
        //   errors.gstNumber = "Invalid GST Number";
        // }

        if (!values.officeAddress) {
            errors.officeAddress = "Office Address is required";
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
                                                <h4 className="heading mb-0"><b>Company Settings - </b></h4>
                                            </div>
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Company Name *"
                                                            value={values.firstName}
                                                            hasError={errors.firstName && touched.firstName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.firstName}
                                                            autoFocus={true}
                                                            id="firstName"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="mail"
                                                            placeholder="Company E-mail *"
                                                            value={values.firstName}
                                                            hasError={errors.firstName && touched.firstName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.firstName}
                                                            autoFocus={true}
                                                            id="firstName"
                                                        />

                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Company Website *"
                                                            value={values.firstName}
                                                            hasError={errors.firstName && touched.firstName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.firstName}
                                                            autoFocus={true}
                                                            id="firstName"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Support Nubmer *"
                                                            value={values.firstName}
                                                            hasError={errors.firstName && touched.firstName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.firstName}
                                                            autoFocus={true}
                                                            id="firstName"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="number"
                                                                placeholder="WhatsApp No *"
                                                                value={values.firstName}
                                                                hasError={errors.firstName && touched.firstName}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.firstName}
                                                                autoFocus={true}
                                                                id="firstName"
                                                            />
                                                        </div>
                                                        
                                                    <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="News *"
                                                                value={values.firstName}
                                                                hasError={errors.firstName && touched.firstName}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.firstName}
                                                                autoFocus={true}
                                                                id="firstName"
                                                            />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Sms Sender *"
                                                                value={values.firstName}
                                                                hasError={errors.firstName && touched.firstName}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.firstName}
                                                                autoFocus={true}
                                                                id="firstName"
                                                            />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label"> Same Amount Recharge	<span className="text-danger">*</span></label>
                                                        <select id="disabledSelect" class="form-select">
                                                            <option disabled>--select --</option>
                                                            <option value="0" selected="" data-select2-id="2">
                                                                1 Min
                                                            </option>
                                                            <option value="1">
                                                                5 Min
                                                            </option>
                                                            <option value="2">10 Min</option>
                                                            <option value="3">15 Min</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label"> Server<span className="text-danger">*</span></label>
                                                        <select id="disabledSelect" class="form-select">
                                                            <option disabled selected="">--select --</option>
                                                            <option value="0" data-select2-id="2">
                                                                Running
                                                            </option>
                                                            <option value="1">
                                                                Stop
                                                            </option>
                                                            <option value="2">
                                                                In Progress
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">Maintainance Message<span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Working" />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">Select Sate<span className="text-danger">*</span></label>
                                                        <select id="disabledSelect" class="form-select">
                                                            <option disabled selected="">--select --</option>
                                                            <option value="AP">Andhra Pradesh</option>
                                                            <option value="AR">Arunachal Pradesh</option>
                                                            <option value="AS">Assam</option>
                                                            <option value="BR">Bihar</option>
                                                            <option value="CT">Chhattisgarh</option>
                                                            <option value="GA">Gujarat</option>
                                                            <option value="HR">Haryana</option>
                                                            <option value="HP">Himachal Pradesh</option>
                                                            <option value="JK">Jammu and Kashmir</option>
                                                            <option value="GA">Goa</option>
                                                            <option value="JH">Jharkhand</option>
                                                            <option value="KA">Karnataka</option>
                                                            <option value="KL">Kerala</option>
                                                            <option value="MP">Madhya Pradesh</option>
                                                            <option value="MH">Maharashtra</option>
                                                            <option value="MN">Manipur</option>
                                                            <option value="ML">Meghalaya</option>
                                                            <option value="MZ">Mizoram</option>
                                                            <option value="NL">Nagaland</option>
                                                            <option value="OR">Odisha</option>
                                                            <option value="PB">Punjab</option>
                                                            <option value="RJ">Rajasthan</option>
                                                            <option value="SK">Sikkim</option>
                                                            <option value="TN">Tamil Nadu</option>
                                                            <option value="TG">Telangana</option>
                                                            <option value="TR">Tripura</option>
                                                            <option value="UT">Uttarakhand</option>
                                                            <option value="UP">Uttar Pradesh</option>
                                                            <option value="WB">West Bengal</option>
                                                            <option value="AN">Andaman and Nicobar Islands</option>
                                                            <option value="CH">Chandigarh</option>
                                                            <option value="DN">Dadra and Nagar Haveli</option>
                                                            <option value="DD">Daman and Diu</option>
                                                            <option value="DL">Delhi</option>
                                                            <option value="LD">Lakshadweep</option>
                                                            <option value="PY">Puducherry</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Pin Code	<span className="text-danger">*</span></label>
                                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Pin Code" />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Pan Card Number	<span className="text-danger">*</span></label>
                                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Pan Card Number" />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Gst Number	<span className="text-danger">(Optional)</span></label>
                                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Gst Number" />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">Login Type<span className="text-danger">*</span></label>
                                                        {/* <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="IFSC Code" /> */}
                                                        <select id="disabledSelect" class="form-select">
                                                            <option disabled selected="">--select --</option>
                                                            <option value="0" data-select2-id="2">
                                                                With OTP
                                                            </option>
                                                            <option value="1">Without OTP</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Company Address	<span className="text-danger">*</span></label>
                                                        <textarea className="form-control" id="exampleFormControlInput2" placeholder=" Company Addressode" />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Company Address	 (2)<span className="text-danger">(Optional)</span></label>
                                                        <textarea className="form-control" id="exampleFormControlInput2" placeholder=" Company Addressode" />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Header Color Start	<span className="text-danger">*</span></label>
                                                        <input type='color' className="form-control border-0" id="exampleFormControlInput2" />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Header Color End	<span className="text-danger">*</span></label>
                                                        <input type='color' className="form-control border-0" id="exampleFormControlInput2" value={"#50e62b"} />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Facebook Link	<span className="text-danger">(Optional)</span></label>
                                                        <input type='text' className="form-control border-0" id="exampleFormControlInput2" placeholder='Facebook Link' />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Instagram Link	<span className="text-danger">(Optional)</span></label>
                                                        <input type='text' className="form-control border-0" id="exampleFormControlInput2" placeholder='Instagram Link' />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Twitter Link	<span className="text-danger">(Optional)</span></label>
                                                        <input type='text' className="form-control border-0" id="exampleFormControlInput2" placeholder='Twitter Link' />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	YouTube Link	<span className="text-danger">(Optional)</span></label>
                                                        <input type='text' className="form-control border-0" id="exampleFormControlInput2" placeholder='YouTube Link' />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Table Format	<span className="text-danger">*</span></label>
                                                        <select id="disabledSelect" class="form-select">
                                                            <option disabled selected="">--select --</option>
                                                            <option value="0" data-select2-id="2">
                                                                Table 1
                                                            </option>
                                                            <option value="1">Table 2</option>
                                                            <option value="1">Table 3</option>
                                                            <option value="1">Table 4</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Transaction Pin	<span className="text-danger">*</span></label>
                                                        <select id="disabledSelect" class="form-select">
                                                            <option disabled selected="">--select --</option>
                                                            <option value="0" data-select2-id="2">
                                                                Enable
                                                            </option>
                                                            <option value="1">Disable</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	UPI  Payout Route	<span className="text-danger">*</span></label>
                                                        <select id="disabledSelect" class="form-select">
                                                            <option disabled selected="">--select --</option>
                                                            <option value="0" data-select2-id="2">
                                                                Bachatpe
                                                            </option>
                                                            <option value="1">Without</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Authoriesed Name	<span className="text-danger">*</span></label>
                                                        <input type='text' className="form-control border-0" id="exampleFormControlInput2" placeholder='Authoriesed Name' />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Designation	<span className="text-danger">*</span></label>
                                                        <input type='text' className="form-control border-0" id="exampleFormControlInput2" placeholder='Designation' />
                                                    </div>

                                                    <div className=''>
                                                        <button className="btn btn-danger pd-x-20 rounded-2 mt-4 " type="submit"> Update Details </button>
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

export default CompanySettings
