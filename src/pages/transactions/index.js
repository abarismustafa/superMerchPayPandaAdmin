import React from 'react'
import AepsWallet from '../../components/transactions/aepstab/Aeps'
import { Tab, Tabs } from 'react-bootstrap'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import AepsSearch from '../../components/transactions/aepstab/AepsSearch'
import AdhaarPay from '../../components/transactions/adhaarPay/AdhaarPay'
import Aadharpaysearch from '../../components/transactions/adhaarPay/Aadharpaysearch'

function Transactions() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transactions ",

    }
    return <div>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
        <div className='m-4'>
            <Tabs
                defaultActiveKey={1}
                id="uncontrolled-tab-example"
                className="mb-2"
            >
                <Tab eventKey={1} title={'Aeps '}>
                    <AepsSearch/>
                    <AepsWallet />
                </Tab>
                <Tab eventKey={2} title={'Aadhar pay'}>
                    <Aadharpaysearch/>
                    <AdhaarPay/>
                </Tab>
                <Tab eventKey={3} title={'DMT'}>
                    <Aadharpaysearch/>
                    <AdhaarPay/>
                </Tab>
                <Tab eventKey={4} title={'Recharge'}>
                    <Aadharpaysearch/>
                    <AdhaarPay/>
                </Tab>
                <Tab eventKey={5} title={'Bill Payment'}>
                    <Aadharpaysearch/>
                    <AdhaarPay/>
                </Tab>

            </Tabs>
        </div>
    </div>
}

export default Transactions