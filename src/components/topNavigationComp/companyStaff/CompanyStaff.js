import React from 'react'
import CompanyStaffForm from './companyStaffForm/CompanyStaffForm'
import CompanyStaffList from './companyStaffList/CompanyStaffList'

function CompanyStaff() {
    return (
        <section>
            <div className='container'>
                <CompanyStaffForm />
                <CompanyStaffList/>
            </div>
        </section>
    )
}

export default CompanyStaff
