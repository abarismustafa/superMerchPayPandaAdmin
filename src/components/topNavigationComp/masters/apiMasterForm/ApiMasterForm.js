import React from 'react'
import { Form } from 'react-bootstrap'

function ApiMasterForm() {
  return (
    <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="card my-4">
                    <div className="card-body">
                        <form action="" method="get">
                            <div className="row">
                            <h4><strong> API Masters</strong></h4>
                                <div className="col-sm-3">
                                    
                                    <div className="form-group">
                                        <label className="form-label">Provider  Master:</label>
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
                                        <label className="form-label">Api Master</label>
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
                                        <label className="form-label">Add New Api</label>
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
                                        <label className="form-label">Update  Api</label>
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
                                        <label className="form-label">Denomination Wise Api</label>
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
                                        <label className="form-label">Number Series Master</label>
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
                                        <label className="form-label">State Wise Api</label>
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
                                        <label className="form-label">Backup  Api Master</label>
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
                                        <label className="form-label">Api Switching</label>
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
                                        <label className="form-label">User Operator Limit</label>
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

export default ApiMasterForm
