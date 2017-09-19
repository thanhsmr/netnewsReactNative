import React, {Component} from 'react';
import {
  View, Text, FlatList, ActivityIndicator,Platform
} from 'react-native';

import NewsRow from '../rows/NewsRow';
import TopNewsRow from '../rows/TopNewsRow';
import Article from '../model/Article';
import FooterLoading from '../component/FooterLoading';

export default class NewsCategory extends Component {

  constructor(props){
    super(props);
    this.state = {
      page : 1,
      newsArray : [],
      isLoadingMore: false,
      isReloading: false,
      selected: (new Map(): Map<string, boolean>)
    };
  }

  _keyExtractor = (item, index) => item.ID;

  _onEndReached(){
    if (this.state.newsArray.length > 0 && !this.state.isLoadingMore) {
      this.setState({
        isLoadingMore: true
      }, () => {
        fetch(
          'http://125.235.16.131/Tinngan.svc/getListCate/1/' + this.state.page + 1 + '/20',{
            headers: {
              'user':'tinngan',
              'password':'191f1f632d69180e6228d26849d34d081a3b8d8aa9197eba0f70530ffe698ba80108bfb075c43e82081e245ccb63f6a39107327b2c1d053469bdf4f09bc1e820'
            }
          }
          )
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.length != 0) {
            let array = this.state.newsArray.concat(responseJson['data']) ;
            this.setState({
              newsArray : array,
              page : this.state.page + 1
            });
          } else {

          }

          this.setState({
            isLoadingMore : false
          });

        })
      });
    }


  }


  _onRefresh() {
    this.setState({
      isReloading : true,
      page: 1
    },()=>{
      fetch(
        'http://125.235.16.131/Tinngan.svc/getListCate/1/1/20',{
          headers: {
            'user':'tinngan',
            'password':'191f1f632d69180e6228d26849d34d081a3b8d8aa9197eba0f70530ffe698ba80108bfb075c43e82081e245ccb63f6a39107327b2c1d053469bdf4f09bc1e820'
          }
        }
        )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.length != 0) {
          let array = responseJson['data'];
          this.setState({
            newsArray : array,
            page : this.state.page + 1
          });
        } else {

        }

        this.setState({
          isReloading : false
        });

      })
    });

  }

  _onPressItem = (id: string) => {
    this.props.onPressItem(this.state.newsArray[id]);
  }

  render() {
    return(
      <FlatList
        refreshing={this.state.isReloading}
        onRefresh={this._onRefresh.bind(this)}
        onEndReached={this._onEndReached.bind(this)}
        onEndReachedThreshold={-0.1}
        style = {{backgroundColor: 'lightgray', paddingTop: Platform.OS == 'ios' ? 20 : 0}}
        data={this.state.newsArray}
        keyExtractor={this._keyExtractor}
        ListFooterComponent = {() => <FooterLoading isLoading = {this.state.isLoadingMore}/>}
        renderItem={
          ({item, index}) => {
            if (index == 0) {
              return <TopNewsRow {...item} indexRow = {index} onPressItem = {this._onPressItem}/>
            } else {
              return <NewsRow {...item} indexRow = {index} onPressItem = {this._onPressItem}/>
            }
          }
        }
        />
    );
  }

  componentDidMount(){
    fetch(
      'http://125.235.16.131/Tinngan.svc/getListCate/1/1/20',{
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
