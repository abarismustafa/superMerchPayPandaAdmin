import React from 'react'
import "../KycDetails.css"
import { baseUrlImage } from '../../../../../baseUrl'
import { IoCloseSharp } from 'react-icons/io5';


const KycModal = ({ imageUrl, alt, onClose }) => {
    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
                <img src={imageUrl} alt={alt} className="lightbox-image"  />
                {/* <span className="close-button" onClick={onClose}>
                <IoCloseSharp />
                </span> */}
            </div>
        </div>
    );
};

export default KycModal