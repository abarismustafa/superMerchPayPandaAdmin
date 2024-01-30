import React from 'react'
import { Form } from 'react-bootstrap'

function Payment() {
  return (
    <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="card my-4">
                    <div className="card-body">
                        <form action="" method="get">
                            <div className="row">
                            <h4><strong> Payment</strong></h4>
                            <div className="col-sm-3">
                                    
                                    <div className="form-group">
                                        <label className="form-label">Balance  Transfers</label>
                                        <Form.Select aria-label=" b-radius Default select example" className='rounded-0'>
                                            <option value="0" selected="" data-select2-id="2">
                                                Disabled
                                            </option>
                                            <option value="1">Enable</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    
                                    <div className="form-group">
                                        <label className="form-label">Balance Return</label>
                                        <Form.Select aria-label=" b-radius Default select example" className='rounded-0'>
                                            <option value="0" selected="" data-select2-id="2">
                                                Disabled
                                            </option>
                                            <option value="1">Enable</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    
                                    <div className="form-group">
                                        <label className="form-label">Payment Request View</label>
                                        <Form.Select aria-label=" b-radius Default select example" className='rounded-0'>
                                            <option value="0" selected="" data-select2-id="2">
                                                Disabled
                                            </option>
                                            <option value="1">Enable</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    
                                    <div className="form-group">
                                        <label className="form-label">Payment Request</label>
                                        <Form.Select aria-label=" b-radius Default select example" className='rounded-0'>
                                            <option value="0" selected="" data-select2-id="2">
                                                Disabled
                                            </option>
                                            <option value="1">Enable</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Payment
