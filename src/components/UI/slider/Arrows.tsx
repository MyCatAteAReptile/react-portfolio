import React, { useContext } from 'react'
import { SliderContext } from './Slider'

const Arrows = () => {

    const {changeSlide} = useContext(SliderContext);

  return (
    <div>
        <button onClick={() => {changeSlide(-1);}}>-1</button>
        <button onClick={() => {changeSlide(1);}}>+1</button>
    </div>
  )
}

export default Arrows