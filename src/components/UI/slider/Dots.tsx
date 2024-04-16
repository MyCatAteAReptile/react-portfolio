import React, { useContext } from 'react'
import { SliderContext } from './Slider'

const Dots = () => {

  const {setCurrentSlide} = useContext(SliderContext);
  
  return (
    <div>
      <button onClick={()=>{setCurrentSlide(0)}}></button>
      <button onClick={()=>{setCurrentSlide(1)}}></button>
      <button onClick={()=>{setCurrentSlide(2)}}></button>
    </div>
  )
}

export default Dots