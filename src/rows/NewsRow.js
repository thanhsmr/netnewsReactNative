import React, {Component} from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';


export default class NewsRow extends Component {
  constructor(props) {
    super(props)
  }

  _onPress = () => {
    this.props.onPressItem(this.props.indexRow);
  };

  render(){
    return (
      <TouchableOpacity onPress = {this._onPress} >
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.titleText}>{this.props.Title}</Text>
              <Image
                style={styles.photo}
                source={{uri: this.props.Image}}></Image>
            </View>
            <Text style={styles.sapoText}>{this.props.Shapo}</Text>

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
