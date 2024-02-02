import { Link } from "react-router-dom"

function PaymentRequestForm() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">PAYMENT REQUEST</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Bank Name<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>--Select Bank Name--</option>
                                                <option value="1">AXIS BANK</option>
                                                <option value="2">ICICI BANK</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Payment Method<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>--Select Payment Method--</option>
                                                <option value="1">CASH PAYMENT</option>
                                                <option value="2">NEFT / RTGS</option>
                                                <option value="2">IMPS</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Payment Date<span className="text-danger">*</span></label>
                                            <input type="date" className="form-control" id="exampleFormControlInput2" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Amount<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" placeholder="Amount" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Bank Ref Number<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" placeholder="Bank Ref Number" />
                                        </div>
                                    </div>
                                    <div>
                                        <Link to='/admin/payment-request-view' className="btn btn-danger light ms-1">Cancel</Link>
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
export default PaymentRequestForm