import React, {useContext} from 'react';
import styled from 'styled-components';

// Components
import Bar from '../../../ui/charts/Bar';
import {AuditContext} from "../../../App"
import {calcBarWidth} from "../../../utilityFunctions";

const Section = styled.div`
  margin-top: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid #D9E1EB;
  
  h3 {
    line-height: 28px;
  }
  
  @media only screen and (max-width: 740px) {
    .item {
      width: 100%;
    }
    
    .legend {
      flex-wrap: wrap;      
      justify-content: start;
    }
    
    .legend p {
      margin-bottom: 1rem;
    }
  }
`

const Sub = styled.div`
  font-size: 17px;
  line-height: 28px;
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Item = styled.div`
  width: 45%;
  
  .bar {
    margin-top: 1rem;
  }
`

const BarWrap = styled.div`
  margin-top: 1rem;
`

const Title = styled.p`
  font-size: 16px;
  font-family: 'NeutrifPro-Medium';
`

const Legend = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  
  p {
    font-size: 14px;
    color: #626E7C;
    display: flex;
    margin-right: 1rem;
  }
`

const Box = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 10px;
`

const Analysis = () => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);



  return (
    <Section>
      <h3>Cost vs Conversion Analysis</h3>
      <Sub>If a significant portion of your budget is spent on keywords that don’t convert, you may want to revise your account structure to improve their conversion rate.</Sub>
      <Wrapper>
        <Item className="item">
          <Title>Keyword count</Title>
          <BarWrap>
            <Bar className="bar" figure={auditData.accountInsights.costVsConvAnalysis.keywordsWithConv.number} width={calcBarWidth(auditData.accountInsights.costVsConvAnalysis.keywordsWithConv.number, auditData.accountInsights.costVsConvAnalysis.keywordsWithoutConv.number)[0] < 15 ? 20 : calcBarWidth(auditData.accountInsights.costVsConvAnalysis.keywordsWithConv.number, auditData.accountInsights.costVsConvAnalysis.keywordsWithoutConv.number)[0]} color={'#30BD69'} />
          </BarWrap>
          <BarWrap>
            <Bar className="bar" figure={auditData.accountInsights.costVsConvAnalysis.keywordsWithoutConv.number} width={calcBarWidth(auditData.accountInsights.costVsConvAnalysis.keywordsWithConv.number, auditData.accountInsights.costVsConvAnalysis.keywordsWithoutConv.number)[1] < 15 ? 20 : calcBarWidth(auditData.accountInsights.costVsConvAnalysis.keywordsWithConv.number, auditData.accountInsights.costVsConvAnalysis.keywordsWithoutConv.number)[1]} color={'#DE4B4B'} />
          </BarWrap>

        </Item>
        <Item className="item">
          <Title>Keyword spend</Title>
          <BarWrap>
            <Bar className="bar" figure={auditData.accountInsights.costVsConvAnalysis.keywordsWithConv.cost} width={calcBarWidth(auditData.accountInsights.costVsConvAnalysis.keywordsWithConv.cost, auditData.accountInsights.costVsConvAnalysis.keywordsWithoutConv.cost)[0] < 15 ? 20 : calcBarWidth(auditData.accountInsights.costVsConvAnalysis.keywordsWithConv.cost, auditData.accountInsights.costVsConvAnalysis.keywordsWithoutConv.cost)[0]} color={'#30BD69'} currency={auditData.currency} />
          </BarWrap>
          <BarWrap>
            <Bar className="bar" figure={auditData.accountInsights.costVsConvAnalysis.keywordsWithoutConv.cost} width={calcBarWidth(auditData.accountInsights.costVsConvAnalysis.keywordsWithConv.cost, auditData.accountInsights.costVsConvAnalysis.keywordsWithoutConv.cost)[1] < 15 ? 20 : calcBarWidth(auditData.accountInsights.costVsConvAnalysis.keywordsWithConv.cost, auditData.accountInsights.costVsConvAnalysis.keywordsWithoutConv.cost)[1]} color={'#DE4B4B'} currency={auditData.currency} />
          </BarWrap>
        </Item>
      </Wrapper>
      <Legend className="legend">
        <p><Box style={{background: '#30BD69'}} />Keywords with conversion</p>
        <p><Box style={{background: '#DE4B4B'}} />Keywords without conversion</p>
      </Legend>
    </Section>
  );
}

export default Analysis;