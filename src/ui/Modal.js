import React, {useState} from 'react';
import styled from "styled-components";

import close from '../images/close.png';
import copy from '../images/copy.png';

const ShareModal = styled.div`
  width: 700px;
  height: 200px;
  border-radius: 8px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  padding: 1rem;
  
  #close {
    cursor: pointer;
    float: right;
  }
  
  p {
    margin-top: 1rem;
  }
`

const CopyLink = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  
  a {
    color: #223D9E;
    margin-right: 10px;
    height: 29px;
    display: flex;
    align-items: center;
  } 
    
  img {
    cursor: pointer;
  }
  
  span {
    color: #223D9E;
  }
`

const Modal = ({closeModal}) => {
  const [didCopy, setDidCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setDidCopy(true);

    setTimeout(() => {
      setDidCopy(false);
    }, 2000)
  }

  return (
    <ShareModal>
      <img id="close" onClick={closeModal} src={close} alt="close icon"/>
      <CopyLink>
        <a href={window.location.href}>{window.location.href}</a>
        {
          didCopy ? <span>Copied</span> : <img onClick={handleCopy} src={copy} alt="copy icon"/>
        }
      </CopyLink>
      <div>
        <p>Share the above URL with anyone you want them to see the report.</p>
        <p>This report link is unique and is not password-protected.</p>
      </div>
    </ShareModal>
  )
}

export default Modal;