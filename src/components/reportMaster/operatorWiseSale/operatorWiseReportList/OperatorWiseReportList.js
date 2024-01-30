import React from 'react'

function OperatorWiseReportList() {
    return (
        <div className="row row-sm">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header pb-0">
                        <div className="d-flex justify-content-between">
                            <h4 className="card-title mg-b-2 mt-2">Operator Wise Report</h4>
                            <i className="mdi mdi-dots-horizontal text-gray"></i>
                        </div>
                        <hr />
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="dataTables_length" id="example1_length">
                                            <label>
                                                Show entries
                                                <select name="example1_length" aria-controls="example1" className="custom-select custom-select-sm form-control form-control-sm">
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div id="example1_filter" className="dataTables_filter">
                                            <label>
                                                Search:<input type="search" className="form-control form-control-sm" placeholder="Search..." aria-controls="example1" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table className="table text-md-nowrap dataTable no-footer" id="example1" role="grid" aria-describedby="example1_info">
                                            <thead>
                                                <tr role="row">
                                                    <th className="wd-15p border-bottom-0 sorting_asc" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Sr No: activate to sort column descending" style={{ width: '222px' }}>Sr No</th>
                                                    <th className="wd-15p border-bottom-0 sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Provider: activate to sort column ascending" style={{ width: '222px' }}>Provider</th>
                                                    <th className="wd-15p border-bottom-0 sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Amount: activate to sort column ascending" style={{ width: '222px' }}>Amount</th>
                                                    <th className="wd-15p border-bottom-0 sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="User Comm: activate to sort column ascending" style={{ width: '222px' }}>User Comm</th>
                                                    <th className="wd-15p border-bottom-0 sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="count: activate to sort column ascending" style={{ width: '222px' }}>count</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="odd">
                                                    <td valign="top" colSpan="5" className="dataTables_empty">No matching records found</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">
                                            Showing 0 to 0 of 0 entries (filtered from 1 total entries)
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                            <ul className="pagination">
                                                <li className="paginate_button page-item previous disabled" id="example1_previous">
                                                    <a href="#" aria-controls="example1" data-dt-idx="0" tabIndex="0" className="page-link">
                                                        Previous
                                                    </a>
                                                </li>
                                                <li className="paginate_button page-item next disabled" id="example1_next">
                                                    <a href="#" aria-controls="example1" data-dt-idx="1" tabIndex="0" className="page-link">
                                                        Next
                                                    </a>
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
    )
}

export default OperatorWiseReportList
