// CustomTouchable.js

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-elements';

const CustomTouchable = ({ theme, onPress, style, children }) => {
  const touchableStyle = {
    backgroundColor: theme.colors.primary, // Use the primary color from the theme
    borderRadius: 10,
    padding: 10,
    ...style, // Allow additional styles to be passed in
  };

  return (
    <TouchableOpacity onPress={onPress} style={touchableStyle}>
      {children}
    </TouchableOpacity>
  );
};

export default withTheme(CustomTouchable, 'CustomTouchable');
