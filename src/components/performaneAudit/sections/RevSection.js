import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import Row from './utility/Row';
import {kFormatter} from "../../../utilityFunctions";

const Section = styled.div`
  padding-top: 2rem;
  
  @media only screen and (max-width: 740px) {
    .item-el {
      width: 100% !important;
    }
  }
  
  h3 {
    font-size: 18px;
  }
`

const RevSection = ({data, title, currency, type, image}) => {
  return (
    <Section>
      <h3><b>{title}</b></h3>
      {
        data.map((d, index) => d.sum && d.sum > 0 ? <Row
          head={d.heading}
          type={type}
          ads={d.ads}
          amount={d.amount}
          key={index}
          sum={kFormatter(d.sum)}
          firstParagraph={d.firstParagraph}
          secondParagraph={d.secondParagraph}
          icon={d.icon}
          currencyToAppend={currency}
          image={image}
        /> : '')
      }
    </Section>
  );
}

RevSection.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  currency: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string
}

export default RevSection;