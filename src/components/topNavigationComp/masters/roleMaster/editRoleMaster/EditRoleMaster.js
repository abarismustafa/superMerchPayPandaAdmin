
function EditRoleMaster() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className="col-xl-12 row-sm mt-3">
                            <div className="card">
                                <div className="card-header pb-0">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="card-title mg-b-2 mt-2">Update Role Master</h4>
                                    </div>
                                    <hr />
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div id="my_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-4">
                                                    <div className="dataTables_lengthh" id="my_table_length">
                                                        <label>Role Title</label>
                                                        <input type="search" className="form-control form-control-sm" placeholder="Role Title" aria-controls="my_table" />

                                                    </div>
                                                </div>

                                                <div className="col-sm-12 col-md-4 mt-3 mb-3">
                                                    <div className="dataTables_lengthh text-center" id="my_table_length">
                                                        <button type="button" class="btn btn-primary">Save Bank</button>
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
export default EditRoleMaster