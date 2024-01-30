import React from 'react'
import OperatorWiseForm from './operatorWiseFormSe/OperatorWiseForm'
import OperatorWiseReportList from './operatorWiseReportList/OperatorWiseReportList'

function OperatorWiseSale() {
    return (
        <section>
            <div className='container'>
                <OperatorWiseForm />
                <OperatorWiseReportList/>
            </div>
        </section>
    )
}

export default OperatorWiseSale
