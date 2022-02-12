import React, {useContext} from 'react';
import styled from "styled-components";
import {AuditContext} from "../../../App";

const Section = styled.div`
  padding-bottom: 2rem;
  padding-top: 2rem;
`

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const Date = styled.p`
  font-size: 18px;
  font-family: 'NeutrifPro-Medium';
  color: #001738;
`

const Sub = styled.span`
  color: #3C4858;
  font-size: 16px;
`

const AcInfoP = styled.p`
  font-size: 18px;
  color: #001738;
`

const Bolded = styled.b`
  font-size: 18px;
  font-family: 'NeutrifPro-Medium'
  color: #001738
`

const AcInfo = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setAuditData] = useContext(AuditContext);

  const formatAccountNumber = (accountNumber) => {
    return `${accountNumber.slice(0, 3)}-${accountNumber.slice(3, 6)}-${accountNumber.slice(6, 10)}`;
  }

  return (
    <Section className="first">
      <Header>
        <AcInfoP><Bolded>Google Ads account audit for</Bolded>: {auditData.accountName.substring(0, 50)} (ID: {formatAccountNumber(auditData.accountId.toString())}) <br/>
          <Sub>Audit was done on enabled campaigns only</Sub></AcInfoP>
        <Date>{auditData.date}</Date>
      </Header>
    </Section>
  );
}

export default AcInfo;