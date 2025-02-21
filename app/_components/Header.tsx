"use client";

import { ToggleSlider } from 'react-toggle-slider'

export default function Header() {
  return (
    <div className='fixed w-full p-2 mb-10 flex justify-end'>
      <ToggleSlider
        draggable={false}
        barHeight={30}
        barWidth={60}
        barBackgroundColorActive="#2514FF"
        handleBackgroundColorActive='#FFEE2C'
        barBackgroundColor='#FFEE2C'
        active={ false}
       
        
      />
    </div>
  )
}
