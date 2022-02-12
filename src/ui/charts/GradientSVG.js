import React from 'react';
import PropTypes from "prop-types";

const GradientSVG = ({firstColor, secondColor}) => {
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={'gradient'} transform="rotate(0)" >
          <stop offset="0%" stopColor={firstColor} />
          <stop offset="100%" stopColor={secondColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

GradientSVG.propTypes = {
  firstColor: PropTypes.string,
  secondColor: PropTypes.string,
}

export default GradientSVG;