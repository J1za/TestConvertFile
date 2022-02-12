import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Icons
import warning from '../../../images/icons/warning.png';

const StyleWrapper = styled.div`
  margin-top: 3rem;
  border: 1px solid #D9E1EB;
  border-radius: 8px;
  padding: 1rem;
  
  @media only screen and (max-width: 740px) {
    .issue {
      width: 100% !important;
    }
  }
`;

const Issues = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`

const Issue = styled.div`
  width: 25%;
`

const Number = styled.p`
  font-size: 30px;
  color: #DE4B4B;
  font-weight: bold;
  font-family: 'NeutrifPro-SemiBold';
`

const Description = styled.p`
  font-size: 13px;
  color: #626E7C;
  line-height: 17px;
  width: 80%;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  
  p {
    margin-left: 5px;
    color: #182B49;
    font-size: 17px;
    font-weight: bold;
  }
`

const CriticalIssues = ({data}) => {
  const renderBody = () => {
    if (data && Object.keys(data).length !== 0) {
      return (
        <StyleWrapper>
          <Heading>
            <img src={warning} alt="icon"/>
            <p>This account has the following critical issues that are stopping your customers from reaching you.</p>
          </Heading>
          <Issues>
            {
              data.brokenUrls ?
                <Issue className="issue">
                  <Number>{data.brokenUrls}</Number>
                  <Description>broken URLs used by some of your ads, keywords or ad extensions</Description>
                </Issue>
                :
                ''
            }

            {
              data.keywordsConflict ?
                <Issue className="issue">
                  <Number>{data.keywordsConflict}</Number>
                  <Description>keywords in conflict with a negative keyword that is preventing them from running</Description>
                </Issue>
                :
                ''
            }

            {
              data.unapprovedAds ?
                <Issue className="issue">
                  <Number>{data.unapprovedAds}</Number>
                  <Description>ad groups with no approved ads</Description>
                </Issue>
                :
                ''
            }

            {
              data.unapprovedKeywords ?
                <Issue className="issue">
                  <Number>{data.unapprovedKeywords}</Number>
                  <Description>ad groups with no approved keywords</Description>
                </Issue>
                :
                ''
            }

          </Issues>
        </StyleWrapper>
      );
    } else {
      return ''
    }
  }

  return renderBody()
}

CriticalIssues.propTypes = {
  data: PropTypes.object
}

export default CriticalIssues;