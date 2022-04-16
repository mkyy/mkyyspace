import React, { createContext, useState } from "react";
import { lightTheme } from "../styles/Theme/lightTheme";
import { darkTheme } from "../styles/Theme/darkTheme";


export const ThemeLocalContext = createContext(lightTheme);

export const ThemeLocalProvider = ({children}) => {

    const [theme, setTheme] = useState(lightTheme);

    const handleChange = () => {
        setTheme(theme.title === 'light'? darkTheme : lightTheme)
    }

    return (
        <ThemeLocalContext.Provider value={{theme, handleChange}}>
            {children}
        </ThemeLocalContext.Provider>
    )
}