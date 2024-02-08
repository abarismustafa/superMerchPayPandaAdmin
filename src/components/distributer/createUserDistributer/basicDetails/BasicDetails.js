import { Link } from "react-router-dom"
import CustomInputField from "../../../../common/CustomInputField"
import CustomDropdown from "../../../../common/CustomDropdown"

function BasicDetails() {
    const name = "dropdown";
  const placeholder = "Course Name";
  const type = "dropdown";
  const itemList = [
    {
      name: "MBA",
      value: "MBA",
    },
    {
      name: "Data Science",
      value: "Data Science",
    },
    {
      name: "Doctorate",
      value: "Doctorate",
    },
    {
      name: "Software & Tech",
      value: "Software & Tech",
    },
  ];

  const changeHandle = (selectedData) => {
    // TODO
  };
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Basic Details</b></h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">First Name <span className="text-danger">*</span></label>
                                            <CustomInputField
                                                type="text"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Last Name<span className="text-danger">*</span></label>
                                            <CustomInputField
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label"> Email<span className="text-danger">*</span></label>
                                            <CustomInputField
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Mobile Number<span className="text-danger">*</span></label>
                                            <CustomInputField
                                                type="number"
                                                placeholder="Mobile Number"
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Member Type<span className="text-danger">*</span></label>
                                            <div className="dropdownWrapper">
                                                <CustomDropdown
                                                    itemList={itemList}
                                                    placeholder="Select KYC Status"
                                                    isSingleSelect={false}
                                                    icon={true}
                                                    onChange={changeHandle}
                                                />
                                            </div>
                                            {/* <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="IFSC Code" /> */}
                                            {/* <select id="disabledSelect" class="form-select">
                                                <option>Disabled select</option>
                                            </select> */}
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Shop Name<span className="text-danger">*</span></label>
                                            <CustomInputField
                                                type="text"
                                                placeholder="Shop Name"
                                            />
                                        </div>

                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Lock Amount <span className="text-danger">*</span></label>
                                            <CustomInputField
                                                type="text"
                                                placeholder="Lock Amount"
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Pan Number <span className="text-danger">*</span></label>
                                            <CustomInputField
                                                type="number"
                                                placeholder="Pan Number"
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">GST Number <span className="text-danger">(Optional)</span></label>
                                            <CustomInputField
                                                type="text"
                                                placeholder="GST Number "
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Office Address<span className="text-danger">*</span></label>
                                            <textarea type="text" className="form-control" id="exampleFormControlInput2" placeholder="Office Address" />
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BasicDetails