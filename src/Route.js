import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen.js';

export const RouteApp = StackNavigator({
  Home: {
    screen: HomeScreen
  }
});

module.exports = RouteApp;
