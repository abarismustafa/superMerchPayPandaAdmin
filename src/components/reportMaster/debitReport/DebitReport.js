import React from 'react'
import DebitReportList from './debitReportList/DebitReportList'
import DebitReportForm from './debitReportForm/debitReportForm'

function DebitReport() {
  return (
      <div className=' '>
        <DebitReportForm/>
        <DebitReportList/>
      </div>
  )
}

export default DebitReport
