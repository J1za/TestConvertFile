import React, { useContext } from 'react';
import styled from 'styled-components';

// Components
import Findings from "./sections/Findings";
import AcSize from "./sections/AcSize";
import BoxEl from "./sections/BoxEl";
import AcInfo from "./sections/AcInfo";
import Score from "./sections/Score";
import logo from "../../images/logo.png";

// Images
import screen from "../../images/icons/screen.png";
import money from "../../images/icons/money.png";
import chart from "../../images/icons/chart.png";
import monitor from "../../images/icons/monitor.png";
import key from "../../images/icons/key.png";
import cursor from "../../images/icons/cursor.png";
import mega from "../../images/icons/mega.png";
import ads from "../../images/icons/ads.png";
import word from "../../images/icons/word.png";
import plus from "../../images/icons/plus.png";
import click from "../../images/icons/svg-icons/clicks.svg";
import CtrPer from "../../images/icons/svg-icons/ctr.svg";
import impr from "../../images/icons/svg-icons/impresions.svg";
import cost from "../../images/icons/svg-icons/cost.svg";
import cpc from "../../images/icons/svg-icons/cpc.svg";
import bag from "../../images/icons/svg-icons/conversions.svg";
import rate from "../../images/icons/svg-icons/conversion rate.svg";
import costConv from "../../images/icons/svg-icons/cost per conversion.svg";
import graph from "../../images/icons/svg-icons/conversion value.svg";
import { AuditContext } from "../../App";
import { kFormatter } from "../../utilityFunctions";

const StyleWrapper = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 7px;
  box-shadow: 0px 0px 1px rgb(0 0 0 / 30%);
  
  @media only screen and (max-width: 740px) {
    .item-wrapper {
      width: 100%; 
    }
    
    .item-container {
      flex-wrap: wrap;
    }
  }
`

const Section = styled.div`
  border-top: 1px solid #D9E1EB;
  padding-bottom: 2rem;
  padding-top: 2rem;
