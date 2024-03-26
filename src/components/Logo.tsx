import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoIcon } from '../img/svg/logoMelkozerovSV.svg'

const StyledLogo = styled.a`

`

const StyledLogoIcon = styled(LogoIcon)`
    width: 150px;
    height: 50px;
`

const Logo = () => {
  return (
    <StyledLogo href='#hero'><StyledLogoIcon/></StyledLogo>
  )
}

export default Logo