import React from 'react'
import Navbar from './UI/navbar/Navbar'
import styled from 'styled-components'
import { colors } from '../global/colors'
import Container from './Container';
import Logo from './Logo';

const StyledHeader = styled.header`
  padding: 20px 0;
  background-color: ${colors.mainBackground};

  & div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div>
          <Logo />
          <Navbar />
        </div>
      </Container>
    </StyledHeader>
  )
}

export default Header