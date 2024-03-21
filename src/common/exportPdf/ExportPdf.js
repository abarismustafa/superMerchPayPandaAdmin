import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { CiSaveDown1, CiSaveUp1 } from 'react-icons/ci';
import { Link } from 'react-router-dom';

function ExportPdf() {
    const [pdfLoader, setPdfLoader] = useState(false);

    const pdfDownload = () => {
        const capture = document.querySelector('.table');
        setPdfLoader(true);

        html2canvas(capture).then((pdfCanvas) => {
            const pdfData = pdfCanvas.toDataURL('image/png');
            const doc = new jsPDF('p', 'mm', 'a4');

            const contentWidth = capture.offsetWidth;
            const contentHeight = capture.offsetHeight;

            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = doc.internal.pageSize.getHeight();

            let widthRatio = pdfWidth / contentWidth;
            let heightRatio = pdfHeight / contentHeight;

            let ratio = Math.min(widthRatio, heightRatio);

            doc.addImage(pdfData, 'PNG', 0, 0, contentWidth * ratio, contentHeight * ratio);
            doc.save('PDF Download');
            setPdfLoader(false);
        });
    };

    return (
        <>
            <Button variant="" className="btn-sm py-1 px-2  bg-warning" onClick={pdfDownload} disabled={pdfLoader}>
                {pdfLoader ? (<span><CiSaveUp1 className='fs-4 fw-bold text-white'/> PDF EXPORTING  </span>) : (<span> EXPORT PDF <CiSaveDown1 className='fs-4 fw-bold text-white' /> </span>)} 
            </Button>
        </>
    );
}

export default ExportPdf;