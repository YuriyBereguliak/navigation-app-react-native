/**
  @author YuriyBereguliak
*/
/*jshint esversion: 6 */

import React from 'react';
import {Text, View, Button} from 'react-native';

class UsersListScreen extends React.Component {

  static navigationOptions = {
    title: 'Home'
  };

  //region Component
  render() {
    return (
      <View>
        <Button title="Open" onPress={() => this.onUserItemClickListener({user: 'Den'})}/>
      </View>
    );
  }
  //endregion

  //region Click handlers
  onUserItemClickListener = (user) => {
    this.props.navigation.navigate('UserDetails', {
      ...user
    });
  };
  //endregion

}
module.exports = UsersListScreen;
