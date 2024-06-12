import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoIcon } from '../img/svg/logo.svg'
import { colors } from "../global/colors";

const StyledLogo = styled.a`
  outline: none;
  position: relative;
`;

const StyledLogoIcon = styled(LogoIcon)`
    position: relative;
    display: block;
    width: 200px;
    height: 41px;
    fill: ${colors.UIBackground};
    outline: none;
    z-index: 3;

    ${StyledLogo}:hover &, ${StyledLogo}:focus-visible & {
      fill: ${colors.mainFont};
    }

    ${StyledLogo}:active & {
      opacity: 0.7;
      transform: translateY(4px);
    }
`;

const ShadowLogoIcon = styled(StyledLogoIcon)`
  position: absolute;
  top: 5px;
  left: 0;
  opacity: 0.5;
  filter: blur(1px);
  fill: rgba(0, 0, 0, 0.5);
  z-index: 2;
  transform: translateY(0);

  ${StyledLogo}:hover &, ${StyledLogo}:focus-visible & {
    fill: rgba(0, 0, 0, 0.5);
  }

  ${StyledLogo}:active & {
    opacity: 0.5;
    transform: translateY(0);
  }
`;

const Logo = () => {
  return (
    <StyledLogo href='#hero' aria-label="Логотип разработчика.">
      <StyledLogoIcon />
      <ShadowLogoIcon/>
    </StyledLogo>
  )
}

export default Logo