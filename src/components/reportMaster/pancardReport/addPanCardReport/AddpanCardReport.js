import React from 'react'

function AddpanCardReport() {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0"><b>Pan Card  Report - </b></h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Date <span className="text-danger">*</span></label>
                                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                                    </div>
                                    
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">User Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Last Name" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Provider<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Last Name" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Number<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Last Name" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Txind<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Last Name" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Txind<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Last Name" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Amount	<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Amount" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Profit	<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Profit" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Balance	<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Balance" />
                                    </div>
                                    
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Status<span className="text-danger">*</span></label>
                                        {/* <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="IFSC Code" /> */}
                                        <select id="disabledSelect" class="form-select">
                                            <option disabled>--select --</option>
                                            <option value="0" selected="" data-select2-id="2">
                                                All Status
                                            </option>
                                            <option value="1">Success</option>
                                            <option value="2">Failed</option>
                                            <option value="3">Pending</option>
                                            <option value="4">Refunded</option>
                                            <option value="5">Refund</option>
                                            <option value="6">Credit</option>
                                            <option value="7">Debit</option>
                                        </select>
                                    </div>
                                    <div className='border-top'>
                                        <button className="btn btn-primary pd-x-20  rounded-2 " type="submit" style={{marginTop:"15px"}}> Save </button>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddpanCardReport
