

function DistributerMoneyTrnsfer() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">DISTRIBUTOR : MONEY TRANSFER</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Min Amount<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Min Amount" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Max Amount<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Code" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Type<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>--Select Type --</option>
                                                <option value="1">%</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Sale Team<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Sale Team" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Super Distributer<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Super Distributer" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Super Retailer<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Super Distributer" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Super Referal<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Super Distributer" />
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary me-1">Save Commission</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DistributerMoneyTrnsfer