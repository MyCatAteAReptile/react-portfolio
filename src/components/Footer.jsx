import React from "react";
import styled from "styled-components";
import { colors } from "../global/colors";
import Container from "./Container";

const StyledFooter = styled.footer`
  padding: 20px 0;
  background-color: ${colors.mainBackground};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>Footer</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
