import React from 'react'
import { Button, Form } from 'react-bootstrap'
import BordcastTextEditor from './bordcastTextEditor/BordcastTextEditor'

function Boardcast() {
    return (
        <section>
            <div className='container'>
                <div className='row m-5'>
                    <div className='col-md-12 col-12'>
                        <div className='card-body  m-auto ' style={{ maxWidth: "800px" }}>
                            <div className='card p-4'>
                                <div className='border-bottom'>
                                    <h6><strong>Broadcast</strong></h6>
                                </div>
                                <div className='row'>
                                    <div className="col-lg-12 col-md-12 form-group mg-b-0">
                                        <label className="form-label">
                                            Broadcast Heading <span className="tx-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control fc-datepicker hasDatepicker"
                                            type="text"
                                            id="fromdate"
                                            name="fromdate"
                                            autoComplete="off"
                                            placeholder='Dear Merchant'
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-12 form-group mg-b-0">
                                        <label className="form-label">
                                            Image<span className="tx-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control fc-datepicker hasDatepicker"
                                            type="file"
                                            id="fromdate"
                                            name="fromdate"
                                            autoComplete="off"
                                            placeholder='Dear Merchant'
                                        />
                                    </div>
                                    <div className="col-sm-12 col-lg-6 ">

                                        <div className="form-group">
                                            <label className="form-label">Image Status</label>
                                            <Form.Select aria-label=" b-radius Default select example" className='rounded-0'>
                                                <option value="0" selected="" data-select2-id="2">
                                                    Disabled
                                                </option>
                                                <option value="1">Enable</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>

                                <div className='py-5'>
                                <BordcastTextEditor/>
                                </div>

                                <div className="col-sm-12 col-lg-12 ">

                                        <div className="form-group">
                                            <label className="form-label"> Status</label>
                                            <Form.Select aria-label=" b-radius Default select example" className='rounded-0'>
                                                <option value="0" selected="" data-select2-id="2">
                                                    Disabled
                                                </option>
                                                <option value="1">Enable</option>
                                            </Form.Select>
                                        </div>
                                    </div>


                                    <div className='border-bottom p-2'>
                                    </div>
                                    <Button style={{width:"max-content"}} className='my-2'>Update Details</Button>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Boardcast
