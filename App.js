import React from 'react';
import { ThemeProvider } from '@rneui/themed';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import getCustomTheme from './src/utils/helper/theme';
import LoginScreen from './src/screens/login/login';


const App = () => {

  const theme = getCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <LoginScreen />
    </ThemeProvider>
  )
};
export default App;
