import { TouchableOpacity, View, } from 'react-native';
import { Badge, Button, Divider, Image, Text, Input, useTheme } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { makeStyles } from '@rneui/themed';
import Ionicon from 'react-native-vector-icons/Ionicons';
import useStyles from './login.style';
import { useState } from 'react';
import { Formik } from 'formik';
import { Dropdown } from 'react-native-element-dropdown';
import { loginValidation } from '../../validation/loginValidation';
import { ImageResource } from "../../utils/constant/resource";
import { initialValues, campusData } from '../../utils/constant/constant'
import SwitchAccount from '../SwitchAccount/switchAccount';
import RenderIf from '../../utils/helper/renderIf';
import CustomStatusBar from '../../component/gm-school/CustomStatusBar/customStatusBar';

const LoginScreen = () => {

  const styles = useStyles();
  const { theme } = useTheme();

  const [campusId, setCampusId] = useState(null);
  const [showSwitchAccountModal, setShowSwitchAccountModal] = useState(false)

  const renderDropDownItem = item => {
    return (
      <>
        <View style={styles.dropdownItem}>
          <Text style={styles.dropdownLabel}>{item.label}</Text>
        </View>
        <Divider />
      </>
    );
  };
  return (
    <>
      <CustomStatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.LoginHeader}>
            <View style={styles.logoContainer(90, 90)}>
              <Image
                source={ImageResource.logo["bib_logo"]}
                style={styles.logo}
              />
            </View>
            <View>
              <Text style={styles.logoText}>BIB Institute</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.labelStyle}
                selectedTextStyle={styles.labelStyle}
                iconStyle={styles.iconStyle}
                data={campusData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Choose Campus"
                value={campusId}
                onChange={item => {
                  setCampusId(item.value);
                }}
                renderItem={renderDropDownItem}
              />
            </View>
          </View>
          {/* Login Header */}

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
            <RenderIf isTrue={showSwitchAccountModal}  >
              <SwitchAccount closeModal={() => { setShowSwitchAccountModal(false) }} isUserLogout={true} />
            </RenderIf>
            <TouchableOpacity onPress={() => setShowSwitchAccountModal(true)}>
              <Text style={styles.loginPreviousText}>Login with previous account credentials ?</Text>
            </TouchableOpacity>
          </View>
          {/*Login Form*/}
        </View>
      </SafeAreaView>
    </>
  );

};

export default LoginScreen;
