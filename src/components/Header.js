import React, {useState} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

// Images
import logo from "../images/logo.png";
import pdf from '../images/pdf-logo.png';
import share from '../images/share.svg';
import Modal from "../ui/Modal";

const StyleWrapper = styled.nav`
  background-color: #223D9E;
  display: flex;
  align-items: center;
  padding: 1rem 0;
      
  img {
    margin-right: 10px;
  }
`

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const PdfExportBtn = styled.div`
  border-radius: 4px;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  height: 47px
  cursor: pointer;
  justify-content: center;
  width: 155px;
  color: #fff;
  font-family: 'NeutrifPro-SemiBold';
`

const Downloading = styled.p`
  color: #fff;
  font-family: 'NeutrifPro-SemiBold';
`

const Controls = styled.div`
  display: flex;
  
  .share {
    width: 21px;
    margin-right: 20px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #fff;
    padding: 7px 20px;
  }
`

const ConvertApi = window.ConvertApi;

const Header = ({type, title}) => {
  // eslint-disable-next-line no-unused-vars
  const [downloading, setDownloading] = useState(false);
  const overlay = document.getElementById("overlay");
  const [isModalOpen, setOpen] = useState(false);

  const openModal = () => {
    overlay.classList.add('overlay');
    setOpen(true)
  }

  const closeModal = () => {
    overlay.classList.remove('overlay');
    setOpen(false);
  }

  const exportPdf = async () => {
    let convertApi = ConvertApi.auth({secret: 'UGErrqAKex5ElxZ5'})
    let params = convertApi.createParams()
    params.add('Url', window.location.href + '?no_header');
    params.add('FileName', 'Audit report for ' + title);
    params.add('ConversionDelay', '7');
    params.add('HideElements', '.header');
    setDownloading(true);
    let result = await convertApi.convert('html', 'pdf', params)
    downloadPdf(result.dto.Files[0].Url)
    setDownloading(false);
  }

  const downloadPdf = (link) => {
    window.location.href = link;
  }

  return (
    <StyleWrapper className="header" style={{backgroundColor: type === 'footer' ? "#fff" : '#223D9E'}}>
      <Container>
        <a href="#"><img src={logo} alt="logo"/></a>
        {
          type === 'header' ? <Controls>
            <img onClick={openModal} className="share" src={share} alt="share icon"/>
            {
              downloading ? <Downloading>Downloading...</Downloading> : <PdfExportBtn style={{cursor: 'pointer'}} onClick={exportPdf}><img src={pdf} alt="pdf export"/> <p>Export pdf</p></PdfExportBtn>
            }
          </Controls>
            :
          ''
        }

        {
          isModalOpen ? <Modal closeModal={closeModal} /> : ''
        }
      </Container>
    </StyleWrapper>
  );
}

Header.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string
}

export default Header;