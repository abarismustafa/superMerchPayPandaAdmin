import React, { useState } from 'react'
// import react icon start
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa6';
import PancardLoginModal from '../pancardloginModal/PancardLoginModal'

function PancardReportForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <section>
      <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">ADD Pancard</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">From <span className="text-danger">*</span></label>
                                            <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Service Name" />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">To<span className="text-danger">*</span></label>
                                            <input type="date" className="form-control" id="exampleFormControlInput2" placeholder="Code" />
                                        </div>
                                        <div className="col-lg-4 col-md-4 mg-t-10 mg-sm-t-25">
                                                <label className="form-label ms-3">
                                                    Search & Download <span className="tx-danger"></span>
                                                </label>
                                                <br />
                                                <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                    <FaSearch /> Search
                                                </button>
                                                <button
                                                    className="btn btn-danger pd-x-20"
                                                    type="button"
                                                    data-toggle="modal"
                                                    data-target="#transaction_download_model"
                                                    onClick={handleShow}
                                                    aria-label="Download"
                                                >
                                                    <FaDownload /> Download
                                                </button>
                                                <PancardLoginModal handleClose={handleClose} show={show} />
                                            </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default PancardReportForm
