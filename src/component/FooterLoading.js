import React, {Component} from 'react';
import {
  View, ActivityIndicator
} from 'react-native';

export default class FooterLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading
    }
  }

  render(){
    if (!this.state.isLoading) return null;
    return (
      <View >
        <ActivityIndicator animating size='large'/>
      </View>
    )
  }
}
