import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import StackedBarChart from "../../../ui/charts/StackedBarChart";
import Table from "./utility/Table";

const Section = styled.div`
  padding-bottom: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #D9E1EB;
  overflow: hidden;
  
  h3 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  p {
    font-size: 17px;
  }
  
  #SvgjsG1025 {
    transform: translate(80px, 0px) !important;
  }
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`

const SearchTraffic = ({searchTraffic}) => {
  return (
    <Section>
      <h3>Your Search Traffic</h3>
      <p>You missed {searchTraffic.missed.budgetLimitations + searchTraffic.missed.biddingAndQuality}% of additional potential traffic due to the below reasons</p>
      <Inner>
        <StackedBarChart id="chart" barData={searchTraffic.missed} />
        <Table tableData={searchTraffic.tableData} />
      </Inner>
    </Section>
  );
}

SearchTraffic.propTypes = {
  searchTraffic: PropTypes.object
}

export default SearchTraffic;