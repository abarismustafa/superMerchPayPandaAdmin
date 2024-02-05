import React from 'react'

function AddDebitReport() {
  return (
    <div className="row">
    <div className="col-xl-12">
        <div className="card">
            <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption tbl-caption-2">
                        <h4 className="heading mb-0"><b>Debit Report  - </b></h4>
                    </div>
                    <form className="tbl-captionn">
                        <div className="row">
                            <div className="col-xl-3 mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Date <span className="text-danger">*</span></label>
                                <input type="Date" className="form-control" id="exampleFormControlInput1" placeholder="Provider" />
                            </div>
                            <div className="col-xl-3 mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">User Name<span className="text-danger">*</span></label>
                                <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="User Name" />
                            </div>
                            <div className="col-xl-3 mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Transfer To<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Transfer To" />
                            </div>
                            <div className="col-xl-3 mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Provider Name<span className="text-danger">*</span></label>
                                <input type="nuber" className="form-control" id="exampleFormControlInput2" placeholder="Provider Name" />
                            </div>
                            <div className="col-xl-3 mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Number<span className="text-danger">*</span></label>
                                <input type="nuber" className="form-control" id="exampleFormControlInput2" placeholder="number" />
                            </div>
                            <div className="col-xl-3 mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Taxind<span className="text-danger">*</span></label>
                                <input type="nuber" className="form-control" id="exampleFormControlInput2" placeholder="Taxind" />
                            </div>
                            <div className="col-xl-3 mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Amount<span className="text-danger">*</span></label>
                                <input type="nuber" className="form-control" id="exampleFormControlInput2" placeholder="Amount" />
                            </div>
                            <div className="col-xl-3 mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Balance<span className="text-danger">*</span></label>
                                <input type="nuber" className="form-control" id="exampleFormControlInput2" placeholder="Balance" />
                            </div>
                            <div className='border-top'>
                                <button className="btn btn-primary pd-x-20 rounded-2 mt-4 " type="submit"> Save </button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AddDebitReport
