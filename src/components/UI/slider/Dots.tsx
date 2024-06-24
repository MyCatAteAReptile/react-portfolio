import styled from 'styled-components';
import colors from '../../../global/colors';
import useSafeContext from '../../../hooks/useCustomContext';
import { ISliderContext } from '../../../types/slider';
import SliderContext from '../../../context/SliderContext';

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
    box-shadow: 0 5px 10px 0 rgba(0 0 0 / 50%);
    opacity: ${(props) => (props.$active ? '0.7' : '1')};
    cursor: pointer;
    appearance: none;

    &:hover {
        background-color: ${colors.mainFont};
    }

    &:focus {
        outline-offset: 2px;
        outline: 2px solid ${colors.mainFont};
    }

    &:active {
        transform: translateY(4px);
        box-shadow: none;
    }
`;

const Dots = () => {
    const { currentSlide, setCurrentSlide, slides } =
        useSafeContext<ISliderContext | null>(SliderContext);

    return (
        <StyledDots>
            {slides.map((slide, index) => (
                <Dot
                    key={slide.id}
                    $active={currentSlide === index}
                    onClick={() => {
                        setCurrentSlide(index);
                    }}
                    aria-label={`Перейти к слайду номер ${slide.id}`}
                />
            ))}
        </StyledDots>
    );
};

export default Dots;
