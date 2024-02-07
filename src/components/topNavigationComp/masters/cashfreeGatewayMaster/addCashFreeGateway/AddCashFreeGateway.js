import React from 'react'
import { Link } from 'react-router-dom'

const AddCashFreeGateway = () => {
  return (
    <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">ADD CASHFREE GATEWAY -</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    {/* <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Joining Date <span className="text-danger">*</span></label>
                                        <input type="date" className="form-control" id="exampleFormControlInput1" />
                                    </div> */}
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">App Id<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder='App Id' />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Secrete Key<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Secrete Key" />

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Base Url	<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Base Url	" />

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Status<span className="text-danger">*</span></label>
                                        <select className='form-control'>
                                            <option>--Active--</option>
                                            <option>--Inactive--</option>
                                        </select>
                                        {/* <textarea className="form-control" defaultValue={"Reason"} /> */}
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Min-Amount <span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Min-Amount" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Max-Amount<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Max-Amount" />
                                    </div>
                                </div>
                                <div>
                                    <Link to='/admin/cashfree-gateway-master' className="btn btn-danger light ms-1">Cancel</Link>
                                    <button className="btn btn-primary me-1">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddCashFreeGateway
