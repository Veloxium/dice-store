import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const active = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="primary flex justify-between items-center px-6 py-4 lg:py-3 lg:px-[80px] sticky top-0 z-50 shadow-lg">
        <div>
          <NavLink to="/">
            <img src={logo} alt="" srcset="" className="object-fill h-10" />
          </NavLink>
        </div>
        <div
          className="lg:hidden pt-2 transition ease-in-out duration-500"
          onClick={active}
        >
          {!nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8 transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div className="menu lg:flex hidden flex-row gap-10 lg:items-center">
          <NavLink to="/">
            <h3 className="text-xl font-semibold">HOME</h3>
          </NavLink>
          <NavLink to="/shop">
            <h3 className="text-xl font-semibold">SHOP</h3>
          </NavLink>
          <NavLink to="/about">
            <h3 className="text-xl font-semibold">ABOUT</h3>
          </NavLink>
          <NavLink to="/contact">
            <h3 className="text-xl font-semibold">CONTACT</h3>
          </NavLink>
        </div>
        <div className="lg:flex lg:gap-6 hidden pt-1">
          <button className="lup ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button className="lup ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11V6C15 4.34315 13.6569 3 12 3V3C10.3431 3 9 4.34315 9 6V11"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.85795 8.84661C4.93811 7.80461 5.80699 7 6.85206 7H17.1479C18.193 7 19.0619 7.80461 19.142 8.84661L19.6687 15.6932C19.8474 18.0164 18.0105 20 15.6805 20H8.31951C5.98947 20 4.15259 18.0164 4.33129 15.6932L4.85795 8.84661Z"
              />
            </svg>
          </button>
          <a href="/">
            <h3 className="text-lg secondary px-4 rounded-lg text-white py-1 ">
              Login
            </h3>
          </a>
        </div>
      </div>
      <div
        className={
          !nav
            ? "fixed right-[-100%] w-full bg ease-in duration-300 z-30"
            : "fixed right-[0%] w-full bg ease-in duration-300 z-30"
        }
      >
        <div className="fixed w-full z-30 menu">
          <div className="flex pt-[100px] gap-4 font-semibold items-center text-center flex-col primary h-screen">
            <NavLink to="/" onClick={active}>
              <h3 className="text-lg">HOME</h3>
            </NavLink>
            <NavLink to="/shop" onClick={active}>
              <h3 className="text-lg">
                SHOP PRODUCT
              </h3>
            </NavLink>
            <NavLink to="/about" onClick={active}>
              <h3 className="text-lg">ABOUT</h3>
            </NavLink>
            <NavLink to="/contact" onClick={active}>
              <h3 className="text-lg">CONTACT</h3>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
