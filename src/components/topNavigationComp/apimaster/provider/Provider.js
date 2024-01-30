import React from 'react'
// import airtel from "../../../../assets/logo/airtel.png"
import { Link } from 'react-router-dom'
function Provider() {
    return (
        <section>
            <div className='container'>
                <div className='row'>


                    <div className="col-xl-12 row-sm mt-3">
                        <div className="card">
                            <div className="card-header pb-0">
                                <div className="d-flex justify-content-between">
                                    <h4 className="card-title mg-b-2 mt-2">Provider Master</h4>
                                    <button className="btn btn-primary btn-sm" type="button" data-toggle="modal" data-target="#member_download_model" fdprocessedid="pe4h68"> Download Retailer</button>
                                    <Link to="add-provider" className="btn btn-danger btn-sm"> Add Provider</Link>
                                </div>
                                <hr />
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <div id="my_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="dataTables_length" id="my_table_length">
                                                    <label>Show <select name="my_table_length" aria-controls="my_table" className="custom-select custom-select-sm form-control form-control-sm" fdprocessedid="6dvoag">
                                                        <option value={10}>10</option>
                                                        <option value={25}>25</option>
                                                        <option value={50}>50</option>
                                                        <option value={100}>100</option>
                                                    </select> entries</label>
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
                                                <table className="table-all">
                                                    <thead>
                                                        <tr>
                                                            <th>Provider ID</th>
                                                            <th>Provider Name</th>
                                                            <th>Service </th>
                                                            <th>Logo </th>
                                                            <th>Staus</th>
                                                            <th>Min-Length</th>
                                                            <th>Max-Length</th>
                                                            <th>Start-with</th>
                                                            <th>Gst Type</th>
                                                            <th>Min-Amount</th>
                                                            <th>Min-Amount</th>
                                                            <th>Help Line</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className='border-top border-bottom'>
                                                            <td>1</td>
                                                            <td>AIRTEL</td>
                                                            <td>Mobile</td>
                                                            <td>
                                                                {/* <img src={airtel} alt='air' width={50} /> */}
                                                            </td>
                                                            <td>
                                                                <span className='bg-warning text-light px-2 py-1 rounded'>Enable</span>
                                                            </td>
                                                            <td>10</td>
                                                            <td>12</td>
                                                            <td>10,23,42</td>
                                                            <td><span className='bg-danger text-light px-2 py-1 rounded'>No</span></td>
                                                            <td>10</td>
                                                            <td>100000</td>
                                                            <td>121</td>
                                                            <td>
                                                                <Link to={"/update-provider-logo"} className='btn-danger p-1 rounded text-decoration-none'>Update</Link>
                                                                &nbsp;
                                                                <Link to={"/add-provider-logo"} className='text-light p-1 rounded bg-primary text-decoration-none'>Add logo</Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-5">
                                                <div className="dataTables_info" id="my_table_info" role="status" aria-live="polite">
                                                    Showing 0 to 0 of 0 entries
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-7">
                                                <div className="dataTables_paginate paging_simple_numbers" id="my_table_paginate">
                                                    <ul className="pagination">
                                                        <li className="paginate_button page-item previous " id="my_table_previous">
                                                            <a href="#" aria-controls="my_table" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a>
                                                        </li>
                                                        <li className="paginate_button page-item next " id="my_table_next">
                                                            <a href="#" aria-controls="my_table" data-dt-idx={1} tabIndex={0} className="page-link">Next</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* Script */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/div*/}

                </div>
            </div>
        </section>
    )
}

export default Provider
