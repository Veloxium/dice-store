import logo from "../../assets/logo2.png";
import Maskot from "../../assets/maskot2.png";
import Nanda from "../../assets/Nanda.jpg"
import Danu from "../../assets/Danu.jpg"
import Gilman from "../../assets/Gilman.jpeg"
import { useEffect } from "react";

const About = () => {
   
  useEffect(() => {
     window.scrollTo(0, 0);
   }, []);

  return (
    <div className=" bg-slate-50">
      <div className="flex flex-row justify-center pt-16 w-full  ">
        <div className="  hidden  lg:flex w-1/2 justify-center ">
          <img src={Maskot} alt="Error" className="w-3/5" />
        </div>
        <div className="flex flex-col p-6">
          <img
            src={logo}
            alt="gambar"
            className="lg:h-[200px] lg:w-[400px] h-50 w-40 "
          />
          <p className="  font-extrabold font-mono mt-4  text-gray-600 max-w-2xl  sm:max-w-2xl text-2xl ">
            "Step into style with every stride." - Dice
          </p>
          <p className="  mt-4 text-lg text-gray-600 max-w-sm  sm:max-w-2xl text-justify">
            Dice is an e-commerce store that specializes in selling the best
            shoes from top brands worldwide. By offering a wide range of
            high-quality shoe options, Dice provides a pleasant and easy
            shopping experience for customers.
          </p>
          <p className="  mt-4 text-lg text-gray-600 max-w-sm  sm:max-w-2xl text-justify">
            The store also offers fast and reliable shipping services throughout
            Indonesia. With the support of a professional customer service team,
            Dice is committed to providing the best possible service to its
            customers.
          </p>
          <div className="my-6 flex justify-center">
            <h3 className="text-xl underline-offset-2 underline">
              The Founders of Dice
            </h3>
          </div>
          <div className="flex flex-col  sm:flex-row justify-center max-w-2xl item-center text-center ">
            <div className="flex-col drop-shadow-md rounded-lg p-4 m-4 items-center flex ">
              <img
                className="w-28 h-28 rounded-full  object-cover"
                src={Nanda}
                alt="gambar"
              />
              <div className="flex flex-col px-5 py-1">
                <h4 className="font-bold text-md text-pink-600">
                  Mochamad Fernanda
                </h4>
                <p className="mt-1 flex-1 font-light text-sm ">Frontend Dev</p>
                <p className="mt-1 flex-1 font-light text-sm ">
                  ig : mchfrnnd_
                </p>
              </div>
            </div>
            <div className="flex-col  drop-shadow-md rounded-lg p-4 m-4 items-center flex">
              <img
                className="w-28 h-28 rounded-full  object-cover"
                src={Danu}
                alt="gambar"
              />
              <div className="flex flex-col px-5 py-1">
                <h4 className="font-bold text-md text-pink-600">
                  Danu Haerida Putra
                </h4>
                <p className="mt-1 flex-1 font-light text-sm ">
                  Graphic Design
                </p>
                <p className="mt-1 flex-1 font-light text-sm ">
                  ig : sniper_kun
                </p>
              </div>
            </div>
            <div className="flex-col  drop-shadow-md rounded-lg p-4 m-4 items-center flex">
              <img
                className="w-28 h-28 rounded-full  object-cover"
                src={Gilman}
                alt="gambar"
              />
              <div className="flex flex-col px-5 py-1">
                <h4 className="font-bold text-md text-pink-600">
                  Muhamad Gilman
                </h4>
                <p className="mt-1 flex-1 font-light text-sm ">Frontend Dev</p>
                <p className="mt-1 flex-1 font-light text-sm ">ig : -</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;






