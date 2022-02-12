import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const NumberIndicatorWrapper = styled.h2`
  display: flex;
  align-items: baseline;
  font-size: 30px;
  font-family: 'NeutrifPro-SemiBold';
`

const Clicks = styled.p`
  color: #626E7C;
  font-family: 'NeutrifPro-Medium';
`

const kFormatter = (num) => {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
}

const NumberIndicator = ({numbers, image}) => {
  return (
    <div>
      <NumberIndicatorWrapper>{numbers.currency ? numbers.currency + kFormatter(numbers.num) : kFormatter(numbers.num)} {numbers.num !== 0 ? <img style={{width: '18px'}} src={image} alt="arrow"/> : ''}</NumberIndicatorWrapper>
      <Clicks>{numbers.text}</Clicks>
    </div>
  );
}

NumberIndicator.propTypes = {
  numbers: PropTypes.object,
  image: PropTypes.string
}

export default NumberIndicator;