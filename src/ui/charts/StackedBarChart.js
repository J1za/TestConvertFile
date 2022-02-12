import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from "prop-types";

const StackedBarChart = ({barData}) => {
  const options = {
    colors: ['#30BD69', '#2A4BC2', '#FFAF24'],
    series: [{
      data: [barData.acquired]
    }, {
      data: [barData.budgetLimitations]
    }, {
      data: [barData.biddingAndQuality]
    }],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      animations: {
        enabled: false
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '25%',
      },
    },
    dataLabels: {
      formatter: (value) => value +'%',
      offsetX: 5,
    },
    xaxis: {
      type: 'datetime',
      categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
        '01/05/2011 GMT', '01/06/2011 GMT'
      ],
      labels: {
        show: false
      }
    },
    yaxis: {
      forceNiceScale: false,
      max: 100,
      tickAmount: 5,
      labels: {
        formatter: (value) => value.toFixed(0) +'%',
      },
    },
    legend: {
      show: false
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      enabled: false
    }
  };

  return (
    <Chart options={options} series={options.series} type="bar" height={250} width={280} />
  );
}

StackedBarChart.propTypes = {
  barData: PropTypes.object
}

export default StackedBarChart;