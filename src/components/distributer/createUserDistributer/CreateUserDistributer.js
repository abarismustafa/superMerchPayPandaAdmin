import { useEffect, useState } from "react";
import BasicDetails from "./basicDetails/BasicDetails";
import Presnoaldetails from "./presnolDetails/PresnoalDetails";
import Services from "./services/Services";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";

const TAB = ["Basic Details", "Permanent Details", "Service"];

function CreateUserDistributer() {
  const params = useParams()
  const [selectedTabPosition, setSelectedTabPosition] = useState(0);
  const [initialValues, setInitialValues] = useState({
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
  })

  // const initialValues = {
  //   basicDetails: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     mobileNumber: "",
  //     masterType: "",
  //     shopName: "",
  //     lockAmount: "",
  //     panNumber: "",
  //     gstNumber: "",
  //     officeAddress: "",
  //   },
  //   permanentDetails: {
  //     address: "",
  //     city: "",
  //     pinCode: "",
  //     state: "",
  //     district: "",
  //   },
  //   service: {
  //     societyService: "",
  //     tvService: "",
  //     gasService: "",
  //     pancardService: "",
  //     cableTvService: "",
  //   },
  // };

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

  const toastSuccessMessage = () => {
    toast.success(`${params?.id ? "Update" : "Add"} Country Successfully.`, {
      position: "top-center",
    });
  };

  const submitForm = async (values) => {

    try {
      if (!params?.id) {
        try {
          // const res = await countryAdd(values);
          // if (res?.statusCode == "200") {
          //   toastSuccessMessage();
          // }
        } catch (error) {

        }

      } else {
        try {
          // await countryUpdate(params.id, values);
        } catch (error) {

        }

      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  // useEffect(() => {
  //   curencyidget()
  // }, [])

  // useEffect(() => {
  //   const fetchCurrency = async () => {
  //     try {
  //       if (params?.id) {
  //         const response = await getcountry(params.id);
  //         const currencyData = response.data;
  //         setInitialValues(currencyData);
  //       } else {
  //         setInitialValues({
  //           name: "",
  //           code: "",
  //           curruncy_id: "",
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching currency:", error);
  //     }
  //   };

  //   fetchCurrency();
  // }, [params?.id]);

  const tabChange = (position) => {
    setSelectedTabPosition(position);
  };
  return (
    <>
      <section className="CreateUserDistributer m-4 ">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                {/* <div className="table-responsive active-projects style-1 " >
                  <div className="tbl-caption tbl-caption-2" id="justify-none_Tab1">
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
                  <BasicDetails initialValues={initialValues.basicDetails} validate={validate} submitForm={submitForm} />
                )}
                {selectedTabPosition === 1 && (
                  <Presnoaldetails
                    initialValues={initialValues.permanentDetails}
                  />
                )}
                {selectedTabPosition === 2 && (
                  <Services initialValues={initialValues.service} />
                )} */}

                <div className="table-responsive active-projects style-1 " >
                  <div className="tbl-caption tbl-caption-2" >
                    <h4 className="heading mb-0">
                      {/* {params?.id ? "UPDATE" : "ADD"} COUNTRY */}
                      ADD USER {params?.name}
                    </h4>
                  </div>
                  <Tabs
                    defaultActiveKey="Basic Details"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="Basic Details" title="Basic Details">
                      <BasicDetails initialValues={initialValues.basicDetails} validate={validate} submitForm={submitForm} />
                    </Tab>
                    <Tab eventKey="Permanent Details" title="Permanent Details">
                      <Presnoaldetails
                        initialValues={initialValues.permanentDetails}
                      />
                    </Tab>
                    <Tab eventKey="Service" title="Service">
                      <Services initialValues={initialValues.service} />
                    </Tab>
                  </Tabs>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CreateUserDistributer;
