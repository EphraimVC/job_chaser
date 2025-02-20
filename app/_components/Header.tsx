"use client";

import { ToggleSlider } from 'react-toggle-slider'

export default function Header() {
  return (
    <div className='border-2 border-white rounded-md p-2 flex justify-end'>
      <ToggleSlider
        draggable={false}
        barHeight={30}
        barWidth={60}
        barBackgroundColorActive="#2514FF"
        handleBackgroundColorActive='#FFEE2C'
      />
    </div>
  )
}
