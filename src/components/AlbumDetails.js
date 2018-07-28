import React from 'react';
import { Image, View, Text, Linking } from 'react-native';
import { Card, CardSection, Button } from '../components';

const AlbumDetails = ({ album }) => {

  const {
    title,
    artist,
    thumbnail_image,
    image,
    url
   } = album;

const {
   thumbnailStyle,
   textStyle,
   splitView
} = style;

  return (
     <Card>
     <CardSection>
     <View>
      <Image
      style={thumbnailStyle}
       source={{ uri: image }}
      />
      </View>
      <View style={splitView}>

      <Text style={textStyle}>{title}</Text>
      <Text style={{ paddingBottom: 5, paddingLeft: 10 }}>{artist}</Text>

      <CardSection style={{
         borderTopWidth: 1,
         borderColor: '#ddd',
         paddingTop: 5,
         paddingLeft: 5
       }}>
      <Button onPressed={() => Linking.openURL(url)}> View </Button>
      </CardSection>

      </View>
     </CardSection>
     </Card>
  );
};

const style = {
  thumbnailStyle: {
    width: 100,
    height: 90
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  splitView: {
         flexDirection: 'column',
         flex: 1,
         justifyContent: 'space-between'
       }
};

export { AlbumDetails };
