import { createContext } from 'react';
import { ISliderContext } from '../types/slider';

const SliderContext = createContext<ISliderContext | null>(null);

export default SliderContext;
