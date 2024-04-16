import React from "react";
import styled from "styled-components";
import { colors } from "../../global/colors";
import Container from "../Container";

const StyledProjectSection = styled.section`
  padding: 20px 0;
  background-color: ${colors.mainBackground};
`;

const ProjectsSection = () => {
  return (
    <StyledProjectSection id="projects">
      <Container>
        <h1>Мои проекты</h1>
        <div>
          <button>Все</button>
          <button>HTML/CSS</button>
          <button>React</button>
        </div>
        <ul>
          <li>Проект</li>
          <li>Проект</li>
          <li>Проект</li>
          <li>Проект</li>
          <li>Проект</li>
          <li>Проект</li>
        </ul>
      </Container>
    </StyledProjectSection>
  );
};

export default ProjectsSection;
