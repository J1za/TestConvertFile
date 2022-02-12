import React, {useState, useEffect, createContext} from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet'

// Components
import Header from "./components/Header";
import AuditScore from "./components/auditScore/AuditScore";
import PerformaneAudit from "./components/performaneAudit/performaneAudit";
import QualityScoreAudit from "./components/QualityScoreAudit/QualityScoreAudit";
import AccountStructureAudit from "./components/accountStructureAudit/AccountStructureAudit";
import AccountInsights from "./components/accountInsights/AccountInsights";

const StyleWrapper = styled.div`
  @media only screen and (min-width: 1350px) {
    #container {
    width: 1176px !important;
    }
    
    #border-content {
      width: 80%;
    }
  }
`

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #3C4858;
`

export const AuditContext = createContext(0);

function App() {
  const [auditData, setData] = useState();
  console.log(auditData)
  useEffect( () => {
    // const windowParams = window.location.href.split('/');
    // const reportID = windowParams[windowParams.length - 1];

    // fetch(`/rest/api/audit-report/${reportID}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setData(data)
    //   })
    //   .catch(e => console.log(e));

    fetch(`https://mocki.io/v1/897a9996-ae8e-46f4-8a5c-b7aed57ce526`)
      .then(res => res.json())
      .then(data => {
        setData(data.data[0])
      })
      .catch(e => console.log(e));
  },[])


  function hasHeader() {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.get('no_header');

    return urlParams.has('no_header');
  }

  return (
      auditData ? <AuditContext.Provider value={[auditData, setData]}>
        <Helmet>
          <title>Audit report for {auditData.accountName}</title>
        </Helmet>
        <StyleWrapper id="body">
          {
            hasHeader() ? '' : <Header type={"header"} title={auditData.accountName} />
          }
          <div id="document">
            <Container id="container">
              <div id="doc">
                <div id="first">
                  <AuditScore />
                </div>
                <PerformaneAudit />
                <QualityScoreAudit />
                <AccountStructureAudit />
                <AccountInsights />
              </div>
            </Container>
          </div>
          {
            hasHeader() ? '' : <Header type={"footerr"}/>
          }
        </StyleWrapper>
      </AuditContext.Provider>
        :
      <></>
  );
}

export default App;
