import React from 'react';
import { SliderContext } from '../../../context/SliderContext';
import styled from 'styled-components';
import { viewports } from '../../../global/viewports';
import useSafeContext from '../../../hooks/useCustomContext';
import { ISliderContext } from '../../../types/slider';
import CustomPicture from '../picture/CustomPicture';

const StyledSlidesList = styled.div`
    overflow: hidden;
    width: 660px;
    display: flex;
    transition: transform 0.5s ease-in-out;

    @media ${viewports.mobile} {
        width: 300px;
    }
`;

const Slide = styled.div<{ $active?: boolean; }>`
    display: block;
    transition: transform 0.5s ease-in-out;
    padding: 0 80px;

    div {
        position: relative;
        border: solid 1px black;
        margin-bottom: 10px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

        &:hover p {
            display: block;
        }
    }

    p {
        display: none;
        margin: 0;
        padding: 50px 25px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        animation-duration: 1s;
        animation-name: slidein;
        color: #E29A05;

        @keyframes slidein {
            from {
                margin-top: 100%;
            }

            to {
                margin-top: 0%;
            }
        }
    }
    
    img {
        display: block;
        width: 500px;
        height: 702px;
    }

    @media ${viewports.mobile} {
        padding: 0 10px;

        img {
            display: block;
            width: 280px;
            height: 393px;
        }
    }
`;

const SlidesList = () => {
    const { slides, currentSlide } = useSafeContext<ISliderContext | null>(SliderContext);

    return (
        <StyledSlidesList>
            {
                slides.map((slide, index) => (
                    <Slide key={index} style={{ transform: `translateX(-${currentSlide * 100}%)` }} >
                        <div>
                            <CustomPicture image={slide.image}/>
                            <p>{slide.title}</p>
                        </div>
                    </Slide>
                ))
            }
        </StyledSlidesList>
    )
}

export default SlidesList