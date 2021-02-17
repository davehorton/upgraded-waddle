import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

import "./style.scss";

class CustomButton extends React.Component {
  render() {
    const {
      type,
      text,
      size_custom,
      className,
      iconPosition,
      ...rest
    } = this.props;
    const newClassName = `custom-button ${type} ${size_custom} ${iconPosition} ${className}`;

    return (
      <Button {...rest} type={type} className={newClassName}>
        {text}
      </Button>
    );
  }
}

CustomButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  size_custom: PropTypes.string,
  iconPosition: PropTypes.string
};

CustomButton.defaultProps = {
  className: "",
  text: "",
  type: "primary",
  size_custom: "lg",
  iconPosition: "right"
};

export default CustomButton;