`

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const AuditScore = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setAuditData] = useContext(AuditContext);

  const percentageFormatter = (num) => {
    return num + '%';
  }

  const score = [
    {
      icon: screen,
      text: "Minimizing lost revenue",
      percentage: 30,
      width: 20,
      height: 10,
      showPercentage: false
    },
    {
      icon: money,
      text: "Minimizing wasted spend",
      percentage: 70,
      width: 20,
      height: 10,
      showPercentage: false
    },
    {
      icon: chart,
      text: "Potential to boost gains",
      percentage: 70,
      width: 20,
      height: 10,
      showPercentage: false
    },
    {
      icon: monitor,
      text: "Landing pages",
      percentage: auditData.auditScore.qualityScoreAudit.landingPageExperience,
      width: 18,
      height: 10,
      showPercentage: false
    },
    {
      icon: key,
      text: "Keyword to Ad relevance",
      percentage: auditData.auditScore.qualityScoreAudit.adRelevance,
      width: 18,
      height: 10,
      showPercentage: false
    },
    {
      icon: cursor,
      text: "CTR",
      percentage: auditData.auditScore.qualityScoreAudit.expectedCtr,
      width: 18,
      height: 10,
      showPercentage: false
    },
    {
      icon: mega,
      text: "Campaigns",
      percentage: auditData.auditScore.structureAudit.campaignsScore,
      width: 20,
      height: 10,
      showPercentage: false
    },
    {
      icon: ads,
      text: "Ads",
      percentage: auditData.auditScore.structureAudit.adsScore,
      width: 20,
      height: 10,
      showPercentage: false
    },
    {
      icon: word,
      text: "Keyword",
      percentage: auditData.auditScore.structureAudit.keywordsScore,
      width: 20,
      height: 10,
      showPercentage: false
    },
    {
      icon: key,
      text: "Negative keywords",
      percentage: auditData.auditScore.structureAudit.negative_keywordsScore,
      width: 20,
      height: 10,
      showPercentage: false
    },
    {
      icon: monitor,
      text: "Landing pages",
      percentage: auditData.auditScore.structureAudit.landingPagesScore,
      width: 20,
      height: 10,
      showPercentage: false
    },
    {
      icon: plus,
      text: "Ad extensions",
      percentage: auditData.auditScore.structureAudit.adExtScore,
      width: 20,
      height: 10,
      showPercentage: false
    },
    {
      icon: money,
      text: 'Minimizing lost revenue and wasted spend',
      percentage: auditData.auditScore.performanceAudit.score,
      width: 20,
      height: 10,
      showPercentage: false
    }
  ]

  const traffic = {
    lost: auditData.keyFindings.lost,
    numbers: [
      {
        num: auditData.keyFindings.clicksGain,
        text: 'Clicks'
      },
      {
        num: auditData.keyFindings.conversionsGain,
        text: 'Conversions'
      },
      {
        num: auditData.keyFindings.convValueGain,
        text: 'Revenue'
      }
    ]
  }

  const countCriticalIssues = () => {
    let count = 0;

    if (auditData.accountStructureAudit.landingPages.urlsBroken > 0) {
      count += 1;
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

  const issues = {
    failedAreas: auditData.keyFindings.failedAreas,
    maxAreas: auditData.keyFindings.totalAreas,
    criticalIssues: countCriticalIssues()
  }

  const acSize = {
    campaigns: {
      searchCampaigns: auditData.accountSize.campaigns.searchCampaigns,
      shoppingCampaigns: auditData.accountSize.campaigns.shoppingCampaigns,
      displayCampaigns: auditData.accountSize.campaigns.displayCampaigns,
      otherCampaigns: auditData.accountSize.campaigns.otherCampaigns
    },
    ads: {
      textAds: auditData.accountSize.ads.textAds,
      responsiveAds: auditData.accountSize.ads.rsaAds,
      responsiveDisplayAds: auditData.accountSize.ads.rdaAds,
      dsaAds: auditData.accountSize.ads.dsaAds,
      imageAds: auditData.accountSize.ads.imageAds,
      otherAds: auditData.accountSize.ads.otherAds,
    },
    keywords: {
      searchKeywords: auditData.accountSize.keywords.searchKeywords
    }
  }

  const performance = [
    {
      icon: click,
      text: 'Clicks',
      value: kFormatter(auditData.performance.clicks)
    },
    {
      icon: CtrPer,
      text: 'CTR',
      value: percentageFormatter(auditData.performance.ctr)
    },
    {
      icon: impr,
      text: 'Impr.',
      value: kFormatter(auditData.performance.impressions)
    },
    {
      icon: cost,
      text: 'Cost',
      value: auditData.currency + kFormatter(auditData.performance.cost)
    },
    {
      icon: cpc,
      text: 'CPC',
      value: auditData.currency + kFormatter(auditData.performance.avgCpc)
    },
    {
      icon: bag,
      text: 'Conv.',
      value: kFormatter(auditData.performance.conversions)
    },
    {
      icon: rate,
      text: 'Conv. rate',
      value: percentageFormatter(auditData.performance.convRate)
    },
    {
      icon: costConv,
      text: <span>Cost/<br />conv.</span>,
      value: auditData.currency + kFormatter(auditData.performance.costPerConv)
    },
    {
      icon: graph,
      text: 'Conv. value',
      value: auditData.currency + kFormatter(auditData.performance.convValue)
    },
  ]

  return (
    <StyleWrapper>
      <img className='totalPages' src={logo} alt="logo" />
      <AcInfo />
      <Score score={score} />
      <Section>
        <h3>Key Findings</h3>
        <Findings traffic={traffic} />
        <Findings issues={issues} />
        <Findings />
      </Section>

      <Section>
        <h3>Account Size</h3>
        <AcSize acSize={acSize} />
      </Section>

      <Section>
        <h3>Performance in last 30 days</h3>
        <BoxWrapper>
          {
            performance.map((perf, index) => <BoxEl key={index} performance={perf} />)
          }
        </BoxWrapper>
      </Section>
    </StyleWrapper>
  );
}

export default AuditScore;