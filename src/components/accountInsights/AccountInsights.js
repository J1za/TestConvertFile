import React, {useContext} from 'react';
import styled from 'styled-components';

// Components
import Header from "../performaneAudit/sections/Header";
import SearchDisplayPerformance from "./seactions/SearchDisplayPerformance";
import Analysis from "./seactions/Analysis";
import ActiveKeywordsMatchDistribution from "./seactions/ActiveKeywordsMatchDistribution";
import NegativeKeywordsDistribution from "./seactions/NegativeKeywordsDistribution";
import AdExtensionsBreakdown from "./seactions/AdExtensionsBreakdown";
import CampaignUsage from "./seactions/CampaignUsage";
import AdTestingCoverage from "./seactions/AdTestingCoverage";
import RSA from "./seactions/RSA";
import SegmentsPerformance from "./seactions/SegmentsPerformance";
import {AuditContext} from "../../App";

const StyleWrapper = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 7px;
  box-shadow: 0px 0px 1px rgb(0 0 0 / 30%);
  margin-top: 2rem;
`

const AccountInsights = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  const activeKeywordMatchDist = {
    exact: {
      keywords: auditData.accountInsights.keywordsMatchTypeDistribution.exact.keywordsCount,
      keywordsPercent: auditData.accountInsights.keywordsMatchTypeDistribution.exact.keywordsPercentage,
      clicks: auditData.accountInsights.keywordsMatchTypeDistribution.exact.clicks,
      impr: auditData.accountInsights.keywordsMatchTypeDistribution.exact.impressions,
      ctr: auditData.accountInsights.keywordsMatchTypeDistribution.exact.ctr.toFixed(2),
      avgCpc: auditData.accountInsights.keywordsMatchTypeDistribution.exact.avgCpc.toFixed(2),
      cost: auditData.accountInsights.keywordsMatchTypeDistribution.exact.cost,
      conv: auditData.accountInsights.keywordsMatchTypeDistribution.exact.conversions,
      costPerConv: auditData.accountInsights.keywordsMatchTypeDistribution.exact.costPerConv.toFixed(2),
      convRate: auditData.accountInsights.keywordsMatchTypeDistribution.exact.convRate.toFixed(2),
      convValue: auditData.accountInsights.keywordsMatchTypeDistribution.exact.convValue,
      convValueCost: auditData.accountInsights.keywordsMatchTypeDistribution.exact.convValuePerCost.toFixed(2)
    },
    phrase: auditData.accountInsights.keywordsMatchTypeDistribution.phrase ? {
      keywords: auditData.accountInsights.keywordsMatchTypeDistribution.phrase.keywordsCount,
      keywordsPercent: auditData.accountInsights.keywordsMatchTypeDistribution.phrase.keywordsPercentage,
      clicks: auditData.accountInsights.keywordsMatchTypeDistribution.phrase.clicks,
      impr: auditData.accountInsights.keywordsMatchTypeDistribution.phrase.impressions,
      ctr: auditData.accountInsights.keywordsMatchTypeDistribution.phrase.ctr.toFixed(2),
      avgCpc: auditData.accountInsights.keywordsMatchTypeDistribution.phrase.avgCpc.toFixed(2),
      cost: auditData.accountInsights.keywordsMatchTypeDistribution.phrase.cost,
      conv: auditData.accountInsights.keywordsMatchTypeDistribution.phrase.conversions,
      costPerConv: auditData.accountInsights.keywordsMatchTypeDistribution.phrase.costPerConv.toFixed(2),
      convRate: auditData.accountInsights.keywordsMatchTypeDistribution.phrase.convRate.toFixed(2),
      convValue: auditData.accountInsights.keywordsMatchTypeDistribution.phrase.convValue,
      convValueCost: auditData.accountInsights.keywordsMatchTypeDistribution.phrase.convValuePerCost.toFixed(2)
    } : {},
    broad: {
      keywords: auditData.accountInsights.keywordsMatchTypeDistribution.broad.keywordsCount,
      keywordsPercent: auditData.accountInsights.keywordsMatchTypeDistribution.broad.keywordsPercentage,
      clicks: auditData.accountInsights.keywordsMatchTypeDistribution.broad.clicks,
      impr: auditData.accountInsights.keywordsMatchTypeDistribution.broad.impressions,
      ctr: auditData.accountInsights.keywordsMatchTypeDistribution.broad.ctr.toFixed(2),
      avgCpc: auditData.accountInsights.keywordsMatchTypeDistribution.broad.avgCpc.toFixed(2),
      cost: auditData.accountInsights.keywordsMatchTypeDistribution.broad.cost,
      conv: auditData.accountInsights.keywordsMatchTypeDistribution.broad.conversions,
      costPerConv: auditData.accountInsights.keywordsMatchTypeDistribution.broad.costPerConv.toFixed(2),
      convRate: auditData.accountInsights.keywordsMatchTypeDistribution.broad.convRate.toFixed(2),
      convValue: auditData.accountInsights.keywordsMatchTypeDistribution.broad.convValue,
      convValueCost: auditData.accountInsights.keywordsMatchTypeDistribution.broad.convValuePerCost.toFixed(2)
    },
    broadPlus: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus ? {
      keywords: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus.keywordsCount,
      keywordsPercent: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus.keywordsPercentage,
      clicks: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus.clicks,
      impr: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus.impressions,
      ctr: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus.ctr.toFixed(2),
      avgCpc: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus.avgCpc.toFixed(2),
      cost: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus.cost,
      conv: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus.conversions,
      costPerConv: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus.costPerConv.toFixed(2),
      convRate: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus.convRate.toFixed(2),
      convValue: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus.convValue,
      convValueCost: auditData.accountInsights.keywordsMatchTypeDistribution.broadPlus.convValuePerCost.toFixed(2)
    } : {},
    adTestingCoverage: {
      numberAds: {
        tested: auditData.accountInsights.adTesting.ads ? auditData.accountInsights.adTesting.ads.tested : 0,
        notTested: auditData.accountInsights.adTesting.ads ? auditData.accountInsights.adTesting.ads.notTested : 0
      },
      adsSpend: {
        tested: auditData.accountInsights.adTesting.ads ? auditData.accountInsights.adTesting.spend.tested : 0,
        notTested: auditData.accountInsights.adTesting.ads ? auditData.accountInsights.adTesting.spend.notTested : 0
      }
    }
  }

  return (
    <StyleWrapper>
      <Header heading={'Account Insights'} />
      <SearchDisplayPerformance />
      <Analysis />
      <ActiveKeywordsMatchDistribution currency={auditData.currency} activeKeywordMatchDist={activeKeywordMatchDist} />
      <NegativeKeywordsDistribution />
      <AdExtensionsBreakdown />
      <CampaignUsage />
      <AdTestingCoverage adTestingCoverage={activeKeywordMatchDist.adTestingCoverage} />
      <RSA />
      <SegmentsPerformance />
    </StyleWrapper>
  )
}

export default AccountInsights;