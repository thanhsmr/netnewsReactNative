import React, {Component} from 'react';
import {
  View, Text, FlatList, ActivityIndicator,Platform
} from 'react-native';

import NewsCategory from '../screens/NewsCategory';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
// var DefaultTabBar = require('../component/DefaultTabBar');

export default class NewsHome extends Component {

  constructor(props){
    super(props);
    this.state = {
      newsArray : []
    };
  }

  _onPressItem = (articleObject) => {
    this.props.navigation.navigate('newsDetailScreen', {article: articleObject})
  }

  _renderCategoryView = (v, i) => {
    return <NewsCategory key = {i} tabLabel = {v.Name} category = {v} onPressItem = {this._onPressItem}/>
  }

  _renderCategories = () => {
    let {newsArray} = this.state
    if (this.state.newsArray.length > 0) {
        return  <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}>
                    {newsArray.map(this._renderCategoryView)}
                </ScrollableTabView>
    } else {
      return null
    }

  }

  render() {
    return(
      <View style={{flex:1,paddingTop: Platform.OS == 'ios' ? 20 : 0}}>
        {this._renderCategories()}
      </View>
    );
  }

  componentDidMount(){
    fetch(
      'http://api.tinngan.vn/Tinngan.svc/getCategory',{
        headers: {
          'user':'tinngan',
          'password':'191f1f632d69180e6228d26849d34d081a3b8d8aa9197eba0f70530ffe698ba80108bfb075c43e82081e245ccb63f6a39107327b2c1d053469bdf4f09bc1e820'
        }
      }
      )
    .then((response) => response.json())
    .then((responseJson) => {
      array = responseJson['data'];
      this.setState({
        newsArray : array
      });
    })
  }


}

// function Article(title, sapo, image) {
//   this.Title = title;
//   this.Sapo = sapo;
//   this.Image = image;
// }
