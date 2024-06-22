import styled from 'styled-components';
import { ReactComponent as ArrowLeftIcon } from '../../../img/svg/arrow-left.svg';
import colors from '../../../global/colors';
import viewports from '../../../global/viewports';
import useSafeContext from '../../../hooks/useCustomContext';
import SliderContext from '../../../context/SliderContext';
import { ISliderContext } from '../../../types/slider';

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
        box-shadow: 0 5px 10px 0 rgba(0 0 0 / 50%);
        transform: translateY(-50%);
        opacity: 1;
        cursor: pointer;

        &:hover {
            background-color: ${colors.mainFont};
        }

        &:focus {
            outline-offset: 2px;
            outline: 2px solid ${colors.mainFont};
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
    const { changeSlide } = useSafeContext<ISliderContext | null>(
        SliderContext,
    );

    return (
        <StyledArrows>
            <button
                type="button"
                onClick={() => {
                    changeSlide(-1);
                }}
                aria-label="Предыдущий слайд."
            >
                <ArrowLeftIcon />
            </button>
            <button
                type="button"
                onClick={() => {
                    changeSlide(1);
                }}
            >
                <ArrowLeftIcon
                    style={{ transform: 'rotate(180deg)' }}
                    aria-label="Следующий слайд."
                />
            </button>
        </StyledArrows>
    );
};

export default Arrows;
