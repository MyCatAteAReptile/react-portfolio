import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 120px;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
