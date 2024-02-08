import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Dispute() {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">DISPUTE</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Pending Dispute:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Dispute Chat:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Dispute Update:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Solve Dispute:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Reopen Dispute:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                <Link to={"/admin/company-staff/welcome"} className="btn btn-warning me-1">cancel</Link>
                                    <button className="btn btn-primary me-1">Update Dispute</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dispute
