import { IImage } from './image';

export interface ISlide {
    id: number;
    title: string;
    image: IImage;
}

export interface ISliderContext {
    slides: ISlide[];
    currentSlide: number;
    changeSlide: Function;
    setCurrentSlide: Function;
}
