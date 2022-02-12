import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import SegmentPreviewer from "./SegmentPreviewer";
import {numberWithCommas} from "../../utilityFunctions";

const StyleWrapper = styled.div`
  display: flex;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 182px;
`

const Chart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 442px;
  border-bottom: 1px solid #D9E1EB;
  padding-left: 5px;
  padding-right: 5px;
`

const Border = styled.div`
  border:none;
  background: repeating-linear-gradient(to right,#D9E1EB 0,#D9E1EB 5px,transparent 4px,transparent 9px);
  height:1px;
  width: 28rem;
  left: 47px;
  top: 10px;
  position: absolute;
`

const Number = styled.div`
  position: relative;
`

const XAxis = styled.div`
  display: flex;
  justify-content: space-between;
  width: 442px;
  margin-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  
  div {
    width: 28px;
    text-align: center;
  }
`

const YAxis = styled.div`
  display: flex;
  flex-direction: column;
  
  div {
    margin-bottom: 15px;
  }
`

const Label = styled.div`
  writing-mode: vertical-rl;
  text-orientation: sideways;
  transform: rotate(
  -180deg
  );
  font-size: 14px;
  text-align: center;
  margin-right: 1rem;
`

const Bar = ({setShowSegmentPreviewer, setSegmentPosition, setPreviewVal, unformattedVal, value, color}) => {
  const BarEl = styled.div`
  width: 28px;
  height: ${value}px;
  border-radius: 4px;
  background: ${color};
  z-index: 1;
`

  return <BarEl onMouseEnter={(e) => {
    const position = {
      top: e.pageY,
      left: e.pageX
    }

    setSegmentPosition(position);
    setPreviewVal(unformattedVal);
    setShowSegmentPreviewer(true);
  }}
  onMouseLeave={() => setShowSegmentPreviewer(false)}
  >
  </BarEl>
}

Bar.propTypes = {
  currency: PropTypes.string,
  unformattedVal: PropTypes.number,
  value: PropTypes.number,
  color: PropTypes.string
}

const BarChart = ({currency, data}) => {
  const colors = ['#E05347', '#E45D44', '#EE7C38', '#F28634', '#FCB025', '#E2B12D', '#C5B237', '#C5B237', '#C5B237', '#4BBB5F']

  const [maxValueHeight, setMaxValueHeight] = useState(0);
  const [showSegmentPreviewer, setShowSegmentPreviewer] = useState(false);
  const [previewVal, setPreviewVal] = useState(0);
  const [segmentPosition, setSegmentPosition] = useState({top: 0, left: 0})

  const maxValuePart = maxValueHeight / 4;

  const getPercentage = (num) => {
    const maxHeight = 140;
    const percentageHeight = (num / maxValueHeight) * 100;

    return (maxHeight * percentageHeight) / 100;
  }

  function roundTen(num) {
    return Math.ceil((num + 1) / 10) * 10;
  }

  function roundFifth(num) {
    return Math.ceil(num / 5) * 5;
  }

  useEffect(() => {

    // Rounds the largest number to the nearest 10
    setMaxValueHeight(roundTen(Math.max(...data)))

  }, [])

  return (
    <StyleWrapper>
      <Label>{currency ? 'Keywords spend' : 'Number of keywords'}</Label>
      <YAxis >
        <Number>{currency ? currency : ''}{maxValueHeight} <Border/></Number>
        <Number>{currency ? currency : ''}{roundFifth(Math.round(maxValueHeight - maxValuePart))} <Border/></Number>
        <Number>{currency ? currency : ''}{roundFifth(Math.round(maxValueHeight - (maxValuePart * 2)))} <Border/></Number>
        <Number>{currency ? currency : ''}{roundFifth(Math.round(maxValueHeight - (maxValuePart * 3)))} <Border/></Number>
        <Number>{currency ? currency : ''}0</Number>
      </YAxis>
      <Inner style={{marginLeft: maxValueHeight < 100 ? '1rem' : '0'}}>
        <Chart>
          {
            data.map((item, index) => {
              return <Bar setShowSegmentPreviewer={setShowSegmentPreviewer} setSegmentPosition={setSegmentPosition} setPreviewVal={setPreviewVal} key={index} currency={currency} unformattedVal={item} value={Math.round(getPercentage(item))} color={colors[index]} />
            })
          }

          {
            showSegmentPreviewer ? <SegmentPreviewer data={{number: numberWithCommas(previewVal)}}  currencyFormatter={currency} position={segmentPosition} /> : <></>
          }
        </Chart>
        <XAxis>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </XAxis>
      </Inner>
    </StyleWrapper>
  );
}

BarChart.propTypes = {
  currency: PropTypes.string,
  data: PropTypes.array
}

export default BarChart;