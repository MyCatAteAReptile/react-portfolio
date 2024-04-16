import React from "react";
import Container from "../../Container";
import styled from "styled-components";
import { colors } from "../../../global/colors";
import SkillsList from "./SkillsList";
import Presentation from "./Presentation";
import Certificates from "./Certificates";

const StyledAboutSection = styled.section`
  padding: 40px 0;
  background-color: ${colors.lightBackground};

  & div:nth-child() {
    margin-bottom: 40px;
  }
`;

const AboutSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

const AboutSection = () => {
  return (
    <StyledAboutSection id="about">
      <AboutSectionContainer>
        <SkillsList />
        <Presentation />
        <Certificates />
      </AboutSectionContainer>
    </StyledAboutSection>
  );
};

export default AboutSection;