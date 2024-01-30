import React from 'react'
import CreditReportForm from './creditReportForm/CreditReportForm'
import CreditReportList from './creditReportList/CreditReportList'

function CreditReport() {
  return (
    <section>
      <div className='container'>
        <CreditReportForm/>
        <CreditReportList/>
      </div>
    </section>
  )
}

export default CreditReport
