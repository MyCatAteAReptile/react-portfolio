import React from "react";
import styled from "styled-components";
import { colors } from "../../global/colors";
import Container from "../Container";

const StyledHeroSection = styled.section`
    padding: 20px 0;
    background-color: ${colors.mainBackground};

    & h1 {
        margin: 0;
        color: ${colors.mainFont}
    }

    & p {
        margin: 0;
        color: ${colors.mainFont}
    }
`

const HeroSection = () => {
    return (
        <StyledHeroSection id="hero">
            <Container>
                <h1>Привет! Меня зовут Сергей и я Фронтенд-разработчик.</h1>
                <p>Рад вас видеть на странице моего портфолио!</p>
                <a href="/">Скачать резюме</a>
            </Container>
        </StyledHeroSection>
    );
};

export default HeroSection;
