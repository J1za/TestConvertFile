import React, {useContext} from 'react';
import styled from 'styled-components';

//Images
import lostRevenue from '../../images/icons/lost_revenue.png';
import wastedSpend from '../../images/icons/wasted_spend.png';
import increase from '../../images/icons/increase.png';
import increasingWhite from '../../images/icons/increasing_white.png';
import conversionsLost from '../../images/icons/conversions_lost.png';
import fire from "../../images/icons/fire.png";
import boost from "../../images/icons/boost.png";
import dollor from "../../images/icons/dollor.png";

// Components
import Header from "./sections/Header";
import LostRevenue from "./sections/LostRevenue";
import SearchTraffic from "./sections/SearchTraffic";
import RevSection from "./sections/RevSection";
import {AuditContext} from "../../App";
import {calcBarWidth, numberWithCommas} from "../../utilityFunctions";

const StyleWrapper = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 7px;
  box-shadow: 0px 0px 1px rgb(0 0 0 / 30%);
  margin-top: 2rem;
`

const PerformaneAudit = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  const data = {
    audit: 70,
    searchTraffic: {
      missed: {
        biddingAndQuality: auditData.performanceAudit.missed.biddingAndQs.value,
        budgetLimitations: auditData.performanceAudit.missed.budgetLimitations.value,
        acquired: auditData.performanceAudit.missed.acquired.value
      },
      tableData: {
        impressions: [numberWithCommas(auditData.performanceAudit.missed.biddingAndQs.impressions), numberWithCommas(auditData.performanceAudit.missed.budgetLimitations.impressions), numberWithCommas(auditData.performanceAudit.missed.acquired.impressions)],
        clicks: [numberWithCommas(auditData.performanceAudit.missed.biddingAndQs.clicks), numberWithCommas(auditData.performanceAudit.missed.budgetLimitations.clicks), numberWithCommas(auditData.performanceAudit.missed.acquired.clicks)],
        conversions: [numberWithCommas(auditData.performanceAudit.missed.biddingAndQs.conv), numberWithCommas(auditData.performanceAudit.missed.budgetLimitations.conv), numberWithCommas(auditData.performanceAudit.missed.acquired.conv)],
        conversionsValue: [numberWithCommas(auditData.performanceAudit.missed.biddingAndQs.convValue), numberWithCommas(auditData.performanceAudit.missed.budgetLimitations.convValue), numberWithCommas(auditData.performanceAudit.missed.acquired.convValue)],
      },
      conversions: {
        keywords: 10,
        segments: 1,
        campaigns: 2,
        accountScore: 5
      },
      wastedSpend: {
        landingPages: {
          sum: 3400,
          num: 2 // the number displayed on the informative paragraph
        },
        keywords: {
          sum: 874,
          num: 5
        },
        searchTerms: {
          sum: 2100,
          num: 8
        },
        automaticPlacements: {
          sum: 4500,
          num: 3
        }
      }
    }
  }

  const conversionsText = [
    {
      sum: auditData.performanceAudit.conversions.keywords + auditData.performanceAudit.conversions.segments,
      firstParagraph: 'Fine tune your keyword and segment bids',
      secondParagraph: `You have ${auditData.performanceAudit.conversions.keywords + auditData.performanceAudit.conversions.segments} keywords and segments (devices, demographics, locations\n` +
        '              & audiences) bid suggestions to increase the account conversions.',
      icon: increase
    },
    {
      sum: auditData.performanceAudit.conversions.campaigns,
      firstParagraph: 'Better allocation of campaign budgets',
      secondParagraph: `You have ${auditData.performanceAudit.conversions.campaigns} campaigns which are consistently losing impressions\n` +
        '                and conversions due to a limited budget',
      icon: conversionsLost
    },
    {
      convType: 'accScore',
      sum: auditData.performanceAudit.conversions.accountWqs < 9 ? auditData.performanceAudit.conversions.accountWqs : 0,
      firstParagraph: 'Improve your overall account quality score',
      secondParagraph: `Your account impression weighted quality score is ${auditData.performanceAudit.conversions.accountWqs}. See quality score\n` +
        '                section for details on areas to focus on improving'
    }
  ]

  const wastedSpendText = [
    {
      sum:  auditData.performanceAudit.wastedSpend.landingPages.cost,
      firstParagraph: 'Landing pages',
      secondParagraph: `Money spent on ${auditData.performanceAudit.wastedSpend.landingPages.number} landing pages without conversions after 150 clicks`,
      icon: fire
    },
    {
      sum: auditData.performanceAudit.wastedSpend.keywords.cost,
      firstParagraph: 'Keywords',
      secondParagraph: `Money spent on ${auditData.performanceAudit.wastedSpend.keywords.number} keywords without conversions after 150 clicks`,
      icon: fire
    },
    {
      sum: auditData.performanceAudit.wastedSpend.searchTerms.cost,
      firstParagraph: 'Search terms',
      secondParagraph: `Money spent on ${auditData.performanceAudit.wastedSpend.searchTerms.number} search terms without conversions after 150 clicks`,
      icon: fire
    },
    {
      sum: auditData.performanceAudit.wastedSpend.automaticPlacements.cost,
      firstParagraph: 'Automatic placements',
      secondParagraph: `Money spent on ${auditData.performanceAudit.wastedSpend.automaticPlacements.number} automatic placements without conversions after 150 clicks`,
      icon: fire
    },
  ]

  const boostPerformanceText = [
    {
      sum: 1,
      heading: 'Eliminate underperforming ads',
      firstParagraph: <span>You have <b>{auditData.performanceAudit.boostPerformance.underPerformingAds.number}</b> underperforming ads that can be replaced or eliminated to further boost your performance.</span>,
      icon: dollor,
      ads: [
        {
          num: auditData.performanceAudit.boostPerformance.underPerformingAds.clicks,
          text: 'More Clicks'
        },
        {
          num: auditData.performanceAudit.boostPerformance.underPerformingAds.conv,
          text: 'More Conversions'
        },
        {
          num: auditData.performanceAudit.boostPerformance.underPerformingAds.convValue,
          text: 'More Revenue',
          currency: auditData.currency
        }
      ]
    },
    {
      sum: auditData.performanceAudit.boostPerformance.networkSettingsCampaigns.number,
      heading: 'Tweak network settings',
      firstParagraph: <span>You have <b>{auditData.performanceAudit.boostPerformance.networkSettingsCampaigns.number}</b> campaigns where the Search Partners traffic is significantly more 
        expensive than Google Search traffic. Consider excluding the Search partners if appropriate.</span>,
      amount: [
        {
          num: auditData.performanceAudit.boostPerformance.networkSettingsCampaigns.firstCpa,
          width: calcBarWidth(auditData.performanceAudit.boostPerformance.networkSettingsCampaigns.firstCpa, auditData.performanceAudit.boostPerformance.networkSettingsCampaigns.secondCpa, 70)[0],
          text: 'Search Partners'
        },
        {
          num: auditData.performanceAudit.boostPerformance.networkSettingsCampaigns.secondCpa,
          width: calcBarWidth(auditData.performanceAudit.boostPerformance.networkSettingsCampaigns.firstCpa, auditData.performanceAudit.boostPerformance.networkSettingsCampaigns.secondCpa, 70)[1],
          text: 'Google Search'
        }
      ]
    },
    {
      sum: auditData.performanceAudit.boostPerformance.locationCampaigns.number,
      heading: 'Restrict the user location',
      firstParagraph: <span>You have <b>{auditData.performanceAudit.boostPerformance.locationCampaigns.number}</b> campaigns where the location of the user causes a
        significant variation in the cost of acquiring them. Consider restricting
        the user location setting if appropriate.</span>,
      amount: [
        {
          num: auditData.performanceAudit.boostPerformance.locationCampaigns.firstCpa,
          width: calcBarWidth(auditData.performanceAudit.boostPerformance.locationCampaigns.firstCpa, auditData.performanceAudit.boostPerformance.locationCampaigns.secondCpa, 70)[0],
          text: 'People interested in targeted location',
          color: auditData.performanceAudit.boostPerformance.locationCampaigns.firstCpa > auditData.performanceAudit.boostPerformance.locationCampaigns.secondCpa ? '#DE4B4B' : '#FFAF24'
        },
        {
          num: auditData.performanceAudit.boostPerformance.locationCampaigns.secondCpa,
          width: calcBarWidth(auditData.performanceAudit.boostPerformance.locationCampaigns.firstCpa, auditData.performanceAudit.boostPerformance.locationCampaigns.secondCpa, 70)[1],
          text: 'People in target location',
          color: auditData.performanceAudit.boostPerformance.locationCampaigns.firstCpa > auditData.performanceAudit.boostPerformance.locationCampaigns.secondCpa ? '#FFAF24' : '#DE4B4B'
        }
      ]
    }
  ]

  function shouldRender() {
    let shouldRender = false;

    wastedSpendText.map(item => {
      if (item.sum !== 0) {
        shouldRender = true;
      }
    })

    return shouldRender;
  }

  function shouldRenderBoost() {
    let shouldRender = false;

    boostPerformanceText[0].ads.map(ad => {
      if (ad.num !== 0) {
        shouldRender = true;
      }
    })

    return shouldRender;
  }

  function shouldRenderConv() {
    let shouldRender = false;

    conversionsText.map(conv => {
      if (conv.sum !== 0) {
        shouldRender = true;
      }
    })

    return shouldRender
  }

  const totalConversions = numberWithCommas(auditData.performanceAudit.missed.biddingAndQs.conv + auditData.performanceAudit.missed.budgetLimitations.conv);
  const totalClicks = numberWithCommas(auditData.performanceAudit.missed.biddingAndQs.clicks + auditData.performanceAudit.missed.budgetLimitations.clicks);

  return (
    <StyleWrapper>
      <Header percentage={auditData.auditScore.performanceAudit.score} heading={'Performance Audit'}/>
      <LostRevenue icon={lostRevenue} text={"Lost Revenue"} />
      <SearchTraffic searchTraffic={data.searchTraffic} />
      {
        shouldRenderConv() ? <RevSection data={conversionsText} title={`You have the potential to gain an additional ${totalConversions === '0' ? totalClicks + ' clicks' : totalConversions + ' conversions'} by taking the below actions:`} /> : ''
      }

      {
        wastedSpendText.length !== 0 && shouldRender() ? <div>
          <LostRevenue icon={wastedSpend} text={"Wasted Spend"} />
          <RevSection currency={auditData.currency} data={wastedSpendText} title={'Your account is burning money by not converting your site visitors into customers'} />
        </div> :
          ''
      }

      {
        shouldRenderBoost() ? <div>
          <LostRevenue icon={boost} text={"Potential to boost performance"} />
          <RevSection image={increasingWhite} data={boostPerformanceText} title={"You can further boost your gains by making the following changes: "} type={"boostPerformance"} />
        </div> :
          ''
        }
    </StyleWrapper>
  )
}

export default PerformaneAudit;