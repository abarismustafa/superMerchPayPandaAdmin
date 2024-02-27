import React from 'react'
import SendRoleWiseWithImage from './sendRoleWiseWithImage/SendRoleWiseWidthImage'
import SendRoleWise from './sendRoleWise/SendRoleWise'


const WhatsappRoleWise = () => {
    return (
        <div className='row'>
            <SendRoleWise />
            <SendRoleWiseWithImage />
        </div>
    )
}

export default WhatsappRoleWise
