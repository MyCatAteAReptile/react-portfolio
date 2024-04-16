import React, { useContext, useEffect, useRef, useState } from 'react';
import { SliderContext } from "./Slider";
import styled from 'styled-components';

const StyledSlide = styled.div`
    overflow: hidden;
    width: 400px;

    &.slide-enter {
        opacity: 0;
    }

    &.slide-enter-active {
        opacity: 1;
        transition: opacity 200ms;
    }

    &.slide-exit {
        opacity: 0;
    }

    &.slide-exit-active {
        opacity: 1;
        transition: opacity 200ms;
    }
`;

const Slide = () => {
    const [trans, setTrans] = useState(false);
    const { slides, currentSlide } = useContext(SliderContext);
    const slide = slides[currentSlide];
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        trans === true ? setTrans(false) : setTrans(true);
    }, [currentSlide]);

    return (
            <StyledSlide ref={slideRef}>
                <img src={slide.image} alt={slide.title} />
                <p>{slide.title}</p>
                <p>{currentSlide}</p>
            </StyledSlide>
    )
}

export default Slide