import React from 'react'

const WhatsappRoleWise = () => {
    return (
        <div className='row'>
            <div className='col-lg-6'>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h6 className="heading mb-0"><b>Send Role Wise </b></h6>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-12 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Select Commpany<span className="text-danger">*</span></label>
                                        {/* <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="IFSC Code" /> */}
                                        <select id="disabledSelect" class="form-select">
                                            <option disabled>--select --</option>
                                            <option value="0" selected="" data-select2-id="2">
                                                Pay Panda Payment Solution Pvt Ltd
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Member Type<span className="text-danger">*</span></label>
                                        {/* <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="IFSC Code" /> */}
                                        <select id="disabledSelect" class="form-select">
                                            <option disabled>--select --</option>
                                            <option value="0" selected="" data-select2-id="2">
                                                Company Staff
                                            </option>
                                            <option value="1">TSM</option>
                                            <option value="2">Sales Excutive</option>
                                            <option value="3">Supper Distributer</option>
                                            <option value="6">Distributer</option>
                                            <option value="5">Retailer</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Message<span className="text-danger">*</span></label>
                                        <textarea type="text" className="form-control" id="exampleFormControlInput2" placeholder="Enter Message Here ..." />
                                        
                                    </div>

                                    <div className=''>
                                        <button className="btn btn-primary pd-x-20  rounded-2 " type="submit" style={{ marginTop: "15px" }}> Send Now </button>
                                        <button className="btn btn-warning pd-x-20  rounded-2 " type="submit" style={{ marginTop: "15px" }}> Cancel </button>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6'>
            <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h6 className="heading mb-0"><b>Send Role Wise With Image </b></h6>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-12 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Select Commpany<span className="text-danger">*</span></label>
                                        {/* <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="IFSC Code" /> */}
                                        <select id="disabledSelect" class="form-select">
                                            <option disabled>--select --</option>
                                            <option value="0" selected="" data-select2-id="2">
                                                Pay Panda Payment Solution Pvt Ltd
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Member Type<span className="text-danger">*</span></label>
                                        {/* <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="IFSC Code" /> */}
                                        <select id="disabledSelect" class="form-select">
                                            <option disabled>--select --</option>
                                            <option value="0" selected="" data-select2-id="2">
                                                Company Staff
                                            </option>
                                            <option value="1">TSM</option>
                                            <option value="2">Sales Excutive</option>
                                            <option value="3">Supper Distributer</option>
                                            <option value="6">Distributer</option>
                                            <option value="5">Retailer</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Image<span className="text-danger">*</span></label>
                                        <input type="file" className="form-control" id="exampleFormControlInput2" />
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Image Caption<span className="text-danger">*</span></label>
                                        <input type="file" className="form-control" id="exampleFormControlInput2" placeholder='Image Caption' />
                                    </div>

                                    <div className=''>
                                        <button className="btn btn-primary pd-x-20  rounded-2 " type="submit" style={{ marginTop: "15px" }}> Send Now </button>
                                        <button className="btn btn-warning pd-x-20  rounded-2 " type="submit" style={{ marginTop: "15px" }}> Cancel </button>
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

export default WhatsappRoleWise
