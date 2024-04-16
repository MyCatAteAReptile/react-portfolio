import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../global/colors";
import * as certImages from "../../../img/certificates";
import Modal from "../../Modal";
import Slider from "../../UI/slider/Slider";
import { SlideI } from "../../../types/slider";

const StyledCertificates = styled.div`
  margin: 0 auto;
`;

const SLIDES: SlideI[] = [
  {title: "Сертификат HTML Academy о прохождении курса по верстке.", image: certImages.certLayoutPreview},
  {title: "Сертификат HTML Academy о прохождении курса по адаптивной верстке и автоматизации.", image: certImages.certAdaptLayoutPreview},
  {title: "Сертификат HTML Academy о прохождении курса по JavaScript.", image: certImages.certJSPreview},
];

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledCertificates>
      <h2>Мои сертификаты</h2>
      <Slider slides={SLIDES}/>
    </StyledCertificates>
  );
};

export default Certificates;
