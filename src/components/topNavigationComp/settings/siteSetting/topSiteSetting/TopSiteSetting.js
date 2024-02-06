

function TopSiteSetting() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">SITE SETTINGS</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Brand Name(for sms) <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Brand Name" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Sms<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>--Select Sms--</option>
                                                <option value="1">Enabled</option>
                                                <option value="2">Disabled</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Sms Key<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Sms Key" />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Whatsapp Number<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Whatsapp Number" />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Whatsapp<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>--Select Sms--</option>
                                                <option value="1">Enabled</option>
                                                <option value="2">Disabled</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Whatsapp Api Token<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Whatsapp Number" />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Alert Amount<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Alert Amount" />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Mail<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>--Select Sms--</option>
                                                <option value="1">Enabled</option>
                                                <option value="2">Disabled</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div>
                                        <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link>
                                        <button className="btn btn-primary me-1">Submit</button>
                                    </div> */}
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopSiteSetting