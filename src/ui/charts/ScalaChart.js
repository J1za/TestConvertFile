import React from 'react';
import PropTypes from 'prop-types';

// Images
import scala1 from '../../images/scala/QS1.png';
import scala2 from '../../images/scala/QS2.png';
import scala3 from '../../images/scala/QS3.png';
import scala4 from '../../images/scala/QS4.png';
import scala5 from '../../images/scala/QS5.png';
import scala6 from '../../images/scala/QS6.png';
import scala7 from '../../images/scala/QS7.png';
import scala8 from '../../images/scala/QS8.png';
import scala9 from '../../images/scala/QS9.png';
import scala10 from '../../images/scala/QS10.png';

const ScalaChart = ({sum}) => {

  const chooseChart = () => {
    switch (sum) {
      case 1: {
        return <img src={scala1} alt="scala" />;
      }
      case 2: {
        return <img src={scala2} alt="scala" />;
      }
      case 3: {
        return <img src={scala3} alt="scala" />;
      }
      case 4: {
        return <img src={scala4} alt="scala" />;
      }
      case 5: {
        return <img src={scala5} alt="scala" />;
      }
      case 6: {
        return <img src={scala6} alt="scala" />;
      }
      case 7: {
        return <img src={scala7} alt="scala" />;
      }
      case 8: {
        return <img src={scala8} alt="scala" />;
      }
      case 9: {
        return <img src={scala9} alt="scala" />;
      }
      case 10: {
        return <img src={scala10} alt="scala" />;
      }
      default: {
        return ''
      }
    }
  }

  return chooseChart();
}

ScalaChart.propTypes = {
  sum: PropTypes.number
}

export default ScalaChart;