import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import {numberWithCommas} from "../../../utilityFunctions";

const StyleWrapper = styled.div`
  @media only screen and (max-width: 740px) {
    .account-size-wrapper {
      flex-wrap: wrap;
    }
    
    .account-size-inner {
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }
    
    .account-size-inner div {
      width: 25%;
      margin-right: 1rem !important;
      margin-bottom: 10px;
    }
    
    .bordered {
      border: none !important;
      padding: 0 !important;
    }
  }
`;

const AccountSizeWrapper = styled.div`
  display: flex;
`

const AccountSizeInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  flex-wrap: wrap;
  
  div {
    width: 96px;
    padding-left: 0rem;
    text-align: center;
  }
  
  p {
    color: #626E7C;
    font-size: 12px;
    font-family: 'NeutrifPro-Medium';
    margin-bottom: 10px;
  }
  
  .bordered {
    border-right: 1px solid #D9E1EB;
    padding-right: 1rem;
  }
`

const AcSize = ({acSize}) => {
  return (
    <StyleWrapper>
      <AccountSizeWrapper className="account-size-wrapper">
        <AccountSizeInner className="account-size-inner">
          <div>
            <p>Search <br/> campaigns</p>
            <h3>{numberWithCommas(acSize.campaigns.searchCampaigns)}</h3>
          </div>
          <div>
            <p>Shopping <br/> campaigns</p>
            <h3>{numberWithCommas(acSize.campaigns.shoppingCampaigns)}</h3>
          </div>
          <div>
            <p>Display <br/> campaigns</p>
            <h3>{numberWithCommas(acSize.campaigns.displayCampaigns)}</h3>
          </div>
          <div className="bordered">
            <p>Other <br/> campaigns</p>
            <h3>{numberWithCommas(acSize.campaigns.otherCampaigns)}</h3>
          </div>
        </AccountSizeInner>
        <AccountSizeInner className="account-size-inner">
          <div>
            <p>Expanded <br/> text ads</p>
            <h3>{numberWithCommas(acSize.ads.textAds)}</h3>
          </div>
          <div>
            <p>Responsive <br/> search ads</p>
            <h3>{numberWithCommas(acSize.ads.responsiveAds)}</h3>
          </div>
          <div>
            <p>Responsive <br/> display ads</p>
            <h3>{numberWithCommas(acSize.ads.responsiveDisplayAds)}</h3>
          </div>
          <div>
            <p>DSA ads <br/> <br/> </p>
            <h3>{numberWithCommas(acSize.ads.dsaAds)}</h3>
          </div>
          <div>
            <p>Image ads <br/> <br/> </p>
            <h3>{numberWithCommas(acSize.ads.imageAds)}</h3>
          </div>
          <div className="bordered">
            <p>Other ads <br/> <br/> </p>
            <h3>{numberWithCommas(acSize.ads.otherAds)}</h3>
          </div>
        </AccountSizeInner>
        <AccountSizeInner className="account-size-inner">
          <div>
            <p>Search <br/> keywords</p>
            <h3>{numberWithCommas(acSize.keywords.searchKeywords)}</h3>
          </div>
        </AccountSizeInner>
      </AccountSizeWrapper>
    </StyleWrapper>
  );
}

AcSize.propTypes = {
  acSize: PropTypes.object
}

export default AcSize;