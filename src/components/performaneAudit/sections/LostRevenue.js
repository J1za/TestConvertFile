import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Section = styled.div`
  margin-top: 1rem;

  h3 {
    margin-left: 1rem;
  }
`

const Inner = styled.div`
  background: #F7F7F9;
  padding: 1rem;
  display: flex;
  align-items: center;
`

const LostRevenue = ({icon, text}) => {
  return (
    <Section>
      <Inner>
        <img src={icon} alt="icon"/>
        <h3>{text}</h3>
      </Inner>
    </Section>
  );
}

LostRevenue.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
}

export default LostRevenue;