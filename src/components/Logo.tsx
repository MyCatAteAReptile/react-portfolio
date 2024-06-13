import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../img/svg/logo.svg';
import { colors } from '../global/colors';

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

    ${StyledLogo}:hover & {
      fill: ${colors.mainFont};
    }

    ${StyledLogo}:focus & {
      border-radius: 5px;
      outline-offset: 2px;
      outline: 2px solid ${colors.mainFont};      
    }

    ${StyledLogo}:active & {
      opacity: 0.7;
      transform: translateY(4px);
      outline: none;
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

  ${StyledLogo}:hover & {
    fill: rgba(0, 0, 0, 0.5);
  }

  ${StyledLogo}:focus & {
    outline: none;
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

export default Logo;