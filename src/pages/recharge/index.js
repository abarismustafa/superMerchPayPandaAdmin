import React from 'react'
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import Aadharpaysearch from '../../components/transactions/adhaarPay/Aadharpaysearch'

function Recharge() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transactions ",

    }
    return <div>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
        <div className='m-4 t '>
            <Tabs
                defaultActiveKey={1}
                id="uncontrolled-tab-example"
                className=" tab_bg rounded-top "
            >
                <Tab eventKey={1} title={'AEPS '}>
                   {/*  <AepsSearch/>
                    <AepsWallet /> */}
                </Tab>
                <Tab eventKey={2} title={'AADHAR PAY'}>
                   {/*  <Aadharpaysearch/>
                    <AdhaarPay/> */}
                </Tab>
                <Tab eventKey={3} title={'DMT'}>
                    {/* <Dmtsearch/>
                    <Dmt/> */}
                </Tab>
                <Tab eventKey={4} title={'RECHARGE'}>
                    {/* <ReachargeSearch/>
                    <Recharge/> */}
                </Tab>
                <Tab eventKey={5} title={'BILL PAYMENT'}>
                   {/*  <BillpaymentSearch/>
                    <BillPament/> */}
                </Tab>

            </Tabs>
        </div>
    </div>
}

export default Recharge