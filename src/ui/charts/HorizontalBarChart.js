import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const StyleWrapper = styled.div`
  height: 11rem;
  
  @media only screen and (max-width: 740px) {
    .legend {
      margin-bottom: 1rem;
    }
  
    .legend div {
      margin-bottom: 0.5rem;
    }
    
    .x-axis-legend {
      margin-top: 6rem;
    }
    
    .x-axis-legend div {
      margin-top: 0.5rem;
    }
    
    .x-axis-legend p {
      padding-top: 13px;
    }
    
    .bars {
      margin-left: 0 !important;
    }
    
    .bars div {
      margin-top: 0.3rem;
    }
  }
`

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    padding: 0;
    margin: 0;
  }
`

const Bars = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14rem;
  border-left: 1px solid #D9E1EB;
  border-bottom: 1px solid #D9E1EB;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: 10px;
`

const ChartWrapper = styled.div`
  display: flex;
  height: 8rem;
  flex-wrap: wrap;
`

const XAxisLegend = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 2rem;
  flex-wrap: wrap;
`

const XAxisLegendItem = styled.div`
  display: flex;
  align-items: center;
  
  p {
    margin-top: 0 !important;
  }
`

const Box = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 5px;
`

const Bar = ({color, width}) => {
  const BarEl = styled.div`
  border-radius: 4px;
  width: ${width}%; 
  height: 21px;
`

  return <BarEl style={{backgroundColor: color}}></BarEl>
}

Bar.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number
}

const HorizontalBarChart = ({qualityScore}) => {

  const chooseColor = (value) => {
    if (value === 1) {
      return '#DE4C4B'
    } else if (value === 2) {
      return '#FFAF24';
    } else if (value === 3) {
      return '#31BD69';
    }
  }

  const valueToPercent = (value) => {
    if (value === 1) {
      return 30
    } else if (value === 2) {
      return 50;
    } else if (value === 3) {
      return 80;
    }
  }

  return (
    <StyleWrapper>
      <ChartWrapper>
        <Legend className="legend">
          <div>Expected Clickthrough Rate</div>
          <div>Ad Relevance</div>
          <div>Landing Page Experience</div>
        </Legend>
        <Bars className="bars">
          <Bar color={chooseColor(qualityScore.ctr)} width={valueToPercent(qualityScore.ctr)}/>
          <Bar color={chooseColor(qualityScore.adRelevance)} width={valueToPercent(qualityScore.adRelevance)}/>
          <Bar color={chooseColor(qualityScore.pageExperience)} width={valueToPercent(qualityScore.pageExperience)}/>
        </Bars>
      </ChartWrapper>
      <XAxisLegend className="x-axis-legend">
        <XAxisLegendItem><Box style={{backgroundColor: '#FFAF24'}}/> <p>Average</p></XAxisLegendItem>
        <XAxisLegendItem><Box style={{backgroundColor: '#DE4C4B'}}/><p>Below average</p></XAxisLegendItem>
        <XAxisLegendItem><Box style={{backgroundColor: '#31BD69'}}/><p>Above average</p></XAxisLegendItem>
      </XAxisLegend>
    </StyleWrapper>
  )
}

HorizontalBarChart.propTypes = {
  qualityScore: PropTypes.object
}

export default HorizontalBarChart;