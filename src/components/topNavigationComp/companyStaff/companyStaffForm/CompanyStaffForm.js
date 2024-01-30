import React, { useState } from 'react'

function CompanyStaffForm() {
    const [formData, setFormData] = useState({
        fromdate: '2024-01-18',
        todate: '2024-01-18',
        userId: '0', // Assuming "All User" is the default
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
  return (
    <div className="row my-4">
            <div className="col-lg-12 col-md-12">
                <div className="card">
                    <div className="card-body">
                        <form action="" method="get" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                    <label className="form-label">
                                        From: <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control fc-datepicker hasDatepicker"
                                        value={formData.fromdate}
                                        type="date"
                                        id="fromdate"
                                        name="fromdate"
                                        autoComplete="off"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                    <label className="form-label">
                                        To: <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control fc-datepicker hasDatepicker"
                                        value={formData.todate}
                                        type="date"
                                        id="todate"
                                        name="todate"
                                        autoComplete="off"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                    <label className="form-label">
                                        Name: <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control fc-datepicker hasDatepicker"
                                        type="text"
                                        id="fromdate"
                                        name="fromdate"
                                        autoComplete="off"
                                        
                                    />
                                </div>

                                <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                    <label className="form-label">
                                        Contact No: <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control fc-datepicker hasDatepicker"
                                       
                                        type="number"
                                        id="todate"
                                        name="todate"
                                        autoComplete="off"
                                        
                                    />
                                </div>
                                <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                    <label className="form-label">
                                    Member Type	 <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control fc-datepicker hasDatepicker"
                                        
                                        type="text"
                                        id="fromdate"
                                        name="fromdate"
                                        autoComplete="off"
                                        
                                    />
                                </div>

                                <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                    <label className="form-label">
                                    Normal Balance: <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control fc-datepicker hasDatepicker"
                                       
                                        type="text"
                                        id="todate"
                                        name="todate"
                                        autoComplete="off"
                                        
                                    />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CompanyStaffForm
