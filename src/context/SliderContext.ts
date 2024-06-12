import { createContext } from "react";
import { ISliderContext } from "../types/slider";

export const SliderContext = createContext<ISliderContext | null>(null);