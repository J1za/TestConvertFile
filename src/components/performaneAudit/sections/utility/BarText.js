import React, {useContext} from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import Bar from "../../../../ui/charts/Bar";
import {AuditContext} from "../../../../App";

const BarWrap = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
`

const Label = styled.p`
  font-size: 14px !important;
  color: #001737 !important;
  width: 8rem;
`

const BarText = ({width, text, figure, color}) => {
  // eslint-disable-next-line no-unused-vars
  const [auditData, setData] = useContext(AuditContext);

  return (
    <BarWrap>
      <Label>{text}</Label>
      <Bar figure={figure} color={color} width={width} currency={auditData.currency}/>
    </BarWrap>
  );
}

BarText.propTypes = {
  width: PropTypes.number,
  text: PropTypes.string,
  color: PropTypes.string
}

export default BarText;