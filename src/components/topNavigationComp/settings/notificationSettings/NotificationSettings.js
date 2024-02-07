import { Link } from "react-router-dom"

function NotificationsSetting() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption ">
                                    <h4 className="heading mb-0">SEND NOTIFICATION</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Notification Type <span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>--Select Notification Type--</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Member Type<span className="text-danger">*</span></label>
                                            <select id="disabledSelect" class="form-select">
                                                <option selected>---select Member Type--</option>
                                                <option value="1">Company Staff</option>
                                                <option value="2">TSM</option>
                                                <option value="3">Sales Exective</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Notification Title<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Notification Title" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Notification Message<span className="text-danger">*</span></label>
                                            <textarea className="form-control" defaultValue={"Notification Message"} />
                                        </div>

                                    </div>
                                    <div>
                                        {/* <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link> */}
                                        <button className="btn btn-primary me-1">Send Notificaton</button>
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
export default NotificationsSetting