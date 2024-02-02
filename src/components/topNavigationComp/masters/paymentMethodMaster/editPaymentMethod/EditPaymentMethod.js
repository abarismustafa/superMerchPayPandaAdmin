import { Link } from "react-router-dom"

function EditPaymentMethod() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">UPDATE PAYMENT METHOD</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Method Type<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Method Type" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Status<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>Open this select menu</option>
                                                <option value="1">Enabled</option>
                                                <option value="2">Disabled</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3 mt-4">
                                            <Link to='payment-method' className="btn btn-danger light ms-1">Cancel</Link>
                                            <button className="btn btn-primary me-1">Submit</button>
                                        </div>

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
export default EditPaymentMethod