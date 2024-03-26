import React from "react";
import Container from "../Container";
import styled from "styled-components";
import { colors } from "../../global/colors";

const StyledAboutSection = styled.section`
    padding: 20px 0;
    background-color: ${colors.lightBackground};
`;

const AboutSection = () => {
  return (
    <StyledAboutSection id="about">
      <Container>
        <h1>Обо мне</h1>
        <p>
          Я веб-разработчик и мне нравится создавать доступные и удобные
          приложения. Я использую HTML, CSS, JavaScript, TypeScript, React,
          Redux.
        </p>
        <div>
          <button>Навыки</button>
          <button>Образование</button>
          <button>Сертификаты</button>
        </div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
        <ul>
          <li>
            Высшее техническое образование (Уральский Федеральный Университет)
          </li>
          <li>Курс Фронтенд-разработки (HTML Academy)</li>
        </ul>
        <ul>
          <li>Академия</li>
          <li>Академия</li>
          <li>Академия</li>
        </ul>
      </Container>
    </StyledAboutSection>
  );
};

export default AboutSection;
