import React, {useContext} from 'react';
import styled from 'styled-components';

// Components
import PieChart from "../../../ui/charts/PieChart";
import Bar from "../../../ui/charts/Bar";
import {AuditContext} from "../../../App";
import {numberWithCommas} from "../../../utilityFunctions";

const Section = styled.div`
  margin-top: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid #D9E1EB;
  
  @media only screen and (max-width: 740px) {
    .ChartWrapper {
      flex-wrap: wrap;
    } 
    
    .chart {
      width: 100%;
    }
    
    .left {
      width: 100% !important;
      border: none !important;
    }
    
    .right {
      width: 100% !important;
      padding-left: 0 !important;
    }
  }
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
  width: 30%
`

const Wrapper = styled.div`
  margin-top: 2rem;
`

const ChartWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`

const Left = styled.div`
  width: 45%;
  border-right: 1px solid #D9E1EB;
`

const Right = styled.div`
  width: 50%;
  padding-left: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Chart = styled.div`
  width: 40%;
  margin: 0 auto
`

const Legend = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  
  p {
    font-size: 14px;
    color: #626E7C;
    display: flex;
    width: 180px
  }
`

const Box = styled.div`
  width: 23px;
  height: 16px;
  border-radius: 4px;
  margin-right: 10px;
`

const BarItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  
  p {
    font-size: 14px;
  }
`

const Info = styled.p`
  width: 12rem;
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

const NegativeKeywordsDistribution = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);
  const chartData = calculatePercentage([auditData.accountInsights.negativeKeywordsDistribution.campaignsNotUsingNegatives, auditData.accountInsights.negativeKeywordsDistribution.campaignsUsingNegatives]);

  return (
    <Section>
      <Head>
        <h3>Negative Keywords Distribution</h3>
        <p>You will want to have negative keywords in every search campaign to have more control over when your ads are shown. To streamline the workflow, use different levels for negative keywords. If your negative keyword is applicable to multiple campaigns, consider using negative keyword lists.</p>
      </Head>
      <TableWrapper>
        <table>
          <tr>
            <th></th>
            <th>Broad</th>
            <th>Phrase</th>
            <th>Exact</th>
          </tr>
          <tr>
            <FirstTd>Campaign Negatives</FirstTd>
            <td>{numberWithCommas(auditData.accountInsights.negativeKeywordsDistribution.campaignNegatives.broad ? auditData.accountInsights.negativeKeywordsDistribution.campaignNegatives.broad : 0)}</td>
            <td>{numberWithCommas(auditData.accountInsights.negativeKeywordsDistribution.campaignNegatives.phrase ? auditData.accountInsights.negativeKeywordsDistribution.campaignNegatives.phrase : 0)}</td>
            <td>{numberWithCommas(auditData.accountInsights.negativeKeywordsDistribution.campaignNegatives.exact ? auditData.accountInsights.negativeKeywordsDistribution.campaignNegatives.exact : 0 )}</td>
          </tr>
          <tr>
            <FirstTd>Ad Groups Negatives</FirstTd>
            <td>{numberWithCommas(auditData.accountInsights.negativeKeywordsDistribution.adgroupNegatives.broad ? auditData.accountInsights.negativeKeywordsDistribution.adgroupNegatives.broad : 0)}</td>
            <td>{numberWithCommas(auditData.accountInsights.negativeKeywordsDistribution.adgroupNegatives.phrase ? auditData.accountInsights.negativeKeywordsDistribution.adgroupNegatives.phrase : 0)}</td>
            <td>{numberWithCommas(auditData.accountInsights.negativeKeywordsDistribution.adgroupNegatives.exact ? auditData.accountInsights.negativeKeywordsDistribution.adgroupNegatives.exact : 0)}</td>
          </tr>
          <tr>
            <FirstTd>List Negatives</FirstTd>
            <td>{numberWithCommas(auditData.accountInsights.negativeKeywordsDistribution.listNegatives.broad ? auditData.accountInsights.negativeKeywordsDistribution.listNegatives.broad : 0)}</td>
            <td>{numberWithCommas(auditData.accountInsights.negativeKeywordsDistribution.listNegatives.phrase ? auditData.accountInsights.negativeKeywordsDistribution.listNegatives.phrase : 0)}</td>
            <td>{numberWithCommas(auditData.accountInsights.negativeKeywordsDistribution.listNegatives.exact ? auditData.accountInsights.negativeKeywordsDistribution.listNegatives.exact : 0)}</td>
          </tr>
        </table>
      </TableWrapper>
      <Wrapper>
        <p>Search campaigns using negative keywords</p>
        <ChartWrapper className="ChartWrapper">
          <Left className="left">
            <Chart className="chart">
              <PieChart dataArr={[
                {value: chartData[0], color: '#DE4C4B', number: auditData.accountInsights.negativeKeywordsDistribution.campaignsNotUsingNegatives },
                {value: chartData[1], color: '#30BD69', number: auditData.accountInsights.negativeKeywordsDistribution.campaignsUsingNegatives }
              ]} />
            </Chart>
            <Legend>
              <p><Box style={{background: '#DE4C4B'}} />Campaigns not using negative keywords</p>
              <p><Box style={{background: '#30BD69'}} />Campaigns using negative keywords</p>
            </Legend>
          </Left>
          <Right className="right">
            <BarItem>
              <Info>Campaigns with <br/> <b>Ad Group level negatives</b></Info>
              <Bar type="search" width={auditData.accountInsights.negativeKeywordsDistribution.campaignsUsingAdgroupNegatives === 0 ? -1 : auditData.accountInsights.negativeKeywordsDistribution.campaignsUsingAdgroupNegatives} widthType={'rem'} color={'#2A9153'} />
            </BarItem>
            <BarItem>
              <Info>Campaigns with <br/> <b>Campaign level negatives</b></Info>
              <Bar type="search" width={auditData.accountInsights.negativeKeywordsDistribution.campaignsUsingCampaignNegatives === 0 ? -1 : auditData.accountInsights.negativeKeywordsDistribution.campaignsUsingCampaignNegatives} widthType={'rem'} color={'#30BD69'} />
            </BarItem>
            <BarItem>
              <Info>Campaigns with <br/> <b>Negative keywords lists</b></Info>
              <Bar type="search" width={auditData.accountInsights.negativeKeywordsDistribution.campaignsUsingListNegatives === 0 ? -1 : auditData.accountInsights.negativeKeywordsDistribution.campaignsUsingListNegatives} widthType={'rem'} color={'#5CE192'} />
            </BarItem>
          </Right>
        </ChartWrapper>
      </Wrapper>
    </Section>
  );
}

export default NegativeKeywordsDistribution;