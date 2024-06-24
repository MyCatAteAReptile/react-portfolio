import { useCallback, useMemo, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Arrows from './Arrows';
import SlidesList from './SlidesList';
import Dots from './Dots';
import { ISlide } from '../../../types/slider';
import SliderContext from '../../../context/SliderContext';

// export const SliderContext = createContext<SliderContextI>({ slides: [{ title: "TEST", image: "TEST" }], currentSlide: 0, changeSlide: () => { }, setCurrentSlide: () => { } });

interface SliderProps {
    slides: ISlide[];
}

const Slider = ({ slides }: SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = useCallback(
        (direction: 1 | -1 = 1) => {
            let slideNumber = 0;
            if (currentSlide + direction < 0) {
                slideNumber = slides.length - 1;
            } else {
                slideNumber = (currentSlide + direction) % slides.length;
            }
            setCurrentSlide(slideNumber);
        },
        [currentSlide, slides],
    );

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
        touchEventOptions: { passive: true },
    });

    const contextMemoValues = useMemo(
        () => ({
            slides,
            currentSlide,
            changeSlide,
            setCurrentSlide,
        }),
        [slides, currentSlide, changeSlide, setCurrentSlide],
    );

    return (
        <div>
            <SliderContext.Provider value={contextMemoValues}>
                <div
                    style={{ position: 'relative', touchAction: 'pan-y' }}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...handlers}
                >
                    <Arrows />
                    <SlidesList />
                </div>
                <Dots />
            </SliderContext.Provider>
        </div>
    );
};

export default Slider;
