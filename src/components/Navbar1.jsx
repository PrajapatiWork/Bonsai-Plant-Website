import React, { useState } from 'react'
import logo from "../assets/logo/treelogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className='w-[100%] bg-green-800 overflow-hidden'> 
      <div className="flex items-center justify-between">
        {/* For the Logo and name */}
        <div className="flex items-center justify-between font-bold md:text-2xl sm:text-3xl">
          <img src={logo} alt="logo" className="w-12" /><span className="font-pacifico text-yellow-400 text-2xl">Bonsai Home</span>        
        </div>

        <div className="font-sans mx-auto flex justify-center items-center gap-2 md:text-xl xs:text-lg mr-3">
          {/*For the desktop*/}         
          <div className= 'xs:hidden md:block font-bold text-white'>
            <ul className='flex justify-between items-center gap-3'>
              <li className='hover:text-yellow-300 hover:underline underline-offset-4'><a href="#home">Home</a></li>  
              <li className='hover:text-yellow-300 hover:underline underline-offset-4'><a href="#product">Shop</a></li>  
              <li className='hover:text-yellow-300 hover:underline underline-offset-4'><a href="#about">About</a></li>  
              <li className='hover:text-yellow-300 hover:underline underline-offset-4'><a href="#contact">Contact</a></li>  
            </ul>   
          </div>
        </div> 

         {/* Hamburger Icon for open/close */}
          <button  onClick={()=> setIsOpen(!isOpen)} className="block md:hidden text-white text-3xl md:text-xl xs:text-lg mr-3">
            <FontAwesomeIcon icon={faBars} />           
          </button>       

        {/*My Account for desktop and mobile*/}
          <div className='font-bold md:text-xl xs:text-lg text-white hover:text-yellow-300 hover:underline underline-offset-4 xs:mr-3'>My Account</div>
      </div>
      {/*For the mobile*/}  
                      
        <div className= {`${ isOpen ? 'block' :'hidden'} md:hidden font-bold text-xl`}>
           <ul className='font-sans mx-auto text-white text-center bg-green-600 '>
              <li className='hover:text-yellow-300 hover:underline underline-offset-4'><a href="#home">Home</a></li>  
              <li className='hover:text-yellow-300 hover:underline underline-offset-4'><a href="#product">Shop</a></li>   
              <li className='hover:text-yellow-300 hover:underline underline-offset-4'><a href="#about">About</a></li>
              <li className='hover:text-yellow-300 hover:underline underline-offset-4'><a href="#contact">Contact</a></li> 
            </ul>
        </div>        
    </nav>     
   </>
  )
}

export default Navbar1