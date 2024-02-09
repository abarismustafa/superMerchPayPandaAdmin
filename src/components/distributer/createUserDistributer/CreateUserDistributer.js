import { useState } from "react";
import BasicDetails from "./basicDetails/BasicDetails";
import Presnoaldetails from "./presnolDetails/PresnoalDetails";
import Services from "./services/Services";

const TAB = ["Basic Details", "Permanent Details", "Service"];

function CreateUserDistributer() {
  const [selectedTabPosition, setSelectedTabPosition] = useState(0);

  const initialValues = {
    basicDetails: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      masterType: "",
      shopName: "",
      lockAmount: "",
      panNumber: "",
      gstNumber: "",
      officeAddress: "",
    },
    permanentDetails: {
      address: "",
      city: "",
      pinCode: "",
      state: "",
      district: "",
    },
    service: {
      societyService: "",
      tvService: "",
      gasService: "",
      pancardService: "",
      cableTvService: "",
    },
  };

  const tabChange = (position) => {

    setSelectedTabPosition(position);
  };
  return (
    <>
      <section className="CreateUserDistributer mt-3">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption tbl-caption-2">
                    {TAB.map((item, index) => (
                      <button
                        className={`heading mb-0 ${selectedTabPosition === index ? "active" : ""
                          }`}
                        // disabled={selectedTabPosition !== index}
                        onClick={() => tabChange(index)}
                        key={`tab_${index}`}
                      >
                        <b>{item}</b>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedTabPosition === 0 && (
                  <BasicDetails initialValues={initialValues.basicDetails} />
                )}
                {selectedTabPosition === 1 && (
                  <Presnoaldetails
                    initialValues={initialValues.permanentDetails}
                  />
                )}
                {selectedTabPosition === 2 && (
                  <Services initialValues={initialValues.service} />
                )}
              </div>
              <div className="card-footer text-right">
                <button
                  type="submit"
                  className="btn btn-danger waves-effect waves-light"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          {/* <BasicDetails />
                    <Presnoaldetails />
                    <Services /> */}
        </div>
      </section>
    </>
  );
}
export default CreateUserDistributer;
