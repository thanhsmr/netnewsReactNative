import React, {Component} from 'react';
import {
  View, Text, FlatList, ActivityIndicator,Platform
} from 'react-native';

import NewsCategory from '../screens/NewsCategory';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

var ScrollableTabView = require('react-native-scrollable-tab-view');
// var DefaultTabBar = require('../component/DefaultTabBar');

export default class NewsHome extends Component {

  constructor(props){
    super(props);
    this.state = {
      newsArray : [],
    };
  }

  _renderTitleIndicator() {

            return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
  }

  _onPressItem = (articleObject) => {
    this.props.navigation.navigate('newsDetailScreen', {article: articleObject})
  }

  render() {
    // var screenCategories = []
    // for (var category in newsArray) {
    //   if (newsArray.hasOwnProperty(category)) {
    //     screenCategories.add
    //   }
    // }

    return(
      <View style={{flex:1}}>
          <ScrollableTabView>
            <NewsCategory tabLabel="React" onPressItem = {this._onPressItem}/>
            <NewsCategory tabLabel="Flow" onPressItem = {this._onPressItem}/>
            <NewsCategory tabLabel="Jest" onPressItem = {this._onPressItem}/>
          </ScrollableTabView>
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
