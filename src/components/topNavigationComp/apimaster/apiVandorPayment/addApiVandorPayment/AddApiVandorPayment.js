
function AddApiVandorPayment() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">ADD API VENDOR</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Api<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>--Select Api--</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mt-3">

                                            <button className="btn btn-primary me-1 mt-4">Submit</button>
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
export default AddApiVandorPayment