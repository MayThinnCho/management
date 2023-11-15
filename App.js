import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from './src/navigation/navigation'
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
import ParentHome from './src/screens/parent/ParentHome/parentHome';
import { Provider as RNPaperProvider } from "react-native-paper";

const App = () => {

  const theme = getCustomTheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <RNPaperProvider>
          {/* <LoginScreen /> */}
          {/* <ParentHome /> */}
          <AppNavigator />
        </RNPaperProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
};
export default App;
