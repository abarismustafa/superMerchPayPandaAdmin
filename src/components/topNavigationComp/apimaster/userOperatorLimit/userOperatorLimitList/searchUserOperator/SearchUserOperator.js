

function SearchUserOperator() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    {/* <h4 className="heading mb-0">ADD SERVICE MASTER</h4> */}
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">

                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Member Type<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>--Select Member Type--</option>
                                                <option value="1">All Type</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">User<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>--Select User--</option>
                                                <option value="1">All User</option>
                                                <option value="2">user</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>

                                        <button className="btn btn-primary me-1">Search</button>
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
export default SearchUserOperator