import React from "react";
import styled from "styled-components";
import { colors } from "../../../global/colors";
import StudentPhoto from "../../../img/student.jpg";

const StyledPresentation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & img {
    width: 500px;
    height: 500px;
  }
`;

const Presentation = () => {
  return (
    <StyledPresentation>
      <img src={StudentPhoto} alt="Мое фото" />
      <div>
        <h1>Обо мне</h1>
        <p>
          Я веб-разработчик и мне нравится создавать доступные и удобные
          приложения. Я использую HTML, CSS, JavaScript, TypeScript, React,
          Redux.
        </p>
        <h2>Образование</h2>
        <ul>
          <li>
            Высшее техническое образование (Уральский Федеральный Университет)
          </li>
          <li>Курс Фронтенд-разработки (HTML Academy)</li>
        </ul>
      </div>
    </StyledPresentation>
  );
};

export default Presentation;
