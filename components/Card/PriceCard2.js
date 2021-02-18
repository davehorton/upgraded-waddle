import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const PriceCard2 = ({ className, title, text }) => (
  <div
    className={clsx(
      className,
      "bg-white sm:text-center rounded-lg shadow-primary p-4 sm:p-8 mb-4 md:mb-0 flex flex-col justify-center sm:items-center"
    )}
  >
    <h6 className="text-2xl font-medium text-fourth">{title}</h6>
    <p className="text-base font-normal text-third mb-0">
      {text}
    </p>
  </div>
);

PriceCard2.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

PriceCard2.defaultProps = {
  className: "",
  title: "",
  text: ""
};

export default PriceCard2;
