import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import colors from '../../../global/colors';
import fonts from '../../../global/fonts';
import { ReactComponent as XIcon } from '../../../img/svg/x-mark.svg';
import { ReactComponent as BarsIcon } from '../../../img/svg/bars.svg';
import viewports from '../../../global/viewports';

const StyledNavbar = styled.nav`
    position: relative;
    max-width: 60%;
`;

const NavButton = styled.button`
    display: none;
    width: 40px;
    height: 40px;
    padding: 8px;
    background-color: ${colors.lightBackground};
    border: none;
    border-radius: 10px;
    box-shadow: 0 3px 5px 0 rgba(0 0 0 / 50%);
    transition: all 0.2 ease-out;
    cursor: pointer;

    svg {
        width: 32px;
        height: 32px;
        stroke: ${colors.mainFont};
    }

    &:focus {
        outline-offset: 2px;
        outline: 2px solid ${colors.mainFont};
    }

    &:active {
        transform: translateY(2px);
        box-shadow: none;
        outline: none;
    }

    @media ${viewports.mobile} {
        display: block;
    }
`;

const NavLinks = styled.ul<{ $isMenuOpen?: boolean }>`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 80px;

    a {
        display: block;
        font-family: ${fonts.mainFont};
        font-weight: 700;
        text-decoration: none;
        color: ${colors.mainFont};
        font-size: 1.5rem;
        outline: none;
        text-shadow: 0 5px 5px rgba(0 0 0 / 50%);

        &:hover {
            color: ${colors.UIBackground};
        }

        &:focus {
            border-radius: 5px;
            outline-offset: 2px;
            outline: 2px solid ${colors.mainFont};
        }

        &:active {
            transform: translateY(4px);
            text-shadow: none;
            outline: none;
        }
    }

    @media ${viewports.mobile} {
        display: ${(props) => (props.$isMenuOpen ? 'flex' : 'none')};
        position: absolute;
        z-index: 3;
        top: 50px;
        right: 0;
        padding: 10px 20px;
        background-color: ${colors.lightBackground};
        border-radius: 10px;
        box-shadow: 0 5px 10px 0 rgba(0 0 0 / 50%);

        a {
            font-size: 1rem;
            font-weight: 400;
            text-shadow: none;

            &:active {
                transform: translateY(0);
                color: ${colors.UIBackground};
            }
        }
    }
`;

const IconWrapper = styled.div<{ $isVisible?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 4px;
    bottom: 0;
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
    opacity: ${(props) => (props.$isVisible ? 1 : 0)};
    transform: ${(props) => (props.$isVisible ? 'scale(1)' : 'scale(0.5)')};
`;

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const handleScroll = () => {
        setIsMenuOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            window.addEventListener('scroll', handleScroll);
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <StyledNavbar ref={navRef}>
            <NavLinks $isMenuOpen={isMenuOpen}>
                <li>
                    <a href="#about">Обо мне</a>
                </li>
                <li>
                    <a href="#projects">Проекты</a>
                </li>
            </NavLinks>
            <NavButton
                onClick={toggleMenu}
                aria-label="Кнопка управления меню навигации."
            >
                <IconWrapper $isVisible={!isMenuOpen}>
                    <BarsIcon />
                </IconWrapper>
                <IconWrapper $isVisible={isMenuOpen}>
                    <XIcon />
                </IconWrapper>
            </NavButton>
        </StyledNavbar>
    );
};

export default Navbar;
