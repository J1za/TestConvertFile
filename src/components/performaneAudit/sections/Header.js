import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

// Components
import Gauge from "../../../ui/charts/Gauge";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #D9E1EB;
  padding-bottom: 1rem;
`

const Heading = styled.h2`
  font-size: 26px;
  font-family: 'NeutrifPro-SemiBold';
`

const GaugeWrapper = styled.div`
  width: 7rem;
`

const Subtext = styled.p`
  font-size: 20px;
  color: #182B49;
  line-height: 26px;
  margin-top: 7px;
`

const Header = ({percentage, heading, subtext}) => {
  return (
    <HeaderWrapper>
      <div>
        <Heading>{heading}</Heading>
        {
          subtext ? <Subtext>{subtext}</Subtext> : <></>
        }
      </div>

      {
        percentage ?
          <GaugeWrapper>
            <Gauge percentage={percentage} />
          </GaugeWrapper>
          :
          ''
      }

    </HeaderWrapper>
  );
}

Header.propTypes = {
  percentage: PropTypes.number,
  heading: PropTypes.string,
}

export default Header;