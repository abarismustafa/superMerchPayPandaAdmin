import { Link } from "react-router-dom"
import EditNotWorkingList from "./editNotWorkingUserList/EditNotWorkingUserList"
import { useState } from "react";
import DownloadNotWorkUser from "./downloadNotWorkUser/DownloadNotWorkUser";

function NotWorkingUserList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <section className="ListDistributer mt-3">
                <div className="container">
                    <div className="row row-sm">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header pb-0">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="card-title mg-b-2 mt-2">NOT WORKING USERS LIST</h4>
                                        <button className="btn btn-primary btn-sm" type="button" onClick={() => setModalShow(true)}>Download Not Working Users</button>
                                        {/* <Link to="/create-user/distributor" className="btn btn-danger btn-sm"> Create Distributor</Link>
                                        <i className="mdi mdi-dots-horizontal text-gray" /> */}
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
                                                                <th>User Id</th>
                                                                <th>Joining Date</th>
                                                                <th>Name</th>
                                                                <th>Shop Name</th>
                                                                <th>Mobile</th>
                                                                <th>Member Type</th>
                                                                <th>Normal Balance</th>
                                                                <th>Parent</th>
                                                                <th>Package</th>
                                                                <th>Status</th>
                                                                <th>KYC Status</th>
                                                                <th>User Activity</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <button className="btn btn-danger btn-sm" variant="primary" onClick={handleShow} > 1044 View</button>
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
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
                                                                <Link to="#" aria-controls="my_table" data-dt-idx={0} tabIndex={0} className="page-link">Previous</Link>
                                                            </li>
                                                            <li className="paginate_button page-item next " id="my_table_next">
                                                                <Link to="#" aria-controls="my_table" data-dt-idx={1} tabIndex={0} className="page-link">Next</Link>
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
                {['end'].map((placement, idx) => (
                    <EditNotWorkingList key={idx} placement={placement} name={placement} show={show} handleClose={handleClose} />
                ))}

                <DownloadNotWorkUser show={modalShow}
                    onHide={() => setModalShow(false)} />


            </section>
        </>
    )
}
export default NotWorkingUserList