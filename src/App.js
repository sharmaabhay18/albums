import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Header, AlbumList } from './components';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'AlbumList'} />
        <AlbumList />
      </View>
    );
  }
}


export default App;
