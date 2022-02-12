import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyleWrapper = styled.div`
  background-color: #F7F7F9;
  border-bottom: 1px solid #D9E1EB;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
`

const Heading = ({title}) => {
  return (
    <StyleWrapper>
      <h4>{title}</h4>
    </StyleWrapper>
  );
}

Heading.propTypes = {
  title: PropTypes.string
}

export default Heading;