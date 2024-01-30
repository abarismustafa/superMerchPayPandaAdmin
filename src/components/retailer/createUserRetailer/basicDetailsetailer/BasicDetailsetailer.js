
function BasicDetailsRetails() {
    return (
        <>
            <div className="row row-sm">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className="d-flex justify-content-between">
                                <h4 className="card-title mg-b-2 mt-2">Basic details</h4>
                                <i className="mdi mdi-dots-horizontal text-gray" />
                            </div>
                            <hr />
                        </div>
                        <div className="card-body">
                            <div className="form-body">
                                <div className="row">
                                    <div className="col-sm-4 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="name">First Name</label>
                                            <input type="text" id="name" className="form-control" placeholder="First Name" />

                                        </div>
                                    </div>
                                    <div className="col-sm-4  mb-3">
                                        <div className="form-group">
                                            <label htmlFor="name">Last Name </label>
                                            <input type="text" id="last_name" className="form-control" placeholder="Last Name" />

                                        </div>
                                    </div>
                                    <div className="col-sm-4  mb-3">
                                        <div className="form-group">
                                            <label htmlFor="name">Email Address</label>
                                            <input type="text" id="email" className="form-control" placeholder="Email Address" />

                                        </div>
                                    </div>
                                    <div className="col-sm-4  mb-3">
                                        <div className="form-group">
                                            <label htmlFor="name">Mobile Number</label>
                                            <input type="text" id="mobile" className="form-control" placeholder="Mobile Number" />

                                        </div>
                                    </div>
                                    <div className="col-sm-4  mb-3">
                                        <div className="form-group">
                                            <label htmlFor="name">Member Type</label>
                                            <select className="form-control select2 select2-hidden-accessible" >
                                                <option value={7} data-select2-id={2}>Distributor</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-sm-4  mb-3">
                                        <div className="form-group">
                                            <label htmlFor="name">Shop Name</label>
                                            <input type="text" id="shop_name" className="form-control" placeholder="Shop Name" />

                                        </div>
                                    </div>
                                    <div className="col-sm-4  mb-3">
                                        <div className="form-group">
                                            <label htmlFor="name">Office Address</label>
                                            <textarea className="form-control" id="office_address" placeholder="Office Address" defaultValue={""} />

                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-3" >
                                        <div className="form-group">
                                            <label htmlFor="name">Lock Amount</label>
                                            <input type="text" id="lock_amount" className="form-control" placeholder="Lock Amount" />

                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="name">Pan Number</label>
                                            <input type="text" id="pan_number" className="form-control" placeholder="Pan Number" />

                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="name">GST Number</label>
                                            <input type="text" id="gst_number" className="form-control" placeholder="GST Number" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/div*/}
            </div>
        </>
    )
}
export default BasicDetailsRetails