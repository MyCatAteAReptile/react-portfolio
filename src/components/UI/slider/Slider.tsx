import React, { createContext, useState } from 'react'
import styled from "styled-components";
import Arrows from './Arrows';
import SlidesList from './SlidesList';
import Dots from './Dots';
import { SlideI, SliderContextI } from '../../../types/slider';
import { useSwipeable } from 'react-swipeable';

interface SliderProps {
  slides: SlideI[]
}

export const SliderContext = createContext<SliderContextI>({ slides: [{ title: "TEST", image: "TEST" }], currentSlide: 0, changeSlide: () => { }, setCurrentSlide: () => { } });

const Slider = ({ slides }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction: 1 | -1 = 1) => {
    let slideNumber = 0;
    if (currentSlide + direction < 0) {
      slideNumber = slides.length - 1;
    } else {
      slideNumber = (currentSlide + direction) % slides.length;
    }
    setCurrentSlide(slideNumber);
  }

  const handleSwipedLeft = () => {
    changeSlide(1);
  };

  const handleSwipedRight = () => {
    changeSlide(-1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
    trackMouse: false,
  });

  return (
    <div>
      <SliderContext.Provider value={{ slides: slides, currentSlide: currentSlide, changeSlide, setCurrentSlide: setCurrentSlide }}>
        <div style={{ position: "relative", touchAction: "pan-y" }} {...handlers}>
          <Arrows />
          <SlidesList />
        </div>
        <Dots />
      </SliderContext.Provider>
    </div>
  )
}

export default Slider