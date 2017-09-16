import React, {Component} from 'react';
import {
  View,Text
} from 'react-native';

export default class NewsDetail extends Component {
  render() {
    return (
      <View >
        <Text> {this.props.navigation.state.params.article.Title}</Text>
      </View>
    );
  }
}
