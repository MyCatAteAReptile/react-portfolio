import React from 'react'
import styled from 'styled-components';
import { colors } from "../../../global/colors";
import useSafeContext from '../../../hooks/useCustomContext';
import { ISliderContext } from '../../../types/slider';
import { SliderContext } from '../../../context/SliderContext';

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

  const { currentSlide, setCurrentSlide, slides } = useSafeContext<ISliderContext | null>(SliderContext);

  return (
    <StyledDots>
      {slides.map((slide, index) => 
        <Dot 
          key={index} 
          $active={ currentSlide === index } 
          onClick={() => { setCurrentSlide(index) }} 
          aria-label={`Перейти к слайду номер ${index}`}>
        </Dot>
      )}
    </StyledDots>
  )
}

export default Dots