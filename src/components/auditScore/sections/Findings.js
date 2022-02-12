import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

// Components
import NumberIndicator from "./utility/NumberIndicator";

// Images
import finding from "../../../images/icons/finding.png";
import increasing from '../../../images/icons/increasing.png';

const StyleWrapper = styled.div`

  @media only screen and (max-width: 740px) {
    .finding {
      flex-wrap: wrap;
    }
    
    .finding-inner {
      flex-wrap: wrap;
    }
    
    .finding-inner p {
      margin: 0 !important;
    }
    
    .finding-item {
      width: 100%;
      margin-bottom: 1rem;
    }
    
    .finding-number {
      width: 100% !important;
      margin-top: 1rem;   
    } 
  }
`

const Finding = styled.div`
  background: #F7F7F9;
  border-radius: 7px;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  margin-top: 2rem;
  
  .finding-item-full {
    width: 100%;
  }
`

const FindingItem = styled.div`
  width: 50%;
  
  .finding-inner {
    display: flex;
    align-items: center;
  }
  
  .finding-inner p {
    font-size: 20px;
    margin-left: 1rem;
  }
`

const FindingNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  flex-wrap: wrap;
  
  p {
    font-size: 14px;
  }
  
  h2 {
    font-size: 30px;
  }
`

const SubHead = styled.p`
  font-size: 13px;
  color: #626E7C;
  margin-bottom: 5px;
`

const Info = styled.p`
  color: #182B49;
  font-size: 20px;
`

const Findings = ({traffic, issues}) => {

  const renderItem = () => {
    if(traffic !== undefined) {
      return (
        <StyleWrapper>
          <Finding className="finding">
            <FindingItem className="finding-item">
              <div className="finding-inner">
                <img src={finding} alt="icon"/>
                <Info>This account lost <b>{traffic.lost}%</b> of its search traffic due to bidding, quality score and budget issues.</Info>
              </div>
            </FindingItem>
            <FindingItem className="finding-item">
              <SubHead>Potential gains in the next 30 days when issues highlighted in this report are resolved:</SubHead>
              <FindingNumbers className="finding-number">
                {
                  traffic.numbers.map((num, index) => <NumberIndicator image={increasing} key={index} numbers={num} />)
                }
              </FindingNumbers>
            </FindingItem>
          </Finding>
        </StyleWrapper>
      );
    } else if (issues !== undefined) {
      return (
        <StyleWrapper>
          <Finding className="finding">
            <FindingItem className="finding-item, finding-item-full">
              <div className="finding-inner">
                <img src={finding} alt="icon"/>
                <Info>This account failed in <b>{issues.failedAreas}</b> out of <b>{issues.maxAreas}</b> areas of the account structure best practises.
                  {issues.criticalIssues !== 0 ? <span>Furthermore, there are <b>{issues.criticalIssues}</b> critical issues that are stopping your customers from reaching you. See relevant section for details.</span> : ''}
                </Info>
              </div>
            </FindingItem>
          </Finding>
        </StyleWrapper>
      );
    } else {
      return (
        <StyleWrapper>
          <Finding className="finding">
            <FindingItem className="finding-item, finding-item-full">
              <div className="finding-inner">
                <img src={finding} alt="icon"/>
                <Info>This account has further untapped potential to boost traffic and reduce wasted spend in the areas
                  covered in details in the report.
                </Info>
              </div>
            </FindingItem>
          </Finding>
        </StyleWrapper>
      );
    }
  }

  return (
    <div>
      {renderItem()}
    </div>
  )
}

Findings.propTypes = {
  traffic: PropTypes.object,
  issues: PropTypes.object
}

export default Findings;