import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonOnly = ({ text, to, icon }) => {
  return (
    <div className="flex flex-row gap-2 items-center cursor-pointer">
      <div className="bg-btn flex w-full justify-center px-4 py-2 rounded-md">
      <Link to={to} className="flex gap-2">
        <h3 className="text-md lg:text-xl">{text}</h3>
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
