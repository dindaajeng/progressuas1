import React from 'react';
import { StyleSheet, Text, Button,  TouchableHighlight, View, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/home';
import DataScreen from './src/data';

const RootStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    DataScreen: {
      screen: DataScreen,
    }
  },
  {
    initialRouteName: 'HomeScreen',
  }
);
export default class App extends React.Component {
  render() {
    return (
    <RootStack />

    );
  }
}
