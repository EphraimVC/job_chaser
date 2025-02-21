"use client";
import { createContext, useState } from "react"

export const ThemeContext = createContext(null)

export function ThemeToggle({ children }) {
    const [theme, setTheme] = useState(false)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
)

}