
function ServiceRetailer() {
    return (
        <>
            <div className="row row-sm mt-3">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className="d-flex justify-content-between">
                                <h4 className="card-title mg-b-2 mt-2">Service</h4>
                                <i className="mdi mdi-dots-horizontal text-gray" />
                            </div>
                            <hr />
                        </div>
                        <div className="card-body">
                            <div className="form-body">
                                <div className="row">
                                    <div className="col-sm-4 mt-3">
                                        <div className="form-group">
                                            <label htmlFor="name">DTH Services</label>
                                            <select className="form-control" id="dth">
                                                <option value={1}>Active</option>
                                                <option value={0}>De Active</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mt-3">
                                        <div className="form-group">
                                            <label htmlFor="name">Housing Society Services</label>
                                            <select className="form-control" id="housing_society">
                                                <option value={1}>Active</option>
                                                <option value={0}>De Active</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mt-3">
                                        <div className="form-group">
                                            <label htmlFor="name">Cable TV Services</label>
                                            <select className="form-control" id="cable_tv">
                                                <option value={1}>Active</option>
                                                <option value={0}>De Active</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mt-3">
                                        <div className="form-group">
                                            <label htmlFor="name">LPG Gas Services</label>
                                            <select className="form-control" id="lpg_gas">
                                                <option value={1}>Active</option>
                                                <option value={0}>De Active</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mt-3">
                                        <div className="form-group">
                                            <label htmlFor="name">Pancard Services</label>
                                            <select className="form-control" id="pancard">
                                                <option value={1}>Active</option>
                                                <option value={0}>De Active</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-danger waves-effect waves-light">Save Details</button>
                        </div>
                    </div>
                </div>
                {/*/div*/}
            </div>
        </>
    )
}
export default ServiceRetailer