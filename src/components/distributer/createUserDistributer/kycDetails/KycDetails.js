import React, { useState } from 'react'
import { baseUrlImage } from '../../../../baseUrl';
import KycModal from './kycModal/KycModal';

import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

function KycDetails({ initialValues }) {
    console.log(initialValues);
    const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(false);
    const openLightBox = (img) => {
        setCurrentImage(img)
        setIsLightBoxOpen(true);
    };

    const closeLightBox = () => {
        setIsLightBoxOpen(false);
    };
    return (
        <section className="ListDistributer m-4">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>KYC DETAILS LIST</b></h4>

                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"></div>
                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row" >
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    Upload Aadhar Front
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Upload Aadhar Back</th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                    Upload Pancard Front
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Upload Bank Proof</th>

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Upload Gst Certificate</th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    KYC Video</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr role="row" className="odd">
                                                <td>
                                                    <div className='col-md-12 col-xl-12'>
                                                        <div className="border rounded overflow-hidden" style={{ maxHeight: "100px", maxWidth: "200px" }}>
                                                            <div className='document cursor-pointer	'>


                                                                <ReactFancyBox
                                                                    thumbnail={`${baseUrlImage}${initialValues?.docs?.adhaar_front_card}`}
                                                                    image={`${baseUrlImage}${initialValues?.docs?.adhaar_front_card}`}
                                                                    className="expact-ratio"

                                                                />


                                                            </div>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div className='col-md-12 col-xl-12'>
                                                        <div className="border rounded overflow-hidden" style={{ maxHeight: "100px", maxWidth: "200px" }}>
                                                            <div className='document cursor-pointer	'>


                                                                <ReactFancyBox
                                                                    thumbnail={`${baseUrlImage}${initialValues?.docs?.adhaar_back_card}`}
                                                                    image={`${baseUrlImage}${initialValues?.docs?.adhaar_back_card}`}
                                                                    className="expact-ratio"

                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div className='col-md-12 col-xl-12'>
                                                        <div className="border rounded overflow-hidden" style={{ maxHeight: "100px", maxWidth: "200px" }}>
                                                            <div className='document cursor-pointer	'>

                                                                <ReactFancyBox
                                                                    thumbnail={`${baseUrlImage}${initialValues?.docs?.pan_card}`}
                                                                    image={`${baseUrlImage}${initialValues?.docs?.pan_card}`}
                                                                    className="expact-ratio"

                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div className='col-md-12 col-xl-12'>
                                                        <div className="border rounded overflow-hidden" style={{ maxHeight: "100px", maxWidth: "200px" }}>
                                                            <div className='document cursor-pointer	'>

                                                                <ReactFancyBox
                                                                    thumbnail={`${baseUrlImage}${initialValues?.docs?.bank_proof}`}
                                                                    image={`${baseUrlImage}${initialValues?.docs?.bank_proof}`}
                                                                    className="expact-ratio"

                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div className='col-md-12 col-xl-12'>
                                                        <div className="border rounded overflow-hidden" style={{ maxHeight: "100px", maxWidth: "200px" }}>
                                                            <div className='document cursor-pointer	'>

                                                                <ReactFancyBox
                                                                    thumbnail={`${baseUrlImage}${initialValues?.docs?.gst}`}
                                                                    image={`${baseUrlImage}${initialValues?.docs?.gst}`}
                                                                    className="expact-ratio"

                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </td>


                                            </tr>

                                        </tbody>
                                    </table>

                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">

                                        {/*  <Pagination
                                                // showSizeChanger
                                                // onShowSizeChange={''}
                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={totalCount}
                                            /> */}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* {clickImage && <KycModal clickImage={clickImage} setClickImage={setClickImage} />} */}
        </section>
    )
}

export default KycDetails
