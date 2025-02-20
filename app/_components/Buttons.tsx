"use client";    
import React, { useState, FC } from 'react'
import { ButtonProps } from '../types/tsTypes';


const Buttons: FC<ButtonProps> = ({children, clickedText, defaultColor, clickedColor, optionalFunc })=> {
    
    const [clicked, setClicked] = useState(false)
    const btnState = clicked ? clickedColor : defaultColor
    const handleClick = () => { 
        if(optionalFunc) {
            optionalFunc()
        }
       setClicked(prev => !prev)
    }
    return (
        <button className={`mx-1 p-2 rounded-2xl ${btnState}`} onClick={handleClick} >{ clicked ? clickedText : children }</button>
    )
}
export default Buttons 