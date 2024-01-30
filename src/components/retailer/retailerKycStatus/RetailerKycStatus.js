import { FaSearch } from "react-icons/fa";
function RetailerKycStatus() {
    return (
        <>
            <div className="kycStatus mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <form >
                                        <div className="row">
                                            <div className="col-lg-3 col-md-8 form-group mg-b-0">
                                                <label className="form-label">KYC Status: <span className="tx-danger">*</span></label>
                                                <select className="form-control select2" id="kyc_status" name="kyc_status" style={{ width: '100%' }} fdprocessedid="5ibydh">
                                                    <option value="all">All Status (0)</option>
                                                    <option value="approved">Approved (0)</option>
                                                    <option value="rejected">Rejected (0)</option>
                                                    <option value="pending">Pending (0)</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-3 col-md-4 mg-t-10 mg-sm-t-25">
                                                <button className="btn btn-primary pd-x-20" style={{ marginTop: '30px' }} type="button" ><FaSearch style={{ marginBottom: '5px' }} /> Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default RetailerKycStatus