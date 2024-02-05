import { Link } from "react-router-dom"

function AddProvider() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">ADD PROVIDER</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Service Name<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>--Select Service Name--</option>
                                                <option value="1">Airtel</option>
                                                <option value="2">Jio</option>
                                                <option value="3">VI</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Provider Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" placeholder="Provider Name" />
                                        </div>
                                    </div>
                                    <div>
                                        <Link to='/admin/provider' className="btn btn-danger light ms-1">Cancel</Link>
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
export default AddProvider