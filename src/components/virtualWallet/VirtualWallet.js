import React from 'react'
import { useEffect, useState } from "react"
import { walletsReportFilter } from "../../api/login/Login"
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import VirtualWallList from './virtualWalletList/VirtualWallList'
import VirtualWalletFills from './virtualWallFill/VirtualWalletFill'

function VirtualWallet() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: "Wallets Report",
    }
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [data, setSata] = useState(null)
    const [totalCount, setTotalCount] = useState()
    const [initialValues, setInitialValues] = useState({
        min_amt: '',
        max_amt: "",
        start_date: '',
        end_date: '',
        type: '',
        trans_type: "",
    });


    const submitForm = async (page, values) => {
        setLoading(true)
        try {
            const res = await walletsReportFilter(page, count, values);
            setSata(res?.data?.wallet);
            setTotalCount(res?.data?.total)
            // console.log(res?.data?.total);
            setLoading(false)
        } catch (error) {

        }
    };

    const onChangeVal = (e) => {
        submitForm(e - 1)
        // setPage(e - 1)
    };

    useEffect(() => {
        submitForm(page)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={""} />
            <VirtualWalletFills initialValues={initialValues} submitForm={submitForm} />
            <VirtualWallList data={data} totalCount={totalCount} onChangeVal={onChangeVal} loading={loading} />
        </>
    )
}

export default VirtualWallet