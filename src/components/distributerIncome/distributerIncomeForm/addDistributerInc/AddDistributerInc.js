import React from 'react'
import { Link } from 'react-router-dom'

const AddDistributerInc = () => {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">ADD Distributer Income</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Date <span className="text-danger">*</span></label>
                                        <input type="date" className="form-control" id="exampleFormControlInput1" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">First Name<span className="text-danger">*</span></label>
                                        <input type="name" className="form-control" id="exampleFormControlInput2" placeholder='First Name' />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Middle Name<span className="text-danger">*</span></label>
                                        <input type="name" className="form-control" id="exampleFormControlInput2" placeholder='Middle Name'  />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Last Name<span className="text-danger">*</span></label>
                                        <input type="name" className="form-control " id="exampleFormControlInput2" placeholder='Last Name' />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Opening Balance<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Opening Balance" />

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Credit Amount<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Credit Amount" />

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Debit Amount<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Debit Amount" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Sales<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="sales" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Profit<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Profit" />
                                        {/* <textarea className="form-control" defaultValue={"Profit"} /> */}
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Charge<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Charge" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Pending<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Pending" />
                                    </div>
                                </div>
                                <div>
                                    <Link to='/admin/user-income/distributor' className="btn btn-danger light ms-1">Cancel</Link>
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

export default AddDistributerInc
