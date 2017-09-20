import React, {Component} from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';

export default class RadioRow extends Component {
  constructor(props) {
    super(props)
  }

  _onPress = () => {
      this.props.onPressItem(this.props.indexRow);
  };

  render(){
    return (
      <TouchableOpacity onPress = {this._onPress}>
        <View style={styles.container}>
          <Image
            style={styles.photo}
            source={{uri: this.props.Image}}>
          </Image>
          <Text style={styles.titleText} >{this.props.Title}</Text>


        </View>
      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'column',
    backgroundColor: 'white'
    // alignItems: 'center'
  },

  titleText: {
    marginTop: 10,
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
    alignSelf: 'stretch',
    aspectRatio: 16/9
  }
})
