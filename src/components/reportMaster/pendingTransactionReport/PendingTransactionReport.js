import React, { useState } from 'react'
// import react icon start
import { FaSearch } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
// import react icon end
import PendingTransctionModal from './pendingTransactionModal/PendingTransctionModal';
import { Link } from 'react-router-dom';

function PendingTransactionReport() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section>
            <div className='container'>

                <div className='main-content-body'>
                    <div className="row my-3">
                        <div className="col-lg-12 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <form action="" method="get">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                                <label className="form-label">From: <span className="tx-danger">*</span></label>
                                                <input
                                                    className="form-control fc-datepicker hasDatepicker"
                                                    defaultValue="2024-01-18"
                                                    type="date"
                                                    id="fromdate"
                                                    name="fromdate"
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                                <label className="form-label">To: <span className="tx-danger">*</span></label>
                                                <input
                                                    className="form-control fc-datepicker hasDatepicker"
                                                    defaultValue="2024-01-18"
                                                    type="date"
                                                    id="todate"
                                                    name="todate"
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <div className="col-lg-4 col-md-4 mg-t-10 mg-sm-t-25">
                                                <label className="form-label">Search & Download <span className="tx-danger">*</span></label>
                                                <br />
                                                <button
                                                    className="btn bg-primary border-0 me-3 pd-x-20 text-light"
                                                    type="submit"
                                                >
                                                    <FaSearch /> Search
                                                </button>
                                                <button
                                                    className="btn btn-danger pd-x-20"
                                                    type="button"
                                                    data-toggle="modal"
                                                    data-target="#transaction_download_model"
                                                    onClick={handleShow}
                                                >
                                                    <FaDownload /> Download
                                                </button>
                                                <PendingTransctionModal handleClose={handleClose} show={show} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-sm">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header pb-0">
                                <div className="d-flex justify-content-between">
                                    <h4 className="card-title mg-b-2 mt-2">Pending Report</h4>
                                    <i className="mdi mdi-dots-horizontal text-gray" />
                                </div>
                                <hr />
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <div id="my_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="dataTables_length" id="my_table_length">
                                                    <label>Show Entries
                                                        <select name="my_table_length" aria-controls="my_table" className="custom-select custom-select-sm form-control form-control-sm">
                                                            <option value={10}>10</option>
                                                            <option value={25}>25</option>
                                                            <option value={50}>50</option>
                                                            <option value={100}>100</option>
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div id="my_table_filter" className="dataTables_filter">
                                                    <label>Search:
                                                        <form autoComplete="off">
                                                            <input type="search" className="form-control form-control-sm" placeholder aria-controls="my_table" />
                                                        </form>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <table className="display responsive nowrap dataTable no-footer dtr-inline collapsed" id="my_table" role="grid" aria-describedby="my_table_info" style={{ width: 1318 }}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: 132 }}>Select</th>
                                                            <th style={{ width: 127 }}>ID</th>
                                                            <th style={{ width: 130 }}>Date</th>
                                                            <th style={{ width: 137 }}>User Name</th>
                                                            <th style={{ width: 142 }}>Provider Name</th>
                                                            <th style={{ width: 134 }}>Number</th>
                                                            <th style={{ width: 82 }}>Amount</th>
                                                            <th style={{ width: 35 }}>Status</th>
                                                            <th style={{ width: 39 }}>Vendor</th>
                                                            <th style={{ width: 0, display: 'none' }}>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="odd">
                                                            <td valign="top" colSpan={9} className="dataTables_empty">No data available in table</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div id="my_table_processing" className="dataTables_processing card" style={{ display: 'none' }}>Processing...</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-5">
                                                <div className="dataTables_info" id="my_table_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                                            </div>
                                            <div className="col-sm-12 col-md-7">
                                                <div className="dataTables_paginate paging_simple_numbers" id="my_table_paginate">
                                                    <ul className="pagination">
                                                        <li className="paginate_button page-item previous disabled" id="my_table_previous">
                                                            <Link to="#" aria-controls="my_table" data-dt-idx={0} tabIndex={0} className="page-link">Previous</Link>
                                                        </li>
                                                        <li className="paginate_button page-item next disabled" id="my_table_next">
                                                            <Link to="#" aria-controls="my_table" data-dt-idx={1} tabIndex={0} className="page-link">Next</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PendingTransactionReport
