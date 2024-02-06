import React, { useState } from "react";
// import react icon start
import { FaSearch } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
// import react icon end
import PendingTransctionModal from "./pendingTransactionModal/PendingTransctionModal";
import { Link } from "react-router-dom";
import PendingReportForm from "./pendTransRepForm/PendingReportForm";
import PendingTranRepList from "./PendingTranRepList/PendingTranRepList";

function PendingTransactionReport() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <PendingReportForm />
      <PendingTranRepList />
    </>
  );
}

export default PendingTransactionReport;
