import React, {useContext} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import PieChart from "../../../ui/charts/PieChart";
import {AuditContext} from "../../../App";
import {kFormatter} from "../../../utilityFunctions";

const Section = styled.div`
  margin-top: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid #D9E1EB;
  
  @media only screen and (max-width: 740px) {
    .item {
      width: 100%;
      margin-bottom: 1rem;
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

const Inner = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  
  .heading {
    text-align: center;
    margin-bottom: 2rem;
    font-family: 'NeutrifPro-Medium';
    color: #3C4858;
  }
`

const Item = styled.div`
  width: 50%;
`

const ChartWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
`

const Legend = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  
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

const calculatePercentage = (figures) => {
  let sum = 0;
  let percentages = [];

  // calculate the sum
  figures.forEach(figure => sum += figure);

  figures.forEach(figure => {
    percentages.push(Math.round((figure / sum) * 100));
  })

  return percentages
}

const AdTestingCoverage = ({adTestingCoverage}) => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  const numberAdsData = calculatePercentage([
    adTestingCoverage.numberAds.tested,
    adTestingCoverage.numberAds.notTested,
  ]);

  const adsSpendData = calculatePercentage([
    adTestingCoverage.adsSpend.tested,
    adTestingCoverage.adsSpend.notTested,
  ]);

  return (
    <Section>
      <Head>
        <h3>Ad Testing</h3>
        <p>AB testing should be a crucial part of your PPC routine. It means you compare the performance of different ads within the same ad group and pause loser ads to boost your results. If your ad group has only one ad, its ad can not be tested and, hence, you may be investing your budget in low-quality ads.</p>
      </Head>
      <Inner>
        <Item className="item">
          <p className="heading">Number of ads</p>
          <ChartWrapper>
            <PieChart dataArr={[
              {value: numberAdsData[0], color: '#2A4BC2', number:  adTestingCoverage.numberAds.tested },
              {value: numberAdsData[1], color: '#DE4C4B', number:  adTestingCoverage.numberAds.notTested }
            ]} showNumberPercent={true} />
          </ChartWrapper>
          <Legend>
            <p><Box style={{background: '#2A4BC2'}} />Tested</p>
            <p><Box style={{background: '#DE4C4B'}} />Not Tested</p>
          </Legend>
        </Item>
        <Item className="item">
          <p className="heading">Ads spend</p>
          <ChartWrapper>
            <PieChart dataArr={[
              {value: adsSpendData[0], color: '#2A4BC2', number: auditData.currency + kFormatter(adTestingCoverage.adsSpend.tested) },
              {value: adsSpendData[1], color: '#DE4C4B', number: auditData.currency + kFormatter(adTestingCoverage.adsSpend.notTested) }
            ]} showNumberPercent={true} />
          </ChartWrapper>
          <Legend>
            <p><Box style={{background: '#2A4BC2'}} />Tested</p>
            <p><Box style={{background: '#DE4C4B'}} />Not Tested</p>
          </Legend>
        </Item>
      </Inner>
    </Section>
  );
}

AdTestingCoverage.propTypes = {
  adTestingCoverage: PropTypes.object
}

export default AdTestingCoverage;