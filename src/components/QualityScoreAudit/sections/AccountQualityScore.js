import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import ScalaChart from "../../../ui/charts/ScalaChart";
import HorizontalBarChart from "../../../ui/charts/HorizontalBarChart";

const Section = styled.div`
  padding-bottom: 2rem;
  padding-top: 2rem;
  overflow: hidden;
  
  p {
    margin-top: 1rem;
  }
  
  @media only screen and (max-width: 740px) {
    .item-wrapper {
      width: 100% !important;
    }
    
    .info {
      margin-top: 14rem;
    }
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`

const Speedometer = styled.div`
  text-align: center;
  width: 20%;
  
  h4 {
    font-size: 29px;
  }
  
  p {
    font-size: 14px;
    color: #626E7C;
  }
`

const ItemWrapper = styled.div`
  width: 40%;
  
  ul li {
    margin-bottom: 10px;
  }
  
  ul {
    padding-left: 16px;
  }
`

const AccountQualityScore = ({qualityScore}) => {

  const displayRightHandSide = () => {
    if (qualityScore.ctr === 3 && qualityScore.adRelevance === 3 && qualityScore.pageExperience === 3) {
      return '';
    } else {
      return (
        <div className="info">
          <h4>Your quality score efforts should focus on improving the:</h4>
          <ul>
            {
              qualityScore.ctr === 3 ? '' : <li>CTR of this account by writing better ad copy and regular split testing of your ads.</li>
            }
            {
              qualityScore.adRelevance === 3 ? '' : <li>Relevancy of the ads to keywords. You can do this by moving the keywords with the worst ad relevance to new ad groups and write better targeted ads for them.</li>
            }
            {
              qualityScore.pageExperience === 3 ? '' : <li>Landing page user experience. You can do this by ensuring the keywords, ads, and landing page content are highly related. Improving the landing page speed and decreasing the landing page’s bounce rate also improve the user experience scores.</li>
            }
          </ul>
        </div>
      )
    }
  }

  return (
    <Section>
      <h3>Account Quality Score Audit</h3>
      <p>Your account quality score is impression weighted. The lower your quality score, the more impressions your are getting
         from keywords with low quality scores, which means you are overpaying for these keywords. Improving your quality scores
         result in higher position, lower cost per click, or a combination both.
      </p>
      <Item>
        <Speedometer className="speedometer">
          <ScalaChart sum={qualityScore.qualityScore} />
          <h4>{qualityScore.qualityScore}</h4>
          <p>Account Quality Score</p>
        </Speedometer>
        <ItemWrapper className="item-wrapper">
          <HorizontalBarChart qualityScore={qualityScore} />
        </ItemWrapper>
        <ItemWrapper className="item-wrapper">
          {displayRightHandSide()}
        </ItemWrapper>
      </Item>
    </Section>
  );
}

AccountQualityScore.propTypes = {
  qualityScore: PropTypes.object
}

export default AccountQualityScore;