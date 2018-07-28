import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[style.cardSectionStyle, props.style]}>
    {props.children}
    </View>
  );
};

const style = {
  cardSectionStyle: {
   flex: 1,
   justifyContent: 'flex-start',
   flexDirection: 'row',
   alignItems: 'center'
  }
};

export { CardSection };
