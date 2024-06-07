import React from "react";
import styled from "styled-components";
import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";
import Container from "../Container";
import CatImage from "../../img/cat.jpg";
import CatImageWebp from "../../img/cat.webp";
import { visuallyHidden } from "../../global/visuallyHidden";
import { viewports } from "../../global/viewports";
import { ReactComponent as TelegramIcon } from "../../img/svg/telegram-logo.svg"
import CustomLink from "../UI/link/CustomLink";

const StyledCustomLink = styled(CustomLink)`
    svg {
        fill: ${colors.UIBackground};
    }

    &:hover svg, &:focus-visible svg {
        fill: ${colors.mainFont};
    }

    @media ${viewports.mobile} {
        position: relative;
        z-index: 2;
     }
`;

const StyledHeroSection = styled.section`
    padding: 0 0 40px 0;
    background-color: ${colors.mainBackground};

    h2 {
        ${visuallyHidden};
    }

    .wrapper {
        display: grid;
        grid-template-columns: 500px min-content;
        justify-items: center;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    }

    .greetings {
        font-family: ${fonts.mainFont};
        font-weight: 900;
        font-size: 2rem;
        margin: 0;
        margin-bottom: 2rem;
        color: ${colors.mainFont};
    }

    p {
        font-family: ${fonts.mainFont};
        font-weight: 400;
        font-size: 1rem;
        margin: 0;
        color: ${colors.mainFont};
        margin-bottom: 2rem;
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
    }

    @media ${viewports.tablet} {
        .wrapper {
            grid-template-columns: 1fr min-content;
        }
    }

    @media ${viewports.mobile} {
        position: relative;
        padding: 0;

        .wrapper {
            grid-template-columns: 1fr;
            min-height: 320px;
        }

        p, .greetings {
            position: relative;
            z-index: 2;
            text-align: center;
        }

        .greetings {
            font-size: 1.8rem;

            span {
                display: inline-block;
                margin-bottom: 1rem;
            }
        }

        img {
            position: absolute;
            top: 0;
            left: -10px;
            z-index: 1;
            width: 100vw;
            height: 320px;
            border-radius: 0;
            opacity: 0.1;
            box-shadow: none;
            object-fit: cover;
        }

        ${StyledCustomLink} {
            margin: 0 auto;
        }
    }
`;

const HeroSection = () => {
    return (
        <StyledHeroSection id="hero">
            <h2>Приветствие</h2>
            <Container>
                <div className="wrapper">
                    <div>
                        <p className="greetings"><span>Привет!</span><br />Меня зовут Сергей и&nbsp;я&nbsp;Фронтенд-разработчик.</p>
                        <p>Рад вас видеть на странице моего портфолио!</p>
                        <StyledCustomLink href="https://t.me/pork_at_work" target="_blank"><TelegramIcon />Напишите мне</StyledCustomLink>
                    </div>
                    <picture>
                        <source type="image/webp" srcSet={CatImageWebp} width="250" height="250"/>
                        <source type="image/webp" media={viewports.mobile} srcSet={CatImageWebp} width="320" height="320"/>
                        <img src={CatImage} width="250" height="250" alt="Кот за компьютерным столом."/>
                    </picture>
                </div>
            </Container>
        </StyledHeroSection>
    );
};

export default HeroSection;
