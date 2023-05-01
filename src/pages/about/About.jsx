import logo from "../../assets/logo2.png";
import Maskot from "../../assets/maskot2.png";
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
          <img src={logo} alt="gambar" className="h-50 w-40 sm:h-50 sm:w-40 " />
          <p className="  font-extrabold font-mono mt-4  text-gray-600 max-w-2xl  sm:max-w-2xl text-2xl ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia maiores nobis atque eos blanditiis nulla tempore,
          </p>
          <p className="  mt-4 text-lg text-gray-600 max-w-sm  sm:max-w-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias eaque veritatis dicta aspernatur tenetur id excepturi saepe natus dignissimos quas voluptates praesentium accusantium molestiae amet, sint quis asperiores aperiam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a fugit porro aliquid delectus cum veniam sed? Praesentium tempora quasi, cum numquam architecto, tempore excepturi reiciendis nam similique officiis libero?
          </p>
          <div className="flex flex-col  sm:flex-row justify-center max-w-2xl item-center text-center ">
            <div className="flex-col drop-shadow-md rounded-lg p-4 m-4 items-center flex ">
              <img className="w-28 h-28 rounded-full  object-cover"
                src="https://static.zerochan.net/Tifa.Lockhart.full.2910906.jpg" alt="gambar" />
              <div className="flex flex-col px-5 py-1">
                <h4 className="font-bold text-md text-pink-600">Mochamad Fernanda</h4>
                <p className="mt-1 flex-1 font-light text-sm ">Blablablabla</p>
              </div>
            </div>
            <div className="flex-col  drop-shadow-md rounded-lg p-4 m-4 items-center flex">
              <img className="w-28 h-28 rounded-full  object-cover"
                src="https://static.zerochan.net/Tifa.Lockhart.full.2910906.jpg" alt="gambar" />
              <div className="flex flex-col px-5 py-1">
                <h4 className="font-bold text-md text-pink-600">Danu Haerida Putra</h4>
                <p className="mt-1 flex-1 font-light text-sm ">Blablablabla</p>
              </div>
            </div>
            <div className="flex-col  drop-shadow-md rounded-lg p-4 m-4 items-center flex">
              <img className="w-28 h-28 rounded-full  object-cover"
                src="https://static.zerochan.net/Tifa.Lockhart.full.2910906.jpg" alt="gambar" />
              <div className="flex flex-col px-5 py-1">
                <h4 className="font-bold text-md text-pink-600">Muhamad Gilman</h4>
                <p className="mt-1 flex-1 font-light text-sm ">Blablablabla</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default About;






