import React from 'react'
import Navbar from './components/Navbar/Navbar'
import BonsaiInfo from './components/BonsaiInfo/BonsaiInfo'
import Home from './components/Home/Home'
import OurProduct from './components/Product/OurProduct'
import OurService from './components/Service/OurService'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import FooterBottom from './components/FooterBottom/FooterBottom'
import Navbar1 from './components/Navbar1'


const App = () => {
  return (
    <>
      <Navbar1/>   
      <Home/>
      <BonsaiInfo/>
      <OurProduct/>    
      <AboutUs/>
      <OurService/>
      <Footer/>
      <FooterBottom/>     
    </>
  )
}

export default App


