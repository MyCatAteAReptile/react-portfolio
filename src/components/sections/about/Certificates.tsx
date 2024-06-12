import React from "react";
import styled from "styled-components";
import { certImagesSet } from "../../../img/about/certificates/certificates";
import Slider from "../../UI/slider/Slider";
import { ISlide } from "../../../types/slider";
import { fonts } from "../../../global/fonts";
import { viewports } from "../../../global/viewports";
import { IImageSet } from "../../../types/image";

const slidesImages: IImageSet = certImagesSet;

const slides: ISlide[] = [
  {
    title: "Сертификат HTML Academy о прохождении курса по верстке.", 
    image: slidesImages.certLayout
  },
  {
    title: "Сертификат HTML Academy о прохождении курса по адаптивной верстке и автоматизации.", 
    image: slidesImages.certAdaptLayout
  },
  {
    title: "Сертификат HTML Academy о прохождении курса по JavaScript.", 
    image: slidesImages.certJS
  },
];

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

const Certificates = () => {

  return (
    <StyledCertificates>
      <h2>Мои сертификаты</h2>
      <Slider slides={slides}/>
    </StyledCertificates>
  );
};

export default Certificates;
