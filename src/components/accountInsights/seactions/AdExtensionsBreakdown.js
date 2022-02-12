import React, {useContext} from 'react';
import styled from 'styled-components';

// Components
import PieChart from "../../../ui/charts/PieChart";
import {AuditContext} from "../../../App";
import {numberWithCommas} from "../../../utilityFunctions";

const Section = styled.div`
  margin-top: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid #D9E1EB;
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
  
  .chart {
    width: 16%;
  }
  
  .first {
    text-align: left !important;
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
    text-align: center;
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

const PieWrapper = styled.div`
  width: 5rem;
  margin: 0 auto;
`

const Legend = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  p {
    font-size: 14px;
    color: #626E7C;
    display: flex;
    margin-bottom: 10px;
  }
`

const Box = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 10px;
`

const SumSmall = styled.p`
  font-size: 11px;
  margin-top: 5px;
  font-family: 'NeutrifPro-Bold';
  
  span:nth-of-type(1) {
    color: #30BD69;
  } 
   span:nth-of-type(2) {
    color: #DE4B4B;
  }
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


const AdExtensionsBreakdown = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  return (
    <Section>
      <h3>Ad Extensions Breakdown</h3>
      <TableWrapper>
        <table>
          <tr>
            <th>
            </th>
            <th>Sitelinks</th>
            <th>Call Ext.</th>
            <th>Callout Ext.</th>
            <th>Structured snippets</th>
          </tr>
          <tr>
            <td>
              <Legend>
                <p><Box style={{background: '#30BD69'}} />Spend - Campaigns with Extensions</p>
                <p><Box style={{background: '#DE4C4B'}} />Spend - Campaigns without Extensions</p>
              </Legend>
            </td>
            <td className="chart">
              <PieWrapper>
                <PieChart dataArr={[
                  {value: calculatePercentage([auditData.accountInsights.adExtensions.spend.sitelinks.withExt, auditData.accountInsights.adExtensions.spend.sitelinks.withoutExt])[0], color: '#30BD69' },
                  {value: calculatePercentage([auditData.accountInsights.adExtensions.spend.sitelinks.withExt, auditData.accountInsights.adExtensions.spend.sitelinks.withoutExt])[1], color: '#DE4C4B' }
                ]} />
                <SumSmall>
                  <span>{auditData.currency}{numberWithCommas(auditData.accountInsights.adExtensions.spend.sitelinks.withExt)}</span> <br/>
                  <span>{auditData.currency}{numberWithCommas(auditData.accountInsights.adExtensions.spend.sitelinks.withoutExt)}</span>
                </SumSmall>
              </PieWrapper>
            </td>
            <td className="chart">
              <PieWrapper>
                <PieChart dataArr={[
                  {value: calculatePercentage([auditData.accountInsights.adExtensions.spend.call.withExt, auditData.accountInsights.adExtensions.spend.call.withoutExt])[0], color: '#30BD69' },
                  {value: calculatePercentage([auditData.accountInsights.adExtensions.spend.call.withExt, auditData.accountInsights.adExtensions.spend.call.withoutExt])[1], color: '#DE4C4B' }
                ]} />
                <SumSmall>
                  <span>{auditData.currency}{numberWithCommas(auditData.accountInsights.adExtensions.spend.call.withExt)}</span> <br/>
                  <span>{auditData.currency}{numberWithCommas(auditData.accountInsights.adExtensions.spend.call.withoutExt)}</span>
                </SumSmall>
              </PieWrapper>
            </td>
            <td className="chart">
              <PieWrapper>
                <PieChart dataArr={[
                  {value: calculatePercentage([auditData.accountInsights.adExtensions.spend.callout.withExt, auditData.accountInsights.adExtensions.spend.callout.withoutExt])[0], color: '#30BD69' },
                  {value: calculatePercentage([auditData.accountInsights.adExtensions.spend.callout.withExt, auditData.accountInsights.adExtensions.spend.callout.withoutExt])[1], color: '#DE4C4B' }
                ]} />
                <SumSmall>
                  <span>{auditData.currency}{numberWithCommas(auditData.accountInsights.adExtensions.spend.callout.withExt)}</span> <br/>
                  <span>{auditData.currency}{numberWithCommas(auditData.accountInsights.adExtensions.spend.callout.withoutExt)}</span>
                </SumSmall>
              </PieWrapper>
            </td>
            <td className="chart">
              <PieWrapper>
                <PieChart dataArr={[
                  {value: calculatePercentage([auditData.accountInsights.adExtensions.spend.structured.withExt, auditData.accountInsights.adExtensions.spend.structured.withoutExt])[0], color: '#30BD69' },
                  {value: calculatePercentage([auditData.accountInsights.adExtensions.spend.structured.withExt, auditData.accountInsights.adExtensions.spend.structured.withoutExt])[1], color: '#DE4C4B' }
                ]} />
                <SumSmall>
                  <span>{auditData.currency}{numberWithCommas(auditData.accountInsights.adExtensions.spend.structured.withExt)}</span> <br/>
                  <span>{auditData.currency}{numberWithCommas(auditData.accountInsights.adExtensions.spend.structured.withoutExt)}</span>
                </SumSmall>
              </PieWrapper>
            </td>
          </tr>
          <tr>
            <td className="first">Enabled campaigns with</td>
            <td>{auditData.accountInsights.adExtensions.enabledCampaignsWith.sitelinks}</td>
            <td>{auditData.accountInsights.adExtensions.enabledCampaignsWith.call}</td>
            <td>{auditData.accountInsights.adExtensions.enabledCampaignsWith.callout}</td>
            <td>{auditData.accountInsights.adExtensions.enabledCampaignsWith.structured}</td>
          </tr>
          <tr>
            <td className="first">Enabled campaigns without</td>
            <td>{auditData.accountInsights.adExtensions.enabledCampaignsWithout.sitelinks}</td>
            <td>{auditData.accountInsights.adExtensions.enabledCampaignsWithout.call}</td>
            <td>{auditData.accountInsights.adExtensions.enabledCampaignsWithout.callout}</td>
            <td>{auditData.accountInsights.adExtensions.enabledCampaignsWithout.structured}</td>
          </tr>
        </table>
      </TableWrapper>
    </Section>
  )
}

export default AdExtensionsBreakdown;