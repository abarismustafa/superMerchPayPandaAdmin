import React from 'react'
import { Link } from 'react-router-dom'

const AddCompanyStaff = () => {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">ADD COMPANYSTAFF -</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Joining Date <span className="text-danger">*</span></label>
                                        <input type="date" className="form-control" id="exampleFormControlInput1" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Fist Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder='Fist Name' />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Middle Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Middle Name" />

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Last Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Last Name" />

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Mobile <span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Mobile" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Member Type<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Member Type" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Normal Balance<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Normal Balance" />
                                        {/* <textarea className="form-control" defaultValue={"Reason"} /> */}
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Status<span className="text-danger">*</span></label>
                                        <select className='form-control'>
                                            <option>--Active--</option>
                                            <option>--Inactive--</option>
                                        </select>
                                        {/* <textarea className="form-control" defaultValue={"Reason"} /> */}
                                    </div>

                                </div>
                                <div>
                                    <Link to='/admin/company-staff/welcome' className="btn btn-danger light ms-1">Cancel</Link>
                                    <button className="btn btn-primary me-1">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCompanyStaff
