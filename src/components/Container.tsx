import React from 'react';
import styled from 'styled-components';
import viewports from '../global/viewports';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const StyledContainer = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 120px;

    @media ${viewports.tablet} {
        max-width: 768px;
        padding: 0 40px;
    }

    @media ${viewports.mobile} {
        max-width: 320px;
        padding: 0 10px;
    }
`;

const Container = ({ children, className = '' }: ContainerProps) => (
    <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;
