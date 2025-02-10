"use client";    
import React, { useState, FC } from 'react'

interface ButtonProps { 
    children: React.ReactNode
    clickedText?:string
    defaultColor?: string
    clickedColor?: string
}


const Buttons: FC<ButtonProps> = ({children, clickedText, defaultColor, clickedColor})=> {
    
    const [clicked, setClicked] = useState(false)
    const btnState = clicked ? clickedColor : defaultColor
    const handleClick = () => { 
       setClicked(prev => !prev)
    }
    return (
        <button className={`mx-1 p-2 rounded-2xl ${btnState}`} onClick={handleClick} >{ clicked ? clickedText : children }</button>
    )
}
export default Buttons 