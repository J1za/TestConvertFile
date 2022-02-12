import React, {useContext} from 'react';
import styled from "styled-components";

// Components
import Header from "../performaneAudit/sections/Header";
import Heading from "./sections/Heading";
import Item from "./sections/Item";
import CriticalIssues from "./sections/CriticalIssues";
import {AuditContext} from "../../App";

const StyleWrapper = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 7px;
  box-shadow: 0px 0px 1px rgb(0 0 0 / 30%);
  margin-top: 2rem;
  
  @media only screen and (max-width: 740px) {
    .col {
      width: 100% !important;
    }
  }
`

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  flex-wrap: wrap;
`

const Col = styled.div`
  width: 47%;
`

const AccountStructureAudit = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  const criticalIssues = {
    brokenUrls: 'null',
    keywordsConflict: 'null',
    unapprovedKeywords: 'null',
    unapprovedAds: 'null'
  }

  const data = {
    accountSettings: [
      {
        head: 'Conversion tracking enabled',
        tail: 'The conversion tracking code is not installed properly',
        figure: 'null'
      }
    ],
    campaignSettings: [
      {
        head: 'Display and Search campaigns separated',
        tail: `campaigns are running both on Search and Display network`,
        figure: 'null'
      },
      {
        head: 'Sensitive content excluded in Display campaigns',
        tail: ` campaigns may negatively impact your brand image`,
        figure: 'null'
      },
      {
        head: 'Ad Rotation settings not hampering A/B testing',
        tail: ` campaigns with manual CPC bidding not using ‘Rotate indefinitely‘`,
        figure: 'null'
      },
      {
        head: 'Mobile apps traffic excluded',
        tail: `Budgets from  campaigns may be leaking to notorious mobile apps`,
        figure: 'null'
      },
    ],
    keywords: [
      {
        head: 'No conflicting negative keywords',
        tail: ` keywords being stopped from running`,
        figure: 'null'
      },
      {
        head: 'Keyword match types properly formatted',
        tail: ` keywords have format problems affecting traffic volume`,
        figure: 'null'
      },
      {
        head: 'Traffic not diluted by duplicate keywords',
        tail: ` keywords are duplicates within a campaign`,
        figure: 'null'
      },
      {
        head: 'All keywords are eligible to run',
        tail: ` keywords disapproved by Google`,
        figure: 'null'
      },
      {
        head: 'Not too many keywords used per ad group ',
        tail: `ad groups have more than 50 keywords that may cause relevancy issues`,
        figure: 'null'
      }
    ],
    negativeKeywords: [
      {
        head: 'All negative keywords are properly formatted',
        tail: ` negative keywords which use modified broad match should be fixed`,
        figure: 'null'
      },
      {
        head: 'All negative keywords are properly formatted',
        tail: ` negative keywords which use modified broad match should be fixed`,
        figure: 'null'
      },
      {
        head: 'All negative keywords are properly formatted',
        tail: ` negative keywords which use modified broad match should be fixed`,
        figure: 'null'
      }
    ],
    ads: [
      {
        head: 'All ads are unique',
        tail: `ad groups have duplicate ads and, hence, diluting your ad copy testing efforts`,
        figure: 'null'
      },
      {
        head: 'All ads are unique',
        tail: `ad groups have duplicate ads and, hence, diluting your ad copy testing efforts`,
        figure: 'null'
      },
      {
        head: 'All ads are unique',
        tail: `ad groups have duplicate ads and, hence, diluting your ad copy testing efforts`,
        figure: 'null'
      },
    ],
    adExtensions: [
      {
        head: 'Sitelink ad extensions active in all campaigns',
        tail: `campaigns have no sitelink ad extensions`,
        figure: 'null'
      },
      {
        head: 'Sitelink ad extensions active in all campaigns',
        tail: `campaigns have no sitelink ad extensions`,
        figure: 'null'
      },
      {
        head: 'Sitelink ad extensions active in all campaigns',
        tail: `campaigns have no sitelink ad extensions`,
        figure: 'null'
      }
    ]
  }

  // eslint-disable-next-line react/no-unescaped-entities
  const subtext = <span>Your account didn't pass the audit check of <b>'null'</b> out of <b>'null'</b> areas of account structure best practices.</span>

  const countCriticalIssues = () => {
    let count = 0;

    if (auditData.accountStructureAudit?.landingPages.urlsBroken > 0) {
      count += 1;
      console.log(count)
    }
    if (auditData.accountStructureAudit?.keywords.conflict > 0) {
      count += 1;
    }
    if (auditData.accountStructureAudit?.keywords.emptyAdgroup > 0) {
      count += 1;
    }
    if (auditData.accountStructureAudit?.ads.noAds > 0) {
      count += 1;
    }

    return count;
  }

  return (
    <StyleWrapper>
      <Header percentage={'null'} heading={'Account structure best practices audit'} subtext={subtext} />
      <Columns>
        <Col className="col">
          <Heading title="Campaign Settings" />
          {
            data.campaignSettings.map((item, index) => <Item key={index} item={item} />)
          }
          <Heading title="Keywords" />
        </Col>
        <Col className="col">
          <Heading title="Ads" />
          {
            data.ads.map((item, index) => <Item key={index} item={item} />)
          }
          <Heading title="Ad extensions" />
          {
            data.adExtensions.map((item, index) => <Item key={index} item={item} />)
          }
          <Heading title="Account Settings" />
          {
            data.accountSettings.map((item, index) => <Item key={index} item={item} />)
          }
        </Col>
      </Columns>

      {
        countCriticalIssues() > 0 ? <CriticalIssues data={criticalIssues} /> : ''
      }

    </StyleWrapper>
  );
}

export default AccountStructureAudit;