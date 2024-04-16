import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children?: React.ReactNode,
  className?: string
}

const StyledContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 120px;
`;

const Container = ({ children, className = '' }: ContainerProps) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
