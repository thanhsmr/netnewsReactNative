import React, {Component} from 'react';
import {
  View, Text
} from 'react-native';

import {Tabbar} from './Router'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Tabbar />
      </View>
    );
  }
}
