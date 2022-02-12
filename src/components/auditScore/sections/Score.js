import React, {useContext} from 'react';
import ItemEl from "./ItemEl";
import styled from "styled-components";
import PropTypes from "prop-types";

//Components
import ProgressBar from "../../../ui/charts/ProgressBar";
import {AuditContext} from "../../../App"

const ScoreWrap = styled.div`
  .head {
    text-align center;
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 28px;
    font-family: 'NeutrifPro-SemiBold';
  } 
  
  .head p {
    font-size: 18px;
    color: #3C4858;
  }
  
  .head h2, p {
    margin: 0;
  }
`

const Section = styled.div`
  padding-bottom: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #D9E1EB;
  
  @media only screen and (max-width: 740px) {
    .item {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
    
    .item-container {
      flex-wrap: wrap;
    }
    
    .item-wrapper {
      padding: 0 !important;
      width: 100% !important;
      border: none;
    }
    
    .row {
      flex-wrap: wrap;
    }
    
    .col {
      width: 100%;
      padding: 0;
    }
    
    .gaugeWrapper {
      width: 50%;
    }
  }
`

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`

const ItemWrapper = styled.div`
  width: 40%;
  border-right: 1px solid #D9E1EB;
  padding-right: 2rem;
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
`

const Head = styled.h3`
  font-size: 20px;
  font-family: 'NeutrifPro-SemiBold';
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Col = styled.div`
  width: 48%;
`

const Score = ({score}) => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  return (
    <Section>
      <ScoreWrap>
        <div className="head">
          <h2>Your Overall Audit Score</h2>
        </div>
        <ProgressBar percentage={auditData.auditScore.overallScore} showPercentage={true}/>
      </ScoreWrap>
      <ItemContainer className="item-container">
        <ItemWrapper style={{width: '690px'}} className="item-wrapper">
          <Item className="item">
            <Head>Account Structure Audit</Head>
            <Head>{auditData.auditScore.structureAudit.score}%</Head>
          </Item>
          <Row className="row">
            <Col className="col">
              {
                score.slice(6, 9).map((scoreItem, index) => <ItemEl key={index} data={scoreItem} />)
              }
            </Col>
            <Col className="col">
              {
                score.slice(9, 12).map((scoreItem, index) => <ItemEl key={index} data={scoreItem} />)
              }
            </Col>
          </Row>
        </ItemWrapper>
        <ItemWrapper className="item-wrapper" style={{width: '408px', paddingLeft: '2rem'}}>
          <Item className="item">
            <Head>Performance Audit</Head>
            <Head>{auditData.auditScore.performanceAudit.score}%</Head>
          </Item>
          <ItemEl center={true} style={{marginTop: '2rem'}} data={score[12]}>

          </ItemEl>
        </ItemWrapper>
        <ItemWrapper className="item-wrapper" style={{width: '399px', borderRight: 'none', paddingLeft: '2rem'}}>
          <Item className="item">
            <Head>Quality Score Audit</Head>
            <Head>{auditData.auditScore.qualityScoreAudit.score}%</Head>
          </Item>
            {
              score.slice(3, 6).map((scoreItem, index) => <ItemEl key={index} data={scoreItem} />)
            }
        </ItemWrapper>
      </ItemContainer>
    </Section>
  )
}

Score.propTypes = {
  score: PropTypes.array
}

export default Score;