import React from 'react'
import { Link } from 'react-router-dom'

const AddContactEnquiry = () => {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">Edit Customer Enquiry</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label"> Date <span className="text-danger">*</span></label>
                                        <input type="date" className="form-control" id="exampleFormControlInput1" />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder='Name' />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Email<span className="text-danger">*</span></label>
                                        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="email" />

                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Mobile<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Provider" />

                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Message<span className="text-danger">*</span></label>
                                        <textarea className="form-control" defaultValue={"Reason"} />
                                    </div>

                                </div>
                                <div>
                                    <Link to='/admin/contact-enquiry' className="btn btn-danger light ms-1">Cancel</Link>
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

export default AddContactEnquiry
