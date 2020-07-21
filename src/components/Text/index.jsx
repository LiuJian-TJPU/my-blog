import React from "react";
import PropTypes from "prop-types";

const Text = ({
  fs = 14,
  fw = 400,
  component = "p",
  style = {},
  className,
  children,
}) => {
  const Com = component;
  return (
    <Com
      style={{ margin: 0, fontSize: `${fs / 10}rem`, fontWeight: fw, ...style }}
      className={className}
    >
      {children}
    </Com>
  );
};

Text.propTypes = {
  fs: PropTypes.number,
  fw: PropTypes.number,
  component: PropTypes.oneOf(["p", "span"]),
  style: PropTypes.object,
};

export default Text;
