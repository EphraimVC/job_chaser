"use client";

import React, { useState, createContext, FC } from "react";
import { InputProps, InputContextType } from "../types/tsTypes";
// ------------------------------------------------------------------------------------ 

export const InputContext = createContext<InputContextType | null>(null);

export const StateContext:FC<InputProps> = ({ children })=> { 

    const [inputValue, setInputValue] = useState(" ");

    console.log("inputvalue:"+ inputValue)
    return (
        <InputContext.Provider value={{ inputValue, setInputValue }}>
            {children}
        </InputContext.Provider>
    )
}


 