import React, {useContext} from 'react';
import styled from "styled-components";
import {AuditContext} from "../../../App";
import {numberWithCommas} from "../../../utilityFunctions";

const Section = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #D9E1EB;
`

const StyleWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  overflow-x: auto;

  .colored {
    width: 15px;
    height: 15px;
    border-radius: 3px;
    margin-right: 10px;
  }
  
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

const Table = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setAuditData] = useContext(AuditContext);

  return (
    <Section>
      <StyleWrapper>
        <table>
          <tr>
            <th></th>
            <th>Clicks</th>
            <th>Impr.</th>
            <th>CTR</th>
            <th>Avg. CPC</th>
            <th>Cost</th>
            <th>Conv.</th>
            <th>Conv. rate</th>
            <th>Cost/Conv</th>
            <th>Conv.Value</th>
            <th>Conv. <br/> Value/Cost</th>
          </tr>
          <tr>
            <FirstTd><b>Search Performance</b></FirstTd>
            <td>{numberWithCommas(auditData.accountInsights.performances.search.clicks)}</td>
            <td>{numberWithCommas(auditData.accountInsights.performances.search.impressions)}</td>
            <td>{numberWithCommas(auditData.accountInsights.performances.search.ctr)}%</td>
            <td>{auditData.currency}{numberWithCommas(auditData.accountInsights.performances.search.avgCpc)}</td>
            <td>{auditData.currency}{numberWithCommas(auditData.accountInsights.performances.search.cost)}</td>
            <td>{numberWithCommas(auditData.accountInsights.performances.search.conversions)}</td>
            <td>{numberWithCommas(auditData.accountInsights.performances.search.convRate)}%</td>
            <td>{auditData.currency}{numberWithCommas(auditData.accountInsights.performances.search.costPerConv)}</td>
            <td>{auditData.currency}{numberWithCommas(auditData.accountInsights.performances.search.convValue)}</td>
            <td>{numberWithCommas(auditData.accountInsights.performances.search.convValuePerCost)}</td>
          </tr>
          <tr>
            <FirstTd><b>Display Performance</b></FirstTd>
            <td>{numberWithCommas(auditData.accountInsights.performances.display.clicks)}</td>
            <td>{numberWithCommas(auditData.accountInsights.performances.display.impressions)}</td>
            <td>{numberWithCommas(auditData.accountInsights.performances.display.ctr)}%</td>
            <td>{auditData.currency}{numberWithCommas(auditData.accountInsights.performances.display.avgCpc)}</td>
            <td>{auditData.currency}{numberWithCommas(auditData.accountInsights.performances.display.cost)}</td>
            <td>{numberWithCommas(auditData.accountInsights.performances.display.conversions)}</td>
            <td>{numberWithCommas(auditData.accountInsights.performances.display.convRate)}%</td>
            <td>{auditData.currency}{numberWithCommas(auditData.accountInsights.performances.display.costPerConv)}</td>
            <td>{auditData.currency}{numberWithCommas(auditData.accountInsights.performances.display.convValue)}</td>
            <td>{numberWithCommas(auditData.accountInsights.performances.display.convValuePerCost)}</td>
          </tr>
        </table>
      </StyleWrapper>
    </Section>
  );
};

export default Table;