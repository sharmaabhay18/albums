import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPressed, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
   <TouchableOpacity style={buttonStyle} onPress={onPressed}>
   <Text style={textStyle}>
   {children}
   </Text>
   </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#007aff'
  }
};
export { Button };
