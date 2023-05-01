import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonOnly = ({ text, to, icon }) => {
  return (
    <div className="flex flex-row gap-2 items-center cursor-pointer">
      <div className="bg-btn flex w-full justify-center px-2 py-1 lg:px-4 lg:py-2 rounded-md">
      <Link to={to} className="flex gap-2 items-center break-keep">
        <h3 className="text-sm lg:text-xl">{text}</h3>
        {icon}
      </Link>
      </div>
    </div>
  );
};
ButtonOnly.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default ButtonOnly;
