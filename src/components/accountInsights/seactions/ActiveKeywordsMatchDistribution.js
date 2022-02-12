import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import PieChart from "../../../ui/charts/PieChart";
import {numberWithCommas} from "../../../utilityFunctions";

const Section = styled.div`
  margin-top: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid #D9E1EB;
`

const Head = styled.div`
  h3 {
    line-height: 26px
  }
  
  p {
    font-size: 17px;
    line-height: 28px;
  }
`

const TableWrapper = styled.div`
    margin-top: 2rem;
    overflow-x: auto;
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    font-size: 14px;
  }
  
  th {
    background: #F7F7F9;
    border-top: none !important;
    font-size: 13px;
    font-family: 'NeutrifPro-SemiBold';
    color: #001737;
  }
  
  th:first-of-type {
    border-left: none !important;
  }
  
  th:last-of-type {
    border-right: none !important;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 15px;
  }
  table {
  border-collapse: collapse;
  }
  table td {
    border: 1px solid #dddddd; 
    font-size: 13px;
    font-family: 'NeutrifPro-Regular';
  }
  table tr:first-child td {
    border-top: 0;
  }
  table tr td:first-child {
    border-left: 0;
  }
  table tr:last-child td {
    border-bottom: 1;
  }
  table tr td:last-child {
    border-right: 0;
  }
`

const FirstTd = styled.td`
  display: flex;
  align-items: center;
  color: #182B49;
  font-size: 13px;
  font-family: 'NeutrifPro-SemiBold';
  border-right: none !important;
  border-top: none !important;
`

const PieChartsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const ChartItem = styled.div `
  width: 15%;
  
  p {
    text-align: center;
    font-size: 14px;
    color: #182B49;
    overflow: hidden;
  }
`

const Legend = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  flex-wrap: wrap;
  
  p {
    font-size: 14px;
    color: #626E7C;
    display: flex;
    margin-right: 2rem;
  }
`

const Box = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 10px;
`

const calculatePercentage = (figures) => {
  let sum = 0;
  let percentages = [];

  // calculate the sum
  figures.forEach(figure => sum += figure);

  figures.forEach(figure => {
    percentages.push(Math.round((figure / sum) * 100));
  })

  return percentages
}

