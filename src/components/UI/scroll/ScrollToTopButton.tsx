import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../global/colors";
import { ReactComponent as ArrowLeftIcon } from '../../../img/svg/arrow-left.svg';
import { viewports } from "../../../global/viewports";

const StyledScrollButton = styled.button<{ $isVisible?: boolean }>`
    position: fixed;
    display: ${props => (props.$isVisible ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    bottom: 100px;
    right: 100px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: ${colors.UIBackground};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

    &:hover {
        background-color: ${colors.mainFont};
    }

    &:focus {
      outline-offset: 2px;
      outline: 2px solid ${colors.mainFont};
    }

    &:active {
        transform: translateY(4px);
        box-shadow: none;
    }

    @media ${viewports.tablet} {
        bottom: 20px;
        right: 20px;
    }

    @media ${viewports.tablet} {
        width: 40px;
        height: 40px;
    }
`;

const ArrowUpIcon = styled(ArrowLeftIcon)`
    transform: rotate(90deg);
    width: 30px;
    height: 30px;

    @media ${viewports.tablet} {
        width: 24px;
        height: 24px;
    }
`;

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= (document.documentElement.clientHeight / 2)) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return <StyledScrollButton $isVisible={isVisible} onClick={scrollToTop} aria-label="В начало."><ArrowUpIcon /></StyledScrollButton>;
};

export default ScrollToTopButton;
