import { Link } from "react-router-dom"


function UpdateBackupApiMaster() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">UPDATE BACKUP API MASTER</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">

                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Providers<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>---Select Provider---</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Api<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>---Select Api--</option>
                                                <option value="1">Enabled</option>
                                                <option value="2">Disabled</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Backup Number<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Code" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Status<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>---Select Status--</option>
                                                <option value="1">Enabled</option>
                                                <option value="2">Disabled</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <Link to='/admin/backup-api-master' className="btn btn-danger light ms-1">Cancel</Link>
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
export default UpdateBackupApiMaster