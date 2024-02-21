import { useEffect, useState } from "react";
import { Formik } from "formik";
import { Link, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import CustomDropdown from "../../../../../common/CustomDropdown";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { areaAdd, getarea, languageList } from "../../../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import TabAddAreaForm from "./TabAddAreaForm";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const breadCrumbsTitle = {
    id: "1",
    title_1: "Zone Module",
    title_2: "Area",
    title_3: "Add Area",
}

function AddArea() {
    const params = useParams()
    const [language, setlanguage] = useState(null)
    const [tab, setTab] = useState()
    const [data, SetData] = useState()
    const [selectData, SetselectData] = useState([])





    const getLanguageIdTab = async () => {
        const res = await languageList()
        // console.log(res);
        setlanguage(res?.data)
        setTab(res?.data[0]?._id)
    }

    const createInitailData = (language) => {
        const data = []
        const createInital = language.map(() => {

        })
    }

    useEffect(() => {
        getLanguageIdTab()
    }, [])

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Country Successfully.`, {
            position: "top-center",
        });
    };

    const GetFirstData = (value, id) => {
        const clone = [...selectData]
        if (clone.length) {
            for (let index = 0; index < selectData.length; index++) {
                const element = selectData[index];
                console.log(element);
                if (element.language_id == value.language_id) {
                    clone.splice(index, 1, value)
                } else {
                    clone.push(value)
                }
            }
        } else {
            clone.push(value)
        }
        SetselectData(clone)
    }


    const submitForm = async (values) => {
        const clone = [...selectData]
        if (clone.length) {
            for (let index = 0; index < selectData.length; index++) {
                const element = selectData[index];
                console.log(element);
                if (element.language_id == values.language_id) {
                    clone.splice(index, 1, values)
                } else {
                    clone.push(values)
                }
            }
        } else {
            clone.push(values)
        }
        SetselectData(clone)
        try {
            if (!params?.id) {
                try {
                    const res = await areaAdd({ list: clone });
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                    }
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

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {/* {params?.id ? "UPDATE" : "ADD"} */}
                                        ADD AREA MASTER
                                    </h4>
                                </div>
                                {/* {language && language?.map((item) => {

                                    return <button type="button" className={`heading mb-0 ${tab === item._id ? "btn btn-success" : "btn btn-primary"
                                        }`} onClick={() => tabChange(item?._id)}
                                        key={`tab_${item?._id}`}
                                    >
                                        {item?.name}
                                    </button>
                                })} */}

                                <Tabs
                                    defaultActiveKey={tab}
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    {language && language?.map((item, i) => {
                                        return <Tab eventKey={item?._id} title={item?.name}>
                                            <TabAddAreaForm i={i} language={language} languageId={item?._id} GetFirstData={GetFirstData} submitForm={submitForm} />
                                        </Tab>
                                    })}

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>

        </>
    )
}
export default AddArea