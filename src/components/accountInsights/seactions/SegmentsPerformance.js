import React, {useContext} from 'react';
import styled from 'styled-components';
import GroupedBarChart from "../../../ui/charts/GroupedBarChart";
import {AuditContext} from "../../../App"

const Section = styled.div`
  margin-top: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid #D9E1EB;
  
  @media only screen and (max-width: 740px) {
    .labels {
      width: 80rem;
    }
    
    .legend {
      justify-content: flex-start;
    }
    
    .chart-wrapper {
      overflow-x: auto;
    }
  }
`

const Head = styled.div`
  h3 {
    line-height: 26px
  }
  
  p {
    font-size: 17px;
    line-height: 28px;
  }
`

const Heading = styled.p`
  color: '#3C4858';
  font-size: 16px;
  font-family: 'NeutrifPro-Medium';
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  
  p {
    font-size: 14px;
    color: #626E7C;
    font-family: 'NeutrifPro-Medium';
    width: 57px;
    text-align: center;
  }
`

const Legend = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  flex-wrap: wrap;
  
  p {
    font-size: 14px;
    color: #626E7C;
    display: flex;
    margin-right: 2rem;
  }
`

const Box = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 10px;
`

const ChartWrapper = styled.div`
  
`

const SegmentsPerformance = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  const calculatePercentage = (figures) => {
    if (figures.length === 0) return;

    let percentages = [];
    const largestValue = Math.max(...figures);

    figures.forEach(figure => {
      percentages.push(Math.round((figure / largestValue) * 100))
    })

    percentages.push(figures);

    return percentages;
  }

  const objectIsEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object
  }

  const JSONData = {
    devices: auditData.accountInsights.segments.devices && !objectIsEmpty(auditData.accountInsights.segments.devices) ? [
      calculatePercentage([
        auditData.accountInsights.segments.devices.mobile.clicks,
        auditData.accountInsights.segments.devices.tablet.clicks,
        auditData.accountInsights.segments.devices.desktop.clicks]),
      calculatePercentage([
        auditData.accountInsights.segments.devices.mobile.impressions,
        auditData.accountInsights.segments.devices.tablet.impressions,
        auditData.accountInsights.segments.devices.desktop.impressions]),
      calculatePercentage([
        auditData.accountInsights.segments.devices.mobile.ctr,
        auditData.accountInsights.segments.devices.tablet.ctr,
        auditData.accountInsights.segments.devices.desktop.ctr]),
      calculatePercentage([
        auditData.accountInsights.segments.devices.mobile.avgCpc,
        auditData.accountInsights.segments.devices.tablet.avgCpc,
        auditData.accountInsights.segments.devices.desktop.avgCpc]),
      calculatePercentage([
        auditData.accountInsights.segments.devices.mobile.cost,
        auditData.accountInsights.segments.devices.tablet.cost,
        auditData.accountInsights.segments.devices.desktop.cost]),
      calculatePercentage([
        auditData.accountInsights.segments.devices.mobile.conversions,
        auditData.accountInsights.segments.devices.tablet.conversions,
        auditData.accountInsights.segments.devices.desktop.conversions]),
      calculatePercentage([
        auditData.accountInsights.segments.devices.mobile.convRate,
        auditData.accountInsights.segments.devices.tablet.convRate,
        auditData.accountInsights.segments.devices.desktop.convRate]),
      calculatePercentage([
        auditData.accountInsights.segments.devices.mobile.costPerConv,
        auditData.accountInsights.segments.devices.tablet.costPerConv,
        auditData.accountInsights.segments.devices.desktop.costPerConv]),
      calculatePercentage([
        auditData.accountInsights.segments.devices.mobile.convValue,
        auditData.accountInsights.segments.devices.tablet.convValue,
        auditData.accountInsights.segments.devices.desktop.convValue]),
      calculatePercentage([
        auditData.accountInsights.segments.devices.mobile.convValuePerCost,
        auditData.accountInsights.segments.devices.tablet.convValuePerCost,
        auditData.accountInsights.segments.devices.desktop.convValuePerCost]),
      calculatePercentage([
        auditData.accountInsights.segments.devices.mobile.valuePerConv,
        auditData.accountInsights.segments.devices.tablet.valuePerConv,
        auditData.accountInsights.segments.devices.desktop.valuePerConv]),
    ] : [],
    locations: auditData.accountInsights.segments.locations && !objectIsEmpty(auditData.accountInsights.segments.locations) ? [
      calculatePercentage([
        auditData.accountInsights.segments.locations.target.clicks,
        auditData.accountInsights.segments.locations.interest ? auditData.accountInsights.segments.locations.interest.clicks : 0]),
      calculatePercentage([
        auditData.accountInsights.segments.locations.target.impressions,
        auditData.accountInsights.segments.locations.interest ? auditData.accountInsights.segments.locations.interest.impressions : 0]),
      calculatePercentage([
        auditData.accountInsights.segments.locations.target.ctr,
        auditData.accountInsights.segments.locations.interest ? auditData.accountInsights.segments.locations.interest.ctr : 0]),
      calculatePercentage([
        auditData.accountInsights.segments.locations.target.avgCpc,
        auditData.accountInsights.segments.locations.interest ? auditData.accountInsights.segments.locations.interest.avgCpc : 0]),
      calculatePercentage([
        auditData.accountInsights.segments.locations.target.cost,
        auditData.accountInsights.segments.locations.interest ? auditData.accountInsights.segments.locations.interest.cost : 0]),
      calculatePercentage([
        auditData.accountInsights.segments.locations.target.conversions,
        auditData.accountInsights.segments.locations.interest ? auditData.accountInsights.segments.locations.interest.conversions : 0]),
      calculatePercentage([
        auditData.accountInsights.segments.locations.target.convRate,
        auditData.accountInsights.segments.locations.interest ? auditData.accountInsights.segments.locations.interest.convRate : 0]),
      calculatePercentage([
        auditData.accountInsights.segments.locations.target.costPerConv,
        auditData.accountInsights.segments.locations.interest ? auditData.accountInsights.segments.locations.interest.costPerConv : 0]),
      calculatePercentage([
        auditData.accountInsights.segments.locations.target.convValue,
        auditData.accountInsights.segments.locations.interest ? auditData.accountInsights.segments.locations.interest.convValue : 0]),
      calculatePercentage([
        auditData.accountInsights.segments.locations.target.convValuePerCost,
        auditData.accountInsights.segments.locations.interest ? auditData.accountInsights.segments.locations.interest.convValuePerCost : 0]),
      calculatePercentage([
        auditData.accountInsights.segments.locations.target.valuePerConv,
        auditData.accountInsights.segments.locations.interest ? auditData.accountInsights.segments.locations.interest.valuePerConv : 0]),
    ] : [],
    age: auditData.accountInsights.segments.ages && !objectIsEmpty(auditData.accountInsights.segments.ages) ? [
      calculatePercentage([
        auditData.accountInsights.segments.ages._18_24.clicks,
        auditData.accountInsights.segments.ages._25_34.clicks,
        auditData.accountInsights.segments.ages._35_44.clicks,
        auditData.accountInsights.segments.ages._45_54.clicks,
        auditData.accountInsights.segments.ages._55_64.clicks,
        auditData.accountInsights.segments.ages._65_plus.clicks,
        auditData.accountInsights.segments.ages.unknown.clicks,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.ages._18_24.impressions,
        auditData.accountInsights.segments.ages._25_34.impressions,
        auditData.accountInsights.segments.ages._35_44.impressions,
        auditData.accountInsights.segments.ages._45_54.impressions,
        auditData.accountInsights.segments.ages._55_64.impressions,
        auditData.accountInsights.segments.ages._65_plus.impressions,
        auditData.accountInsights.segments.ages.unknown.impressions,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.ages._18_24.ctr,
        auditData.accountInsights.segments.ages._25_34.ctr,
        auditData.accountInsights.segments.ages._35_44.ctr,
        auditData.accountInsights.segments.ages._45_54.ctr,
        auditData.accountInsights.segments.ages._55_64.ctr,
        auditData.accountInsights.segments.ages._65_plus.ctr,
        auditData.accountInsights.segments.ages.unknown.ctr,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.ages._18_24.avgCpc,
        auditData.accountInsights.segments.ages._25_34.avgCpc,
        auditData.accountInsights.segments.ages._35_44.avgCpc,
        auditData.accountInsights.segments.ages._45_54.avgCpc,
        auditData.accountInsights.segments.ages._55_64.avgCpc,
        auditData.accountInsights.segments.ages._65_plus.avgCpc,
        auditData.accountInsights.segments.ages.unknown.avgCpc,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.ages._18_24.cost,
        auditData.accountInsights.segments.ages._25_34.cost,
        auditData.accountInsights.segments.ages._35_44.cost,
        auditData.accountInsights.segments.ages._45_54.cost,
        auditData.accountInsights.segments.ages._55_64.cost,
        auditData.accountInsights.segments.ages._65_plus.cost,
        auditData.accountInsights.segments.ages.unknown.cost,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.ages._18_24.conversions,
        auditData.accountInsights.segments.ages._25_34.conversions,
        auditData.accountInsights.segments.ages._35_44.conversions,
        auditData.accountInsights.segments.ages._45_54.conversions,
        auditData.accountInsights.segments.ages._55_64.conversions,
        auditData.accountInsights.segments.ages._65_plus.conversions,
        auditData.accountInsights.segments.ages.unknown.conversions,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.ages._18_24.convRate,
        auditData.accountInsights.segments.ages._25_34.convRate,
        auditData.accountInsights.segments.ages._35_44.convRate,
        auditData.accountInsights.segments.ages._45_54.convRate,
        auditData.accountInsights.segments.ages._55_64.convRate,
        auditData.accountInsights.segments.ages._65_plus.convRate,
        auditData.accountInsights.segments.ages.unknown.convRate,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.ages._18_24.costPerConv,
        auditData.accountInsights.segments.ages._25_34.costPerConv,
        auditData.accountInsights.segments.ages._35_44.costPerConv,
        auditData.accountInsights.segments.ages._45_54.costPerConv,
        auditData.accountInsights.segments.ages._55_64.costPerConv,
        auditData.accountInsights.segments.ages._65_plus.costPerConv,
        auditData.accountInsights.segments.ages.unknown.costPerConv,
      ]),
    ] : [],
    gender: auditData.accountInsights.segments.genders && !objectIsEmpty(auditData.accountInsights.segments.genders) ? [
      calculatePercentage([
        auditData.accountInsights.segments.genders.male.clicks,
        auditData.accountInsights.segments.genders.female.clicks,
        auditData.accountInsights.segments.genders.unknown.clicks,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.genders.male.impressions,
        auditData.accountInsights.segments.genders.female.impressions,
        auditData.accountInsights.segments.genders.unknown.impressions,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.genders.male.ctr,
        auditData.accountInsights.segments.genders.female.ctr,
        auditData.accountInsights.segments.genders.unknown.ctr,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.genders.male.avgCpc,
        auditData.accountInsights.segments.genders.female.avgCpc,
        auditData.accountInsights.segments.genders.unknown.avgCpc,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.genders.male.cost,
        auditData.accountInsights.segments.genders.female.cost,
        auditData.accountInsights.segments.genders.unknown.cost,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.genders.male.conversions,
        auditData.accountInsights.segments.genders.female.conversions,
        auditData.accountInsights.segments.genders.unknown.conversions,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.genders.male.convRate,
        auditData.accountInsights.segments.genders.female.convRate,
        auditData.accountInsights.segments.genders.unknown.convRate,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.genders.male.costPerConv,
        auditData.accountInsights.segments.genders.female.costPerConv,
        auditData.accountInsights.segments.genders.unknown.costPerConv,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.genders.male.convValue,
        auditData.accountInsights.segments.genders.female.convValue,
        auditData.accountInsights.segments.genders.unknown.convValue,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.genders.male.convValuePerCost,
        auditData.accountInsights.segments.genders.female.convValuePerCost,
        auditData.accountInsights.segments.genders.unknown.convValuePerCost,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.genders.male.valuePerConv,
        auditData.accountInsights.segments.genders.female.valuePerConv,
        auditData.accountInsights.segments.genders.unknown.valuePerConv,
      ]),
    ] : [],
    parental: auditData.accountInsights.segments.parental && !objectIsEmpty(auditData.accountInsights.segments.parental) ? [
      calculatePercentage([
        auditData.accountInsights.segments.parental.parent.clicks,
        auditData.accountInsights.segments.parental.notParent.clicks,
        auditData.accountInsights.segments.parental.unknown.clicks,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.parental.parent.impressions,
        auditData.accountInsights.segments.parental.notParent.impressions,
        auditData.accountInsights.segments.parental.unknown.impressions,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.parental.parent.ctr,
        auditData.accountInsights.segments.parental.notParent.ctr,
        auditData.accountInsights.segments.parental.unknown.ctr,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.parental.parent.avgCpc,
        auditData.accountInsights.segments.parental.notParent.avgCpc,
        auditData.accountInsights.segments.parental.unknown.avgCpc,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.parental.parent.cost,
        auditData.accountInsights.segments.parental.notParent.cost,
        auditData.accountInsights.segments.parental.unknown.cost,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.parental.parent.conversions,
        auditData.accountInsights.segments.parental.notParent.conversions,
        auditData.accountInsights.segments.parental.unknown.conversions,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.parental.parent.convRate,
        auditData.accountInsights.segments.parental.notParent.convRate,
        auditData.accountInsights.segments.parental.unknown.convRate,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.parental.parent.costPerConv,
        auditData.accountInsights.segments.parental.notParent.costPerConv,
        auditData.accountInsights.segments.parental.unknown.costPerConv,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.parental.parent.convValue,
        auditData.accountInsights.segments.parental.notParent.convValue,
        auditData.accountInsights.segments.parental.unknown.convValue,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.parental.parent.convValuePerCost,
        auditData.accountInsights.segments.parental.notParent.convValuePerCost,
        auditData.accountInsights.segments.parental.unknown.convValuePerCost,
      ]),
      calculatePercentage([
        auditData.accountInsights.segments.parental.parent.valuePerConv,
        auditData.accountInsights.segments.parental.notParent.valuePerConv,
        auditData.accountInsights.segments.parental.unknown.valuePerConv,
      ]),
    ] : []
  }

  return (
    <Section>
      <Head>
        <h3>Segments Performance</h3>
        <p>Identifying the best performing segments can be helpful when refining your targeting or applying bid adjustments to improve overall results. </p>
      </Head>

      {
        auditData.accountInsights.segments.devices && !objectIsEmpty(auditData.accountInsights.segments.devices) ? <div>
          <Heading>Device</Heading>
          <ChartWrapper className="chart-wrapper">
            <GroupedBarChart data={JSONData.devices} colors={['#2A4BC2', '#4C81E5', '#C0CCDA']} barWidth={16} />
            <Labels className="labels">
              <p>Clicks</p>
              <p>Impr.</p>
              <p>CTR</p>
              <p>Avg. CPC</p>
              <p>Cost</p>
              <p>Conv.</p>
              <p>Conv. rate</p>
              <p>Cost/Conv</p>
              <p>Conv. value</p>
              <p>Conv. value <br/>/Cost</p>
              <p>Value/ <br/>Conv</p>
            </Labels>
          </ChartWrapper>
          <Legend className="legend">
            <p><Box style={{background: '#2A4BC2'}} />Mobile</p>
            <p><Box style={{background: '#4C81E5'}} />Tablets</p>
            <p><Box style={{background: '#C0CCDA'}} />Computers</p>
          </Legend>
        </div> : <></>
      }

      {
        auditData.accountInsights.segments.locations && !objectIsEmpty(auditData.accountInsights.segments.locations) ? <div>
          <Heading>User Location</Heading>
          <ChartWrapper className="chart-wrapper">
            <GroupedBarChart data={JSONData.locations} colors={['#FFAF24', '#FFE2AF']} barWidth={24} />
            <Labels className="labels">
              <p>Clicks</p>
              <p>Impr.</p>
              <p>CTR</p>
              <p>Avg. CPC</p>
              <p>Cost</p>
              <p>Conv.</p>
              <p>Conv. rate</p>
              <p>Cost/Conv</p>
              <p>Conv. value</p>
              <p>Conv. value <br/>/Cost</p>
              <p>Value/ <br/>Conv</p>
            </Labels>
          </ChartWrapper>
          <Legend className="legend">
            <p><Box style={{background: '#FFAF24'}} />People in your targeted location</p>
            <p><Box style={{background: '#FFE2AF'}} />People outside your location but show interest in your targeted location</p>
          </Legend>
        </div> : <></>
      }

      {
        auditData.accountInsights.segments.ages && !objectIsEmpty(auditData.accountInsights.segments.ages) ? <div>
          <Heading>Age</Heading>
          <ChartWrapper className="chart-wrapper">
            <GroupedBarChart data={JSONData.age} colors={['#36FB86', '#35D375', '#30BD69', '#1A733E', '#0F3920', '#092213', '#C0CCDA']} barWidth={12} />
            <Labels className="labels">
              <p>Clicks</p>
              <p>Impr.</p>
              <p>CTR</p>
              <p>Avg. CPC</p>
              <p>Cost</p>
              <p>Conv.</p>
              <p>Conv. rate</p>
              <p>Cost/Conv</p>
            </Labels>
          </ChartWrapper>
          <Legend className="legend">
            <p><Box style={{background: '#36FB86'}} />18-24</p>
            <p><Box style={{background: '#35D375'}} />25-34</p>
            <p><Box style={{background: '#30BD69'}} />35-44</p>
            <p><Box style={{background: '#1A733E'}} />45-54</p>
            <p><Box style={{background: '#0F3920'}} />55-64</p>
            <p><Box style={{background: '#092213'}} />65+</p>
            <p><Box style={{background: '#C0CCDA'}} />Unknown</p>
          </Legend>
        </div> : <></>
      }

      {
        auditData.accountInsights.segments.genders && !objectIsEmpty(auditData.accountInsights.segments.genders) ? <div>
          <Heading>Gender</Heading>
          <ChartWrapper className="chart-wrapper">
            <GroupedBarChart data={JSONData.gender} colors={['#2A4BC2', '#4C81E5', '#C0CCDA']} barWidth={24} />
            <Labels className="labels">
              <p>Clicks</p>
              <p>Impr.</p>
              <p>CTR</p>
              <p>Avg. CPC</p>
              <p>Cost</p>
              <p>Conv.</p>
              <p>Conv. rate</p>
              <p>Cost/Conv</p>
              <p>Conv. value</p>
              <p>Conv. value <br/>/Cost</p>
              <p>Value/ <br/>Conv</p>
            </Labels>
          </ChartWrapper>
          <Legend className="legend">
            <p><Box style={{background: '#2A4BC2'}} />Male</p>
            <p><Box style={{background: '#4C81E5'}} />Female</p>
            <p><Box style={{background: '#C0CCDA'}} />Unknown</p>
          </Legend>
        </div> : <></>
      }

      {
        auditData.accountInsights.segments.parental && !objectIsEmpty(auditData.accountInsights.segments.parental) ? <div>
          <Heading>Parental (Display campaigns only)</Heading>
          <ChartWrapper className="chart-wrapper">
            <GroupedBarChart data={JSONData.parental} colors={['#2A9153', '#30BD69', '#C0CCDA']} barWidth={24} />
            <Labels className="labels">
              <p>Clicks</p>
              <p>Impr.</p>
              <p>CTR</p>
              <p>Avg. CPC</p>
              <p>Cost</p>
              <p>Conv.</p>
              <p>Conv. rate</p>
              <p>Cost/Conv</p>
              <p>Conv. value</p>
              <p>Conv. value <br/>/Cost</p>
              <p>Value/ <br/>Conv</p>
            </Labels>
          </ChartWrapper>
          <Legend className="legend">
            <p><Box style={{background: '#2A9153'}} />Parent</p>
            <p><Box style={{background: '#30BD69'}} />Not Parent</p>
            <p><Box style={{background: '#C0CCDA'}} />Unknown</p>
          </Legend>
        </div> : <></>
      }

    </Section>
  );
}

export default SegmentsPerformance;

