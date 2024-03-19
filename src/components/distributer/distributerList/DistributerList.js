import { Link, useParams } from "react-router-dom"
import { reailerDistIdAgainst } from "../../../api/login/Login"
import { useEffect, useState } from "react"
import { Pagination } from "react-bootstrap";
import Loadar from "../../../common/loader/Loader";

import Dropdown from 'react-bootstrap/Dropdown';
import FundTransfer from "../createUserDistributer/fundTrnsfer/FundTrnasfer";
import SchemeManager from "../createUserDistributer/schemeManager/SchemeManager";
import IdStocks from "../createUserDistributer/IdsStoks/IdStoks";
import MemberPermission from "../createUserDistributer/memberPermission/MemberPermission";
import LockAmount from "../createUserDistributer/lockAmount/LockAmount";

function DistributerList({ params }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true)
    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true)
    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true)

    const [state, setState] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()
    const userId = params?.id
    const getReailerDistIdAgainst = async (page) => {
        setLoading(true)
        try {
            const res = await reailerDistIdAgainst(page, count, userId)
            // console.log(res?.data?.area);
            setTotalCount(res?.data?.count)
            setState(res?.data)
        } catch (error) {

        }
        setLoading(false)
    }

    const onChangeVal = (e) => {
        getReailerDistIdAgainst(e - 1)
        // setPage(e - 1)
    };

    useEffect(() => {
        getReailerDistIdAgainst(page)
    }, [params?.id])

    const [dowm, setDown] = useState(false)

    const dropdownOpen = () => {
        setDown(!dowm)
    }

    return (
        <>
            {loading && <Loadar />}
            <section className="ListDistributer m-4">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>{params?.name} LIST</b></h4>
                                        <div>
                                            {/* <Link className="btn btn-primary btn-sm" to={`/admin/create-user/${params?.id}/${params?.name}`} role="button" aria-controls="offcanvasExample">+  Create {params?.name}</Link> */}
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Distributer</span></button> </div>
                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        S.NO
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Joining Date
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                        Name</th>

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Mobile</th>

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Email</th>

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Normal Balance</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Pan Card  Status</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        KYC Status</th>

                                                    <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Action
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {state && state.map((item, i) => {
                                                    return <tr role="row" className="odd">
                                                        <td className="sorting_1"><span>{i + 1}</span></td>
                                                        <td className="sorting_1"></td>

                                                        <td>{item?.name}</td>
                                                        <td>{item?.mobile}</td>
                                                        <td>{item?.email}</td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.is_pan_verified === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.is_pan_verified === false ? '0.8rem' : ''}` }}>{item?.is_pan_verified == true ? 'varified' : 'un varified'}</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-success light border-0">Inactive</span>
                                                        </td>

                                                        <td style={{ position: 'relative' }} className="d-flex align-item-center">

                                                            <Dropdown>
                                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                    Action
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item Link="#" onClick={handleShow}>Fund Transfer / Return</Dropdown.Item>
                                                                    <Dropdown.Item href="#" onClick={handleShow2}>Scheme</Dropdown.Item>
                                                                    <Dropdown.Item href="#" onClick={handleShow3}>Add Id Stock</Dropdown.Item>
                                                                    <Dropdown.Item href="#" onClick={handleShow4}>Permission</Dropdown.Item>
                                                                    <Dropdown.Item href="#" onClick={handleShow5}>Locked Amount</Dropdown.Item>
                                                                    <Dropdown.Item href="/admin/member/profile/view/3">View Profile</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>

                                                            <Dropdown>
                                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                    Reports
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href={`/admin/statement/apes/report/${item?._id}`} target="blank">AEPS</Dropdown.Item>
                                                                    <Dropdown.Item href={`/admin/statement/billpayment/report/${item?._id}`} target="blank">Billpayment</Dropdown.Item>
                                                                    <Dropdown.Item href={`/admin/statement/recharge/report/${item?._id}`} target="blank">Recharge</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Mone Transfer</Dropdown.Item>
                                                                    <Dropdown.Item href="/admin/report/pancard/3">UtiPancard</Dropdown.Item>
                                                                    <Dropdown.Item href="/admin/statement/report/2">Account Stat...</Dropdown.Item>
                                                                    <Dropdown.Item href="/admin/statementwallet/report/2">Aeps Stat...</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>

                                                            <Link to={`/admin/create-user/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                            {/* <Popconfirm
                                                            title="Delete Currency !"
                                                            description="Are you sure to delete ?"
                                                            onConfirm={() => confirm(item?.id)}
                                                            onCancel={cancel}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Link to="#" disable className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                        </Popconfirm> */}
                                                        </td>

                                                    </tr>
                                                })}

                                            </tbody>
                                        </table>
                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">

                                            <Pagination
                                                // showSizeChanger
                                                // onShowSizeChange={''}
                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={totalCount}
                                            />


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </section>
            <FundTransfer show={show} handleClose={handleClose} />
            <SchemeManager show2={show2} handleClose2={handleClose2} />
            <IdStocks show3={show3} handleClose3={handleClose3} />
            <MemberPermission show4={show4} handleClose4={handleClose4} />
            <LockAmount show5={show5} handleClose4={handleClose5} />
        </>
    )
}
export default DistributerList

