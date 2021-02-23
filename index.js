/**
 * @format
 */
import Mock from './app/mock/mock'
import { AppRegistry } from 'react-native'
// import App from './App';
import App from './app/index'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)