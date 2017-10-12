/**
  @author YuriyBereguliak
*/
/*jshint esversion: 6 */

import React from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import {Tile, List, ListItem} from 'react-native-elements';

class UserDetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'User details'
  };

  //region Component
  render() {
    const {
      picture,
      name,
      email,
      phone,
      login,
      dob,
      location
    } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile imageSrc={{
          uri: picture.large
        }} resizeMode='cover' title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`} caption={email} titleStyle={{
          color: '#000'
        }}>
          <View>
            <Text>{login.username}</Text>
          </View>
        </Tile>

        <List>
          <ListItem title="Email" rightTitle={email} rightTitleStyle={{
            color: '#000'
          }} hideChevron/>
          <ListItem title="Phone" rightTitle={phone} rightTitleStyle={{
            color: '#000'
          }} hideChevron/>
        </List>

        <List>
          <ListItem title="Username" rightTitle={login.username} rightTitleStyle={{
            color: '#000'
          }} hideChevron/>
        </List>

        <List>
          <ListItem title="Birthday" rightTitle={dob} rightTitleStyle={{
            color: '#000'
          }} hideChevron/>

          <ListItem title="City" rightTitle={location.city} rightTitleStyle={{
            color: '#000'
          }} hideChevron/>
        </List>
      </ScrollView>
    );
  }
}

module.exports = UserDetailsScreen;
