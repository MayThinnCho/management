import { Dimensions } from "react-native";

export const initialValues = {
    loginId: '',
    password: '',
    campus_id: ''
}


export const campusList = [
    { text: 'BIB Campus 1', id: '1' },
    { text: 'BIB Campus 2', id: '2' },
    { text: 'EJ Campus', id: '3' },
];


export const Device = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    isTablet: Dimensions.get("window").width > 600,
};


export const Gender = [
    "Male",
    "Female",
  ];
