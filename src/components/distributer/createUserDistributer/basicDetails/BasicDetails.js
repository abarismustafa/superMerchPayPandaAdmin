import CustomInputField from "../../../../common/CustomInputField";
import CustomDropdown from "../../../../common/CustomDropdown";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomTextArea from "../../../../common/CustomTextArea";
import { useEffect, useState } from "react";

function BasicDetails({ initialValues, validate, submitForm, value,handleInput_A }) {
  const [data, setData] = useState()
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

  // const validate = (values) => {
  //   let errors = {};
  //   const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   const regexMobileNumber = /^[0-9]{10}$/;
  //   const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  //   const regexGstNumber =
  //     /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

  //   if (!values.name) {
  //     errors.name = "First Name is required";
  //   }

  //   if (!values.lastName) {
  //     errors.lastName = "Last Name is required";
  //   }

  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!regexEmail.test(values.email)) {
  //     errors.email = "Invalid Email";
  //   }

  //   if (!values.mobileNumber) {
  //     errors.mobileNumber = "Mobile Number is required";
  //   } else if (!regexMobileNumber.test(values.mobileNumber)) {
  //     errors.mobileNumber = "Invalid Mobile Number";
  //   }

  //   if (!values.masterType) {
  //     errors.masterType = "Master Type is required";
  //   }

  //   if (!values.shopName) {
  //     errors.shopName = "Shop Name is required";
  //   }

  //   if (!values.lockAmount) {
  //     errors.lockAmount = "Lock Amount is required";
  //   }

  //   if (!values.panNumber) {
  //     errors.panNumber = "PAN Number is required";
  //   } else if (!regexPanNumber.test(values.panNumber)) {
  //     errors.panNumber = "Invalid PAN Number";
  //   }

  //   // if (!values.gstNumber) {
  //   //   errors.gstNumber = "GST Number is required";
  //   // } else if (!regexGstNumber.test(values.gstNumber)) {
  //   //   errors.gstNumber = "Invalid GST Number";
  //   // }

  //   if (!values.officeAddress) {
  //     errors.officeAddress = "Office Address is required";
  //   }

  //   return errors;
  // };

  // const submitForm = (values) => {
  //   console.log(values);
  // };

  const changeHandle = (selectedData) => {
    // TODO
  };
  // useEffect(() => {
  //   const values = {
  //     ...value
  //   }
  //   setData(values);
  // }, [value])
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
            <form className="tbl-captionn" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Name *"
                    value={values?.name}
                    hasError={errors.name && touched.name}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.name}
                    autoFocus={true}
                    id="name"
                    name="name"
                  />
                </div>
                <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="email"
                    placeholder="Email *"
                    value={values?.email}
                    hasError={errors.email && touched.email}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.email}
                    id="email"
                    name="email"
                  />
                </div>
                <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Mobile Number *"
                    value={values?.mobile}
                    hasError={errors.mobile && touched.mobile}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.mobile}
                    id="mobile"
                    name="mobile"
                  />
                </div>
                <div className="col-xl-4 mb-3">
                  <div className="dropdownWrapper">
                    <CustomDropdown
                      itemList={itemList}
                      placeholder="Select Member Type *"
                      isSingleSelect={false}
                      icon={true}
                      onChange={changeHandle}
                      
                    />
                  </div>
                </div>
                <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Shop Name *"
                    value={values?.shopName}
                    hasError={errors.shopName && touched.shopName}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.shopName}
                    id="shopName"
                    name="shopNamename"
                  />
                </div>

                <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Lock Amount *"
                    value={values?.lockAmount}
                    hasError={errors.lockAmount && touched.lockAmount}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.lockAmount}
                    id="lockAmount"
                    name="lockAmount"
                  />
                </div>
                <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Pan Number *"
                    value={values?.pan_number}
                    hasError={errors.pan_number && touched.pan_number}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.pan_number}
                    id="pan_number"
                    name="pan_number"
                  />
                </div>
                <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Aadhar Number space must after 4 digit "
                    value={values?.adhaar_number}
                    hasError={errors.adhaar_number && touched.adhaar_number}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.adhaar_number}
                    id="adhaar_number"
                    name="adhaar_number"
                  />
                </div>
                <div className="col-xl-4 mb-3">
                  <CustomTextArea
                    placeholder="Office Address *"
                    value={values?.officeAddress}
                    hasError={errors.officeAddress && touched.officeAddress}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.officeAddress}
                    autoFocus={false}
                    rows="6"
                    id="officeAddress"
                    name="officeAddress"
                  />
                </div>
              </div>
              <div className="card-footer text-right">
                <button
                  type="submit"
                  className="btn btn-danger waves-effect waves-light"
                >
                  Next
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
}
export default BasicDetails;
