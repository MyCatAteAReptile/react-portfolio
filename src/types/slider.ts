import { MouseEventHandler } from "react"

export interface SlideI {
    title: string,
    image: string
}

export interface SliderContextI {
    slides: SlideI[],
    currentSlide: number,
    changeSlide: Function,
    setCurrentSlide: Function
}