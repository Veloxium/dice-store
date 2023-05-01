import React from "react";
import Banner from "../../assets/banner.png";
import ButtonOnly from "../../components/ButtonOnly";
import Adidas from "../../assets/adidas.png";
import Brand1 from "../../assets/brand_logo/adidas.png";
import Converse from "../../assets/converse.png";
import Brand2 from "../../assets/brand_logo/converse.png";
import Puma from "../../assets/puma.png";
import Brand3 from "../../assets/brand_logo/puma.png";
import Vans from "../../assets/vans.png";
import Brand4 from "../../assets/brand_logo/vans.png";
import Banner2 from "../../assets/banner_jordan.jpg";
import Banner3 from "../../assets/banner_nike.jpg";
import Jordan from "../../assets/brand_logo/jordan.svg";
import Nike from "../../assets/brand_logo/nike.svg";
import Banner4 from "../../assets/jordan.png";
import CardProduct from "../../components/CardProduct";
import {bestProducts} from "../../products.js";
import { useEffect } from "react";

const Landing = () => {

     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
  
  return (
    <>
      <div className="px-6 pt-10 pb-4 flex flex-col lg:gap-10 lg:px-[80px] cursor-default">
        <div className="w-full flex bg-custom p-4 lg:px-[80px] lg:py-[60px] rounded-2xl justify-around flex-col lg:flex-row lg:gap-10 shadow hover:lg:shadow-lg transition duration-500 ease-in-out">
          <div className="relative lg:w-[800px] flex mt-6 lg:mt-10">
            <h3 className="lg:text-[200px] text-6xl tracking-widest text-banner opacity-70 lg:mb-[-160px] z-10 mt-[-20px]">
              Vans
            </h3>
            <img
              src={Banner}
              alt=""
              className="z-20 absolute lg:w-[600px] lg:mt-14"
            />
          </div>
          <div className="flex flex-col justify-end lg:mt-[40px] lg:pb-[100px] lg:w-full mt-[100px]">
            <div className="flex items-center gap-2">
              <h3 className="lg:text-4xl text-xl font-semibold opacity-50 lg:mb-2">
                Vans
              </h3>
              <h3 className="primary py-1 px-2 rounded-full text-white text-md">
                Special Series
              </h3>
            </div>
            <h5 className="lg:text-3xl text-lg">$65</h5>
            <h2 className="lg:text-4xl font-bold text-xl ">
              OG Classic Slip-On LX
            </h2>
            <p className="lg:mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              aspernatur.
            </p>
            <div className="lg:my-4 flex lg:gap-6 gap-1 my-4">
              <div className="p-1 border-black rounded-full border-2 cursor-pointer ">
                <div className="p-3 lg:p-4 bg-black rounded-full"></div>
              </div>
              <div className="p-1 border-transparent hover:border-yellow-400 rounded-full border-2 cursor-pointer transition duration-500 ease-in-out">
                <div className="p-3 lg:p-4 bg-yellow-400 rounded-full"></div>
              </div>
              <div className="p-1 border-transparent hover:border-blue-800 rounded-full border-2 cursor-pointer transition duration-500 ease-in-out">
                <div className="p-3 lg:p-4 bg-blue-800 rounded-full"></div>
              </div>
            </div>
            <div className="w-1/3 mt-2">
              <ButtonOnly text="Buy Now" to={`/bestproduct/${27}`} />
            </div>
          </div>
        </div>
        <div className="flex lg:gap-10 w-full flex-col lg:flex-row gap-4 mt-10">
          <div className="lg:w-1/2 flex lg:gap-10 gap-4">
            <div className="w-1/2 lg:px-10 px-4 lg:py-4 py-2 primary rounded-lg  shadow hover:shadow-lg transition duration-500 ease-in-out">
              <div className="h-[100px] lg:h-[140px] flex items-center">
                <img src={Adidas} alt="" />
              </div>
              <h3 className="text-xl lg:text-4xl font-bold text-white">
                Adidas
              </h3>
              <h5 className="lg:mt-2 lg:mb-6 mb-2 text-xs lg:text-lg hidden lg:flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, eaque.
              </h5>
              <div className="flex justify-between items-center">
                <div className="lg:w-1/2">
                  <ButtonOnly text="Browse" />
                </div>
                <div className="w-8 lg:w-14">
                  <img src={Brand1} alt="" />
                </div>
              </div>
            </div>
            <div className="w-1/2 lg:px-10 px-4 lg:py-4 py-2 primary rounded-lg shadow hover:shadow-lg transition duration-500 ease-in-out">
              <div className="h-[100px] lg:h-[140px] flex items-center">
                <img src={Converse} alt="" />
              </div>
              <h3 className="text-xl lg:text-4xl font-bold text-white">
                Converse
              </h3>
              <h5 className="lg:mt-2 lg:mb-6 mb-2 text-xs lg:text-lg hidden lg:flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, eaque.
              </h5>
              <div className="flex justify-between items-center">
                <div className="lg:w-1/2">
                  <ButtonOnly text="Browse" />
                </div>
                <div className="w-8 lg:w-14">
                  <img src={Brand2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 primary flex flex-col items-center justify-center rounded-lg overflow-hidden relative shadow hover:shadow-lg transition duration-500 ease-in-out">
            <img
              src={Banner2}
              alt=""
              className="object-cover w-full h-full absolute"
            />
            <div className="z-10 flex gap-2 mt-6 lg:mt-0">
              <h3 className="text-2xl lg:text-6xl font-bold text-white text-center">
                Jordan Brand
              </h3>
              <div className="w-8 lg:w-14">
                <img src={Jordan} alt="" />
              </div>
            </div>
            <p className="z-10 text-white text-center text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, eum.
            </p>
            <div className="z-10 lg:mt-4 mt-2 w-1/4 mb-6 lg:mb-0">
              <ButtonOnly text="Browse" />
            </div>
          </div>
        </div>
        <div className="flex lg:gap-10 w-full flex-col lg:flex-row-reverse gap-4 mt-4 mb-10">
          <div className="lg:w-1/2 flex lg:gap-10 gap-4">
            <div className="w-1/2 lg:px-10 px-4 lg:py-4 py-2 primary rounded-lg shadow hover:shadow-lg transition duration-500 ease-in-out">
              <div className="h-[100px] lg:h-[140px] flex items-center">
                <img src={Puma} alt="" />
              </div>
              <h3 className="text-xl lg:text-4xl font-bold text-white">Puma</h3>
              <h5 className="lg:mt-2 lg:mb-6 mb-2 text-xs lg:text-lg hidden lg:flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, eaque.
              </h5>
              <div className="flex justify-between items-center">
                <div className="lg:w-1/2">
                  <ButtonOnly text="Browse" />
                </div>
                <div className="w-8 lg:w-14">
                  <img src={Brand3} alt="" />
                </div>
              </div>
            </div>
            <div className="w-1/2 lg:px-10 px-4 lg:py-4 py-2 primary rounded-lg shadow hover:shadow-lg transition duration-500 ease-in-out">
              <div className="h-[100px] lg:h-[140px] flex items-center">
                <img src={Vans} alt="" />
              </div>
              <h3 className="text-xl lg:text-4xl font-bold text-white">
                Converse
              </h3>
              <h5 className="lg:mt-2 lg:mb-6 mb-2 text-xs lg:text-lg hidden lg:flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, eaque.
              </h5>
              <div className="flex justify-between items-center">
                <div className="lg:w-1/2">
                  <ButtonOnly text="Browse" />
                </div>
                <div className="w-8 lg:w-14">
                  <img src={Brand4} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 primary flex flex-col items-center justify-center rounded-lg overflow-hidden relative shadow hover:shadow-lg transition duration-500 ease-in-out">
            <img
              src={Banner3}
              alt=""
              className="object-cover w-full h-full absolute"
            />
            <div className="z-10 flex gap-2 mt-6 lg:mt-0">
              <h3 className="text-2xl lg:text-6xl font-bold text-white text-center">
                Nike
              </h3>
              <div className="w-8 lg:w-14">
                <img src={Nike} alt="" />
              </div>
            </div>
            <p className="z-10 text-white text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, eum.
            </p>
            <div className="z-10 mt-4 w-1/4 mb-6 lg:mb-0">
              <ButtonOnly text="Browse" />
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col item-center">
          <div className="flex flex-col text-center lg:my-4">
            <div className="flex gap-2 justify-center items-end">
              <h2 className="text-2xl font-bold">Best Seller Product</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="rgb(236 72 153)"
                className="w-6 h-6 lg:w-10 lg:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <p>Lorem ipsum dolor sit adipisicing.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 lg:gap-10">
            {bestProducts.slice(0, 6).map((e) => {
              return (
                <CardProduct
                  name={e.name}
                  brand={e.brand}
                  price={e.price}
                  url={e.url}
                  key={e.id}
                  to={`/bestproduct/${e.id}`}
                />
              );
            })}
          </div>
        </div>
        <div className="flex primary rounded-lg shadow hover:shadow-lg transition duration-500 ease-in-out p-4 justify-around gap-2 lg:p-10 mb-10 mt-10">
          <div className="w-1/2 flex flex-col justify-between lg:justify-around">
            <div className="mt-2">
              <h3 className="text-xl font-bold tracking-widest text-white flex gap-1 lg:text-6xl">
                New
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 lg:w-14 lg:h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </h3>
              <h3 className="text-xl font-bold tracking-widest text-white lg:text-6xl">
                Arrivalls
              </h3>
              <h3 className="hidden lg:flex lg:text-xl lg:mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                placeat?Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Culpa, laborum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. A, fuga?
              </h3>
            </div>
            <div className="w-3/4 lg:w-1/2">
              <ButtonOnly text="Checkout" to={`/bestproduct/${28}`} />
            </div>
          </div>
          <div className="w-1/2 flex-col flex items-center">
            <img
              src={Banner4}
              alt=""
              className="w-full h-full object-contain lg:w-4/5"
            />
            <p className="text-xs py-1 px-2 bg-white mt-2 rounded-full text-center lg:text-2xl lg:py-2 lg:px-10">
              Air Jordan 1 Mid
            </p>
          </div>
        </div>
        <div className="inline-flex justify-end items-center lg:mb-10 lg:justify-center">
          <ButtonOnly
            text="See All Product"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            }
            to="/shop"
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
