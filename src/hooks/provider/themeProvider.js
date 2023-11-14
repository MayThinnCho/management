import { useState } from 'react';
import ThemeContext from './../context/themeContext';
import { colors } from '../../utils/constant/colors';
import { typography } from '../../utils/constant/typography';
import common from '../../utils/constant/common';

export default ThemeProvider = ({ children }) => {

  const [isLightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => setLightTheme(previousState => !previousState);


  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
    typography,
    device: common.Device,
    flex: common.Flex,
    imageSize: common.ImageSize,

    toggleTheme,
    isLightTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}