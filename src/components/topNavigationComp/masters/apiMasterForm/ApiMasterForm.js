import React from 'react'
import { Form } from 'react-bootstrap'

function ApiMasterForm() {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">API MASTERS</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Provider Master:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Api Master:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Add New Api:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Update Api:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Denomination Wise Api:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Number Series Master:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">State Wise Api:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Backup Api Master:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Api Switching:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">User Operator Limit:<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <div>
                                    <button className="btn btn-primary me-1">Submit</button>
                                </div> */}
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApiMasterForm
