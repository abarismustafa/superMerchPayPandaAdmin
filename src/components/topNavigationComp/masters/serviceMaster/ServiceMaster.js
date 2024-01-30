import { FaRegEdit } from "react-icons/fa"
import { Link } from "react-router-dom"

function ServiceMaster() {
    return (
        <>
            <section>
                <div className="container">
                    <div className='row'>
                        <div className="col-xl-12 row-sm mt-3">
                            <div className="card">
                                <div className="card-header pb-0">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="card-title mg-b-2 mt-2">Service Master</h4>

                                        {/* <Link to="/add-bank" className="btn btn-danger btn-sm">Add Banks </Link> */}

                                    </div>
                                    <hr />
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div id="my_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="dataTables_length" id="my_table_length">
                                                        <label>Show Entries<select name="my_table_length" aria-controls="my_table" className="custom-select custom-select-sm form-control form-control-sm" fdprocessedid="6dvoag">
                                                            <option value={10}>10</option>
                                                            <option value={25}>25</option>
                                                            <option value={50}>50</option>
                                                            <option value={100}>100</option>
                                                        </select> </label>
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
                                                                <th>ID</th>
                                                                <th>Service Name</th>
                                                                <th>Service Change</th>
                                                                <th>Status</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr role="row" class="odd border-top border-bottom border-primary">
                                                                <td> 1</td>
                                                                <td>Activation</td>
                                                                <td>0</td>
                                                                <td ><span className='bg-danger text-light py-1 px-2'>Disabled</span></td>
                                                                <td>
                                                                    <span className='bg-warning  py-1 px-2 rounded'><Link to={"/edit-service-master"} className='text-light text-decoration-none'><FaRegEdit className='FaRegEdit' />Edit</Link></span>
                                                                </td>
                                                            </tr>
                                                            <tr role="row" className="odd border-top border-bottom border-primary">
                                                                <td>2</td>
                                                                <td>Add Moeny</td>
                                                                <td>10</td>
                                                                <td ><span className='bg-success text-light py-1 px-2'>Enabled</span></td>
                                                                <td>
                                                                    <span className='bg-warning  py-1 px-2 rounded'><Link to={"/edit-service-master"} className='text-light text-decoration-none'><FaRegEdit className='FaRegEdit' />Edit</Link></span>
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
                    </div>
                </div>
            </section>
        </>
    )
}
export default ServiceMaster