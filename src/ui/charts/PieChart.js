import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import {kFormatter, numberWithCommas} from "../../utilityFunctions";
import SegmentPreviewer from "./SegmentPreviewer";

const PieChartCustom = ({dataArr, showPercent, showNumberPercent, showNumber}) => {
  // eslint-disable-next-line no-unused-vars
  const [segmentIndexData, setSegmentIndexData] = useState({});
  const [showSegmentPreviewer, setShowSegmentPreviewer] = useState(false);
  const [segmentPosition, setSegmentPosition] = useState({top: 0, left: 0})

  const isFullWidth = () => {
    let isFull = false

    dataArr.forEach(item => {
      if (item.value === 100) {
        isFull = true;
      }
    })

    return isFull;
  }

  return (
    <div>
      <PieChart
        data={dataArr}
        label={({dataEntry}) => showNumber !== 34 ? numberWithCommas(showPercent && dataEntry.value !== 0 ? `${Math.round(dataEntry.percentage)}%` :
          dataEntry.number && dataEntry.percentage > 10 ? showNumberPercent ? `${kFormatter(dataEntry.number)}` : kFormatter(dataEntry.number ): '') : ''}
        labelStyle={() => ({
          fill: '#fff',
          fontSize: '7px',
        })}
        labelPosition={isFullWidth() ? 1 : 60}
        onMouseOver={(e, segmentIndex) => {
          const segmentData = dataArr[segmentIndex];
          const position = {
            top: e.pageY,
            left: e.pageX
          }

          if (segmentData.number) {
            setShowSegmentPreviewer(true);
          }

          setSegmentIndexData(segmentData);
          setSegmentPosition(position);
        }}
        onMouseOut={() => {
          setShowSegmentPreviewer(false);
        }}
      />

      {
        showSegmentPreviewer ? <SegmentPreviewer data={segmentIndexData} position={segmentPosition} /> : <></>
      }
    </div>
  )
}

PieChartCustom.propTypes = {
  dataArr: PropTypes.array,
  showPercent: PropTypes.bool,
  showNumberPercent: PropTypes.bool
}

export default PieChartCustom;