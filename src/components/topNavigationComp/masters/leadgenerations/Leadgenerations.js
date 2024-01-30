import React from 'react'
import { Button, Form } from 'react-bootstrap'

function Leadgenerations() {
    return (
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="card my-4">
                    <div className="card-body">
                        <form action="" method="get">
                            <div className="row">
                                <h4><strong> LEAD GENERATION</strong></h4>
                                <div className="col-sm-3">

                                    <div className="form-group">
                                        <label className="form-label">Lead GEneration Create</label>
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
                                        <label className="form-label">Lead GEneration Update</label>
                                        <Form.Select aria-label=" b-radius Default select example" className='rounded-0'>
                                            <option value="0" selected="" data-select2-id="2">
                                                Disabled
                                            </option>
                                            <option value="1">Enable</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                            <Button className='my-3 btn-danger'>Update Now</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leadgenerations
