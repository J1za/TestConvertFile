import React, {useContext} from 'react';
import styled from "styled-components";

// Components
import BarChart from "../../../ui/charts/BarChart";
import {AuditContext} from "../../../App";

const Section = styled.div`
  padding-bottom: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #D9E1EB;
  
  p {
    margin-top: 1rem;
  }
`

const ChartWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
`

const ChartWrapperInner = styled.div`
  width: 50%;
`

const KeywordQualityScore = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  const numbers = auditData.qualityScoreAudit.keywordsDistribution.numbers;
  const costs = auditData.qualityScoreAudit.keywordsDistribution.costs;

  return (
    <Section>
      <h3>Keyword Quality Score Distribution</h3>
      <p>
        The below breakdown allows you to identify how your keywords and their spend are distributed across the quality score spectrum.
      </p>
      <ChartWrapper>
        <ChartWrapperInner><BarChart data={numbers} /></ChartWrapperInner>
        <ChartWrapperInner><BarChart data={costs} currency={auditData.currency} /></ChartWrapperInner>
      </ChartWrapper>
    </Section>
  );
}

export default KeywordQualityScore;