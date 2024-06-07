import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../global/colors";
import * as certImages from "../../../img/certificates";
import Modal from "../../Modal";
import Slider from "../../UI/slider/Slider";
import { SlideI } from "../../../types/slider";
import { fonts } from "../../../global/fonts";
import { viewports } from "../../../global/viewports";

const StyledCertificates = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  font-family: ${fonts.mainFont};
  
  & h2 {
    font-weight: 900;
    text-align: center;
    margin: 0;
    margin-bottom: 2.5rem;
  }

  @media ${viewports.mobile} {
    padding: 20px 0;
  }
`;

const SLIDES: SlideI[] = [
  {title: "Сертификат HTML Academy о прохождении курса по верстке.", image: certImages.certLayout},
  {title: "Сертификат HTML Academy о прохождении курса по адаптивной верстке и автоматизации.", image: certImages.certAdaptLayout},
  {title: "Сертификат HTML Academy о прохождении курса по JavaScript.", image: certImages.certJS},
];

const Certificates = () => {

  return (
    <StyledCertificates>
      <h2>Мои сертификаты</h2>
      <Slider slides={SLIDES}/>
    </StyledCertificates>
  );
};

export default Certificates;
