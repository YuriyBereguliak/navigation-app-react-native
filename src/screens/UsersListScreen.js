/**
  @author YuriyBereguliak
*/

// jshint esversion: 6

import React from 'react';
import {Text, View, Button, ListView, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';

import api from '../utils/Api';

class UsersListScreen extends React.Component {

  static navigationOptions = {
    title: 'My friends'
  };

  //region Component
  constructor(props) {
    super(props);

    this.state = {
      userDataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
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
          <Text>Load users...</Text>
        </View>
      );
    }
    return (
      <View>
        <ListView dataSource={this.state.userDataSource} renderRow={this.renderUserDataRow.bind(this)}/>
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

  //region Network Api
  loadUsers() {
    console.log("Send request");
    api.getItems('https://kronosoft.herokuapp.com/api/v1/user/friends').then((response) => {
      if (response == null) {
        console.error("Response == null");
        return;
      }
      console.log(response);
      this.setState({userDataSource: this.state.userDataSource.cloneWithRows(response), isPlacesLoaded: true});
    }).done();
  }
  //endregion

  //region Utility API
  renderUserDataRow(user) {
    return (
      <View>
        <TouchableOpacity onPress={() => this.onUserItemClickListener(user)} underlayColor='#E0E0E0'>
          <ListItem roundAvatar avatar={{
            uri: user.picture.thumbnail
          }} key={user.id.value} title={`${user.name.first} ${user.name.last}`} subtitle={user.login.username} hideChevron/>
        </TouchableOpacity>
      </View>
    );
  }
  //endregion
}

module.exports = UsersListScreen;
