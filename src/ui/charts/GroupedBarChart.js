import React, {useState} from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import SegmentPreviewer from "./SegmentPreviewer";
import {numberWithCommas} from "../../utilityFunctions";

const Chart = styled.div`
  width: 100%;
  height: 154px;
  border-bottom: 1px solid #D9E1EB;
  border-left: 1px solid #D9E1EB;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  
  @media only screen and (max-width: 1350px) {

    #border-content {
      width: 80% !important;
    }
  }
  
  @media only screen and (max-width: 740px) {
    .bar-wrapper {
      margin-right: 2rem;
    }
  }
`

const BarWrappers = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`

const Border = styled.div`
  border:none;
  background: repeating-linear-gradient(to right,#D9E1EB 0,#D9E1EB 5px,transparent 4px,transparent 9px);
  height:1px;
  width: 100%;
  left: 0;
  position: absolute;
  z-index: 1;
`

const Bar = ({color, value, barWidth, setShowSegmentPreviewer, unformattedData, setPreviewVal, setSegmentPosition}) => {
  const BarWrapper = styled.div`
    background: ${color};
    width: ${barWidth}px;
    height: ${value}%;
    border-radius: 4px;
    margin-right: 3px;
    z-index: 2;
  `

  return (
    <BarWrapper
      onMouseEnter={(e) => {
        const position = {
          top: e.pageY,
          left: e.pageX
        }

        setSegmentPosition(position);
        setPreviewVal(unformattedData);
        setShowSegmentPreviewer(true);
      }}
      onMouseLeave={() => setShowSegmentPreviewer(false)}
    />
  )
}

Bar.propTypes = {
  color: PropTypes.string,
  value: PropTypes.number,
  barWidth: PropTypes.number
}

const GroupedBarChart = ({data, colors, barWidth}) => {
  const [showSegmentPreviewer, setShowSegmentPreviewer] = useState(false);
  const [previewVal, setPreviewVal] = useState(0);
  const [segmentPosition, setSegmentPosition] = useState({top: 0, left: 0})

  function isInt(n) {
    return n % 1 === 0;
  }

  return (
    <Chart>
      <div id="border-content" style={{position: "absolute", width: '1126px'}}>
        <Border style={{top: '40px'}} />
        <Border style={{top: '80px'}} />
        <Border style={{top: '120px'}} />
      </div>

      {
        data.map((device, index) =>
          <BarWrappers className="bar-wrapper" key={index}>
            {
              device.map((val, index) => index !== device.length -1 ? <Bar
                key={index}
                value={val}
                color={colors[index]}
                barWidth={barWidth}
                setShowSegmentPreviewer={setShowSegmentPreviewer}
                setPreviewVal={setPreviewVal}
                setSegmentPosition={setSegmentPosition}
                unformattedData={device[device.length-1][index]}
              /> : '')
            }
          </BarWrappers>
        )
      }

      {
        showSegmentPreviewer ? <SegmentPreviewer data={{number: isInt(previewVal) ? numberWithCommas(previewVal) : previewVal.toFixed(2)}} position={segmentPosition} /> : <></>
      }
    </Chart>
  )
}

GroupedBarChart.propTypes = {
  data: PropTypes.array,
  colors: PropTypes.array,
  barWidth: PropTypes.number
}

export default GroupedBarChart;