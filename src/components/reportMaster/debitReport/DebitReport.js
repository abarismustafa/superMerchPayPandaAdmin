import React from 'react'
import DebitReportForm from './debitReportForm/debitReportForm'
import DebitReportList from './debitReportList/DebitReportList'

function DebitReport() {
  return (
    <section>
      <div className=' container'>
        <DebitReportForm/>
        <DebitReportList/>
      </div>
    </section>
  )
}

export default DebitReport
