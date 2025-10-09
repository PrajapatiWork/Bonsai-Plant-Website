import React from "react";
import bannerImg from "../../assets/banner-img/bonsai-hero.jpg";


const Home = () => {
  return (
    <div id="home" className="bg-green-900 text-white py-4 overflow-hidden">
      <div className="mx-auto grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
         <div className="mx-auto flex justify-center items-center">        
           <p className="mx-auto text-xl md:text-left xs:text-center leading-loose sm:text-2xl lg:text-2xl font-sans font-bold xs:w-80 w-96">
            🌿Shop a variety of beautiful bonsai plants like Ficus Bonsai, Jade
              Bonsai, and others. Perfect for any space, these miniature trees bring
            charm and tranquility, delivered safely across India.🌿
            </p>
          </div>
          <div className="flex justify-center items-center">
             <img src={bannerImg} alt="banner Image" className="w-96 shadow-lg shadow-lime-400  hover:scale-100 rounded-md sm:my-3 xs:my-3"></img>
          </div>
      </div>
    </div>
  );
};

export default Home;
