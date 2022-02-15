import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

// Images
import logo from "../images/logo.png";
import pdf from '../images/pdf-logo.png';
import share from '../images/share.svg';
import Modal from "../ui/Modal";

// eslint-disable-next-line no-unused-vars
const LogoPdfFile = '<img src="data:image/png;base64,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" style="height:48px;width:170px;float:left;margin-left:28px;margin-top: 20px;" />'

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

const Header = ({ type, title, heightDoc }) => {
  // eslint-disable-next-line no-unused-vars
  const [downloading, setDownloading] = useState(false);
  const overlay = document.getElementById("overlay");
  const [isModalOpen, setOpen] = useState(false);

  const [pageHeight, setPageHeight] = useState();
  useEffect(() => {
    setPageHeight((heightDoc / 4.48).toFixed())
  }, [heightDoc])

  const openModal = () => {
    overlay.classList.add('overlay');
    setOpen(true)
  }


  const closeModal = () => {
    overlay.classList.remove('overlay');
    setOpen(false);
  }

  const exportPdf = async (print) => {
    let convertApi = ConvertApi.auth({ secret: 'UGErrqAKex5ElxZ5' })
    let params = convertApi.createParams()
    params.add('Url', window.location.href + '?no_header');
    params.add('FileName', 'Audit report for ' + title);
    params.add('ConversionDelay', '7');
    params.add('HideElements', '.header');

    if (print != 'print') {
      params.add('PageRange', '1');
      params.add('MarginTop', '0');
      params.add('PageSize', 'a3');
      params.add('PageHeight', pageHeight);
    }
    //     params.add('Header', LogoPdfFile);

    setDownloading(true);
    let result = await convertApi.convert('web', 'pdf', params)
    downloadPdf(result.dto.Files[0].Url)
    setDownloading(false);
  }

  const downloadPdf = (link) => {
    window.location.href = link;
  }

  return (
    <StyleWrapper className="header" style={{ backgroundColor: type === 'footer' ? "#fff" : '#223D9E' }}>
      <Container>
        <a href="#"><img src={logo} alt="logo" /></a>
        {
          type === 'header' ? <Controls>
            <img onClick={openModal} className="share" src={share} alt="share icon" />
            {
              downloading ? <Downloading>Downloading...</Downloading> : <><PdfExportBtn style={{ cursor: 'pointer' }} onClick={exportPdf}><img src={pdf} alt="pdf export" /> <p>Export pdf</p></PdfExportBtn> <PdfExportBtn style={{ cursor: 'pointer', marginLeft: '20px' }} onClick={() => exportPdf('print')}><img src={pdf} alt="pdf print" /> <p>Print pdf</p></PdfExportBtn> </>
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
