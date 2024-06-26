import React from 'react';
import styled from 'styled-components';
import colors from '../../../global/colors';
import fonts from '../../../global/fonts';

const StyledCustomLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    width: fit-content;
    text-decoration: none;
    text-align: center;
    color: black;
    margin: 0;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: ${colors.UIBackground};
    box-shadow: 0 5px 10px 0 rgba(0 0 0 / 50%);
    font-family: ${fonts.mainFont};
    font-weight: 700;
    font-size: 1.1rem;

    svg {
        width: 1.4rem;
        height: 1.4rem;
    }

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
        outline: none;
    }
`;

interface CustomLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: React.ReactNode;
}

const CustomLink = ({
    children,
    href,
    target,
    rel,
    className,
}: CustomLinkProps) => (
    <StyledCustomLink
        href={href}
        target={target}
        rel={rel}
        className={className}
    >
        {children}
    </StyledCustomLink>
);

export default CustomLink;
