import { Button } from "react-bootstrap";
import CustomDropdown from "../../../../common/CustomDropdown";
import { Formik } from "formik";

function Services({submitForm,validate,handleInput_C}) {
  const itemList = [
    {
      name: "Enable",
      value: "Enable",
    },
    {
      name: "Disable",
      value: "Disable",
    },
  ];
  const changeHandle = (selectedData) => {
    // TODO
  };
  return (
    <>
      <Formik
        initialValues={''}
        validate={validate}
        onSubmit={submitForm}
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
            <form className="tbl-captionn" onSubmit={submitForm}>
              <div className="row">
                <div className="col-xl-4 mb-3">
                  <div className="dropdownWrapper">
                    <CustomDropdown
                      itemList={itemList}
                      placeholder="Housing Society Services *"
                      isSingleSelect={false}
                      icon={true}
                      onChange={handleInput_C}
                    />
                  </div>
                </div>
                <div className="col-xl-4 mb-3">
                  <div className="dropdownWrapper">
                    <CustomDropdown
                      itemList={itemList}
                      placeholder="Cable TV Services *"
                      isSingleSelect={false}
                      icon={true}
                      onChange={handleInput_C}
                      name="H_service_socity"
                    />
                  </div>
                </div>
                <div className="col-xl-4 mb-3">
                  <div className="dropdownWrapper">
                    <CustomDropdown
                      itemList={itemList}
                      placeholder="LPG Gas Services *"
                      isSingleSelect={false}
                      icon={true}
                      onChange={handleInput_C}
                      name="lpg_service"
                    />
                  </div>
                </div>
                <div className="col-xl-4 mb-3">
                  <div className="dropdownWrapper">
                    <CustomDropdown
                      itemList={itemList}
                      placeholder="Pancard Services *"
                      isSingleSelect={false}
                      icon={true}
                      onChange={handleInput_C}
                      name="pancard_service"
                    />
                  </div>
                </div>
                <div className="col-xl-4 mb-3">
                  <div className="dropdownWrapper">
                    <CustomDropdown
                      itemList={itemList}
                      placeholder="Cable TV Services *"
                      isSingleSelect={false}
                      icon={true}
                      onChange={handleInput_C}
                      name='cable_tv_service'
                    />
                  </div>
                </div>
              </div>
              <button className="bg-danger p-2 border-0 text-white rounded">update</button>
            </form>
          );
        }}
      </Formik>
    </>
  );
}
export default Services;
