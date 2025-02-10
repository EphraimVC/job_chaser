"use client";

import React, { useState, useContext, createContext, FC } from "react";

interface InputProps { 
    children: React.ReactNode
}

interface InputContextType {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
  }
  

const inputContext = createContext<InputContextType | null>(null)

export const StateContext:FC<InputProps> = ({ children })=> { 

    const [inputValue, setInputValue] = useState(" ");

    return (
        <inputContext.Provider value={{ inputValue, setInputValue }}>
            {children}
        </inputContext.Provider>
    )
}

export function UseInputValue() { 
    return useContext(inputContext)
}