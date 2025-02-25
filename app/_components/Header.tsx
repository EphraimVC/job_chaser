"use client";
import { useContext } from 'react';
import { ToggleSlider } from 'react-toggle-slider'
import { ThemeContext } from '../_helpers/ThemeToggle';


function Header() {
  const { theme, setTheme } = useContext(ThemeContext)
  
console.log(theme)
  return (
    <div className='fixed w-full p-2 mb-10 flex justify-end'>
      <ToggleSlider
        draggable={false}
        barHeight={30}
        barWidth={60}
        barBackgroundColorActive="#2514FF"
        handleBackgroundColorActive='#FFEE2C'
        barBackgroundColor='#FFEE2C'
        onToggle={(prev) => setTheme(!prev)}
        flip={true}
      />
    </div>
  )
}

export default Header;
