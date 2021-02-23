import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from 'react-navigation-tabs'

import { Image, StyleSheet } from 'react-native'

import LKHome from '../containers/HemoPage'
import LKFind from '../containers/IndexPage'

// 顶部导航
const TABS = {
  LKHome: {
    screen: LKHome,
    navigationOptions: {
      tabBarLabel: '首页',
    },
  },
  LKFind: {
    screen: LKFind,
    navigationOptions: {
      tabBarLabel: '发现',
    },
  },
  LKHome1: {
    screen: LKHome,
    navigationOptions: {
      tabBarLabel: '首页',
    },
  },
  LKFind2: {
    screen: LKFind,
    navigationOptions: {
      tabBarLabel: '发现',
    },
  },
}
// test: {
//     screen: LKFind,
//   },

const TopNavigator = createMaterialTopTabNavigator(
  TABS,
  {
    tabBarOptions: {
      tabStyle: {
        minWidth: 20,
      }, //设置单个tab的样式
      upperCaseLabel: false, //是否使标签大写，默认为true
      scrollEnabled: true, //是否支持 选项卡滚动，默认false
      // activeTintColor: 'white',//label和icon的前景色 活跃状态下（选中）
      // inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
      style: {
        backgroundColor: '#678', //TabBar 的背景颜色
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: 'white',
      }, //设置 indicator(tab下面的那条线)的样式

      labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
      }, //设置TabBar标签的样式
    },
  },
  //     {
  //   tabBarComponent: (props) => (
  //     <MaterialTopTabBar
  //       {...props}
  //       style={{backgroundColor: '#C2EDF5'}}
  //       // showIcon={true}
  //       activeTintColor="#2296F3"
  //     />
  //   ),
  // }
)

const Test = createStackNavigator({
  TopNavigator: {
    screen: TopNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
  Test: TABS.LKFind2,
})

const MainTopNavigator = createAppContainer({
  TopNavigator: TopNavigator,
  //   Test: TABS.LKFind2,
})
class MainTabNavigator extends Component {
  _tabNavigator() {
    const { LKHome, LKFind, LKHome1, LKFind2 } = TABS
    const tabs = { LKHome, LKFind, LKHome1, LKFind2 }
    if (!this.tabNavigator) {
      //   this.tabNavigator = createAppContainer({
      //     TopNavigator,
      //     // Test: TABS.LKFind2,
      //   });
      this.tabNavigator = createAppContainer(Test)
    }
    return this.tabNavigator
  }

  render() {
    const TabNavigator = this._tabNavigator()
    return <TabNavigator />
  }
}

const styles = StyleSheet.create({
  bottomTabIconStyle: {
    width: 30,
    height: 30,
  },
})

export default MainTabNavigator
