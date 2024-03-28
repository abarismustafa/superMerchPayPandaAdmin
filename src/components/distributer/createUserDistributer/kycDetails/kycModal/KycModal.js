import React from 'react'
import { baseUrlImage } from '../../../../../baseUrl'

function KycModal({ clickImage,setClickImage }) {
    const handleClick = (e)=>{
        console.log(e.target.classList.contains);
        if (e.target.classList.contains('dismiss')) {
            setClickImage(null)
        }
    }
    return (
        <>

            <div  onClick={handleClick}><div className='overLay dismiss'>
                <img src={`${baseUrlImage}${clickImage}`} alt='biger Image' />
                <span onClick={handleClick}>x</span>
            </div></div>
        </>
    )
}

export default KycModal