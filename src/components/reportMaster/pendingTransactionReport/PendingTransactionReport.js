import React, { useState } from "react";
// import react icon start
import { FaSearch } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
// import react icon end
import PendingTransctionModal from "./pendingTransactionModal/PendingTransctionModal";
import { Link } from "react-router-dom";
import PendingReportForm from "./pendTransRepForm/PendingReportForm";
import PendingTranRepLists from "../pendingTransactionReport/pendingTranRepList/PendingTranRepLists";

function PendingTransactionReport() {
  return (
    <>
      <PendingReportForm />
      <PendingTranRepLists />
    </>
  );
}

export default PendingTransactionReport;
