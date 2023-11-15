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
import RenderIf from '../../utils/helper/renderIf';
import {initialValues,campusData} from '../../utils/constant'

const ParentHome = ({navigation}) => {


};

export default ParentHome;
