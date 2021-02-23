import React, { Component } from 'react'
import Router from './router'
import dva from './utils/dva'
import 'react-native-gesture-handler'

const app = dva({
  initialState: {},
  models: [require('./models/userList').default],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)
export default App
