import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import {faHeadset} from '@fortawesome/free-solid-svg-icons'

const OurService = () => {
    return (            

        <div id="p" className='mx-auto bg-amber-100 grid xl:grid-cols-4 lg:grid-flow-row-dense lg:grid-cols-4 gap-2 md:grid-flow-row-dense md:grid-cols-3 
             md:gap-3 sm:grid-flow-row-dense sm:grid-cols-2 sm: gap-5 xs:grid-cols-1 place-items-center py-10 font-sans'>       

            <div className=' md:w-[248px] sm:w-60 xs:w-[350px] xs:my-3 flex justify-center item-center sm:item-left bg-green-50 py-5 rounded-lg'>
                <span className='pr-5 pt-3 '> < FontAwesomeIcon icon={faTree} style={{ color: "#10e513", }} className='text-2xl' /> </span>
                <div>
                    <p className='text-bold font-bold'>10,000+ Plants Delivered</p>
                    <p className='text-gray-600 text-sm'>Found greate new homes!</p>
                </div> 
            </div>

           <div className='md:w-[248px] sm:w-60  xs:w-[350px] xs:my-3 flex justify-center item-center sm:item-left bg-green-50 py-5 rounded-lg'>
                <span className='pr-5 pt-3 '> <FontAwesomeIcon icon={faMoneyBill1} style={{ color: "#36d350",}} className='text-2xl'/> </span>
                <div>
                    <p className='font-bold'>Cash On Delivery</p>
                    <p className='text-gray-600 text-sm'>Avilable across India!</p>
                </div> 
            </div>          

            <div className='md:w-[248px] sm:w-60 xs:w-[350px] xs:my-3 flex justify-center item-center sm:item-left bg-green-50  py-5 rounded-lg'>
                <span className='pr-5 pt-3 '><FontAwesomeIcon icon={faTruckFast} style={{color: "#f0bd05",}} className='text-2xl'/> </span>
                <div>
                    <p className='font-bold'>Fast & Safe Delivery</p>
                    <p className='text-gray-600 text-sm'>Packaged with Care & Love!</p>
                </div> 
            </div>

            <div className='md:w-[248px] sm:w-60 xs:w-[350px] xs:my-3 flex justify-center item-center sm:item-left  bg-green-50  py-5 rounded-lg'>
                <span className='pr-5 pt-3'> <FontAwesomeIcon icon={faHeadset} style={{color: "#0e58d8",}} className='text-2xl'/> </span>                
                <div>
                    <p className='font-bold'>Help & Support</p>
                    <p className='text-gray-600 text-sm'>Friendly & Quick!</p>
                </div> 
            </div>

        </div>
    )
}

export default OurService