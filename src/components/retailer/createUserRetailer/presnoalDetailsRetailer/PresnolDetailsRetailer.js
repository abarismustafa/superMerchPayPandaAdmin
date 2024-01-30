
function PermanentDetailsRetailer() {
    return (
        <>
            <div className="row row-sm mt-3">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className="d-flex justify-content-between">
                                <h4 className="card-title mg-b-2 mt-2">Permanent details </h4>
                                <i className="mdi mdi-dots-horizontal text-gray" />
                            </div>
                            <hr />
                        </div>
                        <div className="card-body">
                            <div className="form-body">
                                <div className="row">
                                    <div className="col-sm-4 mt-3">
                                        <div className="form-group">
                                            <label htmlFor="name">Address</label>
                                            <input className="form-control" id="address" placeholder="Address" />

                                        </div>
                                    </div>
                                    <div className="col-sm-4 mt-3">
                                        <div className="form-group">
                                            <label htmlFor="name">City</label>
                                            <input type="text" id="city" className="form-control" placeholder="City" />

                                        </div>
                                    </div>
                                    <div className="col-sm-4 mt-3">
                                        <div className="form-group">
                                            <label htmlFor="name">Pincode</label>
                                            <input type="text" id="pin_code" className="form-control" placeholder="Pincode" />

                                        </div>
                                    </div>
                                    <div className="col-sm-4 mt-3">
                                        <div className="form-group">
                                            <label htmlFor="name">State</label>
                                            <select className="form-control select2" id="state_id" onchange="get_permanent_distric(this)">
                                                <option value>Select State</option>
                                                <option value={1}>Maharashtra</option>
                                                <option value={2}>Delhi</option>
                                                <option value={3}>Tamil Nadu</option>
                                                <option value={4}>Gujarat</option>
                                                <option value={5}>Uttar Pradesh East</option>
                                                <option value={6}>Rajasthan</option>
                                                <option value={7}>West Bengal</option>
                                                <option value={8}>Madhya Pradesh</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-sm-4 mt-3">
                                        <div className="form-group">
                                            <label htmlFor="name">District</label>
                                            <select className="form-control select2" id="state_id" onchange="get_permanent_distric(this)">
                                                <option value>Select District</option>
                                                <option value={1}>Maharashtra</option>
                                                <option value={2}>Delhi</option>
                                                <option value={3}>Tamil Nadu</option>
                                                <option value={4}>Gujarat</option>
                                                <option value={5}>Uttar Pradesh East</option>
                                                <option value={6}>Rajasthan</option>
                                                <option value={7}>West Bengal</option>
                                                <option value={8}>Madhya Pradesh</option>
                                            </select>

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
export default PermanentDetailsRetailer