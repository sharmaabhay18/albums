import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
   return (
   <View style={style.cardStyle}>
   {props.children}
   </View>
   );
};

const style = {
  cardStyle: {
   borderWidth: 1,
   borderColor: '#ddd',
   borderRadius: 2,
   marginTop: 10,
   marginLeft: 5,
   marginRight: 5,
   elevation: 6,
   padding: 5
  }
};

export { Card };
