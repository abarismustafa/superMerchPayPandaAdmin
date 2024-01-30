import React, { useState } from 'react'
import DebitReportModal from '../debitReportModal/DebitReportModal';

function DebitReportForm() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="col-lg-12 col-md-12 my-4">
                <div className="card">
                    <div className="card-body">
                        <form action="" method="get">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label className="form-label">From: <span className="tx-danger">*</span></label>
                                        <input className="form-control fc-datepicker hasDatepicker" type="date" />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label className="form-label">To: <span className="tx-danger">*</span></label>
                                        <input className="form-control fc-datepicker hasDatepicker" type="date" />
                                    </div>
                                </div>

                                <div className="col-sm-4 mg-sm-t-25 mt-4">
                                    <button className="btn btn-primary pd-x-20 me-2-2" type="button" fdprocessedid="4y92n"><i className="fas fa-search" /> Search</button>
                                    <button className="btn btn-danger pd-x-20 me-2-2" type="button" onClick={() => setModalShow(true)}><i className="fas fa-download" /> Download</button>
                                </div>

                            </div>

                        </form>


                    </div>
                </div>
                <DebitReportModal show={modalShow}
                    onHide={() => setModalShow(false)} />
            </div>
        </>
    )
}

export default DebitReportForm
