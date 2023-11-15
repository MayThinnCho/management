import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import HomeScreen from "../../screens/home/home";
import ParentHome from "../../screens/parent/ParentHome/parentHome";
import { useTheme } from "@rneui/themed";
import useStyles from "./bottomTabNavigator.style";
import HomeScreen from "../../screens/login/login";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { theme } = useTheme();
  const colors = theme?.colors;
  const style = useStyles();

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: style.tabBarStyle,
        tabBarHideOnKeyboard: true,
        gestureEnabled: false
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="home" size={30} color={colors.darkBlue} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ParentHome}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="notifications-outline" size={30} color={colors.darkBlue} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
