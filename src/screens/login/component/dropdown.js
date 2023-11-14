import {View } from 'react-native';
import { Badge, Button, Divider, Image, Text, Input, useTheme } from '@rneui/themed';
import { Dropdown } from 'react-native-element-dropdown';
import { makeStyles } from '@rneui/themed';
import { useState } from 'react';

const campusData = [
  { label: 'BIB Campus 1', value: '1' },
  { label: 'BIB Campus 2', value: '2' },
  { label: 'EJ Campus', value: '3' },
];

const CampusDropDown = () => {
  
  const styles = useStyles();
  const [value, setValue] = useState(null);

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
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderItem={renderDropDownItem}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  dropdown: {
    width: 200,
    height: 40,
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  dropdownItem: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownLabel: {
    flex: 1,
    fontSize: 16,
    fontFamily: theme.fonts.regular,
  },
  labelStyle: {
    fontSize: 16,
    color: 'black',
    fontFamily: theme.fonts.regular,
  },
  iconStyle: {
    width: 30,
    height: 30,
    tintColor: '#000',
  },

}));

export default CampusDropDown

