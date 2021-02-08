import React from "react";
import { Container, Spacer, useTheme } from "react-neu";

import Page from "components/Page";
import PageHeader from "components/PageHeader";
import Split from "components/Split";
import Bar from "components/Bar";
import DesignFlow from "assets/yampp.png";
import styled from "styled-components";

const Umbrella_Protocol_Lite_Paper = require("assets/documents/Umbrella_Protocol_Lite_Paper.pdf");
const Umbrella_Protocol_Lite_Paper_CN = require("assets/documents/Umbrella_Protocol_Lite_Paper_CN.pdf");

const YCP: React.FC = () => {
  const { darkMode } = useTheme();
  const progress = 75;

  return (
    <Page>
      <PageHeader icon={"👺"} title={"Coming Soon!"} titleSize={80} titleWeight={"900"} subtitle={"MaskDAO"} />
      <Container size="sm">
        {/*<Bar type={"buffer"} value={progress}></Bar>*/}
      </Container>
      <Container>
        <Spacer />
        <h2>Introduction</h2>
        <span>
        MaskDAO is a community led Decentralized Autonomous Organization (DAO) built off the success of Hashmask NFT’s. Together the DAO will innovate the NFT ecosystem by building an artist focused marketplace, curate new NFT releases, and new tools proposed by community members. 
        </span>
        <Spacer />
        <span>
        In order to launch MaskDAO, there will be a MSK governance token distribution phase. Distribution will reward Hashmask owners, and can also be earned through a variety of liquidity mining programs. 
        </span>
      
       
      </Container>
    </Page>
  );
};

const InformationDesign = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 5px #ec0e5c;
  animation: ycpblink 10s ease-in-out infinite;
  opacity: 0.8;
`;

export default YCP;
