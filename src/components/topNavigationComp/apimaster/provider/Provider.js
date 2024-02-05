import React from 'react'
import airtel from "../../../../assets/images/logo/airtel.png"
import { Link } from 'react-router-dom'
function Provider() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">PROVIDER MASTER</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/admin/add-provider" role="button" aria-controls="offcanvasExample">+ PROVIDER MASTER</Link>
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                Provider ID
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Provider Name
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Service</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Logo</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Min-Length</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Max-Length</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Start-with</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Gst Type</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Min-Amount</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Max-Amount</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Help Line</th>

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Status</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd">
                                            <td className="sorting_1"><span>1</span></td>
                                            <td>
                                                AIRTEL
                                            </td>
                                            <td><span>Mobile</span></td>
                                            <td className="sorting_1"><span><img src={airtel} alt="" style={{ width: '50px' }} /></span></td>
                                            <td>
                                                10
                                            </td>
                                            <td><span>12</span></td>
                                            <td className="sorting_1"><span>10,23,42</span></td>
                                            <td>
                                                No
                                            </td>
                                            <td><span>10</span></td>
                                            <td><span>1000</span></td>

                                            <td><span>121</span></td>


                                            <td>
                                                <span className="badge badge-success light border-0">Inactive</span>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <Link to="/admin/update-provider-logo" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    <Link to="/admin/add-provider-logo" className="btn btn-primary shadow btn-xss sharp me-1"><i className="fa fa-pencil" />Add Logo</Link>
                                                    <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">Showing 1 to 10 of 12 entries</div><div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate"><a className="paginate_button previous disabled" aria-controls="empoloyees-tblwrapper" data-dt-idx={0} tabIndex={0} id="empoloyees-tblwrapper_previous"><i className="fa-solid fa-angle-left" /></a><span><a className="paginate_button current" aria-controls="empoloyees-tblwrapper" data-dt-idx={1} tabIndex={0}>1</a><a className="paginate_button " aria-controls="empoloyees-tblwrapper" data-dt-idx={2} tabIndex={0}>2</a></span><a className="paginate_button next" aria-controls="empoloyees-tblwrapper" data-dt-idx={3} tabIndex={0} id="empoloyees-tblwrapper_next"><i className="fa-solid fa-angle-right" /></a></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Provider
