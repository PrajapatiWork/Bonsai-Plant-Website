import React from "react";
import logo from "../../assets/logo/treelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  
  return (
    <nav className="bg-green-800 w-[100%] ">

      <div className= "mx-auto bg-gray-100">

        <div className="w-[100%]  mx-auto flex justify-between container md:text-lg sm:text-xl bg-green-300">

          {/* logo*/}          
          <div className="flex flex-initial xs:justify-start xs:mx-0 bg-red-100">
            <a href="#"className="flex justify-center items-center md:gap-2 font-bold md:2xl sm:text-3xl">
              <img src={logo} alt="logo" className="w-12" />
 
              <span className="font-pacifico text-yellow-400 md:text-2xl xs:text-2xl m-0 sm:w-[240px] xs:w-[200px]">                
                Bonsai Home
              </span>
            </a>
          </div>
        
          {/*Navbar For desktop  view*/}
          <div className="font-sans flex text-right justify-end self-auto xs:self-end text-white py-2 gap-4">           
           
            <div className="hidden md:block mx-auto md:w-auto bg-red-100">
              <ul className="items-right sm:flex item-center md:gap-4 ">
                
                <li className="lg:ml-6 md:ml-4 sm:ml-2 ">
                  <a className="transition duration-300 ease-in-out hover:text-yellow-300 hover:underline underline-offset-4 " href="#home">Home</a>   
                </li>
                <li className="lg:ml-6 md:ml-4 sm:ml-2">
                  <a className="transition duration-300 ease-in-out hover:text-yellow-300 hover:underline underline-offset-4 "href="#product">Shop</a>
                </li>
                <li className="lg:ml-6 md:ml-4 sm:ml-2">
                  <a className="transition duration-300 ease-in-out hover:text-yellow-300 hover:underline underline-offset-4 " href="#about">About</a>
                </li>
                <li className="lg:ml-6 md:ml-4 sm:ml-2">
                  <a className="transition duration-300 ease-in-out hover:text-yellow-300 hover:underline underline-offset-4 " href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block md:w-28 sm:w-40 xs:w-40 text-center transition duration-300 ease-in-out hover:text-yellow-300 hover:underline">              
              <a  href="#"> My Account </a>
            </div>
          </div>
          {/* Hamburger Icon for open/close */}
          {/* <button id="menu-toggle" className="md:hidden text-white text-3xl">
            <FontAwesomeIcon icon={faBars} />
          </button> */}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
