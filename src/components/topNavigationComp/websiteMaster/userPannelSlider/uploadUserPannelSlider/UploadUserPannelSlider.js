
function UploadUserPannelSlider() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">UPLOAD USER SLIDE BANNER</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Banner Type<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>--Select Banner Type--</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Select Banner<span className="text-danger">*</span></label>
                                            <input type="file" className="form-control" />

                                        </div>
                                    </div>
                                    <div>
                                        {/* <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link> */}
                                        <button className="btn btn-primary me-1">Submit</button>
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
export default UploadUserPannelSlider