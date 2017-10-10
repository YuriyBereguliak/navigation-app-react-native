/**
  @author YuriyBereguliak
*/

// jshint esversion: 6

import React from 'react';
import {Text, View, Button} from 'react-native';

import api from '../utils/Api';

class UsersListScreen extends React.Component {

  static navigationOptions = {
    title: 'Home'
  };

  //region Component
  constructor(props) {
    super(props);

    this.state = {
      isPlacesLoaded: false
    };
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    if (!this.state.isPlacesLoaded) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
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

  //region Api
  loadUsers() {
    console.log("Send request");
    api.getListItems().then((response) => {
      this.setState({isPlacesLoaded: true});
      if (response == null) {
        console.error("Response == null");
        return;
      }
      console.log(response);
    });
  }
  //endregion
}
module.exports = UsersListScreen;
