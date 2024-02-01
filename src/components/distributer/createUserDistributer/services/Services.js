import { Button } from "react-bootstrap"

function Services() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Service
                                    </b></h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Housing Society Services<span className="text-danger">*</span></label>
                                            <select id="disabledSelect " className=" form-select select2">
                                                <option disabled value={true}> -Select Status-</option>
                                                <option value="1">Active</option><option value="2">Delhi</option><option value="3">De-Active</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Cable TV Services<span className="text-danger">*</span></label>
                                            <select id="disabledSelect " className=" form-select select2">
                                                <option disabled value={true}> -Select Status-</option>
                                                <option value="1">Active</option><option value="2">Delhi</option><option value="3">De-Active</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">LPG Gas Services<span className="text-danger">*</span></label>
                                            <select id="disabledSelect " className=" form-select select2">
                                                <option disabled value={true}> -Select Status-</option>
                                                <option value="1">Active</option><option value="2">Delhi</option><option value="3">De-Active</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Pancard Services<span className="text-danger">*</span></label>
                                            <select id="disabledSelect " className=" form-select select2">
                                                <option disabled value={true}> -Select Status-</option>
                                                <option value="1">Active</option><option value="2">Delhi</option><option value="3">De-Active</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Cable TV Services<span className="text-danger">*</span></label>
                                            <select id="disabledSelect " className=" form-select select2">
                                                <option disabled value={true}> -Select Status-</option>
                                                <option value="1">Active</option><option value="2">Delhi</option><option value="3">De-Active</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                                <div className="card-footer">
                            <button type="submit" className="btn btn-danger waves-effect waves-light">Save Details</button>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Services