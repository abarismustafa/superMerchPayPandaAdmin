import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function BankMasterList() {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">BANK MASTER</h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/admin/add-bank" role="button" aria-controls="offcanvasExample">+ BANK MASTER</Link>
                                    {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                <thead>
                                    <tr role="row">
                                        <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                            ID
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                            Bank Name
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                            IFSC Code</th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                            Bank ID
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Paysprint Bank Id</th>

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
                                            SBI Bank
                                        </td>
                                        <td><span>SBN0454554</span></td>
                                        <td>1</td>
                                        <td>
                                            40
                                        </td>


                                        <td>
                                            <span className="badge badge-success light border-0">Inactive</span>
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <Link to="/admin/edit-add-bank" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                                            </div>

                                        </td>

                                    </tr>
                                    <tr role="row" className="odd">
                                        <td className="sorting_1"><span>2</span></td>
                                        <td>
                                            SBI Bank
                                        </td>
                                        <td><span>SBN0872365</span></td>
                                        <td>1</td>
                                        <td>
                                            45
                                        </td>


                                        <td>
                                            <span className="badge badge-danger light border-0">Inactive</span>
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <Link to="/admin/edit-add-bank" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
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

        // <div className='row'>
        //     <div className="col-xl-12 row-sm mt-3">
        //         <div className="card">
        //             <div className="card-header pb-0">
        //                 <div className="d-flex justify-content-between">
        //                     <h4 className="card-title mg-b-2 mt-2">Bank Master</h4>

        //                     <Link to="/add-bank" className="btn btn-danger btn-sm">Add Banks </Link>

        //                 </div>
        //                 <hr />
        //             </div>
        //             <div className="card-body">
        //                 <div className="table-responsive">
        //                     <div id="my_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
        //                         <div className="row">
        //                             <div className="col-sm-12 col-md-6">
        //                                 <div className="dataTables_length" id="my_table_length">
        //                                     <label>Show Entries<select name="my_table_length" aria-controls="my_table" className="custom-select custom-select-sm form-control form-control-sm" fdprocessedid="6dvoag">
        //                                         <option value={10}>10</option>
        //                                         <option value={25}>25</option>
        //                                         <option value={50}>50</option>
        //                                         <option value={100}>100</option>
        //                                     </select> </label>
        //                                 </div>
        //                             </div>
        //                             <div className="col-sm-12 col-md-6">
        //                                 <div id="my_table_filter" className="dataTables_filter">
        //                                     <label>Search:
        //                                         <form autoComplete="off">
        //                                             <input type="search" className="form-control form-control-sm" placeholder aria-controls="my_table" />
        //                                         </form>
        //                                     </label>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="row">
        //                             <div className="col-sm-12">
        //                                 <table className="table-all">
        //                                     <thead>
        //                                         <tr>
        //                                             <th>ID</th>
        //                                             <th>Bank Name</th>
        //                                             <th>IFSC Code</th>
        //                                             <th>Bank ID</th>
        //                                             <th>Paysprint Bank Id</th>
        //                                             <th>Status</th>
        //                                             <th>Actions</th>
        //                                         </tr>
        //                                     </thead>
        //                                     <tbody>

        //                                         <tr role="row" class="odd border-top border-bottom border-primary">
        //                                             <td> 1</td>
        //                                             <td>SBI Bank</td>
        //                                             <td class="sorting_1">SBN0872365</td>
        //                                             <td>1</td>
        //                                             <td><span class="positive-value">45</span></td>
        //                                             <td>
        //                                                 <span className='bg-danger text-light py-1 px-2 rounded'>Disabled</span>
        //                                             </td>
        //                                             <td>
        //                                                 <span className='bg-warning  py-1 px-2 rounded'><Link to={"/edit-add-bank"} className='text-light text-decoration-none'><FaRegEdit className='FaRegEdit' />Edit</Link></span>
        //                                             </td>
        //                                         </tr>
        //                                     </tbody>
        //                                 </table>
        //                             </div>
        //                         </div>
        //                         <div className="row">
        //                             <div className="col-sm-12 col-md-5">
        //                                 <div className="dataTables_info" id="my_table_info" role="status" aria-live="polite">
        //                                     Showing 0 to 0 of 0 entries
        //                                 </div>
        //                             </div>
        //                             <div className="col-sm-12 col-md-7">
        //                                 <div className="dataTables_paginate paging_simple_numbers" id="my_table_paginate">
        //                                     <ul className="pagination">
        //                                         <li className="paginate_button page-item previous " id="my_table_previous">
        //                                             <Link to="#" aria-controls="my_table" data-dt-idx={0} tabIndex={0} className="page-link">Previous</Link>
        //                                         </li>
        //                                         <li className="paginate_button page-item next " id="my_table_next">
        //                                             <Link to="#" aria-controls="my_table" data-dt-idx={1} tabIndex={0} className="page-link">Next</Link>
        //                                         </li>
        //                                     </ul>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                     </div>
        //                     {/* Script */}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default BankMasterList
