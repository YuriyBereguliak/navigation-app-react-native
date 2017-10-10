import React from 'react';
import {Text, View} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View>
        <Text>Hello, Navigation!</Text>
      </View>
    );
  }
}

module.exports = HomeScreen;
