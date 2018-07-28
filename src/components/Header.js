import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = style;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
}

const style = {
 viewStyle: {
   justifyContent: 'center',
   alignItems: 'center',
   padding: 15,
   backgroundColor: 'powderblue'
 },
 textStyle: {
   fontSize: 18,
   fontWeight: 'bold',
   letterSpacing: 1
 }
};

export { Header };
