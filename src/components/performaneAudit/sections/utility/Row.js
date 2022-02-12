import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import ScalaChart from "../../../../ui/charts/ScalaChart";
import NumberIndicator from "../../../auditScore/sections/utility/NumberIndicator";
import BarText from "./BarText";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid #D9E1EB;
  padding-top: 1rem;
  padding-bottom: 1rem;
  
  p {
    font-size: 20px;
  }
  
  @media only screen and (max-width: 740px) {
    .boost-p {
      width: 100% !important;
    }
  }
`

const ItemEl = styled.div`
  width: 50%;
`

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  
  img {
    margin-right: 1rem;
    width: 88px;
  }
  
  h2 {
    font-size: 32px;
    color: #001738;
  }
  
  p {
    font-size: 14px;
    color: #7E8894;
  }
  
  .bars {
    width: 100%;
  }
`

const FindingNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  flex-wrap: wrap;
  
  p {
    font-size: 14px;
  }
  
  h2 {
    font-size: 30px;
  }
`

const BoostH = styled.div`
  font-size: 17px;
  margin-bottom: 1rem;
  color: #182B49;
`

const BoostP = styled.div`
  font-size: 15px;
  color: #626E7C;
  width: 60%;
  font-family: 'NeutrifPro-RegularItalic';
`

const LabelHead = styled.p`
  color: #001738 !important;
  font-size: 16px;
  font-family: 'NeutrifPro-Medium';
`

const alternatingColors = ['#DE4B4B', '#FFAF24'];

const Row = ({firstParagraph, secondParagraph, icon, sum, currencyToAppend, head, ads, type, amount, image}) => {

  const renderRow = () => {
    if (type !== undefined) {
      return (
        <Item className="item">
          <ItemEl className="item-el">
            <BoostH>{head}</BoostH>
            <BoostP className="boost-p">{firstParagraph}</BoostP>
          </ItemEl>
          <ItemEl className="item-el">
            <IconWrap>
              {
                icon ? <img src={icon} alt="icon"/> : ''
              }
              {
                ads ?
                  <FindingNumbers>
                    {ads.map((ad, index) => <NumberIndicator key={index} numbers={ad} image={image} />)}
                  </FindingNumbers>
                  :
                  <div className="bars">
                    <LabelHead>CPA in worst affected campaign</LabelHead>
                    {
                      amount.map((a, index) => <BarText key={index} color={a.color ? a.color : alternatingColors[index % alternatingColors.length]} width={Math.round(a.width)} figure={a.num} text={a.text} />)
                    }
                  </div>

              }
            </IconWrap>
          </ItemEl>
        </Item>
      );
    } else {
      return (
        <Item className="item">
          <ItemEl className="item-el">
            <p>{firstParagraph}</p>
          </ItemEl>
          <ItemEl className="item-el">
            <IconWrap>
              {
                icon ? <img src={icon} alt="icon"/> : <ScalaChart sum={sum} />
              }

              <div>
                <h2>{currencyToAppend ? currencyToAppend + sum : sum}</h2>
                <p>
                  {secondParagraph}
                </p>
              </div>
            </IconWrap>
          </ItemEl>
        </Item>
      )
    }
  }

  return renderRow();

}

Row.propTypes = {
  amount: PropTypes.array,
  type: PropTypes.string,
  head: PropTypes.string,
  ads: PropTypes.array,
  firstParagraph: PropTypes.string,
  secondParagraph: PropTypes.string,
  icon: PropTypes.string,
  sum: PropTypes.number,
  currencyToAppend: PropTypes.string,
  image: PropTypes.string
}

export default Row;