import React from 'react'
import { Form } from 'react-bootstrap'

function SettingMaster() {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">SETTINGS</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Company Settings:<span className="text-danger">*</span></label>
                                        <select class="form-control" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Site Settings:<span className="text-danger">*</span></label>
                                        <select class="form-control" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Sms Templete:<span className="text-danger">*</span></label>
                                        <select class="form-control" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Pakage Settings:<span className="text-danger">*</span></label>
                                        <select class="form-control" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Bank Settings:<span className="text-danger">*</span></label>
                                        <select class="form-control" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Logo Upload:<span className="text-danger">*</span></label>
                                        <select class="form-control" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Service Banner:<span className="text-danger">*</span></label>
                                        <select class="form-control" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Disabled</option>
                                            <option value="2">Enabled</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Notification Settis ngs:<span className="text-danger">*</span></label>
                                        <select class="form-control" aria-label="Default select example">
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

export default SettingMaster
