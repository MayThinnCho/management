import { TouchableOpacity, View } from 'react-native';
import { Image, Text, Input, useTheme } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons';

import useStyles from './login.style';
import { useState } from 'react';
import CampusDropDown from './component/dropdown';
import LoginForm from './component/loginForm';

const LoginScreen = () => {

  const styles = useStyles();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.LoginHeader}>
          <View style={styles.logoContainer(90, 90)}>
            <Image
              source={require('../../../assets/img/bib_logo.png')}
              style={styles.logo}
            />
          </View>
          <View>
            <Text style={styles.logoText}>BIB Institute</Text>
            <CampusDropDown />
          </View>
        </View>
        {/* Login Header */}

        <LoginForm />
        {/*Login Form*/}
      </View>
    </SafeAreaView>
  );

};

export default LoginScreen;