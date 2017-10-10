/**
  @author YuriyBereguliak
*/

// jshint esversion: 6

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import UsersListScreen from './screens/UsersListScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';

//region UserNavigation
export const UserNavigation = StackNavigator({
  UsersList: {
    screen: UsersListScreen
  },
  UserDetails: {
    screen: UserDetailsScreen
  }
});
//endregion

//region Root
export const Root = StackNavigator({
  UserNavigation: {
    screen: UserNavigation
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});
//endregion

module.exports = Root;
