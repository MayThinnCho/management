import React from "react";
import { Text } from "react-native";

const CustomError = ({ text }) => {
  const style = useStyles();
  return (
    <>
      <Text style={style.error}>* {text}</Text>
    </>
  );
};

export default CustomError;

import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.colors.danger,
    marginTop: 5,
  },
}))