import { Dimensions } from "react-native";

export const initialValues = {
    loginId: '',
    password: '',
    campus_id: ''
}


export const campusData = [
    { label: 'BIB Campus 1', value: '1' },
    { label: 'BIB Campus 2', value: '2' },
    { label: 'EJ Campus', value: '3' },
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
