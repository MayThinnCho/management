import { useContext } from "react"
import ThemeContext from './../../hooks/context/themeContext';

export default useThemeStyles = (styles) => {
  const useTheme = useContext(ThemeContext);
  return styles(useTheme);
}