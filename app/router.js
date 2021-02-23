import React from 'react'
// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {
  Button,
  View,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import ToastExample from './nativeModule'

// import TabNavigator from './navigatorUI/TabNavigator';
import Login from './containers/Login'
import Register from './containers/Register/Register'
import MainNavigators from './navigator/MainNavigator'
import BarCodePage from './components/BarCodePage'
// import { ToastAndroid, NativeModules } from 'react-native'

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this._getAsyncStorage()
  }
  _getAsyncStorage = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

// 登录
const AuthStack = createStackNavigator(
  {
    登录: {
      screen: Login,
      // headerLayoutPreset: 'center',
      navigationOptions: (props) => {
        // const { navigation } = props
        // const { state } = navigation
        // const { params } = state
        // console.log(props);
        return {
          title: '哈哈哈',
          headerTitleAlign: 'center',
          // 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
          // header: null,
          // 设置顶部样式
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          // 设置文字颜色
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          // headerLeft: () => <Button title="扫一扫" onPress={() => {}} />,
          headerLeft: () => {
            //   return <Button color="lightblue" title="扫一扫" onPress={() => {}} />;
            return (
              <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => {
                  //   alert('哈哈');
                  props.navigation.push('BarCodePage')
                }}>
                <Text>扫一扫</Text>
              </TouchableOpacity>
            )
          },
          headerRight: () => {
            return (
              <Button
                title="设置"
                onPress={() => {
                  //   alert('你点了我一下')
                  ToastExample.show('Awesome', ToastExample.SHORT)
                  //   NativeModules.MyModule.qqLogin()
                  //     .then(({ openid }) => {
                  //       ToastAndroid.show(openid, ToastAndroid.SHORT)
                  //     })
                  //     .catch((reason) => {
                  //       console.log(reason)
                  //     })
                }}
              />
            )
          },
        }
      },
      //   navigationOptions: {
      //     title: '哈哈哈',
      //     headerTitleAlign: 'center',
      //     // 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
      //     // header: null,
      //     // 设置顶部样式
      //     headerStyle: {
      //       backgroundColor: 'skyblue',
      //     },
      //     // 设置文字颜色
      //     headerTintColor: '#fff',
      //     headerTitleStyle: {
      //       fontSize: 20,
      //       fontWeight: 'bold',
      //     },
      //     // headerLeft: () => <Button title="扫一扫" onPress={() => {}} />,
      //     headerLeft: () => {
      //       //   return <Button color="lightblue" title="扫一扫" onPress={() => {}} />;
      //       return (
      //         <TouchableOpacity
      //           style={{marginLeft: 15}}
      //           onPress={() => {
      //             alert('哈哈');
      //             // this.props.navigation.navigate.push('BarCodePage');
      //           }}>
      //           <Text>扫一扫</Text>
      //         </TouchableOpacity>
      //       );
      //     },
      //     headerRight: () => {
      //       return (
      //         <Button
      //           title="设置"
      //           onPress={() => {
      //             alert('你点了我一下');
      //           }}
      //         />
      //       );
      //     },
      //   },
    },
    注册: {
      screen: Register,
      navigationOptions: {
        headerTitleAlign: 'center',
        // header: null,
      },
    },
    BarCodePage: {
      screen: BarCodePage,
      navigationOptions: {
        headerTitleAlign: 'center',
      },
    },
  },
  //   {
  //     initialRouteName: '登录', // 默认进入的页面
  //   },
)

const AppNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    // App: AppBottomStack,
    // App: TabNavigator,
    App: MainNavigators,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

// const AuthStack = createStackNavigator({
//   Login: Login,
// });

// const HomeNavigator = createBottomTabNavigator({
//   Login: {screen: Login},
// });

const App = createAppContainer(AppNavigation)
// const App = createAppContainer(AppStack);

// const styles = StyleSheet.create({
//   bottomTabIconStyle: {
//     width: 30,
//     height: 30,
//   },
// });
export default App
