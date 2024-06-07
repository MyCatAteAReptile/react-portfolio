import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { colors } from "../../../global/colors";
import { fonts } from '../../../global/fonts';

const StyledButton = styled.button`
    margin: 0;
    padding: 5px 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: ${colors.UIBackground};
    color: ${colors.black};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    font-family: ${fonts.mainFont};

    &:hover, &:focus-visible {
        box-shadow: 0px 5px 10px 0px rgba(226, 154, 5, 0.5);
    }

    &:active {
      opacity: 0.5;
    }
`;

interface ButtonProps {
    children?: string,
    onClick?: MouseEventHandler
};

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
}

export default Button