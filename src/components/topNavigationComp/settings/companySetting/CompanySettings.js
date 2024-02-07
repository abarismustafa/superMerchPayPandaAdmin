import React from 'react'

const CompanySettings = () => {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0"><b>Company Settings - </b></h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Company Name <span className="text-danger">*</span></label>
                                        <input type="datextte" className="form-control" id="exampleFormControlInput1" placeholder="Company Name" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Company Email<span className="text-danger">*</span></label>
                                        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="abc@gmail.com" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Company Website <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder=" Company Website " />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Support Nubmer<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Support Number" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">WhatsApp No<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="WhatsApp No" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">News<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="News" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Sms Sender<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Opening Balance" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label"> Same Amount Recharge	<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option disabled>--select --</option>
                                            <option value="0" selected="" data-select2-id="2">
                                                1 Min
                                            </option>
                                            <option value="1">
                                                5 Min
                                            </option>
                                            <option value="2">10 Min</option>
                                            <option value="3">15 Min</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label"> Server<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option disabled selected="">--select --</option>
                                            <option value="0" data-select2-id="2">
                                                Running
                                            </option>
                                            <option value="1">
                                                Stop
                                            </option>
                                            <option value="2">
                                                In Progress
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Maintainance Message<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Working" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Select Sate<span className="text-danger">*</span></label>
                                        <select id="disabledSelect" class="form-select">
                                            <option disabled selected="">--select --</option>
                                            <option value="AP">Andhra Pradesh</option>
                                            <option value="AR">Arunachal Pradesh</option>
                                            <option value="AS">Assam</option>
                                            <option value="BR">Bihar</option>
                                            <option value="CT">Chhattisgarh</option>
                                            <option value="GA">Gujarat</option>
                                            <option value="HR">Haryana</option>
                                            <option value="HP">Himachal Pradesh</option>
                                            <option value="JK">Jammu and Kashmir</option>
                                            <option value="GA">Goa</option>
                                            <option value="JH">Jharkhand</option>
                                            <option value="KA">Karnataka</option>
                                            <option value="KL">Kerala</option>
                                            <option value="MP">Madhya Pradesh</option>
                                            <option value="MH">Maharashtra</option>
                                            <option value="MN">Manipur</option>
                                            <option value="ML">Meghalaya</option>
                                            <option value="MZ">Mizoram</option>
                                            <option value="NL">Nagaland</option>
                                            <option value="OR">Odisha</option>
                                            <option value="PB">Punjab</option>
                                            <option value="RJ">Rajasthan</option>
                                            <option value="SK">Sikkim</option>
                                            <option value="TN">Tamil Nadu</option>
                                            <option value="TG">Telangana</option>
                                            <option value="TR">Tripura</option>
                                            <option value="UT">Uttarakhand</option>
                                            <option value="UP">Uttar Pradesh</option>
                                            <option value="WB">West Bengal</option>
                                            <option value="AN">Andaman and Nicobar Islands</option>
                                            <option value="CH">Chandigarh</option>
                                            <option value="DN">Dadra and Nagar Haveli</option>
                                            <option value="DD">Daman and Diu</option>
                                            <option value="DL">Delhi</option>
                                            <option value="LD">Lakshadweep</option>
                                            <option value="PY">Puducherry</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Pin Code	<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Pin Code" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Pan Card Number	<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Pan Card Number" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Gst Number	<span className="text-danger">(Optional)</span></label>
                                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Gst Number" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Login Type<span className="text-danger">*</span></label>
                                        {/* <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="IFSC Code" /> */}
                                        <select id="disabledSelect" class="form-select">
                                            <option disabled selected="">--select --</option>
                                            <option value="0"  data-select2-id="2">
                                                With OTP
                                            </option>
                                            <option value="1">Without OTP</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Company Address	<span className="text-danger">*</span></label>
                                        <textarea  className="form-control" id="exampleFormControlInput2" placeholder=" Company Addressode" />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Company Address	 (2)<span className="text-danger">(Optional)</span></label>
                                        <textarea  className="form-control" id="exampleFormControlInput2" placeholder=" Company Addressode" />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Header Color Start	<span className="text-danger">*</span></label>
                                        <input type='color'  className="form-control border-0" id="exampleFormControlInput2"  />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Header Color End	<span className="text-danger">*</span></label>
                                        <input type='color'  className="form-control border-0" id="exampleFormControlInput2" value={"#50e62b"}  />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Facebook Link	<span className="text-danger">(Optional)</span></label>
                                        <input type='text'  className="form-control border-0" id="exampleFormControlInput2" placeholder='Facebook Link'  />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Instagram Link	<span className="text-danger">(Optional)</span></label>
                                        <input type='text'  className="form-control border-0" id="exampleFormControlInput2" placeholder='Instagram Link'   />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Twitter Link	<span className="text-danger">(Optional)</span></label>
                                        <input type='text'  className="form-control border-0" id="exampleFormControlInput2" placeholder='Twitter Link'  />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	YouTube Link	<span className="text-danger">(Optional)</span></label>
                                        <input type='text'  className="form-control border-0" id="exampleFormControlInput2" placeholder='YouTube Link'   />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Table Format	<span className="text-danger">*</span></label>
                                         <select id="disabledSelect" class="form-select">
                                            <option disabled selected="">--select --</option>
                                            <option value="0"  data-select2-id="2">
                                               Table 1
                                            </option>
                                            <option value="1">Table 2</option>
                                            <option value="1">Table 3</option>
                                            <option value="1">Table 4</option>
                                        </select>
                                    </div>
                                    
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Transaction Pin	<span className="text-danger">*</span></label>
                                         <select id="disabledSelect" class="form-select">
                                            <option disabled selected="">--select --</option>
                                            <option value="0"  data-select2-id="2">
                                                Enable 
                                            </option>
                                            <option value="1">Disable</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	UPI  Payout Route	<span className="text-danger">*</span></label>
                                         <select id="disabledSelect" class="form-select">
                                            <option disabled selected="">--select --</option>
                                            <option value="0"  data-select2-id="2">
                                                Bachatpe
                                            </option>
                                            <option value="1">Without</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Authoriesed Name	<span className="text-danger">*</span></label>
                                        <input type='text'  className="form-control border-0" id="exampleFormControlInput2" placeholder='Authoriesed Name'   />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput2" className="form-label">	Designation	<span className="text-danger">*</span></label>
                                        <input type='text'  className="form-control border-0" id="exampleFormControlInput2" placeholder='Designation'   />
                                    </div>
                                    
                                    <div className=''>
                                        <button className="btn btn-danger pd-x-20 rounded-2 mt-4 " type="submit"> Update Details </button>
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

export default CompanySettings
