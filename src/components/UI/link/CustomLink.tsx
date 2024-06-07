import React from 'react';
import styled from "styled-components";
import { colors } from "../../../global/colors";
import { fonts } from "../../../global/fonts";
import { viewports } from "../../../global/viewports";

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
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    font-family: ${fonts.mainFont};
    font-weight: 700;
    font-size: 1.1rem;

    svg {
        width: 1.4rem;
        height: 1.4rem;
    }

    &:hover, &:focus-visible {
      background-color: ${colors.mainFont};
    }

    &:active {
      transform: translateY(4px);
      box-shadow: none;
    }
`;

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

const CustomLink = ({ children, ...props }: CustomLinkProps) => {
  return (
    <StyledCustomLink {...props}>
      {children}
    </StyledCustomLink>
  )
}

export default CustomLink;