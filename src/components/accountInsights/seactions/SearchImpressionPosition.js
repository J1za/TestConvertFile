import React, {useContext} from 'react';
import styled from 'styled-components';

// Images
import impression from '../../../images/icons/impressions.png';
import {AuditContext} from "../../../App"

const Section = styled.div`
  padding-top: 2rem;
  
  h3 {
    line-height: 20px;
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 2rem;
    line-height: 28px;
  }
  
  @media only screen and (max-width: 740px) {
    .pie-chart-wrapper {
      width: 100% !important;
    }
    
    .right {
      width: 100% !important; 
    }
    
    .right img {
      width: 100%;
    }
    
    .legend {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
`

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  
  p {
    font-size: 14px;
    color: #626E7C;
    display: flex;
    align-items: center;
    font-family: 'NeutrifPro-Medium';
    
    div {
      line-height: 16px; 
    }
    
    span {
      font-family: 'NeutrifPro-Regular';
      font-size: 14px;
    }
  }
`

const Box = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 10px;
`

const Right = styled.div`
  
  img {
    float: right;
  }
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Percentage = styled.div`
  font-size: 30px;
  font-family: 'NeutrifPro-SemiBold';
`

const SearchImpressionPosition = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  return (
    <Section>
      <h3>Search Impressions Position</h3>
      <p>The below shows you how often your ads were shown relative to the organic listing. Improve your ad position by testing your ads, improving your quality scores, and using efficient bidding techniques.</p>
      <Inner>
        <Legend className="legend">
          <div>
            <Percentage style={{color: '#30BD69'}}>{auditData.accountInsights.searchImpressionPositions.firstPosition}%</Percentage>
            <p><Box style={{backgroundColor: '#30BD69'}} />First Position</p>
          </div>

          <div>
            <Percentage style={{color: '#FFAF24'}}>{auditData.accountInsights.searchImpressionPositions.aboveListing}%</Percentage>
            <p><Box style={{backgroundColor: '#FFAF24'}} /><div>Above organic listing <br/> <span>(including first position)</span></div></p>
          </div>

          <div>
            <Percentage style={{color: '#DE4C4B'}}>{auditData.accountInsights.searchImpressionPositions.belowListing}%</Percentage>
            <p><Box style={{backgroundColor: '#DE4C4B'}} />Below organic listing</p>
          </div>

        </Legend>
        <Right className="right">
          <img src={impression} alt="icon"/>
        </Right>
      </Inner>
    </Section>
  )
}

export default SearchImpressionPosition;