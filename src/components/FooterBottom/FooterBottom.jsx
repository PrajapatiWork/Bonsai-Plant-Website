import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const FooterBottom = () => {
  return (
    <div className='bg-slate-700' >                
        <div className='p-1 text-white text-center text-xs'>
         <FontAwesomeIcon icon={faCopyright}/> 2025 BonsaiHome Ltd. All rights reserved
         </div>
    </div>
  )
}

export default FooterBottom