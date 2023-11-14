import { View, TouchableOpacity } from 'react-native';
import { Button, Text, Input, useTheme } from '@rneui/themed';
import { makeStyles } from '@rneui/themed';
import { useState } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';


const LoginForm = () => {

  const styles = useStyles();
  const { theme } = useTheme();

  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <View style={{ margin: 20 }}>
      <Text style={styles.loginTitle}>Login with account belonging to the school</Text>
      <View style={styles.LoginForm}>
        <Input
          placeholder='Login ID'
          errorStyle={styles.errorStyle}
          errorMessage='ENTER A VALID ERROR HERE'
          rightIcon={<Ionicon name='mail' size={24} color={theme.colors.grey4} />}
        />
        <Input
          placeholder='Password'
          rightIcon={<Ionicon name='lock-closed' size={24} color={theme.colors.grey4} />}
        />
        <Button title={'Sign IN'} buttonStyle={styles.loginBtn} containerStyle={{ borderRadius: 5 }} />
      </View>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.loginPreviousText}>Login with previous account credentials ?</Text>
      </TouchableOpacity>
    </View>
  )
}

const useStyles = makeStyles((theme) => ({
  loginTitle: {
    marginVertical: 22,
    fontFamily: theme.fonts.medium,
    textAlign: 'center'
  },
  loginPreviousText: {
    textAlign: 'center',
    marginTop: 15,
  },
  errorStyle: {
    color: theme.colors.error,
    fontFamily: theme.fonts.light,
    fontSize: 11,
    marginBottom: 20,
  },
  loginBtn: {
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: theme.colors.success,
  },

}));

export default LoginForm

