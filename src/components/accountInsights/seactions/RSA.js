import React, {useContext} from 'react';
import styled from 'styled-components';
import {AuditContext} from "../../../App";

const Section = styled.div`
  margin-top: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid #D9E1EB;
  
  @media only screen and (max-width: 740px) {
    .numbers {
      flex-wrap: wrap;
    }   
    
    .numbers p {
      border: none !important;
    }
    
    .box {
      width: 100% !important;
      margin-bottom: 1rem;
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

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  flex-wrap: wrap;
`

const Box = styled.div`
  width: 45%;
  border: 1px solid #D9E1EB;
  border-radius: 3px;
  padding: 1.5rem;
`

const Info = styled.div`
  font-size: 14px;
`

const Numbers = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 1rem;
  
  p {
    font-size: 12px;
    margin-right: 1rem;
    border-right: 1px solid #D9E1EB;
    display: flex;
    align-items: center;
    font-family: 'NeutrifPro-SemiBold';
    
    span {
      margin-left: 5px;
      font-size: 20px;
      font-family: 'NeutrifPro-Bold';
      margin-right: 1rem;
    }
  }
  
  p:last-of-type {
    border: none;
  }
`

const RSA = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  return (
    <Section>
      <Head>
        <h3>Responsive Search Ads (RSA) Performance Compared To Other Ads </h3>
        <p>With RSAs becoming increasingly popular, it’s considered a best practise to have an RSA in each ad group and compare over time how RSAs perform against text ads from the same group.</p>
      </Head>
      <BoxWrapper>
        <Box className="box">
          <Info>Percentage of ad groups where an RSA ad outperforms the other ads in the following metrics (in ad groups with minimum 500 impressions): </Info>
          <Numbers className="numbers">
            <p>Clicks <span>{auditData.accountInsights.rsa.adgroupsPercentage.clicks}%</span></p>
            <p>Conv.rate <span>{auditData.accountInsights.rsa.adgroupsPercentage.convRate}%</span></p>
            <p>CTR <span>{auditData.accountInsights.rsa.adgroupsPercentage.ctr}%</span></p>
            <p>CPC <span>{auditData.accountInsights.rsa.adgroupsPercentage.cpc}%</span></p>
          </Numbers>
        </Box>
        <Box className="box">
          <Info>Distribution of RSA Ad strength indicating how well the RSA ad text is written (in ad groups with minimum 500 impressions)</Info>
          <Numbers className="numbers">
            <p style={{color: '#DE4C4B'}}>Poor <span>{auditData.accountInsights.rsa.rsaStrength.poor}%</span></p>
            <p style={{color: '#FFAF24'}}>Average <span>{auditData.accountInsights.rsa.rsaStrength.average}%</span></p>
            <p style={{color: '#30BD69'}}>Good <span>{auditData.accountInsights.rsa.rsaStrength.good}%</span></p>
            <p style={{color: '#2A4BC2'}}>Excellent <span>{auditData.accountInsights.rsa.rsaStrength.excellent}%</span></p>
          </Numbers>
        </Box>
      </BoxWrapper>
    </Section>
  )
}

export default RSA;