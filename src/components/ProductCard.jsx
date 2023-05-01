import React from 'react'
import left from "../assets/product1_l.jpg";
import back from "../assets/product1_b.jpg";
import front from "../assets/product1_f.jpg";
import bottom from "../assets/product1_bt.jpg";
import ButtonBuy from "../components/ButtonBuy";


const ProductCard = () => {
  return (
    <div className="px-6 py-6 flex flex-col lg:flex-row lg:gap-10 lg:px-[80px]">
      <div className=" lg:w-1/3">
        <div className="flex h-[340px] lg:h-auto ">
          <img
            src={left}
            alt=""
            srcset=""
            className="object-cover w-full rounded-xl"
          />
        </div>
        <div className="flex flex-row py-4 justify-between lg:gap-4">
          <div className="flex h-[100px] lg:h-auto lg:w-1/3">
            <img src={back} alt="" className="object-cover w-full rounded-xl" />
          </div>
          <div className="flex h-[100px] lg:h-auto lg:w-1/3">
            <img
              src={front}
              alt=""
              className="object-cover w-full rounded-xl"
            />
          </div>
          <div className="flex h-[100px] lg:h-auto lg:w-1/3">
            <img
              src={bottom}
              alt=""
              className="object-cover w-full rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-2/3">
        <h1 className="text-xl font-semibold opacity-60 lg:text-2xl">Shoes</h1>
        <h1 className="text-3xl font-semibold text-secondary lg:text-4xl lg:my-4">
          Air Jordan 1 Phat
        </h1>
        <div className="inline-flex flex-row items-end gap-1">
          <h3 className="text-xl lg:text-3xl">120.9$</h3>
          <h3 className="text-md line-through opacity-50 lg:text-xl">150.9$</h3>
          <h3 className="bg-pink-500 text-white rounded-full px-3">Excelent</h3>
        </div>
        <h5 className="break-all mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed
          magni recusandae aliquam nisi fugiat esse repellendus quidem
          praesentium voluptatum?
        </h5>
        <h5 className="break-all mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed
          magni recusandae aliquam nisi fugiat. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Nam amet rerum provident labore expedita
          recusandae? Id rerum ullam perferendis quos?
        </h5>
        <div className="pt-4 flex items-center">
          <h3 className="text-xl mr-4">Review</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fad643"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="#fad643"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fad643"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="#fad643"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fad643"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="#fad643"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fad643"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="#fad643"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <h5 className="text-sm mb-[-16px] ml-1">(12)</h5>
        </div>
        <div className="py-6 flex items-center gap-4">
          <h3 className="text-2xl">Quantly</h3>
          <button className="ml-2 primary px-1 py-1 rounded-full text-white">
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
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <h3>1</h3>
          <button className="primary px-1 py-1 rounded-full text-white">
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <ButtonBuy />
      </div>
    </div>
  );
}

export default ProductCard