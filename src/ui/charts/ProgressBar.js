import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const ProgressBar = ({percentage, width, height, showPercentage}) => {
  const StyleWrapper = styled.div`
  background-color: #D9E1EB;
  border-radius: 21px;
  width: ${width}%;
  height: ${height}px;
  /* (height of inner div) / 2 + padding */
  
  @media only screen and (max-width: 740px) {
    .value-displayer {
      left: 43%;
    }
  }
  
  div {
    /* if the percentage value is less than 35 the reddish colors will be set else the greenish */
    background: linear-gradient(90deg, ${percentage <= 35 ? '#DF5246': 'rgba(247,173,3,1)'} 0%, 
      ${percentage <= 35 ? 'rgba(247,173,3,1)': 'rgba(52,188,100,1)'} 100%);
    width: ${percentage}%;
    /* Adjust with JavaScript */
    height: ${height ? height : 42}px;
    border-radius: 18px;
  }
`

  const ValueDisplayer = styled.p`
  position: absolute;
  color: ${percentage < 53 ? '#001738' : '#fff'};
  font-size: 28px;
  left: 50%;
  font-family: 'NeutrifPro-SemiBold';
`

  return (
    <StyleWrapper>
      {showPercentage ? <ValueDisplayer className="value-displayer">{percentage}%</ValueDisplayer> : ''}
      <div></div>
    </StyleWrapper>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  showPercentage: PropTypes.bool
}

export default ProgressBar;