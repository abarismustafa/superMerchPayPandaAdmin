import { Link } from "react-router-dom"

function EditPayoutBeneficiaryMaster() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">UPDATE PAYOUT BENEFICIARY MASTER</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">User Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="User Name" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Date<span className="text-danger">*</span></label>
                                            <input type="date" className="form-control" id="exampleFormControlInput2" placeholder="Service Charge" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Mobile Number<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" id="exampleFormControlInput3" placeholder="Mobile Number" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Account Number<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" id="exampleFormControlInput3" placeholder="Account Number" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Holder Name<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" id="exampleFormControlInput3" placeholder="Holder Name" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">IFSC Code<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" id="exampleFormControlInput3" placeholder="IFSC Code" />
                                        </div>
                                    </div>
                                    <div>
                                        <Link to='/admin/payout-beneficiary-master' className="btn btn-danger light ms-1">Cancel</Link>
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
export default EditPayoutBeneficiaryMaster