import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import ProgressBar from "../../../ui/charts/ProgressBar";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
`

const IconHolder = styled.div`
  display: flex;
  color: #3C4858;
  font-size: 16px;
  font-family: 'NeutrifPro-Medium';
  align-items: center;
  line-height: 26px;
  img {
    margin-right: 5px;
  }
`

const ItemEl = ({data, center}) => {
  return (
    <Item style={{marginTop: center ? '2rem' : ''}}>
      <IconHolder style={{width: center ? '55%' : ''}}><img src={data.icon} alt="screen icon"/>{data.text}</IconHolder>
      <ProgressBar percentage={data.percentage} width={data.width} height={data.height} showPercentage={data.showPercentage}></ProgressBar>
    </Item>
  );
}

ItemEl.propTypes = {
  data: PropTypes.object,
  center: PropTypes.bool
}

export default ItemEl;