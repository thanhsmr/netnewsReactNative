import React, {Component} from 'react';
import {
  View, Text, StyleSheet, Image
} from 'react-native';

import HTMLView from 'react-native-htmlview';

export default class TopRowNewsDetailRow extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.titleText}>{this.props.Title}</Text>
        <View style = {{flexDirection: 'row', paddingTop: 10}}>
          <Text style = {{paddingRight: 10, color: 'gray'}}>{this.props.SourceName.toUpperCase()}</Text>
          <HTMLView value = {this.props.DatePub}></HTMLView>
        </View>
        <Text style = {styles.sapoText}>{this.props.Shapo}</Text>
      </View>
    );
  }
}

const Dimensions = require('Dimensions');

export class TextNewsDetailRow extends Component {
  render() {
    return (
      <View style = {{backgroundColor: 'white'}}>
        <HTMLView
          style = {{marginLeft: 10, marginRight: 10, marginTop: 5, marginBottom: 5}}
          value={this.props.Content}
          onLinkPress={(url) => console.log('clicked link: ', url)}
        />
      </View>
    );
  }
}

export class ImageNewsDetailRow extends Component {
  render() {
    return (
      <View style = {{backgroundColor: 'white'}}>
        <Image
          style = {{width: Dimensions.get('window').width,
                    height: Dimensions.get('window').width * this.props.Height / this.props.Width,
                    marginTop: 5, marginBottom: 5}}
          source = {{uri: this.props.Content}}
          />
      </View>
    );
  }
}

export class VideoNewsDetailRow extends Component {
  render() {
    return (
      <View style = {{backgroundColor: 'white'}}>
        <Image
          style = {{width: Dimensions.get('window').width,
                    height: Dimensions.get('window').width * this.props.Height / this.props.Width,
                    marginTop: 5, marginBottom: 5}}
          source = {{uri: this.props.Content}}
          />
      </View>
    );
  }
}

export class AuthorNewsDetailRow extends Component {
  render() {
    return (
      <View style = {{backgroundColor: 'white'}}>
        <HTMLView
          style = {{marginLeft: 10, marginRight: 10, marginTop: 5, marginBottom: 5, alignItems: 'flex-end'}}
          value={this.props.Content}
        />
      </View>
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
    fontSize: 18,
    fontWeight: '600',
    color: 'blue'
  },
  sapoText: {
    marginLeft: 0,
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500'
  },
  photo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})
