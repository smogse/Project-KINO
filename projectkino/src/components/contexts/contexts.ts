import React from "react";
import { Themes } from "../constants/theme"; 

const ThemeContext = React.createContext({ theme: 'light', setTheme: (theme: Themes) => console.log(theme)});

export { ThemeContext };