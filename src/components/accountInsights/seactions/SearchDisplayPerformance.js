import React from 'react';
import styled from 'styled-components';

// Components
import Table from "./Table";
import SearchImpressionPosition from "./SearchImpressionPosition";

const Section = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const SearchDisplayPerformance = () => {
  return (
    <Section>
      <h3>Search and Display Performance</h3>
      <Table />
      <SearchImpressionPosition />

    </Section>
  )
}

export default SearchDisplayPerformance;