import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const PriceCard1 = ({ className, title, text }) => (
  <div
    className={clsx(
      className,
      "bg-white rounded-lg shadow-primary p-4 sm:p-8 mb-4 md:mb-0 flex flex-col justify-center sm:items-center"
    )}
  >
    <h6 className="text-2xl font-medium text-fourth">{title}</h6>
    {text.map((item, index) => (
      <h6 key={index} className="text-base font-normal text-third">
        {item}
      </h6>
    ))}
  </div>
);

PriceCard1.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.array
};

PriceCard1.defaultProps = {
  className: "",
  title: "",
  text: []
};

export default PriceCard1;
