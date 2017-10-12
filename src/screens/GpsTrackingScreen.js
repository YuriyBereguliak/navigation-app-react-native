/**
  @author YuriyBereguliak
*/

// jshint esversion: 6

import React from 'react';
import {Text, View, Button, ListView, TouchableOpacity} from 'react-native';
import {List, ListItem} from 'react-native-elements';

import api from '../utils/Api';

class GpsTrackingScreen extends React.Component {

  static navigationOptions = {
    title: 'GpsTracking'
  };

  //region Component
  constructor(props) {
    super(props);

    var navigator = this.props.navigator;
    this.state = {
      position: null
    };
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({position: position});
    }, (error) => {
      console.error(error);
    }, {
      enableHighAccuracy: false,
      timeout: 20000,
      maximumAge: 1000
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    if (this.state.position == null) {
      return (
        <View>
          <Text>Get your location</Text>
        </View>
      );
    }
    return (
      <View>
        <List>
          <ListItem title="Latitude" rightTitle={this.state.position.coords.latitude} rightTitleStyle={{
            color: '#000'
          }} hideChevron/>

          <ListItem title="Longitude" rightTitle={this.state.position.coords.longitude} rightTitleStyle={{
            color: '#000'
          }} hideChevron/>
        </List>
      </View>
    );
  }
  //endregion

}

module.exports = GpsTrackingScreen;
