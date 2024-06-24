import styled from 'styled-components';
import SliderContext from '../../../context/SliderContext';
import viewports from '../../../global/viewports';
import useSafeContext from '../../../hooks/useCustomContext';
import { ISliderContext } from '../../../types/slider';
import CustomPicture from '../picture/CustomPicture';
import colors from '../../../global/colors';

const StyledSlidesList = styled.div`
    overflow: hidden;
    width: 660px;
    display: flex;
    transition: transform 0.5s ease-in-out;

    @media ${viewports.mobile} {
        width: 300px;
    }
`;

const Slide = styled.div`
    display: block;
    transition: transform 0.5s ease-in-out;
    padding: 0 80px;

    p {
        margin: 0;
        padding: 50px 25px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0 0 0 / 90%);
        color: ${colors.mainFont};
        line-height: 1.4;
        transition: 1s;
        transform: translateY(100%);
    }

    div {
        position: relative;
        border: solid 1px black;
        margin-bottom: 10px;
        box-shadow: 0 5px 10px 0 rgba(0 0 0 / 50%);
        overflow: hidden;

        &:hover p {
            transform: translateY(0);
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
    const { slides, currentSlide } = useSafeContext<ISliderContext | null>(
        SliderContext,
    );

    return (
        <StyledSlidesList>
            {slides.map((slide) => (
                <Slide
                    key={slide.id}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    <div>
                        <CustomPicture image={slide.image} />
                        <p>{slide.title}</p>
                    </div>
                </Slide>
            ))}
        </StyledSlidesList>
    );
};

export default SlidesList;
