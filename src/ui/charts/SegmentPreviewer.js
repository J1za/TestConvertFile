import React from 'react';
import styled from 'styled-components';

const SegmentPreviewer = ({data, currencyFormatter, position}) => {
  const Segment = styled.div`
    position: absolute;
    top: ${position.top - 20}px;
    left: ${position.left}px;
    background: #fff;
    border: 1px solid #dddddd;
    padding: 10px;
    z-index: 2;
  `

  return (
    <Segment>
      {
        currencyFormatter ? currencyFormatter + data.number : data.number
      }
    </Segment>
  )
}

export default SegmentPreviewer;