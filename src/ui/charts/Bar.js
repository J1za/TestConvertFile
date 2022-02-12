import React, {useState} from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import {numberWithCommas} from "../../utilityFunctions";
import SegmentPreviewer from "./SegmentPreviewer";

const Bar = ({width, color, currency, figure, widthType, type}) => {
  const [showSegmentPreviewer, setShowSegmentPreviewer] = useState(false);
  const [segmentPosition, setSegmentPosition] = useState({top: 0, left: 0})

  const BarWrapper = styled.div`
    width: ${width < 10 ? type === 'search' ? width + 1 : width + 7 : width > 20 && type ==='search' ? 20 : width}${widthType ? widthType : '%'};
    background: ${color};
    border-radius: 5px;
    height: 22px;
    
    p {
      color: #fff;
      float: right;
      padding-right: 1rem;
      font-size: 14px;
      margin-top: 2px;
    }
  `

  return (
    <BarWrapper onMouseEnter={(e) => {
      const position = {
        top: e.pageY,
        left: e.pageX
      }

      setSegmentPosition(position);
      setShowSegmentPreviewer(true);
    }}
    onMouseLeave={() => setShowSegmentPreviewer(false)}
    >
      <p>{currency}{numberWithCommas(figure ? figure : Number.isNaN(width) ? 0 : width)}</p>

      {
        showSegmentPreviewer ? <SegmentPreviewer data={{number: numberWithCommas(figure ? figure : width)}} currencyFormatter={currency} position={segmentPosition} /> : <></>
      }
    </BarWrapper>
  );
}

Bar.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
  currency: PropTypes.string,
  figure: PropTypes.number,
  type: PropTypes.string
}

export default Bar;