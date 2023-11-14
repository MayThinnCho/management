import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './home.style';
import useThemeStyles from './../../components/useTheme/usethemeStyle';
import ThemeContext from './../../hooks/context/themeContext';
import { Chip, Switch, useTheme } from 'react-native-paper';


const HomeScreen = () => {

  //const theme = useContext(ThemeContext);
  //const style = useThemeStyles(styles);

  const theme = useTheme();
  return (
    //<View style={style.body}>
    //  <Text style={style.title}>Home Screen</Text>
    //  <Text style={style.text}>
    //    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
    //    lorem enim. Etiam accumsan nibh eu laoreet sollicitudin. Proin
    //    ultricies, metus nec auctor ultricies, dui metus vulputate odio, id
    //    hendrerit lectus mauris a ex.
    //  </Text>
    //  <Text style={style.referralCode}>3XP4N510</Text>
    //  <Button onPress={() => { }} title="Accept" color="#2ecc71" />
    //  <Button onPress={() => { }} title="Decline" color="#c0392b" />
    //  <Switch onValueChange={theme.toggleTheme} value={!theme.isLightTheme} />
    //</View>
    <>
      <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
    </>
  );
};

export default HomeScreen;