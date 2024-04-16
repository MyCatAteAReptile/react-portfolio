import React, { useContext } from 'react'
import { SliderContext } from "./Slider";
import styled from 'styled-components';

const StyledSlidesList = styled.div`
    overflow: hidden;
    width: 300px;
    display: flex;
    transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div<{ $active?: boolean; }>`
    display: block;
    transition: transform 0.5s ease-in-out;

    & p {
        width: 50%;
    }

    & img {
        width: 300px;
    }
`;

const SlidesList = () => {
    const { slides, currentSlide } = useContext(SliderContext);

    return (
        <StyledSlidesList>
            {
                slides.map((slide, index) => (
                    <Slide key={index} style={{ transform: `translateX(-${currentSlide * 100}%)` }} >
                        <img src={slide.image} alt={slide.title} />
                        <p>{slide.title}</p>
                    </Slide>
                ))
            }
        </StyledSlidesList>
    )
}

export default SlidesList