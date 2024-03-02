import { Formik } from 'formik';
import React from 'react'
import CustomInputField from '../../../../../../common/CustomInputField';
import CustomTextArea from '../../../../../../common/CustomTextArea';
import CustomDropdown from '../../../../../../common/CustomDropdown';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import BordcastTextEditor from '../../../../../broadcast/bordcastTextEditor/BordcastTextEditor';
import Loadar from '../../../../../../common/loader/Loader';


function TabAddServiceMaster({ i,colodinaryImage, language, service_category, submitForm, handleChangeCus, item, changeHandle, params, validate }) {
    return (
        <>
       
            <Formik
                initialValues={item}
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
                                    <CustomInputField
                                        type="text"
                                        placeholder="Service Name *"
                                        value={item?.service_name}
                                        hasError={errors.service_name && touched.service_name}
                                        onChange={(e) => handleChangeCus(e, item?.language_id)}
                                        onBlur={handleBlur}
                                        errorMsg={errors.service_name}
                                        autoFocus={true}
                                        id="service_name"
                                        name="service_name"
                                    />
                                </div>
                                {/*  <div className="col-xl-6 mb-3">
                                <CustomInputField
                                    type="number"
                                    value={item.order_by}
                                    hasError={errors.order_by && touched.order_by}
                                    onChange={(e) => handleChangeCus(e, item?.language_id)}
                                    onBlur={handleBlur}
                                    errorMsg={errors.order_by}
                                    autoFocus={true}
                                    id="order_by"
                                    name="order_by"
                                    placeholder="Code"
                                />
                            </div> */}
                                <div className="col-xl-6 mb-3">

                                    <CustomInputField
                                        type="file"
                                        value={item.icon}
                                        hasError={errors.icon && touched.icon}
                                        onChange={colodinaryImage }
                                        onBlur={handleBlur}
                                        errorMsg={errors.icon}
                                        autoFocus={true}
                                        id="icon"
                                        name="icon"
                                        placeholder="Icon Image"
                                    />
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <CustomTextArea
                                        placeholder="Short Description *"
                                        value={item.short_description}
                                        hasError={errors.short_description && touched.short_description}
                                        onChange={(e) => handleChangeCus(e, item?.language_id)}
                                        onBlur={handleBlur}
                                        errorMsg={errors.short_description}
                                        autoFocus={false}
                                        rows="3"
                                        id="short_description"
                                        name="short_description"
                                    />

                                </div>

                                <div className="col-xl-6 mb-3">
                                    <CustomTextArea
                                        placeholder="Full Description *"
                                        value={item.full_description}
                                        hasError={errors.full_description && touched.full_description}
                                        onChange={(e) => handleChangeCus(e, item?.language_id)}
                                        onBlur={handleBlur}
                                        errorMsg={errors.full_description}
                                        autoFocus={false}
                                        rows="3"
                                        id="full_description"
                                        name="full_description"
                                    />

                                </div>

                                <div className="col-xl-6 mb-3">

                                    <CustomInputField
                                        type="file"
                                        value={item.banner_img}
                                        hasError={errors.banner_img && touched.banner_img}
                                        onChange={colodinaryImage}
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
                                        itemList={service_category}
                                        placeholder="Select Service Category *"
                                        isSingleSelect={false}
                                        icon={true}
                                        onChange={changeHandle}
                                        name="service_category"
                                        id='service_category'
                                    />
                                </div>
                                {/*  <div className="col-xl-6 mb-3">

                                <CustomInputField
                                    type="text"
                                    value={item.permit_by_area}
                                    hasError={errors.permit_by_area && touched.permit_by_area}
                                    onChange={(e) => handleChangeCus(e, item?.language_id)}
                                    onBlur={handleBlur}
                                    errorMsg={errors.permit_by_area}
                                    autoFocus={true}
                                    id="permit_by_area"
                                    name="permit_by_area"
                                    placeholder="Permit By Area"
                                />
                            </div> */}
                                <div className="col-xl-6 mb-3">
                                    <select class="form-select" aria-label="Default select example" name="is_active" onChange={(e) => handleChangeCus(e, item?.language_id)}>
                                        <option selected>Open this select menu</option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>

                                    </select>
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <CustomInputField
                                        type="text"
                                        value={item.meta_title}
                                        hasError={errors.banner_img && touched.meta_title}
                                        onChange={(e) => handleChangeCus(e, item?.language_id)}
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
                                        value={item.meta_image}
                                        hasError={errors.banner_img && touched.meta_image}
                                        onChange={colodinaryImage }
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
                                        value={item.meta_keyword}
                                        hasError={errors.banner_img && touched.meta_keyword}
                                        onChange={(e) => handleChangeCus(e, item?.language_id)}
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
                                    && <button type="button" className="btn btn-primary me-1">
                                        Next
                                    </button>}
                                {i == language?.length - 1 && <button
                                    className="btn btn-primary me-1"
                                    type="button"
                                    onClick={submitForm}
                                >
                                    {params?.id ? "Update" : "Add"}
                                </button>}
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </>
    )
}

export default TabAddServiceMaster
