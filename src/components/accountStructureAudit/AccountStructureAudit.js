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
    brokenUrls: auditData.accountStructureAudit.landingPages.urlsBroken,
    keywordsConflict: auditData.accountStructureAudit.keywords.conflict,
    unapprovedKeywords: auditData.accountStructureAudit.keywords.emptyAdgroup,
    unapprovedAds: auditData.accountStructureAudit.ads.noAds
  }

  const data = {
    accountSettings: [
      {
        head: 'Conversion tracking enabled',
        tail: 'The conversion tracking code is not installed properly',
        figure: auditData.accountStructureAudit.account.noConvTracking
      }
    ],
    campaignSettings: [
      {
        head: 'Display and Search campaigns separated',
        tail: `${auditData.accountStructureAudit.campaigns.dualNetwork} campaigns are running both on Search and Display network`,
        figure: auditData.accountStructureAudit.campaigns.dualNetwork
      },
      {
        head: 'Sensitive content excluded in Display campaigns',
        tail: `${auditData.accountStructureAudit.campaigns.sensContNotExcd} campaigns may negatively impact your brand image`,
        figure: auditData.accountStructureAudit.campaigns.sensContNotExcd
      },
      {
        head: 'Ad Rotation settings not hampering A/B testing',
        tail: `${auditData.accountStructureAudit.campaigns.rotation} campaigns with manual CPC bidding not using ‘Rotate indefinitely‘`,
        figure: auditData.accountStructureAudit.campaigns.rotation
      },
      {
        head: 'Mobile apps traffic excluded',
        tail: `Budgets from ${auditData.accountStructureAudit.campaigns.mobAppsNotExcd} campaigns may be leaking to notorious mobile apps`,
        figure: auditData.accountStructureAudit.campaigns.mobAppsNotExcd
      },
    ],
    keywords: [
      {
        head: 'No conflicting negative keywords',
        tail: `${auditData.accountStructureAudit.keywords.conflict} keywords being stopped from running`,
        figure: auditData.accountStructureAudit.keywords.conflict
      },
      {
        head: 'Keyword match types properly formatted',
        tail: `${auditData.accountStructureAudit.keywords.malformed} keywords have format problems affecting traffic volume`,
        figure: auditData.accountStructureAudit.keywords.malformed
      },
      {
        head: 'Traffic not diluted by duplicate keywords',
        tail: `${auditData.accountStructureAudit.keywords.kwdDuplicate} keywords are duplicates within a campaign`,
        figure: auditData.accountStructureAudit.keywords.kwdDuplicate
      },
      {
        head: 'All keywords are eligible to run',
        tail: `${auditData.accountStructureAudit.keywords.disapproved} keywords disapproved by Google`,
        figure: auditData.accountStructureAudit.keywords.disapproved
      },
      {
        head: 'Not too many keywords used per ad group ',
        tail: `${auditData.accountStructureAudit.keywords.tooMany} ad groups have more than 50 keywords that may cause relevancy issues`,
        figure: auditData.accountStructureAudit.keywords.tooMany
      },
      {
        head: 'All ad groups have active keywords',
        tail: `You're losing traffic as ${auditData.accountStructureAudit.keywords.emptyAdgroup} active ad groups can’t participate in the auction`,
        figure: auditData.accountStructureAudit.keywords.emptyAdgroup
      },
      {
        head: 'Each search term matching only 1 ad group',
        tail: `${auditData.accountStructureAudit.keywords.stDuplicate} terms trigger keywords from different ad groups leading to relevancy issues`,
        figure: auditData.accountStructureAudit.keywords.stDuplicate
      },
      {
        head: 'Utilizing potential new keywords from search terms',
        tail: `${auditData.accountStructureAudit.keywords.potentialPos} new keywords can be created from well converting search terms `,
        figure: auditData.accountStructureAudit.keywords.potentialPos
      },
    ],
    negativeKeywords: [
      {
        head: 'All negative keywords are properly formatted',
        tail: `${auditData.accountStructureAudit.negativeKeywords.format} negative keywords which use modified broad match should be fixed`,
        figure: auditData.accountStructureAudit.negativeKeywords.format
      },
      {
        head: 'Negative keywords managed effectively across all levels',
        tail: `Multiple keywords can be refactored to a campaign level or a list`,
        figure: auditData.accountStructureAudit.negativeKeywords.newKwd
      },
      {
        head: 'All your search campaigns use negative keywords ',
        tail: `${auditData.accountStructureAudit.negativeKeywords.notUsing} campaigns don’t use any negative keywords `,
        figure: auditData.accountStructureAudit.negativeKeywords.notUsing
      },
    ],
    landingPages: [
      {
        head: 'All landing pages are accessible',
        tail: `${auditData.accountStructureAudit.landingPages.urlsBroken} URLs in your active ads, keywords or ad extensions are broken `,
        figure: auditData.accountStructureAudit.landingPages.urlsBroken
      },
      {
        head: 'Secure URL used in ads',
        tail: `${auditData.accountStructureAudit.landingPages.adsNotSecured} landing pages don’t use https to protect your users’ data`,
        figure: auditData.accountStructureAudit.landingPages.adsNotSecured
      },
      {
        head: 'Secure URL used as final URL at the keyword level ',
        tail: `${auditData.accountStructureAudit.landingPages.kwdNotSecured} keywords redirect users to insecure pages without https`,
        figure: auditData.accountStructureAudit.landingPages.kwdNotSecured
      }
    ],
    ads: [
      {
        head: 'All ads are unique',
        tail: `${auditData.accountStructureAudit.ads.duplicate} ad groups have duplicate ads and, hence, diluting your ad copy testing efforts`,
        figure: auditData.accountStructureAudit.ads.duplicate
      },
      {
        head: 'All ad groups have active ads',
        tail: `${auditData.accountStructureAudit.ads.noAds} ad groups can’t drive traffic as they have no active ads`,
        figure: auditData.accountStructureAudit.ads.noAds
      },
      {
        head: 'All ad messaging is being A/B tested',
        tail: `${auditData.accountStructureAudit.ads.oneAd} ad groups have only 1 ad which prevents you from running A/B tests`,
        figure: auditData.accountStructureAudit.ads.oneAd
      },
      {
        head: 'All ad groups use optimum number of ads',
        tail: `${auditData.accountStructureAudit.ads.tooManyAds} ad groups have more than 3 ads. Hence, it takes longer to find a winning ad copy`,
        figure: auditData.accountStructureAudit.ads.tooManyAds
      },
      {
        head: 'No outdated ad formats used',
        tail: `${auditData.accountStructureAudit.ads.legacyAds ? auditData.accountStructureAudit.ads.legacyAds : ''} active ads are Standard Text Ads that were retired in 2017`,
        figure: auditData.accountStructureAudit.ads.legacyAds
      },
      {
        head: 'All available space in ads used ',
        tail: `${auditData.accountStructureAudit.ads.missingH3} ads are missing Headline 3 which could be leveraged to increase CTR`,
        figure: auditData.accountStructureAudit.ads.missingH3
      },
      {
        head: 'High-quality Responsive Search Ads are used ',
        tail: `More than half of your RSAs have a poor ad strength`,
        figure: auditData.accountStructureAudit.ads.poorRSA
      },
      {
        head: 'All active text ads eligible to run',
        tail: `${auditData.accountStructureAudit.ads.disapprovedTextAds} text ads disapproved`,
        figure: auditData.accountStructureAudit.ads.disapprovedTextAds
      },
      {
        head: 'All active image ads eligible to run',
        tail: `${auditData.accountStructureAudit.ads.disapprovedImageAds} image ads disapproved`,
        figure: auditData.accountStructureAudit.ads.disapprovedImageAds
      },
    ],
    adExtensions: [
      {
        head: 'Sitelink ad extensions active in all campaigns',
        tail: `${auditData.accountStructureAudit.adExt.sitelinksEmpty} campaigns have no sitelink ad extensions`,
        figure: auditData.accountStructureAudit.adExt.sitelinksEmpty
      },
      {
        head: 'Callout ad extensions active in all campaigns',
        tail: `${auditData.accountStructureAudit.adExt.calloutEmpty} campaigns have no callout ad extensions`,
        figure: auditData.accountStructureAudit.adExt.calloutEmpty
      },
      {
        head: 'Structured snippet ad extensions active in all campaigns',
        tail: `${auditData.accountStructureAudit.adExt.snippetEmpty} campaigns have no structured snippet ad extensions`,
        figure: auditData.accountStructureAudit.adExt.snippetEmpty
      },
      {
        head: 'Each campaign has enough sitelink ad extensions',
        tail: `${auditData.accountStructureAudit.adExt.sitelinksBelow} campaigns have less than 4 sitelink ad extensions`,
        figure: auditData.accountStructureAudit.adExt.sitelinksBelow
      },
      {
        head: 'Each campaign has enough callout ad extensions',
        tail: `${auditData.accountStructureAudit.adExt.calloutBelow} campaigns have less than 4 callout ad extensions`,
        figure: auditData.accountStructureAudit.adExt.calloutBelow
      },
      {
        head: 'Each campaign has enough structured snippet ad extensions',
        tail: `${auditData.accountStructureAudit.adExt.snippetBelow} campaigns have less than 2 structured snippet ad extensions`,
        figure: auditData.accountStructureAudit.adExt.snippetBelow
      },
    ]
  }

  // eslint-disable-next-line react/no-unescaped-entities
  const subtext = <span>Your account didn't pass the audit check of <b>{auditData.keyFindings.failedAreas}</b> out of <b>{auditData.keyFindings.totalAreas}</b> areas of account structure best practices.</span>

  const countCriticalIssues = () => {
    let count = 0;

    if (auditData.accountStructureAudit.landingPages.urlsBroken > 0) {
      count += 1;
      console.log(count)
    }
    if (auditData.accountStructureAudit.keywords.conflict > 0) {
      count += 1;
    }
    if (auditData.accountStructureAudit.keywords.emptyAdgroup > 0) {
      count += 1;
    }
    if (auditData.accountStructureAudit.ads.noAds > 0) {
      count += 1;
    }

    return count;
  }

  return (
    <StyleWrapper>
      <Header percentage={auditData.auditScore.structureAudit.score} heading={'Account structure best practices audit'} subtext={subtext} />
      <Columns>
        <Col className="col">
          <Heading title="Campaign Settings" />
          {
            data.campaignSettings.map((item, index) => <Item key={index} item={item} />)
          }
          <Heading title="Keywords" />
          {
            data.keywords.map((item, index) => <Item key={index} item={item} />)
          }
          <Heading title="Negative Keywords" />
          {
            data.negativeKeywords.map((item, index) => <Item key={index} item={item} />)
          }
          <Heading title="Landing Pages" />
          {
            data.landingPages.map((item, index) => <Item key={index} item={item} />)
          }
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