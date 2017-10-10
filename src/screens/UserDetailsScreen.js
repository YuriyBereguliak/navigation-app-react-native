/**
  @author YuriyBereguliak
*/
/*jshint esversion: 6 */

import React from 'react';
import {Text, View, Button} from 'react-native';

class UserDetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'User details'
  };

  //region Component
  render() {
    const {params} = this.props.navigation.state;
    return (
      <View>
        <Text>User {params.user}</Text>
      </View>
    );
  }
  //endregion

}
module.exports = UserDetailsScreen;
