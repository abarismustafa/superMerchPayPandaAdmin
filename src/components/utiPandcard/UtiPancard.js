import { Tab, Tabs } from "react-bootstrap"
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import Aeps from "./aeps/Aeps"


function UtiPancard() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Profile ",

    }
    return (
        <>
            <div>
                <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
                <div style={{ margin: "14px" }}>
                    <Tabs
                        defaultActiveKey={1}
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey={1} title={'AEPS '}>
                            <Aeps />
                        </Tab>
                        <Tab eventKey={2} title={'AADHAR PAY'}>
                            <div className="row">
                                <div className="col-lg-6">
                                    {/* <RoleManeger /> */}
                                </div>
                                <div className="col-lg-6">
                                    {/* <ChangeMapping /> */}
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={3} title={'DMT'}>
                            {/* <StokeDetails /> */}
                        </Tab>
                        <Tab eventKey={4} title={'RECHARGE'}>
                            {/* <StokeDetails /> */}
                        </Tab>
                        <Tab eventKey={5} title={'BILL PAYMENT'}>
                            {/* <StokeDetails /> */}
                        </Tab>

                    </Tabs>
                </div>
            </div >
        </>
    )
}
export default UtiPancard