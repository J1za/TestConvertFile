import React, {useContext} from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import {AuditContext} from "../../../../App";

const StyleWrapper = styled.div`
  width: 70%;
  overflow-x: auto;
  
  @media only screen and (max-width: 740px) {
    width: 100% !important;
  }
  
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
    padding: 0.7rem;
  }
  table {
  border-collapse: collapse;
  }
  table td {
    border: 1px solid #dddddd; 
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
  border-right: none !important;
  border-top: none !important;
  font-family: 'NeutrifPro-SemiBold';
`

const Table = ({tableData}) => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  return (
    <StyleWrapper>
      <table>
        <tr>
          <th></th>
          <th>Impressions</th>
          <th>Clicks</th>
          <th>Conversions</th>
          <th>Conversion Value</th>
        </tr>
        <tr>
          <FirstTd><div style={{width: '17px', background: '#FFAF24'}} className="colored"></div>What you missed on due to bidding and quality score issues</FirstTd>
          <td>{tableData.impressions[0]}</td>
          <td>{tableData.clicks[0]}</td>
          <td>{tableData.conversions[0]}</td>
          <td>{auditData.currency}{tableData.conversionsValue[0]}</td>
        </tr>
        <tr>
          <FirstTd><div style={{background: '#2A4BC2'}} className="colored"></div>What you missed on due to budget limitations</FirstTd>
          <td>{tableData.impressions[1]}</td>
          <td>{tableData.clicks[1]}</td>
          <td>{tableData.conversions[1]}</td>
          <td>{auditData.currency}{tableData.conversionsValue[1]}</td>
        </tr>
        <tr>
          <FirstTd><div style={{background: '#30BD69'}} className="colored"></div>What you acquired in last 30 days</FirstTd>
          <td>{tableData.impressions[2]}</td>
          <td>{tableData.clicks[2]}</td>
          <td>{tableData.conversions[2]}</td>
          <td>{auditData.currency}{tableData.conversionsValue[2]}</td>
        </tr>
      </table>
    </StyleWrapper>
  );
};

Table.propTypes = {
  tableData: PropTypes.object
}

export default Table;