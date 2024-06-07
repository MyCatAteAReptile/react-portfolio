import React, { useContext } from 'react';
import { SliderContext } from './Slider';
import styled from 'styled-components';
import { ReactComponent as ArrowLeftIcon } from '../../../img/svg/arrow-left.svg';
import { colors } from "../../../global/colors";
import { viewports } from '../../../global/viewports';

const StyledArrows = styled.div`
  position: absolute;
  top: 50%;

  display: flex;
  justify-content: space-between;
  width: 100%;

  & button {
    z-index: 100;
    width: 45px;
    height: 45px;
    padding: 6px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: ${colors.UIBackground};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    transform: translateY(-50%);
    opacity: 1;

    &:hover, &:focus-visible {
      background-color: ${colors.mainFont};
    }

    &:active {
      transform: translateY(calc(-50% + 4px));
      box-shadow: none;
    }
  }

  @media ${viewports.mobile} {
    display: none;
  }
`;

const Arrows = () => {

  const { changeSlide } = useContext(SliderContext);

  return (
    <StyledArrows>
      <button onClick={() => { changeSlide(-1); }} aria-label="Предыдущий слайд."><ArrowLeftIcon /></button>
      <button onClick={() => { changeSlide(1); }}><ArrowLeftIcon style={{transform: "rotate(180deg)"}} aria-label="Следующий слайд."/></button>
    </StyledArrows>
  )
}

export default Arrows