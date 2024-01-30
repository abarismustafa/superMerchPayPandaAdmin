import React from 'react'
import { Button } from 'react-bootstrap'

const AddproviderLogo = () => {
    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-md-4 col-12 m-auto card'>
                    <div className='bg-aqua my-2'>
                        <div><h5>Add Provider</h5></div>
                        <h6 className='border p-2 bg-info'>Airtel</h6>
                        <label className="form-label">
                            Select Logo: <span className="tx-danger">*</span>
                        </label>
                        <input
                            className="form-control fc-datepicker hasDatepicker"
                            // value={formData.fromdate}
                            type="file"
                            id="fromdate"
                            name="fromdate"
                            autoComplete="off"
                            // onChange={handleInputChange} 
                        />
                    </div>
                    {/* <Button className='btn-danger 'style={{minWidth:"content"}}>Close</Button> */}
                    <Button className='btn-info my-2  '>Save</Button>
                </div>

            </div>
        </div>
    )
}

export default AddproviderLogo
