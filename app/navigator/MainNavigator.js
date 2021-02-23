import { createStackNavigator } from 'react-navigation-stack'
// 个人中心
import ModifyPwdScreen from '../containers/Mine/ModifyPwdScreen'
import VersionScreen from '../containers/Mine/VersionScreen'
import TabNavigator from '../navigator/TabNavigator'

const Mine = {
  ModifyPwdScreen: { screen: ModifyPwdScreen },
  VersionScreen: { screen: VersionScreen },
}
/**
 * 创建与主Tab平级界面，包含导航栏
 */
const MainNavigator = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
    ...Mine,
  },
  //   Config.stackConfig
)

export default MainNavigator
