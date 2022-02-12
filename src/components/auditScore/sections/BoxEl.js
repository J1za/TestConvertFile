import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled.div` 
  padding: 1rem;
  margin-top: 2rem;
  border: 1px solid #D9E1EB;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const BoxInner = styled.div`
  display: flex;
  align-items: center;
  max-width: 5rem;
  
  img {
    margin-right: 5px;
    width: 26px;
  }
  
  p {
    color: #626E7C;
    font-size: 14px;  
    font-family: 'NeutrifPro-Medium';
  }
  
  h3 {
    text-align: center; 
    font-size: 20px;
    margin-top: 5px;
  }
`

const BoxEl = ({performance}) => {
  return (
    <Box>
      <BoxInner>
        <img src={performance.icon} alt="icon"/>
        <p>{performance.text}</p>
      </BoxInner>
      <h3>{performance.value}</h3>
    </Box>
  );
}

BoxEl.propTypes = {
  performance: PropTypes.object
}

export default BoxEl;