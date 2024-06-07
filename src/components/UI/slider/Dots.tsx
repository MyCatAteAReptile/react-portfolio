import React, { useContext } from 'react'
import { SliderContext } from './Slider'
import styled from 'styled-components';
import { colors } from "../../../global/colors";

const StyledDots = styled.div`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  padding: 10px;
  gap: 15px;
`;

const Dot = styled.button<{ $active?: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${colors.UIBackground};
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  opacity: ${props => props.$active ? "0.7" : "1"};

  &:hover, &:focus-visible {
    background-color: ${colors.mainFont};
  }

  &:active {
    transform: translateY(4px);
    box-shadow: none;
  }
`

const Dots = () => {

  const { currentSlide, setCurrentSlide } = useContext(SliderContext);

  return (
    <StyledDots>
      <Dot $active={ currentSlide === 0 } onClick={() => { setCurrentSlide(0) }}></Dot>
      <Dot $active={ currentSlide === 1 } onClick={() => { setCurrentSlide(1) }}></Dot>
      <Dot $active={ currentSlide === 2 } onClick={() => { setCurrentSlide(2) }}></Dot>
    </StyledDots>
  )
}

export default Dots