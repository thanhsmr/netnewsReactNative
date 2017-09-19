import React, {Component} from 'react';
import {
  View,Text, SectionList, Platform
} from 'react-native';

import TopRowNewsDetailRow from '../rows/NewsDetailRow';
import {TextNewsDetailRow} from '../rows/NewsDetailRow';
import {ImageNewsDetailRow} from '../rows/NewsDetailRow';
import {VideoNewsDetailRow} from '../rows/NewsDetailRow';
import {AuthorNewsDetailRow} from '../rows/NewsDetailRow';

export default class NewsDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      arrDetail : []
    };
  }

  _keyExtractor = (item, index) => index;

  componentWillMount() {
    this.setState({
      arrDetail : this.props.navigation.state.params.article.Body
    });
  }

  render() {
    return (
      <SectionList
        style = {{backgroundColor: 'lightgray'}}
        sections = {[
          {data : [this.props.navigation.state.params.article], keyExtractor: this._keyExtractor, key : '1', renderItem : ({item}) => {
              return <TopRowNewsDetailRow {...item}/>
            }
          },
          {data : this.state.arrDetail, keyExtractor: this._keyExtractor ,key : '2', renderItem : ({item, index}) => {
              switch (item.Type) {
                case 1:
                  return <TextNewsDetailRow {...item}/>
                  break
                case 2:
                  return <ImageNewsDetailRow {...item}/>
                  break
                case 3:
                  return <VideoNewsDetailRow {...item}/>
                  break
                case 4:
                  return <AuthorNewsDetailRow {...item}/>
                  break;
                default:
                  break;
              }
            }
          }
        ]}
      />
    );
  }

  componentDidMount() {
    let pid = this.props.navigation.state.params.article.Pid
    let cid = this.props.navigation.state.params.article.Cid
    let id = this.props.navigation.state.params.article.ID
    fetch(
      'http://125.235.16.131/Tinngan.svc/getContent/' + cid + '/' + pid + '/' + id,{
        headers: {
          'user':'tinngan',
          'password':'191f1f632d69180e6228d26849d34d081a3b8d8aa9197eba0f70530ffe698ba80108bfb075c43e82081e245ccb63f6a39107327b2c1d053469bdf4f09bc1e820'
        }
      }
      )
    .then((response) => response.json())
    .then((responseJson) => {
      array = responseJson['data']['Body'];
      this.setState({
        arrDetail : array
      });
    })
  }
}
