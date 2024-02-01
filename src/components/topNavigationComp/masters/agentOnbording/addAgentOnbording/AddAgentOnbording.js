import { Link } from "react-router-dom"

function AddAgentOnbording() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add Agent Onboarding</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">User Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="User Name" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Date<span className="text-danger">*</span></label>
                                            <input type="date" className="form-control" id="exampleFormControlInput2" placeholder="Date" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">First Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="First Name" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Last Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Last Name" />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Mobile Number<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" placeholder="Mobile Number" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Email<span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Aadhar Number<span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" placeholder="Aadhar Number" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Pan Number<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" placeholder="Pan Number" />
                                        </div>

                                    </div>
                                    <div>
                                        <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link>
                                        <button className="btn btn-primary me-1">Submit</button>
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
export default AddAgentOnbording