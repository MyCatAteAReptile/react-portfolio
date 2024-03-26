import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../global/colors'

const StyledNavbar = styled.nav`
  
  
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 80px;
  }

  & a {
    text-decoration: none;
    color: ${colors.mainFont}
  }
`


const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li><a href="#about">Обо мне</a></li>
        <li><a href="#projects">Проекты</a></li>
      </ul>
    </StyledNavbar>
  )
}

export default Navbar