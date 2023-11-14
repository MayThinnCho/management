import { Platform, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import { Text } from 'react-native-paper';
import { ToastAndroid, Alert } from 'react-native';
import { useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const askForPermission = (permission) => {
  request(permission).then((result) => {
    console.log(result);
    switch (result) {
      case "granted":
        // Permission granted, you can handle it here if needed
        openCamera();
        break;
      case "limited":
        // Permission is granted but with limitations (iOS only)
        openCamera();
        break;
      case "unavailable":
        // Permission is not available on the device
        showToast("Permission is not available on this device.");
        break;
      case "blocked":
        // Permission is blocked by the user
        showSettingsAlert();
        break;
      case "denied":
        // Permission denied, ask for permission again
        //askForPermission(permission);
        break;
    }
  });
}


const Permission = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex:1 }} >
      <View> 
        <TouchableOpacity
          style={styles.btnEffect}
          onPress={() => {
            Platform.OS == 'ios' ? askForPermission(PERMISSIONS.IOS.CAMERA) : askForPermission(PERMISSIONS.ANDROID.CAMERA)
          }}
        >
          <Text>  Camera Permission </Text>
          <Text style={styles.boldFont}>  Camera Permission Bold </Text>
          <Icon name="calendar-number-outline" size={30} color='black'/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default Permission;

const styles = StyleSheet.create({
  btnEffect: {
    width: '90%',
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    alignSelf:'center'
  },
  boldFont: {
    fontFamily: 'Nunito-Bold',
  },
})