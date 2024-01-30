
function PaymentRequestForm() {
    return (
        <>
            <div className="col-lg-5 col-md-12">
                <div className="card">
                    <div className="card-body">
                        <div>
                            <h6 className="card-title mb-1">Payment Request</h6>
                            <hr />
                        </div>
                        <div className="mb-4">
                            <label>Bank Name</label>
                            <select className="form-control" id="bankdetail_id" fdprocessedid="ux2mmog">
                                <option value={1}>AXIS BANK</option>
                                <option value={4}>ICICI BANK</option>
                                <option value={5}>AXIS BANK (Auto Update)</option>
                            </select>

                        </div>
                        <div className="mb-4">
                            <label>Payment Method</label>
                            <select className="form-control" id="paymentmethod_id" fdprocessedid="2q3pvb">
                                <option value={1}>CASH PAYMENT</option>
                                <option value={2}>NEFT / RTGS</option>
                                <option value={3}>IMPS</option>
                            </select>

                        </div>
                        <div className="mb-4">
                            <label>Payment Date</label>
                            <input type="text" className="form-control hasDatepicker" placeholder="Payment Date" id="payment_date" autoComplete="off" defaultValue="2024-01-18" fdprocessedid="596wdw" />

                        </div>
                        <div className="mb-4">
                            <label>Amount</label>
                            <input type="number" className="form-control" placeholder="Amount" id="amount" fdprocessedid="3x8wcg" />

                        </div>
                        <div className="mb-4">
                            <label>Bank Ref Number</label>
                            <input type="text" className="form-control" placeholder="Bank Ref Number" id="bankref" fdprocessedid="ho5l" />

                        </div>
                    </div>
                    <div className="modal-footer-btn">
                        <button className="btn ripple btn-primary me-3" type="button" >Save Now</button>
                        <button className="btn ripple btn-secondary" >Close</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PaymentRequestForm