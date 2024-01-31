
function Presnoaldetails() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Permanent Details</b></h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Address <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">City<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="City" />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label"> Pincode<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput3" placeholder=" Pincode" />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">State<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Mobile Number" />
                                        </div>
                                       
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">District<span className="text-danger">*</span></label>
                                            <select id="disabledSelect " class=" form-control form-select rounded-0">
                                                <option disabled value={true}> -Select District-</option>
                                                <option value="1">Maharashtra</option><option value="2">Delhi</option><option value="3">Tamil Nadu</option><option value="4">Gujarat</option><option value="5">Uttar Pradesh East</option><option value="6">Rajasthan</option><option value="7">West Bengal</option><option value="8">Madhya Pradesh</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Presnoaldetails