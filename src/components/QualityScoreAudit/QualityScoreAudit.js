import React, {useContext} from 'react';
import styled from "styled-components";

// Components
import Header from "../performaneAudit/sections/Header";
import AccountQualityScore from "./sections/AccountQualityScore";
import KeywordQualityScore from "./sections/KeywordQualityScore";
import {AuditContext} from "../../App";

const StyleWrapper = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 7px;
  box-shadow: 0px 0px 1px rgb(0 0 0 / 30%);
  margin-top: 2rem;
`

const QualityScoreAudit = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  const getScore = (score) => {
    if (score === 'BELOW_AVERAGE') {
      return 1;
    } else if (score === 'AVERAGE') {
      return 2;
    } else if (score === 'ABOVE_AVERAGE') {
      return 3;
    }
  }

  const qualityScore = {
    qualityScore: auditData.qualityScoreAudit.score,
    ctr: getScore(auditData.qualityScoreAudit.expectedCtr),
    adRelevance: getScore(auditData.qualityScoreAudit.adRelevance),
    pageExperience: getScore(auditData.qualityScoreAudit.landingPageExperience)
  }

  return (
    <StyleWrapper>
      <Header percentage={auditData.auditScore.qualityScoreAudit.score} heading={'Quality Score Audit'}/>
      <AccountQualityScore qualityScore={qualityScore} />
      <KeywordQualityScore />
    </StyleWrapper>
  )
}

export default QualityScoreAudit;