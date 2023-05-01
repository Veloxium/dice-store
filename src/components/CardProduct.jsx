import React, { useState } from 'react'
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';


const CardProduct = ({ brand, name, price, url, to }) => {
      const [isChecked, setIsChecked] = useState(false);

      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

  return (
    <NavLink to={to} className="card mt-6 shadow cursor-pointer hover:shadow-lg transition duration-500 ease-in-out border">
      <div className="bg-custom h-[100px] lg:h-[400px] overflow-hidden">
        <img src={url} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="mt-1 flex flex-col p-2 lg:p-4">
        <div className="flex justify-between">
          <h5 className="opacity-70 text-xs lg:text-xl">{brand}</h5>
          <label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isChecked ? "rgb(236 72 153)" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(236 72 153)"
              className="w-4 h-4 hover:fill-pink-500 hover:cursor-pointer lg:w-8 lg:h-8"
              onClick={handleCheckboxChange}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </label>
        </div>
        <h3 className="text-sm h-[40px] leading-5 lg:text-2xl">{name}</h3>
        <h5 className="flex justify-end text-xs lg:text-xl">${price}</h5>
      </div>
    </NavLink>
  );
};
CardProduct.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
 


export default CardProduct;