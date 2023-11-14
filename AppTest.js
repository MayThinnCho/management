
import React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   useColorScheme,
   View,
} from 'react-native';
import HomeScreen from './src/screens/home/home';

const App = () => {

   const customColor = require("./src/utils/json/colors.json");
   const theme = {
      ...DefaultTheme,
      colors: useColorScheme()=='light' ? customColor.color.light : customColor.color.dark
   };
   return (
      <PaperProvider theme={theme}>
         <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
         <HomeScreen />
      </PaperProvider>
   )
};
export default App;
