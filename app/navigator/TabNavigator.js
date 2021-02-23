import { Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import MainTopNavigator from './MainTopNavigator'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import My from '../containers/Mine'
// 底部导航
const AppBottomStack = createBottomTabNavigator(
  {
    Home: {
      //   screen: My,
      //   screen: AppStackPage,
      screen: MainTopNavigator,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused }) => {
          if (!focused) {
            return (
              <Image
                source={require('../assets/tab/icon_tabbar_homepage.png')}
                style={styles.icon}
              />
            )
          } else {
            return (
              <Image
                source={require('../assets/tab/icon_tabbar_homepage_selected.png')}
                //   style={styles.bottomTabIconStyle}
                style={styles.icon}
              />
            )
          }
        },
      },
    },
    My: {
      screen: My,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ focused }) => {
          if (!focused) {
            return (
              <Image
                source={require('../assets/tab/icon_tabbar_mine.png')}
                style={styles.icon}
              />
            )
          } else {
            return (
              <Image
                source={require('../assets/tab/icon_tabbar_mine_selected.png')}
                //   style={styles.bottomTabIconStyle}
                style={styles.icon}
              />
            )
          }
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#FF9800',
    },
  },
  //   {
  //     tabBarComponent: (props) => {
  //       return <BottomTabBar {...props} activeTintColor="rgb(62, 187, 175)" />;
  //     },
  //   },
)

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
})

export default AppBottomStack
