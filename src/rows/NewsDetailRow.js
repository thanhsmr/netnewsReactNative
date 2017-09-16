import React, {Component} from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

export default class TopRowNewsDetailRow extends Component {
  render() {
    return (
      <View style = {style.container}>
        <Text style = {style.titleText}>{this.props.Title}</Text>
        <View style = {{flexDirection: 'row'}}>
          <Text>{this.props.SourceName}</Text>
          <Text>{this.props.DatePub}</Text>
        </View>
        <Text style = {style.sapoText}>{this.props.Shapo}</Text>
      </View>
    );
  }
}

export class TextNewsDetailRow extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.Content}</Text>
      </View>
    );
  }
}

export class ImageNewsDetailRow extends Component {
  render() {
    return (

    );
  }
}

export class VideoNewsDetailRow extends Component {
  render() {
    return (

    );
  }
}

export class AuthorNewsDetailRow extends Component {
  render() {
    return (

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    backgroundColor: 'white'
    // alignItems: 'center'
  },

  titleText: {
    marginRight: 10,
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 16,
    fontWeight: '500'
  },
  sapoText: {
    marginLeft: 0,
    marginTop: 10,
    fontSize: 12
  },
  photo: {
    width: 150,
    height: 150*9/16,
  }
})
