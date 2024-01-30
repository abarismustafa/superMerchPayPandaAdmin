import { Link } from "react-router-dom"

function AddRoleMaster() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">ADD ROLE MASTER</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Role Title <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Role Title" />
                                        </div>
                                        <div className="col-xl-6 mb-4 mt-4">
                                            <div>
                                                <Link to='/admin/role-master' className="btn btn-danger light ms-1">Cancel</Link>
                                                <button className="btn btn-primary me-1">Submit</button>
                                            </div>
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
export default AddRoleMaster