import { useState } from "react";
import PaymentRequestViewDownload from "./paymentRequestViewDownload/PaymentRequestViewDownload"

function PaymentRequestViewForm() {
    const [modalShow, setModalShow] = useState(false);


    return (
        <>
            <div className="col-lg-12 col-md-12">
                <div className="card">
                    <div className="card-body">
                        <form action="" method="get">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="form-group">
                                        <label className="form-label">From: <span className="tx-danger">*</span></label>
                                        <input className="form-control fc-datepicker hasDatepicker" type="date" />
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-group">
                                        <label className="form-label">To: <span className="tx-danger">*</span></label>
                                        <input className="form-control fc-datepicker hasDatepicker" type="date" />
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-group">
                                        <label className="form-label">Status:</label>
                                        <select className="form-control select2 select2-hidden-accessible" id="other_id" name="status_id" style={{ width: '100%' }} data-select2-id="other_id" tabIndex={-1} aria-hidden="true">
                                            <option value={0} selected data-select2-id={2}> All Status</option>
                                            <option value={1}>Success</option>
                                            <option value={2}>Failure</option>
                                            <option value={3}>Pending</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-3 mg-sm-t-25 mt-4">
                                    <button className="btn btn-primary pd-x-20 me-2  me-2-2" type="button" fdprocessedid="4y92n"><i className="fas fa-search" /> Search</button>
                                    <button className="btn btn-danger pd-x-20 me-2-2" type="button" onClick={() => setModalShow(true)}> <i className="fas fa-download" /> Download</button>
                                </div>

                            </div>

                        </form>


                    </div>
                </div >
                <PaymentRequestViewDownload show={modalShow}
                    onHide={() => setModalShow(false)} />
            </div >
        </>
    )
}
export default PaymentRequestViewForm