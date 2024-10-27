import { useContext } from "react";
import {ThemeContext} from '../Contexts/ThemeContext.js';

export const useTheme=()=>useContext(ThemeContext)