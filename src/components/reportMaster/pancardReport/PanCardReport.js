import React, { useState } from 'react'
// import react icon start
import { FaSearch } from "react-icons/fa";
import PancardLoginModal from './pancardloginModal/PancardLoginModal';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa6';
import PancardReportForm from './pancardReportForm/PancardReportForm';
import PancardReportList from './pancardReportList/PancardReportList';
// import react icon end

function PanCardReport() {
    
    return (
        <>
            <PancardReportForm/>
            <PancardReportList/>

        </>
    )
}

export default PanCardReport
