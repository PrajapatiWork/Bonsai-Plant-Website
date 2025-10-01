import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div id="contact" className='bg-slate-800 font-sans text-gray-100 overflow-hidden'>

      <div className='mx-auto flex justify-center item-center flex-row'>
        <div className='w-auto grid sm:grid-cols-3 md:gap-3 xs:grid-cols-1 sm:gap-6 mx-5 py-6 justify-center place-items-center md:text-sm xs:text-md  leading-loose  '>
          <div className='w-40 pl-5 xs:mt-3'>
            <ul>
              <li className='hover:underline underline-offset-4'><a href='#home'>Home</a> </li>
              <li className='hover:underline underline-offset-4'><a href='#product'>Contact Us </a> </li>
              <li className='hover:underline underline-offset-4'><a href='#'>Retails & Stores</a></li>
              <li className='hover:underline underline-offset-4'><a href='#'>FAQ</a></li>
            </ul>
          </div>

          <div className='w-40 pl-5 xs:mt-3'>
            <ul>
              <li className='hover:underline underline-offset-4'><a href='#'>Track Order</a></li>
              <li className='hover:underline underline-offset-4'><a href='#'>Privacy Policy</a> </li>
              <li className='hover:underline underline-offset-4'><a href='#'>Refund Policy</a> </li>
              <li className='hover:underline underline-offset-4'><a href='#'>Shipping Policy</a></li>
            </ul>
          </div>

          <div className='w-40 pl-5 xs:mt-3'>
            <ul>
              <li className='hover:underline underline-offset-4'><a href='#'>Deal of The Day</a> </li>
              <li className='hover:underline underline-offset-4'><a href='#'>Coupons & Deals </a> </li>
              <li className='hover:underline underline-offset-4'><a href='#'>Refer a Friend </a> </li>
              <li className='hover:underline underline-offset-4'><a href='#'>Plant Care Guide</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className=' text-center py-1 flex justify-center flex-col'>
        <p className='py-1 text-sm'>Follow Us</p>
        <div className='space-x-4 text-lg'>
          <a href="BonsaiHome@faceobook.com"><FontAwesomeIcon icon={faFacebook} className='hover:scale-125' /></a>
          <a href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} className='hover:scale-125 ' /></a>
          <a href='https://www.pinterest.com/' target="_blank"><FontAwesomeIcon icon={faPinterest} className='hover:scale-125 ' /></a>
        </div>
      </div>

    </div>
  )
}

export default Footer