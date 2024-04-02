import React, { useState } from 'react'
import ExportPdf from '../../../../common/exportPdf/ExportPdf'
import { Pagination } from 'antd';
import Loadar from '../../../../common/loader/Loader';
import { CSVLink } from 'react-csv';

function DmtReportSearchList({onChangeVal,dmtTtxn,loading}) {
    
   const curdmtTtxn = dmtTtxn?.dmtTransaction

    return (
        <section className="ListDistributer exppdf">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b> DMT Transaction Reports </b></h4>
                                    <div>
                                        {/* <Link className="btn btn-primary btn-sm" to="/admin/add-summary-report" role="button" aria-controls="offcanvasExample">+  ADD SUMMARY REPORTS </Link> */}
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                    + Invite Employee
                </button> */}
                                        <ExportPdf />
                                        <CSVLink  className="btn btn-succes" data={curdmtTtxn}>Export Excel</CSVLink>
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>

                                            <tr role="row">
                                                {/* <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                    S.NO
                                                </th> */}
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                User Name
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    User Mobile
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    Created Date
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Update Date</th>

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Txn Id	</th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Account No</th>

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Bank Name </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Opening Balance  </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Closing Balance</th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Amount  </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Charge  </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Commission  </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Key Status  </th>


                                            </tr>
                                        </thead>
                                        {loading && <Loadar/>}
                                        <tbody>
                                            {curdmtTtxn?.map((item,i)=>{
                                                return <tr role="row" className="odd" key={i}>
                                                {/* <td> {i+1}</td> */}
                                                <td> {item?.username}</td>
                                                <td> {item?.customer_mobile}</td>
                                                <td> { new Date(item?.createdAt).getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear()}</td>
                                                <td> { new Date(item?.updatedAt).getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear()}</td>
                                                <td> {item?.txn_id}</td>
                                                <td> {item?.account_number}</td>
                                                <td> {item?.bank_name}</td>
                                                <td> {item?.o_bal}</td>
                                                <td> {item?.c_bal}</td>
                                                <td> {item?.amount}</td>
                                                <td> {item?.charge}</td>
                                                <td> {item?.commission}</td>
                                                <td> {item?.tx_status}</td>
                                            </tr>
                                            })}
                                            
                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {dmtTtxn?.total} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                            // showSizeChanger
                                            // onShowSizeChange={''}

                                            defaultCurrent={1}
                                            onChange={onChangeVal}
                                            total={dmtTtxn?.total}
                                        />
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </section>
    )
}

export default DmtReportSearchList