import React, {useContext} from 'react';
import styled from 'styled-components';

// Images
import warning from '../../../images/icons/warning.png';
import {AuditContext} from "../../../App";

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
    border-bottom: 1px solid #dddddd;
    text-align: center;
    padding: 15px;
  }
  table {
  border-collapse: collapse;
  }
  table td {
    border-bottom: 1px solid #dddddd; 
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

const Warning = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  
  img {
    margin-right: 10px;
  }
  
  p {
    font-size: 17px;
    color: #182B49;
  }
`


const CampaignUsage = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  return (
    <Section>
      <h3>Campaign Usage of Bid Adjustments</h3>
      <TableWrapper>
        <table>
          <tr>
            <th>Desktop</th>
            <th>Mobile</th>
            <th>Tablet</th>
            <th>Target location</th>
            <th>Ad Schedule</th>
            <th>Audience</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Parental</th>
          </tr>
          <tr>
            <td>{auditData.accountInsights.campaignUsageBidAdj.desktop}</td>
            <td>{auditData.accountInsights.campaignUsageBidAdj.mobile}</td>
            <td>{auditData.accountInsights.campaignUsageBidAdj.tablet}</td>
            <td>{auditData.accountInsights.campaignUsageBidAdj.location}</td>
            <td>{auditData.accountInsights.campaignUsageBidAdj.adSchedule}</td>
            <td>{auditData.accountInsights.campaignUsageBidAdj.audience}</td>
            <td>{auditData.accountInsights.campaignUsageBidAdj.age}</td>
            <td>{auditData.accountInsights.campaignUsageBidAdj.gender}</td>
            <td>{auditData.accountInsights.campaignUsageBidAdj.parent}</td>
          </tr>
        </table>
      </TableWrapper>
      {
        auditData.accountInsights.campaignUsageBidAdj.invalidBidAdjs !== 0 ? <Warning>
          <img src={warning} alt="warning icon"/>
          <p>There are <b>{auditData.accountInsights.campaignUsageBidAdj.invalidBidAdjs}</b> bid adjustments that are not valid due to being incompatible with the campaign’s bidding strategy.</p>
        </Warning>
          :
        <></>
      }

    </Section>
  );
}

export default CampaignUsage;