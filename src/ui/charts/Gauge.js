import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyleWrapper = styled.div`
  .CircularProgressbar .CircularProgressbar-path {
    stroke: url(#gradient);
  }
`

//Components
import GradientSVG from "./GradientSVG";

const Gauge = ({percentage}) => (
  <StyleWrapper>
    <GradientSVG firstColor={percentage <= 35 ? 'rgba(247,173,3,1)': 'rgba(52,188,100,1)'} secondColor={percentage <= 35 ? '#DF5246': 'rgba(247,173,3,1)'} />
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      strokeWidth={14}
      styles={{
        text: {
          fill: '#000',
          fontSize: '25px',
          fontWeight: 'bold'
        },
        path: {
          stroke: `linear-gradient(red, yellow)`
        },
        trail: {
          stroke: '#F7F7F9'
        }
      }}
    />
  </StyleWrapper>
)

Gauge.propTypes = {
  percentage: PropTypes.number
}

export default Gauge;