const ActiveKeywordsMatchDistribution = ({activeKeywordMatchDist, currency}) => {
  // eslint-disable-next-line no-unused-vars
  const impressionsData = calculatePercentage([
    activeKeywordMatchDist.exact.impr,
    activeKeywordMatchDist.phrase.impr,
    activeKeywordMatchDist.broad.impr,
    activeKeywordMatchDist.broadPlus.impr
  ]);

  const clicksData = calculatePercentage([
    activeKeywordMatchDist.exact.clicks,
    activeKeywordMatchDist.phrase.clicks,
    activeKeywordMatchDist.broad.clicks,
    activeKeywordMatchDist.broadPlus.clicks,
  ]);

  const convData = calculatePercentage([
    activeKeywordMatchDist.exact.conv,
    activeKeywordMatchDist.phrase.conv,
    activeKeywordMatchDist.broad.conv,
    activeKeywordMatchDist.broadPlus.conv,
  ])

  const convValueData = calculatePercentage([
    activeKeywordMatchDist.exact.convValue,
    activeKeywordMatchDist.phrase.convValue,
    activeKeywordMatchDist.broad.convValue,
    activeKeywordMatchDist.broadPlus.convValue,
  ])

  return (
    <Section>
      <Head>
        <h3>Active Keywords Match Distribution</h3>
        <p>Make sure you have the right strategy working with match types. Generally, you will want to have your best search terms in exact match to win as many auctions as possible,
          whereas phrase match and broad match are best for expanding reach and discovering new high-quality keywords. </p>
      </Head>
      <TableWrapper>
        <table>
          <tr>
            <th>Match type</th>
            <th>Keywords</th>
            <th>Keywords <br/> percent.</th>
            <th>Clicks</th>
            <th>Impr.</th>
            <th>CTR</th>
            <th>Avg. CPC</th>
            <th>Cost</th>
            <th>Conv.</th>
            <th>Cost/Conv.</th>
            <th>Conv. rate</th>
            <th>Conv. <br/>value</th>
            <th>Conv <br/>Value/Cost</th>
          </tr>
          <tr>
            <FirstTd>Exact</FirstTd>
            <td>{numberWithCommas(activeKeywordMatchDist.exact.keywords)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.exact.keywordsPercent)}%</td>
            <td>{numberWithCommas(activeKeywordMatchDist.exact.clicks)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.exact.impr)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.exact.ctr)}%</td>
            <td>{currency}{numberWithCommas(activeKeywordMatchDist.exact.avgCpc)}</td>
            <td>{currency}{numberWithCommas(activeKeywordMatchDist.exact.cost)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.exact.conv)}</td>
            <td>{currency}{numberWithCommas(activeKeywordMatchDist.exact.costPerConv)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.exact.convRate)}%</td>
            <td>{numberWithCommas(activeKeywordMatchDist.exact.convValue)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.exact.convValueCost)}</td>
          </tr>
          <tr>
            <FirstTd>Phrase</FirstTd>
            <td>{numberWithCommas(activeKeywordMatchDist.phrase.keywords)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.phrase.keywordsPercent)}%</td>
            <td>{numberWithCommas(activeKeywordMatchDist.phrase.clicks)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.phrase.impr)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.phrase.ctr)}%</td>
            <td>{currency}{numberWithCommas(activeKeywordMatchDist.phrase.avgCpc)}</td>
            <td>{currency}{numberWithCommas(activeKeywordMatchDist.phrase.cost)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.phrase.conv)}</td>
            <td>{currency}{numberWithCommas(activeKeywordMatchDist.phrase.costPerConv)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.phrase.convRate)}%</td>
            <td>{numberWithCommas(activeKeywordMatchDist.phrase.convValue)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.phrase.convValueCost)}</td>
          </tr>
          <tr>
            <FirstTd>Broad</FirstTd>
            <td>{numberWithCommas(activeKeywordMatchDist.broad.keywords)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broad.keywordsPercent)}%</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broad.clicks)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broad.impr)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broad.ctr)}%</td>
            <td>{currency}{numberWithCommas(activeKeywordMatchDist.broad.avgCpc)}</td>
            <td>{currency}{numberWithCommas(activeKeywordMatchDist.broad.cost)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broad.conv)}</td>
            <td>{currency}{numberWithCommas(activeKeywordMatchDist.broad.costPerConv)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broad.convRate)}%</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broad.convValue)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broad.convValueCost)}</td>
          </tr>
          <tr>
            <FirstTd>Broad+</FirstTd>
            <td>{numberWithCommas(activeKeywordMatchDist.broadPlus.keywords)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broadPlus.keywordsPercent)}%</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broadPlus.clicks)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broadPlus.impr)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broadPlus.ctr)}%</td>
            <td>{currency}{numberWithCommas(activeKeywordMatchDist.broadPlus.avgCpc)}</td>
            <td>{currency}{numberWithCommas(activeKeywordMatchDist.broadPlus.cost)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broadPlus.conv)}</td>
            <td>{currency}{numberWithCommas(activeKeywordMatchDist.broadPlus.costPerConv)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broadPlus.convRate)}%</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broadPlus.convValue)}</td>
            <td>{numberWithCommas(activeKeywordMatchDist.broadPlus.convValueCost)}</td>
          </tr>
        </table>
      </TableWrapper>
      <PieChartsWrapper>
        <ChartItem>
          <PieChart dataArr={[
            {value: impressionsData[0], color: '#2A4BC2', number: activeKeywordMatchDist.exact.impr},
            {value: impressionsData[1], color: '#30BD69', number: activeKeywordMatchDist.phrase.impr},
            {value: impressionsData[2], color: '#FFAF24', number: activeKeywordMatchDist.broad.impr},
            {value: impressionsData[3], color: '#C5CCDD', number: activeKeywordMatchDist.broadPlus.impr}
          ]}
          />
          <p>Impressions</p>
        </ChartItem>
        <ChartItem>
          <PieChart dataArr={[
            {value: clicksData[0], color: '#2A4BC2', number: activeKeywordMatchDist.exact.clicks },
            {value: clicksData[1], color: '#30BD69', number: activeKeywordMatchDist.phrase.clicks },
            {value: clicksData[2], color: '#FFAF24', number: activeKeywordMatchDist.broad.clicks },
            {value: clicksData[3], color: '#C5CCDD', number: activeKeywordMatchDist.broadPlus.clicks }
          ]} />
          <p>Clicks</p>
        </ChartItem>
        <ChartItem>
          <PieChart dataArr={[
            {value: convData[0], color: '#2A4BC2', number: activeKeywordMatchDist.exact.conv },
            {value: convData[1], color: '#30BD69', number: activeKeywordMatchDist.phrase.conv },
            {value: convData[2], color: '#FFAF24', number: activeKeywordMatchDist.broad.conv },
            {value: convData[3], color: '#C5CCDD', number: activeKeywordMatchDist.broadPlus.conv }
          ]} />
          <p>Conv.</p>
        </ChartItem>
        <ChartItem>
          <PieChart dataArr={[
            {value: convValueData[0], color: '#2A4BC2', number: activeKeywordMatchDist.exact.convValue },
            {value: convValueData[1], color: '#30BD69', number: activeKeywordMatchDist.phrase.convValue },
            {value: convValueData[2], color: '#FFAF24', number: activeKeywordMatchDist.broad.convValue },
            {value: convValueData[3], color: '#C5CCDD', number: activeKeywordMatchDist.broadPlus.convValue }
          ]} />
          <p>Conv. Value</p>
        </ChartItem>
      </PieChartsWrapper>
      <Legend>
        <p><Box style={{background: '#2A4BC2'}} />Exact</p>
        <p><Box style={{background: '#30BD69'}} />Phrase</p>
        <p><Box style={{background: '#FFAF24'}} />Broad</p>
        <p><Box style={{background: '#C5CCDD'}} />Broad+</p>
      </Legend>
    </Section>
  );
}

ActiveKeywordsMatchDistribution.propTypes = {
  currency: PropTypes.object,
  activeKeywordMatchDist: PropTypes.string
}

export default ActiveKeywordsMatchDistribution;