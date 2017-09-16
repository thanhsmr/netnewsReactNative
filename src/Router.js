import React, {Component} from 'react';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import {
  Image,
  StyleSheet
} from 'react-native';

import NewsHome from './screens/NewsHome';
import NewsDetail from './screens/NewsDetail';

import TVHome from './screens/TVHome';
import RadioHome from './screens/RadioHome';
import TopNowHome from './screens/TopNowHome';
import MoreHome from './screens/MoreHome';

export const NewsStack = StackNavigator ({
  newsHomeScreen: {
    screen: NewsHome,
    navigationOptions: {
      header: null
    }
  },
  newsDetailScreen: {
    screen: NewsDetail,
    navigationOptions: {
      title: 'News Detail'
    }
  }
})

export const TVStack = StackNavigator ({
  tvHomeScreen: {
    screen: TVHome
  }
})

export const RadioStack = StackNavigator ({
  radioHomeScreen: {
    screen: RadioHome
  }
})

export const TopNowStack = StackNavigator ({
  topNowHomeScreen: {
    screen: TopNowHome
  }
})

export const MoreStack = StackNavigator ({
  moreHomeScreen: {
    screen: MoreHome
  }
})

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});


export const Tabbar = TabNavigator ({
  news: {
    screen: NewsStack,
    navigationOptions: {
      tabBarLabel: 'News',
      headerMode: 'screen',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('../images/newsOn.png')}
          style = {[styles.icon, {tintColor:tintColor}]}
        />
      ),
    }
  },
  tv: {
    screen: TVStack,
    navigationOptions: {
      tabBarLabel: 'TV',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('../images/tvOn.png')}
          style = {[styles.icon, {tintColor:tintColor}]}
        />
      ),
    }
  },
  radio: {
    screen: RadioStack,
    navigationOptions: {
      tabBarLabel: 'Radio',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('../images/radioOn.png')}
          style = {[styles.icon, {tintColor:tintColor}]}
        />
      ),
    }
  },
  topNow: {
    screen: TopNowStack,
    navigationOptions: {
      tabBarLabel: 'TopNow',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('../images/topOn.png')}
          style = {[styles.icon, {tintColor:tintColor}]}
        />
      ),
    }
  },
  more: {
    screen: MoreStack,
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('../images/moreOn.png')}
          style = {[styles.icon, {tintColor:tintColor}]}
        />
      ),
    }
  },
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'blue',
    inactivetintColor: 'gray',
  }
}
)
