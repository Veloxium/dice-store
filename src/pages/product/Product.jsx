import React from "react";
import PropTypes from "prop-types";
import ButtonBuy from "../../components/ButtonBuy";
import { useEffect } from "react";

const Product = ({ l, b, f, bt, name, brand, price, desc, discount}) => {
  
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);

  return (
    <div>
      <div className="px-6 py-6 flex flex-col lg:flex-row lg:gap-10 lg:px-[80px]">
        <div className=" lg:w-1/3">
          <div className="flex h-[340px] lg:h-auto ">
            <img
              src={l}
              alt="leftproduct"
              srcset=""
              className="object-cover w-full rounded-xl"
            />
          </div>
          <div className="flex flex-row py-4 justify-between lg:gap-4">
            <div className="flex h-[100px] lg:h-auto lg:w-1/3">
              <img
                src={b}
                alt="backproduct"
                className="object-cover w-full rounded-xl"
              />
            </div>
            <div className="flex h-[100px] lg:h-auto lg:w-1/3">
              <img
                src={f}
                alt="frontproduct"
                className="object-cover w-full rounded-xl"
              />
            </div>
            <div className="flex h-[100px] lg:h-auto lg:w-1/3">
              <img
                src={bt}
                alt="bottomproduct"
                className="object-cover w-full rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-2/3">
          <h1 className="text-xl font-semibold opacity-60 lg:text-2xl">
            {brand}
          </h1>
          <h1 className="text-3xl font-semibold text-secondary lg:text-4xl lg:my-4">
            {name}
          </h1>
          <div className="inline-flex flex-row items-end gap-1">
            <h3 className="text-xl lg:text-3xl">${price}</h3>
            <h3 className="text-md line-through opacity-50 lg:text-xl">
              ${discount}
            </h3>
            <h3 className="bg-pink-500 text-white rounded-full px-3">
              Excelent
            </h3>
          </div>
          <h5 className="text-justify mt-2 font-semibold">{desc}</h5>
          <h5 className="text-justify mt-2">
            The {name} shoe combines the iconic {brand} design
            with innovative technology for maximum comfort and incredible
            style. It features a lightweight mesh upper with no-sew technology
            to reduce friction and provide all-day comfort. The midsole
            sole provides quick response and energy return, while the {name}
            unit in the heel offers additional protection and support. The
            modern and futuristic shoe design features striking contrasting
            color details and the iconic {brand} logo on the back and side of the
            shoe. Available in various sizes and colors, the {name}
            is the perfect choice for sneakerheads and {brand} fans.
          </h5>
          <div className="pt-4 flex gap-4 w-full items-center">
            <h3 className="text-center">Choose Size</h3>
            <div className="relative option">
              <select className="p-2 primary text-white w-[120px] border flex justify-center text-center rounded-md shadow-sm outline-none appearance-none focus:border-green-500">
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
              </select>
            </div>
          </div>
          <div className="pt-2 flex items-center">
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
          <div className="pt-2  pb-6 flex items-center gap-4">
            <h3 className="text-xl">Quantly</h3>
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
    </div>
  );
};

Product.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
};

export default Product;
