import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletedmtcommagId, getdmtcomm, getdmtcommscheme } from '../../../../api/login/Login';
import { Popconfirm, message } from 'antd';
import Loadar from '../../../../common/loader/Loader';

function DmtCommisionlist() {
    const [dmtData, setDmtData] = useState(null)
    const [loading, setLoading] = useState(false);
    const getdmtList = async () => {
        setLoading(true)
        try {
            const datas = await getdmtcomm()
            setDmtData(datas?.data)

        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    const deleteCurrency = async (id) => {
        setLoading(true)
        try {
            await deletedmtcommagId(id)
            getdmtList()
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getdmtList()
    }, [])


    const confirm = (id) => {
        deleteCurrency(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    return (
        <section className="ListDistributer ">
            {loading && <Loadar />}
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>DMT COMMISION LIST</b></h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/admin/add-dmt-commision" role="button" aria-controls="offcanvasExample">+  DMT COMMISION  </Link>
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                    S.No
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    Start Amount
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    End Amount</th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                    Commision
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                    Commision Type
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                    Dist Commision
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                    Dist  Commision Type
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                    Master   Dist Commision
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                    Master Dist  Commision Type
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Status</th>

                                                <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dmtData?.map((item, i) => {
                                                return <tr role="row" className="odd">
                                                    <td className="sorting_1"><span>{i + 1}</span></td>
                                                    <td>
                                                        {item?.start_amt}
                                                    </td>
                                                    <td>
                                                        {item?.end_amt}
                                                    </td>
                                                    <td>
                                                        {item?.commision}
                                                    </td>
                                                    <td>
                                                        {item?.commision_type}
                                                    </td>
                                                    <td>
                                                        {item?.distributor_comm}
                                                    </td>
                                                    <td>
                                                        {item?.distributor_comm_type}
                                                    </td>
                                                    <td>
                                                        {item?.master_distributer_com}
                                                    </td>
                                                    <td>
                                                        {item?.master_distributer_com_type}
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.isActive === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.isActive === false ? '0.8rem' : ''}` }}>{item?.isActive == true ? 'active' : 'Inactive'}</span>
                                                    </td>
                                                    <td>
                                                        <Link to={`/admin/update-dmt-commision/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                        <Popconfirm
                                                            title="Delete DMT commision !"
                                                            description="Are you sure to delete ?"
                                                            onConfirm={() => confirm(item?._id)}
                                                            onCancel={cancel}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Link to="#" disable className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                        </Popconfirm>
                                                    </td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">Showing 1 to 10 of 12 entries</div><div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate"><a className="paginate_button previous disabled" aria-controls="empoloyees-tblwrapper" data-dt-idx={0} tabIndex={0} id="empoloyees-tblwrapper_previous"><i className="fa-solid fa-angle-left" /></a><span><a className="paginate_button current" aria-controls="empoloyees-tblwrapper" data-dt-idx={1} tabIndex={0}>1</a><a className="paginate_button " aria-controls="empoloyees-tblwrapper" data-dt-idx={2} tabIndex={0}>2</a></span><a className="paginate_button next" aria-controls="empoloyees-tblwrapper" data-dt-idx={3} tabIndex={0} id="empoloyees-tblwrapper_next"><i className="fa-solid fa-angle-right" /></a></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </section>
    )
}

export default DmtCommisionlist