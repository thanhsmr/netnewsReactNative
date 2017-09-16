import React, {Component} from 'react';
import {
  View, Text, StatusBar, Platform
} from 'react-native';

import {Tabbar} from './Router'

export default class App extends Component {
  render() {
    return (
      <View style={
        {flex:1}
      }>
        <StatusBar
          backgroundColor="blue"
          barStyle="dark-content"
        />
        <Tabbar />
      </View>
    );
  }
}
