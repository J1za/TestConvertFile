import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

// Images
import thumbsDown from '../../../images/icons/thumbs_down.png';
import thumbsUp from '../../../images/icons/thumbs_up.png';

const StyleWrapper = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 10px;
  border-bottom: 1px solid #D9E1EB;
  align-items: center;
`

const Head = styled.p`
  font-size: 15px;
  color: #182B49;
`

const Tail = styled.p`
  font-size: 15px;
  color: #182B49;
`

const Item = ({item}) => {
  return (
    <StyleWrapper>
      {
        item.figure === 0 ? <img src={thumbsUp} alt="icon"/> : <img src={thumbsDown} alt="icon"/>
      }
      <div>
        {
          item.figure === 0 ? <Head>{item.head}</Head> : <Tail>{item.tail}</Tail>
        }
      </div>
    </StyleWrapper>
  );
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item;