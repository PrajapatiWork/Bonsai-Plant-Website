import React from "react";
import product1 from "../../assets/product/ficus-bonsai.jpg";
import product2 from "../../assets/product/ficus-Panda-bonsai.jpg";
import product3 from "../../assets/product/incredible-ficus-bonsai.jpg";
import product4 from "../../assets/product/4ficus-bonsai-plant.webp";
import product5 from "../../assets/product/5chinese-pepper-bonsai.jpg";
import product6 from "../../assets/product/ficus-bonsai-vertical-braided.jpg";
import product7 from "../../assets/product/golden-cypress-bonsai.jpg";
import product8 from "../../assets/product/jade-bonsai.jpg";


const OurProduct = () => {
  return (
    <div id="product" className="bg-green-800 p-4 overflow-hidden">
      <div>
        <h1 className="font-pacifico font-bold tracking-[.10em] my-3 text-amber-100 md:text-2xl sm:text-xl">
          🪴Our Authentic Bonsai Product🪴
        </h1>       
        <div className="grid md:place-items-center lg:grid-flow-row-dense grid-rows-2 xl:grid-cols-4 lg:gap-6 md:grid-flow-row-dense md:grid-cols-3 md:gap-6
                        sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-5 sm:place-items-center
                         my-10 font-bold text-center md:text-xl sm:text-lg ">
                          
          {/* Product 1 */}
          <div className="bg-amber-100 lg:w-80 md:w-[250px] md:mt-3 xs:mt-5 shadow-lg shadow-lime-700 rounded-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer ">
            <div className="rounded-lg">
              <img src={product1} className="rounded-t-lg"></img>
            </div>
            <div className="py-2">
              <p>Ficus Bonsai</p>
              <p>Rs. 1200.00</p>
            </div>
            <div>
              <button className="bg-green-900 text-gray-300 hover:text-yellow-400 mb-2 p-1 px-6 rounded-lg">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-amber-100 lg:w-80 md:w-[250px] md:mt-3 xs:mt-5 shadow-lg shadow-lime-700 rounded-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer ">
            <div className="rounded-lg">
              <img src={product2} className="rounded-t-lg"></img>
            </div>
            <div className="py-2">
              <p>Ficus Bonsai</p>
              <p>Rs. 1400.00</p>
            </div>
            <div>
              <button className="bg-green-900 text-gray-300 hover:text-yellow-400 mb-2 p-1 px-6 rounded-lg">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-amber-100 text-center md:mt-3 xs:mt-5 md:w-[250px] lg:w-80  shadow-lg shadow-lime-700 rounded-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer ">
            <div className="rounded-lg">
              <img src={product3} className="rounded-t-lg"></img>
            </div>
            <div className="py-2">
              <p>Ficus Panda Bonsai</p>
              <p>Price : 1300.00</p>
            </div>
            <div>
              <button className="bg-green-900 text-gray-300 hover:text-yellow-400 mb-2 p-1 px-6 rounded-lg">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-amber-100 lg:w-80 md:w-[250px] md:mt-3 xs:mt-5 shadow-lg shadow-lime-700 rounded-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer ">
            <div className="rounded-lg">
              <img src={product4} className="rounded-t-lg"></img>
            </div>
            <div className="py-2">
              <p>Jade Bonsai</p>
              <p>Rs. 1300.00</p>
            </div>
            <div>
              <button className="bg-green-900  text-gray-300 hover:text-yellow-400 mb-2 p-1 px-6 rounded-lg">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Product 5 */}
          <div className="bg-amber-100 lg:w-80 md:w-[250px] shadow-lg md:mt-3 xs:mt-5 shadow-lime-700 rounded-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer ">
            <div className="rounded-lg">
              <img src={product5} className="rounded-t-lg"></img>
            </div>
            <div className="py-2">
              <p>Chinese Pepper Bonsai</p>
              <p>Rs. 2100.00</p>
            </div>
            <div>
              <button className="bg-green-900 text-gray-300 hover:text-yellow-400 mb-2 p-1 px-6 rounded-lg">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Product 6 */}
          <div className="bg-amber-100 lg:w-80 md:w-[250px] shadow-lg md:mt-3 xs:mt-5 shadow-lime-700 rounded-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer ">
            <div className="rounded-lg">
              <img src={product6} className="rounded-t-lg"></img>
            </div>
            <div className="py-2">
              <p>Ficus Bonsai Braided</p>
              <p>Rs. 7000.00</p>
            </div>
            <div>
              <button className="bg-green-900 text-gray-300 hover:text-yellow-400 mb-2 p-1 px-6 rounded-lg">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Product 7 */}
          <div className="bg-amber-100 text-center lg:w-80 md:w-[250px] md:mt-3 xs:mt-5 shadow-lg shadow-lime-700 rounded-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer ">
            <div className="rounded-lg">
              <img src={product7} className="rounded-t-lg"></img>
            </div>
            <div className="py-2">
              <p>Golden Cypress Bonsai</p>
              <p>Rs.1800.00</p>
            </div>
            <div>
              <button className="bg-green-900 text-gray-300 hover:text-yellow-400 mb-2 p-1 px-6 rounded-lg">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Product 8 */}
          <div className="bg-amber-100 lg:w-80 md:w-[250px] shadow-lg md:mt-3 xs:mt-5 shadow-lime-700 rounded-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer ">
            <div className="rounded-lg">
              <img src={product8} className="rounded-t-lg"></img>
            </div>
            <div className="py-2">
              <p>Jade Bonsai</p>
              <p>Rs. 2000.00</p>
            </div>
            <div>
              <button className="bg-green-900  text-gray-300 hover:text-yellow-400 mb-2 p-1 px-6 rounded-lg">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
