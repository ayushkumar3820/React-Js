import {  createContext, useState } from "react";



export const  ThemeContext=createContext();

export function ThemeProvider({Children}){
const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDarkMode')))

return (
    <ThemeContext.Provider value={[isDark,setIsDark]}>
        {Children}
    </ThemeContext.Provider>
)

}

