
function SearchStatus() {
    return (
        <>
            <div className='row'>
                <div className="col-xl-12 row-sm mt-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <div id="my_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-4 mb-3">
                                            <div className="dataTables_lengthh" id="my_table_length">
                                                <label>Status</label>
                                                <select class="form-control" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">Pending</option>
                                                    <option value="2">Approved</option>
                                                    <option value="3">Success</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 mt-4">
                                            <div className="dataTables_lengthh text-center" id="my_table_length">
                                                <button className="btn btn-primary me-1">Submit</button>
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
        </>
    )
}
export default SearchStatus