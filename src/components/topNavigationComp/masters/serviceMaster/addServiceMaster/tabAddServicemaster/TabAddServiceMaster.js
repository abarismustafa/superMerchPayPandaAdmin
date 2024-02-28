import { Formik } from 'formik';
import React from 'react'
import CustomInputField from '../../../../../../common/CustomInputField';
import CustomTextArea from '../../../../../../common/CustomTextArea';
import CustomDropdown from '../../../../../../common/CustomDropdown';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import BordcastTextEditor from '../../../../../broadcast/bordcastTextEditor/BordcastTextEditor';

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

const initialValues = {
    list: [
        {
            id: "1",
            name: "",
            service_image: "",
            slug: "",
            service_charge: 100,
            bbps: 1,
            background_color: "",
            order_by: 9999900005,
            short_description: "",
            full_description: "",
            icon: "",
            banner_img: "",
            parent_id: [],
            permit_by_area: "65b74ecf4e59d3fdae2c234d",
            area_id: "1",
            meta_title: "",
            meta_description: "",
            meta_keyword: "",
            meta_image: "",
            language_id: "2",
            is_active: true
        }
    ]
}
function TabAddServiceMaster({ i, language, languageId, submitForm, handleChangeCus, item, changeHandle, params }) {
    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Service Name is required";
        }
        if (!values.order_by) {
            errors.order_by = "code  is required";
        }
        if (!values.short_description) {
            errors.short_description = "Short Description is required";
        }
        if (!values.full_description) {
            errors.full_description = "Full Description is required";
        }
       /*  if (!values.icon) {
            errors.icon = "Icon Image is required";
        } */
       /*  if (!values.banner_img) {
            errors.banner_img = "Banner Image is required";
        } */
        if (!values.permit_by_area) {
            errors.permit_by_area = "Permit By Area is required";
        }
        if (!values.meta_title) {
            errors.meta_title = "Meta Title  is required";
        }
        if (!values.meta_description) {
            errors.meta_description = "Meta Description  is required";
        }
        if (!values.meta_keyword) {
            errors.meta_keyword = "Meta Keyword   is required";
        }
        /* if (!values.meta_image) {
            errors.meta_image = "Meta Image  is required";
        } */
        return errors;
    };

    return (
        <Formik
            initialValues={item}
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
                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-xl-6 mb-3">

                                <CustomInputField
                                    type="text"
                                    value={values.name}
                                    hasError={errors.name && touched.name}
                                    
                                    onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                    onBlur={handleBlur}
                                    errorMsg={errors.name}
                                    autoFocus={true}
                                    id="name"
                                    name="name"
                                    placeholder="Service Name"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">

                                <CustomInputField
                                    type="number"
                                    value={values.order_by}
                                    hasError={errors.order_by && touched.order_by}
                                    onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                    onBlur={handleBlur}
                                    errorMsg={errors.order_by}
                                    autoFocus={true}
                                    id="order_by"
                                    name="order_by"
                                    placeholder="Code"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <CustomTextArea
                                    placeholder="Short Description *"
                                    value={values.short_description}
                                    hasError={errors.short_description && touched.short_description}
                                    onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                    onBlur={handleBlur}
                                    errorMsg={errors.short_description}
                                    autoFocus={false}
                                    rows="3"
                                    id="short_description"
                                />

                            </div>

                            <div className="col-xl-6 mb-3">
                                <CustomTextArea
                                    placeholder="Full Description *"
                                    value={values.full_description}
                                    hasError={errors.full_description && touched.full_description}
                                    onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                    onBlur={handleBlur}
                                    errorMsg={errors.full_description}
                                    autoFocus={false}
                                    rows="3"
                                    id="full_description"
                                />

                            </div>
                            <div className="col-xl-6 mb-3">

                                <CustomInputField
                                    type="file"
                                    value={values.icon}
                                    hasError={errors.icon && touched.icon}
                                    onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                    onBlur={handleBlur}
                                    errorMsg={errors.icon}
                                    autoFocus={true}
                                    id="icon"
                                    name="icon"
                                    placeholder="Icon Image"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">

                                <CustomInputField
                                    type="file"
                                    value={values.banner_img}
                                    hasError={errors.banner_img && touched.banner_img}
                                    onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                    onBlur={handleBlur}
                                    errorMsg={errors.banner_img}
                                    autoFocus={true}
                                    id="banner_img"
                                    name="banner_img"
                                    placeholder="Banner Image"
                                />
                            </div>
                            <div className="col-xl-6">


                                <CustomDropdown
                                    itemList={itemList}
                                    placeholder="Select Service Category *"
                                    isSingleSelect={false}
                                    icon={true}
                                    onChange={changeHandle}
                                />
                            </div>
                            <div className="col-xl-6 mb-3">

                                <CustomInputField
                                    type="text"
                                    value={values.permit_by_area}
                                    hasError={errors.permit_by_area && touched.permit_by_area}
                                    onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                    onBlur={handleBlur}
                                    errorMsg={errors.permit_by_area}
                                    autoFocus={true}
                                    id="permit_by_area"
                                    name="permit_by_area"
                                    placeholder="Permit By Area"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <select class="form-select" aria-label="Default select example" id="isActive" name="is_active"><option selected disabled>Select Status</option><option value="true" >Yes</option><option value="false">No</option></select>
                            </div>
                            <div className="col-xl-6 mb-3">
                                <CustomInputField
                                    type="text"
                                    value={values.meta_title}
                                    hasError={errors.banner_img && touched.meta_title}
                                    onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                    onBlur={handleBlur}
                                    errorMsg={errors.meta_title}
                                    autoFocus={true}
                                    id="meta_title"
                                    name="meta_title"
                                    placeholder="Meta Title"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <CustomInputField
                                    type="file"
                                    value={values.meta_image}
                                    hasError={errors.banner_img && touched.meta_image}
                                    onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                    onBlur={handleBlur}
                                    errorMsg={errors.meta_image}
                                    autoFocus={true}
                                    id="meta_image"
                                    name="meta_image"
                                    placeholder="Meta Image"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <CustomInputField
                                    type="text"
                                    value={values.meta_keyword}
                                    hasError={errors.banner_img && touched.meta_keyword}
                                    onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                    onBlur={handleBlur}
                                    errorMsg={errors.meta_keyword}
                                    autoFocus={true}
                                    id="meta_keyword"
                                    name="meta_keyword"
                                    placeholder="Meta Keyword"
                                />
                            </div>
                        </div>
                        <div>
                            <Link to='/admin/service-master' className="btn btn-danger light ms-1">Cancel</Link>
                            {i == language?.length - 2
                                && <button type="button"  className="btn btn-primary me-1">
                                    Next
                                </button>}
                            {i == language?.length - 1 && <button
                                className="btn btn-primary me-1"
                                type="button"
                                onClick={handleSubmit}
                            >
                                {params?.id ? "Update" : "Add"}
                            </button>}
                        </div>
                    </form>
                );
            }}
        </Formik>
    )
}

export default TabAddServiceMaster
